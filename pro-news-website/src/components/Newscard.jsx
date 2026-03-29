export default function NewsCard({ article }) {
  return (
    <div className="card">
      {article.image && (
        <div className="card-image-wrap">
          <img
            className="card-image"
            src={article.image}
            alt={article.title}
            loading="lazy"
          />
          <span className="card-img-category">{article.category}</span>
        </div>
      )}
      <div className="card-body">
        {!article.image && (
          <span className="card-category">{article.category}</span>
        )}
        <div className="card-divider"></div>
        <h2>{article.title}</h2>
        <p className="meta">{article.date}</p>
        <p>{article.content}</p>
      </div>
    </div>
  );
}
