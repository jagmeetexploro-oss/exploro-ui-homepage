import interlakenImage from '../assets/dest-interlaken.png'
import kyotoImage from '../assets/dest-kyoto.png'
import uluwatuImage from '../assets/dest-uluwatu.png'
import londonImage from '../assets/dest-london.png'
import flagSwitzerland from '../assets/flag-switzerland-413f1e.png'
import flagJapan from '../assets/flag-japan.png'
import flagIndonesia from '../assets/flag-indonesia.png'
import flagUk from '../assets/flag-uk.png'

const DESTINATIONS = [
  { title: 'Interlaken, Switzerland', meta: 'Swiss Serenity', flag: flagSwitzerland, flagAlt: 'Switzerland flag', image: interlakenImage, objectPosition: 'center top' },
  { title: 'Kyoto, Japan', meta: 'Timeless Tradition', flag: flagJapan, flagAlt: 'Japan flag', image: kyotoImage, objectPosition: 'center center' },
  { title: 'Uluwatu, Bali', meta: 'Island Sanctuary', flag: flagIndonesia, flagAlt: 'Indonesia flag', image: uluwatuImage, objectPosition: 'center center' },
  { title: 'South Kensington, UK', meta: 'Heart of London', flag: flagUk, flagAlt: 'United Kingdom flag', image: londonImage, objectPosition: 'center bottom' },
]

export default function Popular() {
  return (
    <section className="popular" id="popular">
      <div className="popular__inner">
        <h2 className="popular__title">Popular <span className="popular__title-accent">Destinations</span></h2>
        <p className="popular__subtitle">Curated journeys for the world‑class explorer.</p>
        <div className="popular__grid">
          {DESTINATIONS.map((dest) => (
            <article key={dest.title} className="popular-card">
              <img src={dest.image} alt={dest.title} className="popular-card__image" style={{ objectPosition: dest.objectPosition }} />
              <div className="popular-card__body">
                <img src={dest.flag} alt={dest.flagAlt} className="popular-card__flag" />
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
