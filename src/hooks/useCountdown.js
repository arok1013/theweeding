import { useEffect, useMemo, useState } from 'react';

const getRemaining = (targetDate) => {
  const distance = new Date(targetDate).getTime() - Date.now();

  if (distance <= 0) {
    return { complete: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    complete: false,
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
};

export function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return useMemo(() => remaining, [remaining]);
}
