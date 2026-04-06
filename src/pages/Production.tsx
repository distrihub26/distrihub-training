import { Link } from 'react-router-dom';

export default function Production() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Production Module</div>
        <h1 className="hero-title">
          Make it. Cost it.<br />
          <span className="accent">Sell it correctly.</span>
        </h1>
        <p className="hero-desc">
          DistriHub's production module is the only feature of its kind in East African SME software. Whether you're a chef, a brewer, a furniture maker, or a bottler — you can create your own sellable product, track every ingredient that went into it, and know your exact cost before you price it.
        </p>
      </div>

      <div className="section">

        <div className="highlight-banner brand-accent">
          <div className="banner-eyebrow brand">Why this matters</div>
          <div className="banner-title">Most businesses guess their production costs. DistriHub calculates them.</div>
          <div className="banner-desc">
            When you buy a 50kg bag of flour and make 200 mandazis, what did each mandazi cost you? When you tap a 50-litre keg and sell 80 glasses of beer, what was your pour cost per glass? Most business owners estimate. DistriHub gives you the exact number — from actual purchase prices, actual quantities used, and actual wastage recorded.
          </div>
        </div>

        <hr className="divider" />

        {/* ── Three production types ──────────────────────────────────────── */}
        <div className="section-eyebrow">How it works</div>
        <h2 className="section-title">Three types of production, one system.</h2>
        <p className="section-desc">
          DistriHub supports every way a business transforms raw inputs into sellable outputs.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon violet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
            </div>
            <div className="feature-title">Kitchen & Recipe Production</div>
            <div className="feature-desc">
              For hotels, restaurants, cafés, and bakeries. Create recipes with exact ingredient quantities and expected yield. When the kitchen runs a batch, ingredients are deducted from stock automatically, and the finished dish or product is added. Waste is recorded and posted to the books.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon amber">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div className="feature-title">Manufacturing & Assembly</div>
            <div className="feature-desc">
              For carpenters, fabricators, packagers, and producers. Build a bill of materials for finished goods — a chair requires lumber, nails, varnish, and labour. Complete the production order, and DistriHub updates stock, calculates unit cost, and posts the accounting entries.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon teal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
            </div>
            <div className="feature-title">Processing & Repackaging</div>
            <div className="feature-desc">
              For distributors who clean, sort, grade, or repackage goods before selling. Buy in bulk, process into sellable units. Each unit carries an accurate cost based on the original purchase price plus processing costs — not an estimate.
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* ── Keg / bar section ───────────────────────────────────────────── */}
        <div className="section-eyebrow" style={{color: 'var(--amber)'}}>For bars, wines & spirits</div>
        <h2 className="section-title">The keg system. Nothing like it in Kenya.</h2>
        <p className="section-desc">
          DistriHub's keg management is the most detailed draught tracking system available to any Kenyan bar — at any price point. The moment a keg is tapped, the system starts tracking.
        </p>

        <div className="highlight-banner amber-accent">
          <div className="banner-eyebrow amber">How it works — step by step</div>
          <div className="banner-title">From delivery to the last drop. Every millilitre accounted for.</div>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num" style={{background: 'var(--amber)'}}>1</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Keg received from supplier</div>
              <div className="step-desc">
                A 50-litre keg of Tusker arrives. It's recorded as a stock item with its purchase price. The system knows: cost per litre = purchase price ÷ 50L. This cost is locked at receipt and used for all future calculations.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num" style={{background: 'var(--amber)'}}>2</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Tap it — the keg is opened</div>
              <div className="step-desc">
                The barman opens the keg in DistriHub. At that moment, the keg leaves stock and enters the dispensing system. The branch manager can assign it to a specific tap — "Tap 1 — Main Bar" or "Tap 2 — Terrace". Multiple taps can run simultaneously at the same branch, each independently tracked. A keg opened at Branch A stays entirely at Branch A — stock, sales, and all.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num" style={{background: 'var(--amber)'}}>3</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Link your glass sizes</div>
              <div className="step-desc">
                You tell DistriHub: "A pint is 568ml. A half-pint is 284ml." From this moment, every time a cashier rings up a pint of Tusker on the POS, the system deducts exactly 568ml from the open keg — automatically, in the background, with no extra steps.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num" style={{background: 'var(--amber)'}}>4</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">POS sells normally</div>
              <div className="step-desc">
                Your cashier doesn't do anything differently. They sell "Pint of Tusker" as they always have. DistriHub handles the volume deduction, the cost calculation, and the accounting — all in the background. Revenue, COGS, and margin are calculated from real numbers.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num" style={{background: 'var(--amber)'}}>5</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Keg runs dry — close it</div>
              <div className="step-desc">
                When the keg is empty, the barman marks it as exhausted. Any remaining volume (dreg, foam, the last bits that couldn't be poured) is automatically written off as wastage and posted as a cost to the books. You see exactly what percentage of every keg actually reached the customer.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num" style={{background: 'var(--amber)'}}>6</div>
            <div className="step-line" style={{background: 'transparent'}}></div>
            <div className="step-content">
              <div className="step-title">Variance report tells you the truth</div>
              <div className="step-desc">
                At any time, you can run a variance report. It shows you: how much should have been poured vs how much was sold. If the numbers don't match — your barman is pouring heavy, or worse, pouring without ringing it up. DistriHub doesn't accuse anyone. It just shows you the data.
              </div>
            </div>
          </div>
        </div>

        <div className="callout amber">
          <div className="callout-title">🍺 Real example: a 50-litre keg of Tusker</div>
          <div className="callout-body">
            You buy it for KSh 8,500. That's KSh 170 per litre, or KSh 96.56 per pint (568ml). You sell pints at KSh 350. Your gross margin per pint is KSh 253.44 — 72.4%. DistriHub shows you this automatically, for every keg, every glass size, every day. No spreadsheets. No estimates.
          </div>
        </div>

        <hr className="divider" />

        {/* ── Production order flow ────────────────────────────────────────── */}
        <div className="section-eyebrow">Production order workflow</div>
        <h2 className="section-title">Controlled. Auditable. Automatic.</h2>
        <p className="section-desc">
          Production orders follow a controlled approval workflow — so nothing goes wrong silently.
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Create a draft order</div>
              <div className="step-desc">The kitchen supervisor or production manager creates an order — either from a saved recipe/BOM template or by entering ingredients manually. Nothing has moved yet.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Confirm — locks the ingredients</div>
              <div className="step-desc">Confirming locks in the input quantities. The order is committed and ready for production to begin.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Start — ingredients leave stock</div>
              <div className="step-desc">Starting the order deducts every ingredient from the branch's stock. The accounting entry is posted: raw materials move to Work-in-Progress (WIP). The kitchen is now committed.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Enter actual quantities</div>
              <div className="step-desc">The kitchen records what actually came out — actual yield, actual wastage, expiry dates for perishables. Any variance from the planned quantities is flagged automatically.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Complete — finished goods enter stock</div>
              <div className="step-desc">Completing the order adds the finished product to stock with its calculated unit cost. The accounting entry is posted: WIP converts to Finished Goods. It's now available on the POS immediately.</div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* ── Labour & overhead ────────────────────────────────────────────── */}
        <div className="prose">
          <h2>Full cost capture — not just ingredients</h2>
          <p>DistriHub captures the full cost of production, not just raw materials.</p>
          <h3>Labour costs</h3>
          <p>Add labour to any production order using three methods: a manual lump sum, an hours-worked × hourly rate calculation, or a direct link to payroll so the right portion of salary cost is allocated to production automatically.</p>
          <h3>Overhead allocation</h3>
          <p>Overheads like electricity, water, and packaging can be allocated as a percentage of material cost or as a fixed manual amount per batch. Every cost goes into the finished product's unit cost — giving you a true cost, not an approximation.</p>
          <h3>By-products and waste</h3>
          <p>Production rarely produces only one thing. DistriHub handles primary outputs (what you set out to make), by-products (sellable secondary outputs), and waste — each with their own accounting treatment. A by-product that can be sold reduces your net cost. Waste is written off immediately.</p>
        </div>

        <hr className="divider" />

        {/* ── Variance detection ───────────────────────────────────────────── */}
        <div className="highlight-banner brand-accent">
          <div className="banner-eyebrow brand">Theft & waste detection</div>
          <div className="banner-title">The variance report that protects your margins.</div>
          <div className="banner-desc">
            Every completed production order compares what was planned against what actually happened. Ingredients used significantly more than the recipe says? Output yield consistently below expectation? DistriHub flags these as HIGH or WATCH — so you have the data to have the right conversation with the right person.
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr><th>Flag</th><th>What it means</th><th>What to do</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge" style={{background: 'hsla(0,80%,50%,0.12)', color: 'hsl(0,80%,60%)', border: '1px solid hsla(0,80%,50%,0.25)'}}>HIGH</span></td>
                <td>Ingredient used 20%+ over recipe, or yield 20%+ below plan</td>
                <td>Investigate immediately — recipe error, wastage, or theft</td>
              </tr>
              <tr>
                <td><span className="badge badge-amber">WATCH</span></td>
                <td>Usage or yield trending outside normal range</td>
                <td>Monitor — may be a training issue or recipe drift</td>
              </tr>
              <tr>
                <td><span className="badge badge-green">OK</span></td>
                <td>Actual quantities within acceptable variance of plan</td>
                <td>No action needed — kitchen is performing to recipe</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="page-nav">
          <Link to="/inventory" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Inventory & Stock</span>
          </Link>
          <Link to="/sales" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Sales & POS</span>
          </Link>
        </div>
      </div>
    </>
  );
}
