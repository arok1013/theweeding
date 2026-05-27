import React from 'react';
const initial = (name) => (name || '?').trim().charAt(0).toUpperCase();

const formatTime = (timestamp) =>
  new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(timestamp || Date.now()));

export default function Comments({ comments, status }) {
  return (
    <section className="section comments fade-up">
      <span className="eyebrow">Ucapan</span>
      <h2>Doa dari Tamu</h2>
      {comments.length === 0 ? (
        <p className="empty-state">Belum ada ucapan. Jadilah yang pertama mengirim doa.</p>
      ) : (
        <div className="comments__list">
          {comments.map((comment) => (
            <article className="comment-card" key={comment.id || `${comment.nama}-${comment.timestamp}`}>
              <div className="comment-card__avatar">{initial(comment.nama)}</div>
              <div>
                <header>
                  <strong>{comment.nama}</strong>
                  <time>{formatTime(comment.timestamp)}</time>
                </header>
                <p>{comment.ucapan}</p>
              </div>
            </article>
          ))}
        </div>
      )}
      {status === 'error' && <p className="comments__note">Ucapan live belum bisa dimuat, menampilkan contoh sementara.</p>}
    </section>
  );
}
