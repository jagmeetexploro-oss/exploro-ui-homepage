export default function Header() {
  return (
    <header className="nav">
      <div className="nav__brand">
        <div className="nav__logo-mark">E</div>
        <span className="nav__logo-text">Exploro</span>
      </div>
      <nav className="nav__links">
        <a href="#smartest" className="nav__link">Why us?</a>
        <a href="#popular" className="nav__link">Destinations</a>
        <a href="#steps" className="nav__link">Smart Savings</a>
      </nav>
      <div className="nav__actions">
        <button className="btn btn--primary">Download</button>
      </div>
    </header>
  )
}
