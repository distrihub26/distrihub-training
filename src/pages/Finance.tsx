export default function Finance() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Finance & Accounting</div>
        <h1 className="hero-title">Your books, always in order.</h1>
        <p className="hero-desc">DistriHub runs a full double-entry general ledger automatically. Every sale, payment, stock movement, payroll run, and supplier payment generates the correct journal entries, without any manual bookkeeping.</p>
      </div>
      <div className="section">
        <div className="prose">
          <h2>Double-Entry Accounting</h2>
          <p>DistriHub's accounting module is the backbone of every transaction. Journal entries are posted automatically by the system at every key event.</p>
          <h3>Journal entries are posted automatically for</h3>
          <ul>
            <li>Every confirmed sale</li>
            <li>Every payment received</li>
            <li>Every GRN approval</li>
            <li>Every supplier payment</li>
            <li>Every stock adjustment</li>
            <li>Every stage of the empties lifecycle</li>
            <li>Every payroll run</li>
          </ul>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div className="feature-title">Profit & Loss</div>
            <div className="feature-desc">Revenue, COGS, gross profit, operating expenses, and net income, by period, branch, or product.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>
            </div>
            <div className="feature-title">Balance Sheet</div>
            <div className="feature-desc">Assets, liabilities, and equity at any point in time. Always in balance.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="feature-title">Cash Flow</div>
            <div className="feature-desc">Operational, investment, and financing activities tracked from actual payment and expense data.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <div className="feature-title">COGS & Margins</div>
            <div className="feature-desc">Cost of goods sold calculated from actual batch cost prices. Gross margin per product, category, and branch.</div>
          </div>
        </div>

        <div className="page-nav">
          <a href="/hr" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">HR & Payroll</span>
          </a>
          <a href="/industries" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Industries</span>
          </a>
        </div>
      </div>
    </>
  );
}
