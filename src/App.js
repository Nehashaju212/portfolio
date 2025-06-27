import "./App.css"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import ProcessSection from "./components/ProcessSection/ProcessSection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import ContactSection from "./components/ContactSection/ContactSection"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
