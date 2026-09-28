import './App.css';

function App() {
  return (
    <div className="App">
      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">CI/CD demo</p>
          <h1>Action GitHub</h1>
          <p className="subtitle">
            Build, test, deploy, and ship with confidence.
          </p>
          <div className="action-row">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
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
    </div>
  );
}

export default App;
