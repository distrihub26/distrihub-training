export default function Hr() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">HR & Payroll</div>
        <h1 className="hero-title">Pay your staff correctly. Every time.</h1>
        <p className="hero-desc">DistriHub handles the full staff lifecycle: from hiring and role assignment through payroll calculation, statutory deductions, salary advances, and staff debts. KRA 2025 tax tables are built in.</p>
      </div>
      <div className="section">
        <div className="prose">
          <h2>Staff Assignments & Contracts</h2>
          <p>Every staff member on DistriHub is assigned to a specific business and branch with defined roles. Employment contracts capture contract type (permanent, fixed-term, casual, internship), probation period, and link to a salary structure.</p>
        </div>

        <div className="prose">
          <h2>Pay Types</h2>
        </div>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr><th>Pay Type</th><th>Who It's For</th><th>How It's Calculated</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Salaried</strong></td><td>Permanent & fixed-term staff</td><td>Basic + Housing + Transport + Other allowances</td></tr>
              <tr><td><strong>Basic + Commission</strong></td><td>Sales staff</td><td>Fixed base + % of gross/net sales or gross profit</td></tr>
              <tr><td><strong>Commission Only</strong></td><td>Pure sales agents</td><td>Configurable % of sales closed in the period</td></tr>
              <tr><td><strong>Daily Rate</strong></td><td>Casuals & offloaders</td><td>Daily rate × number of shifts worked</td></tr>
              <tr><td><strong>Piece Rate</strong></td><td>Delivery, packing, production staff</td><td>Rate per unit/trip/delivery × units completed</td></tr>
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Statutory Deductions (Kenya 2025)</h2>
          <p>Every payroll run automatically calculates all Kenya statutory deductions using the latest rates and brackets:</p>
          <ul>
            <li><strong>PAYE:</strong> 2025 KRA tax brackets, with housing allowance exemption and personal relief</li>
            <li><strong>NSSF:</strong> Tier I and Tier II contributions</li>
            <li><strong>SHIF:</strong> Social Health Insurance Fund contribution</li>
            <li><strong>Housing Levy:</strong> 1.5% of gross pay</li>
          </ul>
          <h2>Staff Debts & Payroll Deductions</h2>
          <p>Any debt raised during the pay period (cash shortfall, missing empties, salary advance) is automatically deducted when payroll runs.</p>
        </div>

        <div className="callout success">
          <div className="callout-title">✓ Casuals are processed daily</div>
          <div className="callout-body">Casual workers (offloaders, day labourers) are processed on a Daily payroll type. Their shifts are counted automatically and daily wages calculated without any manual entry.</div>
        </div>

        <div className="page-nav">
          <a href="/empties" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Returnables & Empties</span>
          </a>
          <a href="/finance" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Finance & Accounting</span>
          </a>
        </div>
      </div>
    </>
  );
}
