import Navbar from '../layout/navbar'
import '../styles/app.scss'
import HeroSection from '../layout/heroSection'
import { Footer } from '../layout/footer'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="center">
          <div className="hero">
            <HeroSection
              title="Minicraft3ds"
              image="/img/heroBg.jpg"
            />
          </div>

          <div className="centered-container">
            <h1>Minicraft3DS reprend l'essentiel du Minicraft original, mais ajoute</h1>
            <ul>
              <li>un vrai mode multijoueur local</li>
              <li>un inventaire/recipe plus riche</li>
              <li>des éléments 3DS spécifiques</li>
            </ul>

            <h2>Différence sur Old 3DS et New ?</h2>

            <h2>Mods ?</h2>

            <h2>Crédit et licence</h2>
          </div>
        </section>
      </main>

      <Footer
        projectName="Minicraft3ds"
        description="3DS Homebrew port of Notch's ludum dare game 'Minicraft'"
        license="MIT License"
        version="v2.0.0"
        lastRelease="5 Dec 2025"
      />
    </div>
  )
}

export default App
