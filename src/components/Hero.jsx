import { useState } from 'react'
import acuteIcon from '../assets/icon-acute.svg'
import focusIcon from '../assets/icon-focus.svg'
import backpackIcon from '../assets/icon-backpack.svg'
import arrowIcon from '../assets/icon-arrow.svg'
import heroCardLeft from '../assets/hero-card-left.png'
import heroCardRight from '../assets/hero-card-right.png'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email signup
  }

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__badges">
          <span className="hero-badge">
            <img src={acuteIcon} alt="" aria-hidden="true" className="hero-badge__icon" />
            <span>World's Fastest</span>
          </span>
          <span className="hero-badge">
            <img src={focusIcon} alt="" aria-hidden="true" className="hero-badge__icon" />
            <span>Cheapest</span>
          </span>
          <span className="hero-badge">
            <img src={backpackIcon} alt="" aria-hidden="true" className="hero-badge__icon" />
            <span>Easiest Travel Planner</span>
          </span>
        </div>
        <h1 className="hero__title">
          Why spend hours planning when<br />
          you could be <span className="hero__highlight">Exploro?</span>
        </h1>
        <p className="hero__subtitle">
          Exploro is the world's first agentic AI travel platform that turns ideas
          into complete itineraries in minutes with smarter bookings.
        </p>

        <div className="hero__search-row">
          <div className="hero-mini hero-mini--left">
            <img src={heroCardLeft} alt="Scenic travel" className="hero-mini__image" />
          </div>
          <form className="hero-search" onSubmit={handleSubmit} autoComplete="off">
            <button type="button" className="hero-search__pill">Email</button>
            <div className="hero-search__field hero-search__field--email">
              <input
                className="hero-search__input"
                type="email"
                placeholder="Write your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={arrowIcon} alt="Submit" className="hero-search__arrow" />
            </div>
          </form>
          <div className="hero-mini hero-mini--right">
            <img src={heroCardRight} alt="Travel highlights" className="hero-mini__image" />
          </div>
        </div>
      </div>
    </section>
  )
}
