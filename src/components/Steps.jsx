import stepsPhone from '../assets/steps-phone.png'

export default function Steps() {
  return (
    <section className="steps" id="steps">
      <h2 className="steps__title">
        From idea to itinerary in <span className="accent-text">three<br />easy steps.</span>
      </h2>
      <div className="steps__layout">
        <div className="steps__phone">
          <img src={stepsPhone} alt="Exploro app chat screen" className="steps__phone-image" />
        </div>
        <div className="steps__copy">
          <p className="steps__pill">1. Talk to Exploro</p>
          <p className="steps__text">
            Chat with Exploro about your destination and budget. Our proprietary travel intelligence
            curates a bespoke journey specifically for you. No generic templates just a perfect trip
            tailored to your style.
          </p>
        </div>
      </div>
    </section>
  )
}
