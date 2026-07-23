
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Ferdous.Dev</div>
        <p className="footer-copyright">
          &copy; {currentYear} Md.Ferdous Ahmed. All rights reserved. Designed and developed with passion.
        </p>
      </div>
    </footer>
  );
}
