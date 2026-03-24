export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Kenya's Business Operating System
        </div>
        <h1 className="hero-title">
          Every transaction. Every crate.<br />
          Every <span className="accent">shilling.</span> Accounted for.
        </h1>
        <p className="hero-desc">
          DistriHub is a comprehensive, offline-first ERP built specifically for Kenyan distributors, retailers, pharmacies, hardware stores, and more. Native M-Pesa, KRA eTIMS, and full double-entry accounting are built in from day one.
        </p>
        <div className="hero-actions">
          <a href="/platform" className="btn btn-primary">Explore the Platform →</a>
          <a href="/industries" className="btn btn-outline">Browse by Industry</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="stat-value">Offline-first</div><div className="stat-label">Works during power & internet cuts</div></div>
          <div className="stat"><div className="stat-value">eTIMS-ready</div><div className="stat-label">KRA compliant, real-time submission</div></div>
          <div className="stat"><div className="stat-value">M-Pesa native</div><div className="stat-label">Daraja API, Paybill & Till supported</div></div>
          <div className="stat"><div className="stat-value">Full GL</div><div className="stat-label">Double-entry books, P&L, balance sheet</div></div>
        </div>
      </div>

      <div className="section">
        <div className="section-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          Who It's For
        </div>
        <h2 className="section-title">Built for every business type in Kenya</h2>
        <p className="section-desc">DistriHub adapts to your industry. Whether you run a single shop or a multi-branch distribution network, the platform scales with you.</p>
        <div className="industry-grid">
          <a className="industry-card" href="/bev"><div className="industry-icon">🍺</div><div className="industry-name">Beverage Distributors</div><div className="industry-note">Soda, water, juice, alcohol distribution</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">🏪</div><div className="industry-name">Retail & Supermarkets</div><div className="industry-note">Minimarts, kiosks, grocery stores</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">💊</div><div className="industry-name">Pharmacies & Chemists</div><div className="industry-note">Prescription tracking, expiry management</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">🔧</div><div className="industry-name">Hardware Stores</div><div className="industry-note">Building materials, tools, supplies</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">⛽</div><div className="industry-name">Petrol Stations</div><div className="industry-note">Fuel retail, ATG probe integration</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">🌾</div><div className="industry-name">Agrovets & Farm Inputs</div><div className="industry-note">Seeds, fertilisers, agrochemicals</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">🥩</div><div className="industry-name">Food & Butcheries</div><div className="industry-note">Weight-based selling, fast food</div></a>
          <a className="industry-card" href="#"><div className="industry-icon">📦</div><div className="industry-name">General Wholesale</div><div className="industry-note">Bulk distribution, B2B trade</div></a>
        </div>
      </div>

      <div className="section">
        <div className="section-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Why DistriHub
        </div>
        <h2 className="section-title">The problems we exist to solve</h2>
        <p className="section-desc">Most Kenyan businesses lose money not from low sales, but from small untracked losses that compound over time. DistriHub seals those leaks.</p>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div className="feature-title">Missing Crates & Empties</div>
            <div className="feature-desc">Every returnable bottle, crate, or keg is tracked at every step. Shortages automatically raise staff debts before payroll runs.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div className="feature-title">Staff Accountability</div>
            <div className="feature-desc">Shifts must be opened before the POS activates. Every sale, load, and cash collection is tied to a specific staff member and shift.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
            <div className="feature-title">Cash & Reconciliation</div>
            <div className="feature-desc">Shifts cannot close until cash matches expected collections. Shortfalls auto-create staff debt entries, deducted from payroll.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
            <div className="feature-title">KRA eTIMS Compliance</div>
            <div className="feature-desc">Every invoice is submitted to KRA in real time. PAYE, NSSF, SHIF, and Housing Levy are calculated automatically on every payroll run.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <div className="feature-title">AI-Powered Insights</div>
            <div className="feature-desc">The system learns your sales patterns and flags suspicious transactions, overstock risks, and slow movers before they become losses.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg></div>
            <div className="feature-title">Works Offline</div>
            <div className="feature-desc">Sales, stock movements, and payments continue during internet or power outages. Everything syncs automatically when connectivity returns.</div>
          </div>
        </div>
      </div>
    </>
  );
}
