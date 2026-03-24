import { Link } from 'react-router-dom';

interface SidebarProps {
  currentPath: string;
  isOpen: boolean;           // ← New prop
  onClose: () => void;       // ← New prop
}

export default function Sidebar({ currentPath, isOpen, onClose }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-section">
        <div className="sidebar-section-title">Getting Started</div>
        <ul className="sidebar-nav">
          <li>
            <Link 
              to="/" 
              className={currentPath === '/' ? 'active' : ''} 
              onClick={onClose}
            >
              What is DistriHub?
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClose}>Who Is It For?</Link>
          </li>
          <li>
            <Link to="/" onClick={onClose}>Why DistriHub?</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Core Modules</div>
        <ul className="sidebar-nav">
          <li>
            <Link 
              to="/platform" 
              className={currentPath === '/platform' ? 'active' : ''} 
              onClick={onClose}
            >
              Platform & Compliance
            </Link>
          </li>
          <li>
            <Link 
              to="/inventory" 
              className={currentPath === '/inventory' ? 'active' : ''} 
              onClick={onClose}
            >
              Inventory & Stock
            </Link>
          </li>
          <li>
            <Link 
              to="/sales" 
              className={currentPath === '/sales' ? 'active' : ''} 
              onClick={onClose}
            >
              Sales & POS
            </Link>
          </li>
          <li>
            <Link 
              to="/empties" 
              className={currentPath === '/empties' ? 'active' : ''} 
              onClick={onClose}
            >
              Returnables & Empties
            </Link>
          </li>
          <li>
            <Link 
              to="/hr" 
              className={currentPath === '/hr' ? 'active' : ''} 
              onClick={onClose}
            >
              HR & Payroll
            </Link>
          </li>
          <li>
            <Link 
              to="/finance" 
              className={currentPath === '/finance' ? 'active' : ''} 
              onClick={onClose}
            >
              Finance & Accounting
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">By Industry</div>
        <ul className="sidebar-nav">
          <li>
            <Link 
              to="/industries" 
              className={currentPath === '/industries' ? 'active' : ''} 
              onClick={onClose}
            >
              All Industries
            </Link>
          </li>
          <li>
            <Link 
              to="/bev" 
              className={currentPath === '/bev' ? 'active' : ''} 
              onClick={onClose}
            >
              Beverage Distributors
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
