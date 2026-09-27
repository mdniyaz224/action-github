import './App.css';
import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

function Home() {
  return (
    <main className="hero page-content">
      <div className="hero-content">
        <p className="eyebrow">CI/CD demo</p>
        <h1>Action GitHub</h1>
        <p className="subtitle">
          Build, test, deploy, and ship with confidence.
        </p>
        <div className="action-row">
          <Link className="primary-btn" to="/services">Get Started</Link>
          <Link className="secondary-btn" to="/about">Learn More</Link>
        </div>
      </div>
      <div className="card">
        <span className="status-dot" />
        <h2>Pipeline Status</h2>
        <ul>
          <li>Lint passed</li>
          <li>Tests passed</li>
          <li>Build succeeded</li>
        </ul>
      </div>
    </main>
  );
}

function ContentPage({ eyebrow, title, description, children }) {
  return (
    <main className="content-page page-content">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="subtitle">{description}</p>
      <div className="content-grid">{children}</div>
    </main>
  );
}

function About() {
  return (
    <ContentPage
      eyebrow="Our approach"
      title="Ship better, together."
      description="Action GitHub brings the important parts of delivery into one clear, dependable workflow."
    >
      <section className="info-block"><h2>Made for momentum</h2><p>Keep feedback close to every commit and make progress visible to the whole team.</p></section>
      <section className="info-block"><h2>Built on trust</h2><p>Automated checks give every release a solid foundation before it reaches your users.</p></section>
    </ContentPage>
  );
}

function Services() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Your pipeline, in focus."
      description="Simple tools for the moments that matter from first push to production."
    >
      <section className="info-block"><span className="block-number">01</span><h2>Continuous integration</h2><p>Run reliable builds and tests on every change.</p></section>
      <section className="info-block"><span className="block-number">02</span><h2>Automated delivery</h2><p>Move approved work forward with repeatable deployments.</p></section>
      <section className="info-block"><span className="block-number">03</span><h2>Release visibility</h2><p>See what shipped, when it shipped, and how it is performing.</p></section>
    </ContentPage>
  );
}

function Blog() {
  return (
    <ContentPage
      eyebrow="From the team"
      title="Notes on shipping."
      description="Practical ideas for healthier engineering workflows and calmer releases."
    >
      <article className="info-block"><p className="article-meta">05 SEP 2026</p><h2>Small batches, faster feedback</h2><p>Why reducing the size of each change can make the entire delivery system more resilient.</p></article>
      <article className="info-block"><p className="article-meta">28 AUG 2026</p><h2>The release checklist that scales</h2><p>A lightweight set of habits that keeps teams aligned as products grow.</p></article>
    </ContentPage>
  );
}

function Contact() {
  return (
    <ContentPage
      eyebrow="Start a conversation"
      title="Let’s build a better path."
      description="Tell us where your delivery process feels stuck and we’ll help you find the next step."
    >
      <section className="info-block contact-block"><h2>hello@actiongithub.dev</h2><p>We usually reply within one business day.</p><a className="primary-btn" href="mailto:hello@actiongithub.dev">Send an email</a></section>
    </ContentPage>
  );
}

function NotFound() {
  return <ContentPage eyebrow="404" title="Page not found." description="The route you entered does not exist."><Link className="primary-btn" to="/">Return home</Link></ContentPage>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="site-header">
          <Link className="brand" to="/">AG<span>.</span></Link>
          <nav aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>
            ))}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
