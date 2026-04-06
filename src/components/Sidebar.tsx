import { Link } from 'react-router-dom';

interface SidebarProps {
  currentPath: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ currentPath, isOpen, onClose }: SidebarProps) {
  const is = (path: string) => currentPath === path ? 'active' : '';

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Overview</div>
        <ul className="sidebar-nav">
          <li><Link to="/" className={is('/')} onClick={onClose}>What is DistriHub?</Link></li>
          <li><Link to="/platform" className={is('/platform')} onClick={onClose}>Platform & Compliance</Link></li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Core Modules</div>
        <ul className="sidebar-nav">
          <li><Link to="/inventory" className={is('/inventory')} onClick={onClose}>Inventory & Stock</Link></li>
          <li><Link to="/production" className={is('/production')} onClick={onClose}>Production</Link></li>
          <li><Link to="/sales" className={is('/sales')} onClick={onClose}>Sales & POS</Link></li>
          <li><Link to="/empties" className={is('/empties')} onClick={onClose}>Returnables & Empties</Link></li>
          <li><Link to="/hr" className={is('/hr')} onClick={onClose}>HR & Payroll</Link></li>
          <li><Link to="/finance" className={is('/finance')} onClick={onClose}>Finance & Accounting</Link></li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">By Industry</div>
        <ul className="sidebar-nav">
          <li><Link to="/industries" className={is('/industries')} onClick={onClose}>All Industries</Link></li>
          <li><Link to="/bev" className={is('/bev')} onClick={onClose}>Bars & Beverage</Link></li>
        </ul>
      </div>

    </aside>
  );
}
