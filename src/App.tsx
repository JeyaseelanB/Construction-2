import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Clients } from './components/Clients'
import { CookieBar } from './components/CookieBar'
import { CtaBanner } from './components/CtaBanner'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Quote } from './components/Quote'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <div className="relative overflow-x-clip">
      <Header />

      <main id="main">
        <Hero />
        <Features />
        <About />
        <Services>
          <CtaBanner />
        </Services>
        <Process />
        <Portfolio />
        <Quote />
        <Testimonials />
      </main>

      <Clients />
      <Footer />

      <BackToTop />
      <CookieBar />
    </div>
  )
}
