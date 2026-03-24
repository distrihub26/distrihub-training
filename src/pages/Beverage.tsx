import { Link } from 'react-router-dom';

export default function Beverage() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">
          🍺 Beverage Distributors
        </div>
        <h1 className="hero-title">
          The complete system for soda, water, juice &amp; alcohol distribution.
        </h1>
        <p className="hero-desc">
          DistriHub was purpose-built to solve the specific challenges of Kenyan beverage distributors: van loading, returnable crates and bottles, route reconciliation, and deposit management.
        </p>
      </div>

      <div className="section">
        <div className="callout warning">
          <div className="callout-title">⚠ How Beverage Distributors Lose Money</div>
          <div className="callout-body">
            Most losses in beverage distribution are not from low sales margins. They come from missing crates, unreconciled deposits, staff debts not deducted from pay, overstocking slow-movers, and no visibility into route profitability. DistriHub closes all of these gaps.
          </div>
        </div>

        <div className="prose">
          <h2>The Day in the Life of a Beverage Distributor on DistriHub</h2>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Open a Route Shift</div>
              <div className="step-desc">Every driver/sales rep opens a route shift before leaving the warehouse. This links all subsequent loads, sales, and returns to them personally for the day.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Load the Van</div>
              <div className="step-desc">Create a field load, add products and quantities. The warehouse supervisor approves the load. Only then does stock leave the warehouse in the system.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Sell via Mobile POS</div>
              <div className="step-desc">The sales rep sells from the mobile POS (works offline). Each sale automatically deducts from van stock and tracks returnable crates issued. Deposits are charged and recorded per customer.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Return Unsold Stock &amp; Empties</div>
              <div className="step-desc">At end of day, unsold products are returned to the warehouse. Empty crates/bottles returned by customers are also recorded. Both go through the same approval workflow.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Reconcile the Load</div>
              <div className="step-desc">The field load cannot close unless net loaded equals POS sales per product. Any discrepancy is flagged immediately.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">6</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Empties &amp; Cash Reconciliation</div>
              <div className="step-desc">Unaccounted crates/bottles automatically raise a staff debt. Cash shortfall raises another. Both are deducted from next payroll. The shift cannot close until all figures are submitted.</div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="prose">
          <h2>Key Features for Beverage Distributors</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚛</div>
            <div className="feature-title">Van Load Management</div>
            <div className="feature-desc">One open load per shift per day. Partial loads, mid-day reloads, and end-of-day returns all tracked through the approval workflow.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <div className="feature-title">Crate &amp; Bottle Tracking</div>
            <div className="feature-desc">Full lifecycle tracking per empty group. qty_full and qty_empty always in sync with accounting. Supplier collections reduce your payable automatically.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <div className="feature-title">Deposit Management</div>
            <div className="feature-desc">Deposits charged at point of sale, credited on return. Customer empty ledgers track outstanding containers per customer. No deposit goes untracked.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <div className="feature-title">Route Planning</div>
            <div className="feature-desc">Customer portal orders feed into route planning. AI learns your routes and suggests optimal loading.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <div className="feature-title">Route Profitability</div>
            <div className="feature-desc">Sales, COGS, deposits, and shortfalls per route and per driver.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <div className="feature-title">AI Stocking Advice</div>
            <div className="feature-desc">After a few months of data, DistriHub identifies fast and slow movers per route and recommends daily load quantities.</div>
          </div>
        </div>

        <div className="callout success">
          <div className="callout-title">✓ Start small, scale fast</div>
          <div className="callout-body">Begin with shift control and reconciliation for the biggest quick wins. Add empties tracking as your next step. Let the AI learn your patterns for two to three months before relying on stocking recommendations.</div>
        </div>

        <div className="page-nav">
          <Link to="/industries" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">All Industries</span>
          </Link>
          <Link to="/" className="page-nav-item next">
            <span className="page-nav-label">↩ Back to</span>
            <span className="page-nav-title">Overview</span>
          </Link>
        </div>
      </div>
    </>
  );
}
