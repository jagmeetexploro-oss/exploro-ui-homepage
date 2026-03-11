const BENEFITS = [
  { title: 'Priority Access', text: 'We are onboarding members in limited groups to ensure a high‑touch, premium experience for every journey.', position: 'benefits__node--top-left' },
  { title: 'Founder Member Status', text: 'Early waitlist members receive lifetime priority for new features and exclusive invite codes for friends and family.', position: 'benefits__node--top-right' },
  { title: 'Early Concierge Access', text: 'Gain immediate access to our human‑AI support team to help manage complex bookings before the general release.', position: 'benefits__node--bottom-left' },
  { title: 'Shape the Future', text: 'As an early member, your feedback directly influences the evolution of our smart travel engine.', position: 'benefits__node--bottom-right' },
]

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <h2 className="benefits__title">
        The <span className="accent-text">"Early Member"</span> benefits
      </h2>
      <div className="benefits__halo">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className={`benefits__node ${benefit.position}`}>
            <h3 className="benefits__node-title">{benefit.title}</h3>
            <p className="benefits__node-text">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
