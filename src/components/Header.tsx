import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Secalgo
          <span className="logo-dot"></span>
        </Link>

       

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Accueil
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/equipe" 
            className={`nav-link ${isActive('/equipe') ? 'active' : ''}`}
          >
            Notre équipe
          </Link>
        </nav>
      </div>
    </header>
  );
}
