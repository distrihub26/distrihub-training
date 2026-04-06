// ══════════════════════════════════════════════════════
// Beverage.tsx
// ══════════════════════════════════════════════════════
import { Link } from 'react-router-dom';

export function Beverage() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">🍺 Bars, Beverages & Distribution</div>
        <h1 className="hero-title">
          From the keg to the glass.<br />
          <span className="accent-amber">Every drop. Every shilling.</span>
        </h1>
        <p className="hero-desc">
          DistriHub is purpose-built for the realities of Kenyan bars, wines & spirits shops, and beverage distributors. Keg tracking, van loading, returnable crate management, route reconciliation, and deposit control — all in one system, offline-capable, M-Pesa native.
        </p>
      </div>

      <div className="section">
        <div className="callout warning">
          <div className="callout-title">⚠ How bars and beverage businesses lose money</div>
          <div className="callout-body">
            It is rarely outright theft. More often it is short pours never rung up, kegs with unrecorded wastage, crates that leave without being counted, deposits collected but not tracked, and routes where stock variance is just accepted. DistriHub closes every one of these gaps — without cameras, without confrontation.
          </div>
        </div>

        <hr className="divider" />

        {/* Keg section */}
        <div className="section-eyebrow" style={{color: 'var(--amber)'}}>Keg & draught management</div>
        <h2 className="section-title">The only system in East Africa that tracks your keg by the millilitre.</h2>
        <p className="section-desc">
          When a 50-litre keg of Tusker arrives, DistriHub locks in the cost per litre. From the moment it's tapped, every pint sold deducts exactly 568ml. The keg's remaining volume is always visible. When it's done, wastage is posted automatically. The system tells you what your pour cost was per glass — every time.
        </p>

        <div className="two-col">
          <div className="keg-card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div>
                <div style={{fontSize: '0.72rem', color: 'var(--fg-subtle)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem'}}>Tusker 50L — Tap 1</div>
                <div style={{fontSize: '1.1rem', fontWeight: 600, color: 'var(--fg)'}}>34.2L remaining</div>
              </div>
              <span className="badge badge-green">Open</span>
            </div>
            <div className="keg-bar-outer">
              <div className="keg-bar-fill" style={{width: '68%'}}></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--fg-muted)'}}>
              <span>68% remaining</span>
              <span>Cost/ml: KSh 0.17</span>
            </div>
            <div style={{marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--fg-subtle)'}}>
              43 pints sold · KSh 15,050 revenue · KSh 4,150 pour cost · <strong style={{color: 'var(--emerald)'}}>72.4% margin</strong>
            </div>
          </div>

          <div className="keg-card">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div>
                <div style={{fontSize: '0.72rem', color: 'var(--fg-subtle)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem'}}>Guinness 30L — Tap 2</div>
                <div style={{fontSize: '1.1rem', fontWeight: 600, color: 'var(--fg)'}}>4.8L remaining</div>
              </div>
              <span className="badge badge-amber">Almost empty</span>
            </div>
            <div className="keg-bar-outer">
              <div className="keg-bar-fill" style={{width: '16%', background: 'var(--amber)'}}></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--fg-muted)'}}>
              <span>16% remaining</span>
              <span>Cost/ml: KSh 0.24</span>
            </div>
            <div style={{marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--fg-subtle)'}}>
              44 pints sold · KSh 19,800 revenue · KSh 6,120 pour cost · <strong style={{color: 'var(--emerald)'}}>69.1% margin</strong>
            </div>
          </div>
        </div>

        <div className="callout amber">
          <div className="callout-title">🍺 Branch isolation — exactly how it should work</div>
          <div className="callout-body">
            A keg opened at Branch A stays entirely at Branch A. Stock deducted from Branch A. Sales recorded at Branch A. Branch B has no visibility into it and cannot affect it. Each branch is its own independent operation, with its own keg inventory, its own open containers, and its own P&L. Multi-branch owners see everything consolidated. Branch staff see only their branch.
          </div>
        </div>

        <Link to="/production" className="btn btn-outline" style={{marginTop: '0.5rem', display: 'inline-flex'}}>
          Full keg & production details →
        </Link>

        <hr className="divider" />

        {/* Distribution section */}
        <div className="section-eyebrow">Beverage distribution</div>
        <h2 className="section-title">Van loading. Route sales. Crate control.</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Open a route shift</div>
              <div className="step-desc">Every driver opens a route shift before the van leaves. Everything that happens during the day — every sale, every crate, every payment — is tied to that driver and that shift.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Load the van</div>
              <div className="step-desc">A field load is created and approved by the warehouse supervisor. Only then does stock leave the warehouse in the system. Partial loads, mid-day reloads, and emergency additions are all tracked.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Sell via mobile POS — offline</div>
              <div className="step-desc">The sales rep sells from the mobile POS — works offline. Each sale deducts from van stock, records returnable crates issued, and collects deposit. M-Pesa and cash are both supported.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Return unsold stock & empties</div>
              <div className="step-desc">Unsold products and returned empty crates are recorded at end of day. Both go through the warehouse approval workflow. Returns update stock immediately.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">System reconciles the load</div>
              <div className="step-desc">The field load cannot close until loaded quantity equals sales + returns per product. Any discrepancy is flagged immediately — not discovered at month-end.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">6</div>
            <div className="step-line" style={{background: 'transparent'}}></div>
            <div className="step-content">
              <div className="step-title">Shortfalls auto-create staff debts</div>
              <div className="step-desc">Unaccounted crates, cash shortfall, and missing stock automatically create staff debt entries. These are deducted at the next payroll run. No conversations needed. The system is the record.</div>
            </div>
          </div>
        </div>

        <div className="page-nav">
          <Link to="/industries" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">All Industries</span>
          </Link>
          <Link to="/production" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Production Module</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Beverage;
