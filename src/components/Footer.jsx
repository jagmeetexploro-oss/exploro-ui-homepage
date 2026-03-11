export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="nav__logo-mark">E</div>
          <span className="nav__logo-text">Exploro</span>
        </div>
        <p className="footer__text">
          Exploro designs intentional journeys for curious travelers, blending comfort,
          authenticity, and a deep respect for local communities.
        </p>
        <button className="btn btn--primary footer__cta">
          Start planning your trip
        </button>
      </div>

      <div className="footer__bottom">
        <p className="footer__note">Copyright © 2026 Exploro. All Rights Reserved.</p>
        <div className="footer__links">
          <a href="#" className="footer__link">Privacy Policy</a>
          <a href="#" className="footer__link">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
