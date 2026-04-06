import { Link } from 'react-router-dom';

export default function Finance() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Finance & Accounting</div>
        <h1 className="hero-title">
          Real books.<br />
          <span className="accent">Written automatically.</span>
        </h1>
        <p className="hero-desc">
          DistriHub runs a complete double-entry general ledger in the background of every transaction. Sales, stock movements, payroll, supplier payments, production — every event generates the correct accounting entries. Your books are always current, always balanced, and always auditable.
        </p>
      </div>

      <div className="section">
        <div className="highlight-banner brand-accent">
          <div className="banner-eyebrow brand">What makes this different</div>
          <div className="banner-title">This is not a sales tracker with a totals column. This is actual accounting.</div>
          <div className="banner-desc">
            Most SME software shows you revenue and calls it a profit calculation. DistriHub maintains a full chart of accounts, posts double-entry journal entries for every event, and produces financial statements that would satisfy an auditor — without your accountant doing manual data entry.
          </div>
        </div>

        <hr className="divider" />

        <div className="section-eyebrow">What gets posted automatically</div>
        <h2 className="section-title">Every event. The right entry. Every time.</h2>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr><th>Event</th><th>Debit</th><th>Credit</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Sale confirmed</strong></td><td>Accounts Receivable (1200)</td><td>Revenue (4000) + VAT Payable (2100)</td></tr>
              <tr><td><strong>Payment received</strong></td><td>Cash / M-Pesa / Bank</td><td>Accounts Receivable</td></tr>
              <tr><td><strong>Stock received (GRN)</strong></td><td>Inventory Asset</td><td>Accounts Payable</td></tr>
              <tr><td><strong>Supplier payment</strong></td><td>Accounts Payable</td><td>Cash / Bank</td></tr>
              <tr><td><strong>Production started</strong></td><td>Work-in-Progress (1340)</td><td>Raw Materials (1300)</td></tr>
              <tr><td><strong>Production completed</strong></td><td>Finished Goods (1350)</td><td>Work-in-Progress (1340)</td></tr>
              <tr><td><strong>Production wastage</strong></td><td>Waste / Variance Expense (5110)</td><td>Work-in-Progress (1340)</td></tr>
              <tr><td><strong>Keg glass sold (from open container)</strong></td><td>COGS (5000) — per ml cost</td><td>Work-in-Progress (1340)</td></tr>
              <tr><td><strong>Crate sold (empties)</strong></td><td>Empty Shells Asset</td><td>Full Empties Asset</td></tr>
              <tr><td><strong>Payroll run</strong></td><td>Salary Expense, Statutory liabilities</td><td>Cash / Bank</td></tr>
              <tr><td><strong>Discount given</strong></td><td>Sales Discounts (4900)</td><td>Revenue adjustment</td></tr>
              <tr><td><strong>Sale voided</strong></td><td>Revenue (reversal)</td><td>Accounts Receivable (reversal)</td></tr>
            </tbody>
          </table>
        </div>

        <hr className="divider" />

        <div className="section-eyebrow">Financial reports</div>
        <h2 className="section-title">Reports that tell you the truth about your business.</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div className="feature-title">Profit & Loss</div>
            <div className="feature-desc">
              Revenue, COGS (from actual batch costs), gross profit, operating expenses, and net income. By period, by branch, or across the whole business. Updated in real time as every sale is confirmed.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon amber">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>
            </div>
            <div className="feature-title">Balance Sheet</div>
            <div className="feature-desc">
              Assets (cash, inventory, receivables, empties, fixed assets), liabilities (payables, VAT, statutory), and equity. Always in balance. Always current.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon teal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="feature-title">Cash Flow Statement</div>
            <div className="feature-desc">
              Operating, investing, and financing activities derived from actual payment and expense data. Not a rough approximation — a real cash flow statement, generated automatically.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon violet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <div className="feature-title">Product & Branch Margins</div>
            <div className="feature-desc">
              Gross margin per product, per category, per branch — calculated from actual FIFO/FEFO batch costs, not averages. Know which products make money and which ones just move volume.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div className="feature-title">General Ledger & Journal Entries</div>
            <div className="feature-desc">
              Every journal entry is accessible with its source event, the user who triggered it, and the exact timestamp. Your accountant or auditor can trace any number back to the transaction that generated it.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
            </div>
            <div className="feature-title">Production Cost Accounting</div>
            <div className="feature-desc">
              WIP, Finished Goods, and Production Variance accounts — fully integrated with the production module. Know your real cost per batch, per unit, and per product line. Understand where you're losing margin in production before it hits the P&L.
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="prose">
          <h2>KRA compliance is not extra work</h2>
          <p>Every completed sale submits a tax invoice to KRA automatically via eTIMS. Credit notes are issued automatically when a sale is voided. Payroll runs calculate and post PAYE, NSSF, SHIF, and Housing Levy using current Kenya 2025 tax tables — and generate the statutory remittance entries automatically.</p>
          <p>You don't manage compliance. DistriHub does it for you.</p>
        </div>

        <div className="callout success">
          <div className="callout-title">✓ What this means for your accountant</div>
          <div className="callout-body">Your accountant stops doing data entry and starts doing analysis. The trial balance is always current. Journal entries are always correct. The only things left to review are the decisions — which costs to approve, which variances to investigate, which trends to act on.</div>
        </div>

        <div className="page-nav">
          <Link to="/hr" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">HR & Payroll</span>
          </Link>
          <Link to="/industries" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">By Industry</span>
          </Link>
        </div>
      </div>
    </>
  );
}
