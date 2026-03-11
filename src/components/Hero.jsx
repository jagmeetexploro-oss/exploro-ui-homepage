import { useState } from 'react'

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
          <span className="hero-badge">World's Fastest</span>
          <span className="hero-badge">Cheapest</span>
          <span className="hero-badge">Easiest Travel Planner</span>
        </div>
        <h1 className="hero__title">
          Why spend hours planning when<br />
          you could be <span className="hero__highlight">Exploro?</span>
        </h1>
        <p className="hero__subtitle">
          Exploro is the world's first agentic AI travel platform that turns ideas
          into complete itineraries in minutes with smarter bookings.
        </p>

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
            <span className="hero-search__arrow">→</span>
          </div>
        </form>

        <div className="hero__cards">
          <div className="hero-mini hero-mini--left">
            <div className="hero-mini__image hero-mini__image--left" />
          </div>
          <div className="hero-mini hero-mini--right">
            <div className="hero-mini__image hero-mini__image--right" />
          </div>
        </div>
      </div>
    </section>
  )
}
