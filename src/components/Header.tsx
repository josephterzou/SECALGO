import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="nav">
      <div className="logo">Secalgo</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/equipe">Notre équipe</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
