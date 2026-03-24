import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const location = useLocation();

  const handleClick = () => {
    console.log('🍔 Hamburger clicked!');
    console.log('Current menuOpen state before toggle:', menuOpen);
    setMenuOpen(!menuOpen);
    console.log('New menuOpen state after toggle:', !menuOpen);
  };

  return (
    <nav className="topnav">
      <Link to="/" className="topnav-brand">
        <div className="topnav-logo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="topnav-name">Distri<span>Hub</span></span>
      </Link>

      <ul className="topnav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Overview</Link></li>
        <li><Link to="/platform" className={location.pathname === '/platform' ? 'active' : ''}>Platform</Link></li>
        <li><Link to="/inventory" className={location.pathname === '/inventory' ? 'active' : ''}>Inventory</Link></li>
        <li><Link to="/sales" className={location.pathname === '/sales' ? 'active' : ''}>Sales & POS</Link></li>
        <li><Link to="/empties" className={location.pathname === '/empties' ? 'active' : ''}>Returnables</Link></li>
        <li><Link to="/hr" className={location.pathname === '/hr' ? 'active' : ''}>HR & Payroll</Link></li>
        <li><Link to="/finance" className={location.pathname === '/finance' ? 'active' : ''}>Finance</Link></li>
        <li><Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>Industries</Link></li>
      </ul>

      <button
        className="menu-toggle"
        onClick={handleClick}
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
