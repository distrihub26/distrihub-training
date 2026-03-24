export default function Inventory() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Inventory & Stock</div>
        <h1 className="hero-title">Complete stock control. Zero direct edits.</h1>
        <p className="hero-desc">DistriHub tracks every unit of stock through a strict movement-based system. There are no direct quantity edits: every change flows through an auditable, approvable stock movement.</p>
      </div>
      <div className="section">
        <div className="prose">
          <h2>Products & Sellables</h2>
          <p>DistriHub separates <strong>Products</strong> (what you stock) from <strong>Sellables</strong> (how you sell it). A single product like "Tusker Lager" can have multiple sellables: a single bottle, a crate of 24, a six-pack, each with its own price, barcode, and packaging.</p>
          <h3>Key attributes per sellable</h3>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr><th>Attribute</th><th>What It Controls</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Inventory Policy</strong></td><td>FIFO, FEFO (expiry-first), or LIFO. Controls which batch is consumed first.</td></tr>
              <tr><td><strong>Tracked By</strong></td><td>Batch/lot tracking or Batch + Serial number tracking</td></tr>
              <tr><td><strong>Is Returnable</strong></td><td>Links to an Empty Group for crate/bottle tracking</td></tr>
              <tr><td><strong>Sales Method</strong></td><td>Fixed units, by weight, by volume, by portion, by time, by length, by area</td></tr>
              <tr><td><strong>eTIMS Tax Type</strong></td><td>Standard (16% VAT), Zero-rated, Exempt, or Reduced (8%)</td></tr>
              <tr><td><strong>Low Stock Threshold</strong></td><td>Per-branch threshold; triggers low-stock alerts automatically</td></tr>
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Stock Movements</h2>
          <p>All inventory changes happen through <strong>stock movements</strong>. Each movement has a type, a quantity, a status (pending → approved), and is linked to a batch, branch, and staff member.</p>
          <h3>Movement types include</h3>
          <ul>
            <li><strong>Receipt:</strong> goods received from supplier via GRN</li>
            <li><strong>Sale:</strong> units sold, auto-approved at point of sale</li>
            <li><strong>Transfer In / Out:</strong> stock moved between branches</li>
            <li><strong>Load Out / Load Return:</strong> field sales van loading and returns</li>
            <li><strong>Adjustment (Positive/Negative):</strong> corrections that require approval and photo evidence</li>
            <li><strong>Damage, Theft, Write-off:</strong> loss movements flagged as high-risk</li>
            <li><strong>Bundle Assembly/Disassembly:</strong> breaking crates into singles or packing gift sets</li>
          </ul>
        </div>

        <div className="callout warning">
          <div className="callout-title">⚠ High-risk movements</div>
          <div className="callout-body">Negative adjustments, theft, damage, and write-offs require photo proof and senior approval. They also trigger AI anomaly scoring and are surfaced in the risk dashboard.</div>
        </div>

        <div className="page-nav">
          <a href="/platform" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Platform & Compliance</span>
          </a>
          <a href="/sales" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Sales & POS</span>
          </a>
        </div>
      </div>
    </>
  );
}
