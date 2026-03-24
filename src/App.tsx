import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Empties from './pages/Empties';
import Hr from './pages/Hr';
import Finance from './pages/Finance';
import Industries from './pages/Industries';
import Beverage from './pages/Beverage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Navbar 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      <div className="shell">
        <Sidebar
          currentPath={location.pathname}
          isOpen={menuOpen}
          onClose={closeMenu}
        />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/empties" element={<Empties />} />
            <Route path="/hr" element={<Hr />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/bev" element={<Beverage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
