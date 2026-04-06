import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-eyebrow">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Built for Kenya. Built for business.
        </div>
        <h1 className="hero-title">
          Every shilling. Every crate.<br />
          Every pour. <span className="accent">Accounted for.</span>
        </h1>
        <p className="hero-desc">
          DistriHub is a complete business operating system built for Kenyan SMEs — from the corner duka to a multi-branch distribution network. Real accounting, real-time KRA compliance, and the only platform in East Africa that tracks every millilitre from keg to customer.
        </p>
        <div className="hero-actions">
          <Link to="/platform" className="btn btn-primary">
            See how it works →
          </Link>
          <Link to="/industries" className="btn btn-outline">
            Find your industry
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value brand">Offline-first</div>
            <div className="stat-label">Sells and records without internet</div>
          </div>
          <div className="stat">
            <div className="stat-value">eTIMS</div>
            <div className="stat-label">Real-time KRA invoice submission</div>
          </div>
          <div className="stat">
            <div className="stat-value">M-Pesa native</div>
            <div className="stat-label">Daraja API, Paybill & Till</div>
          </div>
          <div className="stat">
            <div className="stat-value">Full GL</div>
            <div className="stat-label">Double-entry books, P&L, balance sheet</div>
          </div>
        </div>
      </div>

      {/* ── Who it's for ───────────────────────────────────────────────────── */}
      <div className="section">
        <div className="section-eyebrow">Who it's for</div>
        <h2 className="section-title">One platform. Every business type.</h2>
        <p className="section-desc">
          DistriHub is designed so that 90% of what you need works the same way across every business. The remaining 10% adapts to what you actually do — bar, pharmacy, hardware store, or distribution.
        </p>
        <div className="industry-grid">
          <Link to="/bev" className="industry-card">
            <div className="industry-icon">🍺</div>
            <div className="industry-name">Bars, Wines & Spirits</div>
            <div className="industry-note">Keg dispensing, pour cost tracking, tab management</div>
          </Link>
          <Link to="/bev" className="industry-card">
            <div className="industry-icon">🚛</div>
            <div className="industry-name">Beverage Distributors</div>
            <div className="industry-note">Van loading, crate tracking, route reconciliation</div>
          </Link>
          <Link to="/industries" className="industry-card">
            <div className="industry-icon">🍽️</div>
            <div className="industry-name">Hotels & Restaurants</div>
            <div className="industry-note">Kitchen production, recipe costing, table service</div>
          </Link>
          <Link to="/industries" className="industry-card">
            <div className="industry-icon">🏪</div>
            <div className="industry-name">Retail & Supermarkets</div>
            <div className="industry-note">Multi-till POS, promotions, branch control</div>
          </Link>
          <Link to="/industries" className="industry-card">
            <div className="industry-icon">💊</div>
            <div className="industry-name">Pharmacies & Chemists</div>
            <div className="industry-note">FEFO stock, expiry alerts, prescription tracking</div>
          </Link>
          <Link to="/industries" className="industry-card">
            <div className="industry-icon">🔧</div>
            <div className="industry-name">Hardware & Building Materials</div>
            <div className="industry-note">Loose selling, project quotes, credit accounts</div>
          </Link>
          <Link to="/industries" className="industry-card">
            <div className="industry-icon">⛽</div>
            <div className="industry-name">Petrol Stations</div>
            <div className="industry-note">ATG probe integration, fuel dips, attendant shifts</div>
          </Link>
          <Link to="/industries" className="industry-card">
            <div className="industry-icon">📦</div>
            <div className="industry-name">Wholesale & Distribution</div>
            <div className="industry-note">B2B portal, route sales, multi-branch reporting</div>
          </Link>
        </div>
      </div>

      {/* ── The core problem ────────────────────────────────────────────────── */}
      <div className="section">
        <div className="section-eyebrow">The real problem</div>
        <h2 className="section-title">Your business isn't losing money from low sales.</h2>
        <p className="section-desc">
          Most Kenyan business losses are invisible. A crate here, a short pour there, cash that left the till but never hit the books. DistriHub was built to close every one of those gaps — systematically, automatically, and without accusing anyone.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="feature-title">Theft-proof by design</div>
            <div className="feature-desc">
              Every sale requires a shift. Every stock movement requires approval. Breaking a pack of 10 sweets and selling them individually is tracked — the books still balance, and variance is flagged automatically.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="feature-title">Every person accountable</div>
            <div className="feature-desc">
              No sale without a shift. No shift without a person. Cash shortfalls, missing crates, and excess wastage automatically create staff deductions — resolved at payroll. No confrontations. The system handles it.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon amber">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            </div>
            <div className="feature-title">Enforced stock takes</div>
            <div className="feature-desc">
              DistriHub enforces minimum stock-taking frequency. Variance between system stock and physical count is calculated, posted to the GL, and flagged for review. Owners who check weekly lose far less than those who check quarterly.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon teal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div className="feature-title">Real margin visibility</div>
            <div className="feature-desc">
              COGS is calculated from actual purchase batch costs, not averages. You see the real margin on every product, every branch, every day — not an estimate from last month's prices.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon violet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>
            </div>
            <div className="feature-title">KRA compliant from day one</div>
            <div className="feature-desc">
              Every invoice goes to KRA automatically — no manual OSCU uploads. PAYE, NSSF, SHIF, and Housing Levy are calculated on every payroll run using 2025 tables. Compliance is not an extra step; it's built into the workflow.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <div className="feature-title">Books that write themselves</div>
            <div className="feature-desc">
              DistriHub runs a full double-entry general ledger. Every sale, receipt, payment, and payroll run generates the correct journal entries automatically. Your accountant reviews, not rebuilds.
            </div>
          </div>
        </div>

        {/* Production callout */}
        <div className="highlight-banner violet-accent">
          <div className="banner-eyebrow violet">New — Production module</div>
          <div className="banner-title">Make it yourself. Sell it yourself. Track every ingredient.</div>
          <div className="banner-desc">
            Whether you're a kitchen cooking from recipes, a bar tapping kegs by the glass, or a manufacturer assembling finished goods — DistriHub's production module tracks everything from raw ingredient to finished product. Costs are calculated automatically. Variance is flagged. Nothing is estimated.
          </div>
          <div style={{marginTop: '1rem'}}>
            <Link to="/production" className="btn btn-ghost" style={{fontSize: '0.82rem'}}>
              Learn about production →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Works everywhere ────────────────────────────────────────────────── */}
      <div className="section">
        <div className="section-eyebrow">Built for Kenya</div>
        <h2 className="section-title">It works when the internet doesn't.</h2>
        <p className="section-desc">
          DistriHub is offline-first. Power cut? Internet down? Your POS keeps running. Everything syncs the moment connectivity returns. No lost sales. No gaps in the audit trail.
        </p>
        <div className="stat-strip">
          <div className="stat-strip-item">
            <div className="stat-strip-value brand">100%</div>
            <div className="stat-strip-label">offline capable POS</div>
          </div>
          <div className="stat-strip-item">
            <div className="stat-strip-value amber">Real-time</div>
            <div className="stat-strip-label">KRA eTIMS submission</div>
          </div>
          <div className="stat-strip-item">
            <div className="stat-strip-value teal">M-Pesa</div>
            <div className="stat-strip-label">Paybill, Till & Pochi</div>
          </div>
          <div className="stat-strip-item">
            <div className="stat-strip-value emerald">Full GL</div>
            <div className="stat-strip-label">automatic double-entry</div>
          </div>
        </div>
        <div className="callout success">
          <div className="callout-title">✓ One system. No spreadsheets.</div>
          <div className="callout-body">Every business on DistriHub replaces at minimum: an Excel stock sheet, a separate payroll tool, manual KRA uploads, a WhatsApp order book, and a manual reconciliation process. It all runs in one place, on any device.</div>
        </div>
      </div>
    </>
  );
}
