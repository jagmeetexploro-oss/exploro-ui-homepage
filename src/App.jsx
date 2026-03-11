import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Smartest from './components/Smartest'
import Steps from './components/Steps'
import Popular from './components/Popular'
import Benefits from './components/Benefits'
import Closing from './components/Closing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Smartest />
        <Steps />
        <Popular />
        <Benefits />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}
