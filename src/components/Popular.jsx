const DESTINATIONS = [
  { title: 'Interlaken, Switzerland', meta: 'Swiss Serenity', imageClass: 'popular-card__image--bali' },
  { title: 'Kyoto, Japan', meta: 'Timeless Tradition', imageClass: 'popular-card__image--markets' },
  { title: 'Uluwatu, Bali', meta: 'Island Sanctuary', imageClass: 'popular-card__image--alps' },
  { title: 'South Kensington, London', meta: 'Heart of London', imageClass: 'popular-card__image--city' },
]

export default function Popular() {
  return (
    <section className="popular" id="popular">
      <div className="popular__inner">
        <h2 className="popular__title">Popular Destinations</h2>
        <p className="popular__subtitle">Curated journeys for the world‑class explorer.</p>
        <div className="popular__grid">
          {DESTINATIONS.map((dest) => (
            <article key={dest.title} className="popular-card">
              <div className={`popular-card__image ${dest.imageClass}`} />
              <div className="popular-card__body">
                <h3 className="popular-card__title">{dest.title}</h3>
                <p className="popular-card__meta">{dest.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
