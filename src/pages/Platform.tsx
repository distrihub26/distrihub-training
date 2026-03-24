import { Link } from 'react-router-dom';

export default function Platform() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Core Platform</div>
        <h1 className="hero-title">The foundation everything runs on</h1>
        <p className="hero-desc">
          DistriHub's platform layer covers businesses, branches, users, roles, compliance, audit trails, and eTIMS. Every action is tracked, authorised, and legally compliant.
        </p>
      </div>

      <div className="section">
        {/* This is the exact overview banner from the original HTML */}
        <div className="overview-banner">
          <h2>Multi-branch. Multi-user. One system.</h2>
          <p>Each business on DistriHub can operate multiple branches with their own staff, inventory, and reporting, all consolidated under one account. Roles and permissions control exactly who can see and do what, down to the individual staff member.</p>
        </div>

        <div className="prose">
          <h2>Business &amp; Branch Structure</h2>
          <p>Every DistriHub account is structured around a <strong>Business</strong> (the legal entity) with one or more <strong>Branches</strong> (physical locations or operational units). Each branch has its own stock, shifts, and reporting.</p>

          <h3>Business Profiles</h3>
          <p>A business profile captures everything DistriHub needs to operate compliantly: legal form (sole proprietorship, private limited company, partnership, etc.), industry classification, KRA PIN, eTIMS status, M-Pesa Paybill/Till numbers, bank details, and statutory compliance records.</p>

          <h3>Branches</h3>
          <p>Each branch gets a unique <strong>branch code</strong> (e.g. <code>NRB001</code>), its own stock layers, shift management, staff assignments, and reporting. Branches can be of different types: Retail, Wholesale, Distributor, Pharmacy, Petrol Station, and more.</p>
        </div>

        <hr className="divider" />

        <div className="prose">
          <h2>Users, Roles &amp; Permissions</h2>
          <p>DistriHub uses a granular role-based access control system. Every action in the system requires a specific permission, and permissions are grouped into roles assigned to staff.</p>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Role Type</th>
                <th>Description</th>
                <th>Can Work Without Branch?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Owner</strong></td>
                <td>Full access to everything. System-managed. One per business.</td>
                <td><span className="badge badge-green">Yes</span></td>
              </tr>
              <tr>
                <td><strong>Branch Manager</strong></td>
                <td>Manages operations, approves movements, closes shifts.</td>
                <td><span className="badge badge-gray">No</span></td>
              </tr>
              <tr>
                <td><strong>Cashier</strong></td>
                <td>Operates POS, processes sales and payments.</td>
                <td><span className="badge badge-gray">No</span></td>
              </tr>
              <tr>
                <td><strong>Sales Rep</strong></td>
                <td>Opens route shifts, manages field loads, sells in the field.</td>
                <td><span className="badge badge-gray">No</span></td>
              </tr>
              <tr>
                <td><strong>Warehouse Staff</strong></td>
                <td>Approves stock movements, GRNs, and transfers.</td>
                <td><span className="badge badge-gray">No</span></td>
              </tr>
              <tr>
                <td><strong>Custom Role</strong></td>
                <td>Any combination of permissions, created per business needs.</td>
                <td>Configurable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout">
          <div className="callout-title">🔒 Extra &amp; Stripped Permissions</div>
          <div className="callout-body">
            Beyond role permissions, individual staff members can be granted <strong>extra permissions</strong> (above their role) or have specific permissions <strong>stripped</strong>, without changing their role.
          </div>
        </div>

        <hr className="divider" />

        <div className="prose">
          <h2>KRA eTIMS Integration</h2>
          <p>DistriHub is fully integrated with KRA's Electronic Tax Invoice Management System (eTIMS). Every completed sale generates a tax invoice that is submitted to KRA automatically, in real time.</p>
          <h3>How It Works</h3>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Business eTIMS Registration</div>
              <div className="step-desc">Your KRA PIN is registered at the business level. DistriHub supports both OSCU and VSCU integration types.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Branch BHF Setup</div>
              <div className="step-desc">Each branch is registered as a Branch Head File (BHF) with its own 2-digit BHF ID, CMC key, and device serials.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Product Registration</div>
              <div className="step-desc">Every sellable item is assigned an eTIMS item code, classification code, tax type, and unit codes.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-line"></div>
            <div className="step-content">
              <div className="step-title">Automatic Invoice Submission</div>
              <div className="step-desc">Every completed sale automatically generates and submits a KRA-compliant tax invoice.</div>
            </div>
          </div>
        </div>

        <div className="callout success">
          <div className="callout-title">✓ Tamper-proof by design</div>
          <div className="callout-body">Audit log entries are signed with Ed25519 cryptographic keys and chained using SHA-256 + BLAKE3 hashing. Once recorded, a log entry cannot be modified or deleted.</div>
        </div>

        <div className="page-nav">
          <Link to="/" className="page-nav-item">
            <span className="page-nav-label">← Previous</span>
            <span className="page-nav-title">Overview</span>
          </Link>
          <Link to="/inventory" className="page-nav-item next">
            <span className="page-nav-label">Next →</span>
            <span className="page-nav-title">Inventory &amp; Stock</span>
          </Link>
        </div>
      </div>
    </>
  );
}
