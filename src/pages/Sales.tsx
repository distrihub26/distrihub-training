export default function Sales() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Sales & POS</div>
        <h1 className="hero-title">Sell in-store, in the field, or online.</h1>
        <p className="hero-desc">DistriHub's point-of-sale works on any device, offline-first, with full M-Pesa integration and automatic KRA receipt generation.</p>
      </div>
      <div className="section">
        <div className="prose">
          <h2>Shifts: The Foundation of Accountability</h2>
          <p>Before any sale can be made, a <strong>shift must be opened</strong>. Shifts tie every transaction to a specific staff member, branch, and time window. This is the foundation of DistriHub's accountability model.</p>
          <h3>Shift types</h3>
          <ul>
            <li><strong>Mother Shift:</strong> the primary supervisory shift opened by a manager or supervisor.</li>
            <li><strong>Child / Cashier Shift (In-Store):</strong> individual cashier sessions nested under the mother shift.</li>
            <li><strong>Route / Field Sales Shift:</strong> for sales representatives operating outside the branch on van sales.</li>
          </ul>
          <h3>Shift reconciliation</h3>
          <p>When closing a shift, DistriHub compares expected cash, M-Pesa, and digital payments against actual amounts declared. Any shortfall automatically creates a <strong>staff debt</strong>.</p>
        </div>

        <div className="prose">
          <h2>Payments & M-Pesa</h2>
        </div>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr><th>Method</th><th>Integration</th><th>Reference Required</th></tr>
            </thead>
            <tbody>
              <tr><td>Cash</td><td>Manual entry</td><td>No</td></tr>
              <tr><td>M-Pesa Paybill (C2B)</td><td>Daraja API</td><td>Transaction code</td></tr>
              <tr><td>M-Pesa Till (Buy Goods)</td><td>Daraja API</td><td>Transaction code</td></tr>
              <tr><td>M-Pesa Pochi La Biashara</td><td>Daraja API</td><td>Transaction code</td></tr>
              <tr><td>Airtel Money</td><td>Airtel API</td><td>Transaction code</td></tr>
              <tr><td>Bank Transfer / EFT</td><td>Manual entry</td><td>Reference number</td></tr>
            </tbody>
          </table>
        </div>

        <div className="callout info">
          <div className="callout-title">💡 Automatic accounting on payment</div>
          <div className="callout-body">Every confirmed payment automatically posts a journal entry: debit to the appropriate asset account, credit to accounts receivable.</div>
        </div>

        <div className="page-nav">
          <a href="/inventory" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Inventory & Stock</span>
          </a>
          <a href="/empties" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Returnables & Empties</span>
          </a>
        </div>
      </div>
    </>
  );
}
