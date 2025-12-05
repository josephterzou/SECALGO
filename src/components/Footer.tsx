export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "1rem",
      background: "#003049",
      color: "white"
    }}>
      © {new Date().getFullYear()} Secalgo — Sécurité & Conformité
    </footer>
  );
}
