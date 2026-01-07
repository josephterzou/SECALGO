import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Protégez votre entreprise contre les cybermenaces</h1>
        <p className="subtitle">
          Secalgo accompagne les PME et ETI dans leur sécurisation numérique et leur mise en conformité
        </p>
      </div>
      
      <div className="content-section">
        <div className="highlight-box">
          <h2>Pourquoi Secalgo ?</h2>
          <p>
            Dans un monde où les cyberattaques se multiplient, la sécurité de votre système d'information n'est plus une option. Secalgo vous accompagne à chaque étape : de la prévention à la réponse incident, en passant par la mise en conformité réglementaire.
          </p>
          <p>
            <strong>Notre approche</strong> : Sécurisation proactive, accompagnement personnalisé et expertise 100% française.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card blue">
            <div className="feature-icon">🛡️</div>
            <h3>Protection complète</h3>
            <p>Sécurisation de votre infrastructure IT de bout en bout</p>
          </div>
          <div className="feature-card orange">
            <div className="feature-icon">✓</div>
            <h3>Conformité garantie</h3>
            <p>NIS2, RGPD, ISO 27001 - Respect des normes en vigueur</p>
          </div>
          <div className="feature-card teal">
            <div className="feature-icon">🇫🇷</div>
            <h3>100% Français</h3>
            <p>Équipe locale et hébergement sécurisé en France</p>
          </div>
        </div>

        <div className="stats-section">
          <h2>Notre expertise en chiffres</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Experts certifiés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support disponible</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Hébergement France</div>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h2>Prêt à sécuriser votre entreprise ?</h2>
          <p>Contactez-nous pour un audit de sécurité gratuit</p>
        </div>
      </div>
    </div>
  );
}
