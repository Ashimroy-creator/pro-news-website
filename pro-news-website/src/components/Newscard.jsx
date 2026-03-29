 export default function NewsCard({ article }) {
  return (
    <div className="card">
      <h2>{article.title}</h2>
      <p className="meta">
        {article.category} • {article.date}
      </p>
      <p>{article.content}</p>
    </div>
  );
}