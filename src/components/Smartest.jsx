const SMART_CARDS = [
  {
    title: 'One Screen. Zero Friction',
    text: 'One beautiful interface. Zero tab chaos. Plan and edit your whole trip in one place.',
  },
  {
    title: 'Your Personal Co‑Pilot',
    text: "Our AI doesn't just talk. It acts—curating, pricing, and booking your entire trip in seconds.",
  },
  {
    title: 'Magic Prices',
    text: 'Our proprietary engine tracks OTA deals, bank offers, and loyalty points to unlock unbeatable prices.',
  },
  {
    title: '24/7 Concierge',
    text: 'One partner for your whole trip. We handle the vendors, you just enjoy the vibes.',
  },
]

export default function Smartest() {
  return (
    <section className="smartest" id="smartest">
      <h2 className="smartest__title">
        The <span className="accent-text">Smartest Way</span> to Travel
      </h2>
      <p className="smartest__subtitle">
        We've built the engine. You just pick the destination.
      </p>
      <div className="smartest__grid">
        {SMART_CARDS.map((card) => (
          <article key={card.title} className="smart-card">
            <h3 className="smart-card__title">{card.title}</h3>
            <p className="smart-card__text">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
