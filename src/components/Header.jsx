import logo from '../assets/exploro-logo.svg'
import mobileIcon from '../assets/icon-mobile.svg'

export default function Header() {
  return (
    <header className="nav">
      <div className="nav__brand">
        <img src={logo} alt="Exploro" className="nav__logo" />
      </div>
      <nav className="nav__links">
        <a href="#smartest" className="nav__link">Why us?</a>
        <a href="#popular" className="nav__link">Destinations</a>
        <a href="#steps" className="nav__link">Smart Savings</a>
      </nav>
      <div className="nav__actions">
        <button className="btn btn--download">
          <span>Download</span>
          <img src={mobileIcon} alt="Mobile" className="btn__icon" />
        </button>
      </div>
    </header>
  )
}
