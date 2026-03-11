export default function Steps() {
  return (
    <section className="steps" id="steps">
      <h2 className="steps__title">
        From idea to itinerary in <span className="accent-text">three easy steps.</span>
      </h2>
      <div className="steps__layout">
        <div className="steps__copy">
          <p className="steps__pill">1. Talk to Exploro</p>
          <p className="steps__text">
            Chat with Exploro about your destination and budget. Our proprietary travel intelligence
            curates a bespoke journey specifically for you. No generic templates, just a perfect
            trip tailored to your style.
          </p>
        </div>
        <div className="steps__phone">
          <div className="steps__phone-frame">
            <div className="steps__phone-screen" />
          </div>
        </div>
        <div className="steps__copy steps__copy--right">
          <p className="steps__pill">2–3. Review, refine, and book</p>
          <p className="steps__text">
            Explore your draft itinerary, tweak the details, then confirm everything in a single, smart flow.
          </p>
        </div>
      </div>
    </section>
  )
}
