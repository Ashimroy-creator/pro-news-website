import NewsCard from './components/Newscard.jsx';
import './styles.css';

const featured = {
  title: '\u2018No Kings\u2019 Protests Sweep the U.S. & World',
  category: 'World',
  date: 'March 29, 2026',
  content: 'Mass demonstrations against what activists call a slide toward authoritarianism have spread from the United States to Rome and London, where organizers declared the Together Alliance march the largest anti-far-right demonstration in British history. Meanwhile, Houthi rebels launched a second missile toward Israel as the U.S.-Iran war enters its 29th day.',
  image: '/img-world.png',
  video: '/featured-news.mp4',
  tag: 'Breaking'
};

const articles = [
  {
    title: 'OpenAI to Double Workforce; Nvidia Pivots to AI Inference',
    category: 'Technology',
    date: 'March 29, 2026',
    content: 'OpenAI plans to grow to 8,000 employees by end of 2026 as SoftBank secures a $40B bridge loan to back further investment in the company. At GTC, Nvidia CEO Jensen Huang unveiled new chips focused on inference — the next frontier of the AI boom.',
    image: '/img-tech.png'
  },
  {
    title: 'Oil Tops $110 as War Rattles Global Markets',
    category: 'Business',
    date: 'March 29, 2026',
    content: 'Brent crude climbed above $110 per barrel as the U.S.-Iran conflict stokes fears of a supply shock. The S&P 500 fell 1.5%, logging its fifth straight losing week — the worst streak since 2022. Gold pulled back sharply from $4,500 as bond yields surged.',
    image: '/img-business.png'
  },
  {
    title: 'Strait of Hormuz: Pakistan Brokers Partial Agreement',
    category: 'Energy',
    date: 'March 29, 2026',
    content: 'Iran agreed to allow 20 Pakistan-flagged vessels through the Strait of Hormuz, with two ships crossing daily. Pakistan\u2019s special envoy confirmed it is mediating between Washington and Tehran as Trump extends his deadline threatening Iranian energy facilities.',
    image: '/img-energy.png'
  },
  {
    title: 'Sudan: 64 Killed Including Children in Hospital Strike',
    category: 'Humanitarian',
    date: 'March 29, 2026',
    content: 'At least 64 people were killed, including over a dozen children, in an airstrike on a hospital in East Darfur. The WHO confirmed 89 additional injuries and said the facility will no longer operate. The U.N. separately declared the transatlantic slave trade a crime against humanity.',
    image: '/img-humanitarian.png'
  }
];

export default function App() {
  return (
    <div className="app-shell">

      <header className="masthead">
        <div className="masthead-name">PRO<span>.</span>NEWS</div>
        <div className="masthead-date">Sunday &mdash; March 29, 2026</div>
      </header>

      <div className="ticker-bar">
        Breaking &mdash; U.S.-Iran war enters Day 29 &mdash; Oil above $110 &mdash; &lsquo;No Kings&rsquo; marches worldwide &mdash; OpenAI hiring surge &mdash; Updated hourly
      </div>

      <section className="hero-article">
        <div className="hero-text">
          <span className="hero-label">{featured.tag}</span>
          <h1 className="hero-title">{featured.title}</h1>
          <div className="hero-meta">{featured.category} &bull; {featured.date}</div>
          <p className="hero-content">{featured.content}</p>
        </div>
        <div className="hero-media">
          <video
            className="hero-video"
            src={featured.video}
            poster={featured.image}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-media-bar">
            <span className="hero-media-tag">&#9654; Live Report</span>
          </div>
        </div>
      </section>

      <div className="section-label">Latest Stories</div>

      <section className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </section>

      <footer className="footer-strip">
        <strong>Pro.News</strong>
        <span>All rights reserved &mdash; 2026</span>
      </footer>

    </div>
  );
}
