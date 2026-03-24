export default function Industries() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">By Industry</div>
        <h1 className="hero-title">One platform. Every business type.</h1>
        <p className="hero-desc">DistriHub's core modules work across all industries, with additional capabilities that unlock based on your business type.</p>
      </div>
      <div className="section">
        <div className="industry-grid">
          <a className="industry-card" href="/bev">
            <div className="industry-icon">🍺</div>
            <div className="industry-name">Beverage Distributors</div>
            <div className="industry-note">Van loading, returnables, route sales, deposits</div>
          </a>
          <a className="industry-card" href="#" style={{opacity: 0.6, cursor: 'default'}}>
            <div className="industry-icon">🏪</div>
            <div className="industry-name">Retail & Supermarkets</div>
            <div className="industry-note">Guide coming soon</div>
          </a>
          <a className="industry-card" href="#" style={{opacity: 0.6, cursor: 'default'}}>
            <div className="industry-icon">💊</div>
            <div className="industry-name">Pharmacies</div>
            <div className="industry-note">Guide coming soon</div>
          </a>
          <a className="industry-card" href="#" style={{opacity: 0.6, cursor: 'default'}}>
            <div className="industry-icon">🔧</div>
            <div className="industry-name">Hardware Stores</div>
            <div className="industry-note">Guide coming soon</div>
          </a>
          <a className="industry-card" href="#" style={{opacity: 0.6, cursor: 'default'}}>
            <div className="industry-icon">⛽</div>
            <div className="industry-name">Petrol Stations</div>
            <div className="industry-note">Guide coming soon</div>
          </a>
          <a className="industry-card" href="#" style={{opacity: 0.6, cursor: 'default'}}>
            <div className="industry-icon">🌾</div>
            <div className="industry-name">Agrovets</div>
            <div className="industry-note">Guide coming soon</div>
          </a>
        </div>
        <div className="page-nav">
          <a href="/finance" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Finance & Accounting</span>
          </a>
          <a href="/bev" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Beverage Distributors Guide</span>
          </a>
        </div>
      </div>
    </>
  );
}
