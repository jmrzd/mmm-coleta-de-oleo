import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import OilTypes from './components/OilTypes.jsx'
import Process from './components/Process.jsx'
import Impact from './components/Impact.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OilTypes />
        <Process />
        <Impact />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
