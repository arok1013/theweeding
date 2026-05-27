import { useCallback, useEffect, useState } from 'react';
import { fetchUcapan } from '../utils/sheetsApi.js';

const fallbackComments = [
  {
    id: 'sample-1',
    nama: 'Rani',
    ucapan: 'Semoga menjadi keluarga yang penuh kasih dan selalu diberkahi.',
    timestamp: new Date().toISOString()
  },
  {
    id: 'sample-2',
    nama: 'Dimas',
    ucapan: 'Selamat menempuh hidup baru. Bahagia selalu untuk kalian berdua.',
    timestamp: new Date(Date.now() - 1000 * 60 * 22).toISOString()
  }
];

export function useCommentPolling() {
  const [comments, setComments] = useState(fallbackComments);
  const [status, setStatus] = useState('idle');

  const load = useCallback(async () => {
    setStatus('loading');
    try {
      const data = await fetchUcapan();
      if (Array.isArray(data) && data.length > 0) {
        setComments(data);
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
    const timer = window.setInterval(load, 15000);
    return () => window.clearInterval(timer);
  }, [load]);

  const addOptimisticComment = useCallback((comment) => {
    setComments((current) => [
      {
        id: `optimistic-${Date.now()}`,
        timestamp: new Date().toISOString(),
        ...comment
      },
      ...current
    ]);
  }, []);

  return { comments, status, addOptimisticComment };
}
