import "./Team.css";

export default function Team() {
  return (
    <div className="team-container">
      <h1>Notre équipe</h1>
      
      <p className="team-intro">
        Un collectif 100% français d'experts en cybersécurité, formés aux dernières technologies et réglementations. Nous mettons notre expertise au service de la sécurité de votre entreprise.
      </p>

      <div className="team-grid">
        <div className="team-member blue">
          <div className="member-icon">🏗️</div>
          <h3>Elliott Perrignon</h3>
          <p className="role">Expert en architecture & analyse SI</p>
          <p className="description">
            Spécialiste de l'architecture des systèmes d'information, Elliott analyse et optimise votre infrastructure pour garantir sa sécurité et sa performance.
          </p>
        </div>

        <div className="team-member orange">
          <div className="member-icon">📋</div>
          <h3>Nicolas Priscal</h3>
          <p className="role">Gestion de projet</p>
          <p className="description">
            Pilote vos projets de cybersécurité de A à Z, en assurant le respect des délais, du budget et de vos objectifs de sécurité.
          </p>
        </div>

        <div className="team-member teal">
          <div className="member-icon">🎓</div>
          <h3>Joseph Terzibachian</h3>
          <p className="role">Responsable communication, sensibilisation et formation</p>
          <p className="description">
            Forme et sensibilise vos équipes aux bonnes pratiques de cybersécurité pour créer une véritable culture de la sécurité dans votre entreprise.
          </p>
        </div>
      </div>

      <div className="values-section">
        <h2>Nos valeurs</h2>
        <div className="values-grid">
          <div className="value-item">
            <span className="value-icon">🇫🇷</span>
            <h4>Proximité</h4>
            <p>Équipe locale et disponible</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🔒</span>
            <h4>Sécurité</h4>
            <p>Données hébergées en France (OVHcloud)</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🤝</span>
            <h4>Engagement</h4>
            <p>Accompagnement personnalisé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
