import closingMain from '../assets/closing-main.png'
import closingChipOne from '../assets/closing-chip-1.png'
import closingChipTwo from '../assets/closing-chip-2.png'
import mobileIcon from '../assets/icon-mobile.svg'

export default function Closing() {
  return (
    <section className="closing" id="about">
      <div className="closing__inner">
        <h2 className="closing__title">
          Curated experiences with precision and reliability.<br />
          <span className="accent-text">Effortless planning for the modern traveller.</span>
        </h2>
        <button className="btn btn--download closing__cta">
          <span>Download</span>
          <img src={mobileIcon} alt="Mobile" className="btn__icon" />
        </button>

        <div className="closing__gallery">
          <div className="closing__frame">
            <img src={closingMain} alt="Exploro trip screen one" className="closing__shot" />
          </div>
          <div className="closing__frame closing__frame--center">
            <img src={closingChipOne} alt="Exploro trip screen two" className="closing__shot closing__shot--center" />
          </div>
          <div className="closing__frame">
            <img src={closingChipTwo} alt="Exploro trip screen three" className="closing__shot" />
          </div>
        </div>
      </div>
    </section>
  )
}
