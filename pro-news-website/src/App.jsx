import NewsCard from './components/Newscard.jsx';
import './styles.css';

const articles = [
  {
    title: 'Pro News: Today’s top story',
    category: 'World',
    date: 'March 29, 2026',
    content: 'Stay informed with the latest headlines and expert summaries from the world of news.'
  },
  {
    title: 'Technology update',
    category: 'Tech',
    date: 'March 29, 2026',
    content: 'New tools and trends are shaping the future of news publishing and consumption.'
  },
  {
    title: 'Market analysis',
    category: 'Business',
    date: 'March 29, 2026',
    content: 'Keep track of the economy with quick market overviews and expert commentary.'
  }
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <h1>Pro News</h1>
        <p>Fast, clean, and modern news stories for your dashboard.</p>
      </header>

      <section className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </section>
    </div>
  );
}
