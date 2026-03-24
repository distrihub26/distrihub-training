export default function Empties() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Returnables & Empties</div>
        <h1 className="hero-title">Never lose another crate or bottle.</h1>
        <p className="hero-desc">DistriHub's empties management is one of its most powerful and most unique features. Every returnable container is tracked through its full lifecycle, from supplier delivery to customer collection and back.</p>
      </div>
      <div className="section">
        <div className="callout">
          <div className="callout-title">🍺 Why This Matters for Beverage Distributors</div>
          <div className="callout-body">Untracked crates and bottles are one of the biggest sources of losses for Kenyan beverage distributors. A driver who loses 10 crates of Coca-Cola at KSh 350/crate loses KSh 3,500 that day. Multiplied across dozens of routes and weeks, this adds up fast. DistriHub makes it impossible to hide.</div>
        </div>

        <div className="prose">
          <h2>The Empties Lifecycle</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Received from Supplier (Full)</div>
              <div className="step-desc">When a GRN is approved for a returnable product, qty_full is incremented automatically. The accounting entry: Debit Full-Empties Asset, Credit Accounts Payable.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Sold to Customer</div>
              <div className="step-desc">When a sale is confirmed, qty_full decrements and qty_empty increments: the full container becomes an empty shell. Deposits are automatically added to the sale total.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Customer Returns Empty</div>
              <div className="step-desc">When a customer returns the empty shell, their deposit is credited back. The customer empty ledger tracks each customer's outstanding containers individually.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Supplier Collects Empties</div>
              <div className="step-desc">When the supplier collects the empty shells, qty_empty decrements and the outstanding supplier invoice is reduced by the deposit value.</div>
            </div>
          </div>
        </div>

        <div className="prose">
          <h2>Full Accounting Integration</h2>
          <p>Every step of the empties lifecycle generates automatic double-entry journal entries, using dedicated GL accounts per empty group.</p>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr><th>Event</th><th>Debit</th><th>Credit</th></tr>
            </thead>
            <tbody>
              <tr><td>Received full from supplier</td><td>Full-Empties Asset</td><td>Accounts Payable</td></tr>
              <tr><td>Sold (full → empty shell)</td><td>Empty-Shells Asset</td><td>Full-Empties Asset</td></tr>
              <tr><td>Supplier collects empties</td><td>Accounts Payable</td><td>Empty-Shells Asset</td></tr>
              <tr><td>Staff debt raised</td><td>Staff Debtor</td><td>Empty-Shells Asset</td></tr>
            </tbody>
          </table>
        </div>

        <div className="page-nav">
          <a href="/sales" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Sales & POS</span>
          </a>
          <a href="/hr" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">HR & Payroll</span>
          </a>
        </div>
      </div>
    </>
  );
}
