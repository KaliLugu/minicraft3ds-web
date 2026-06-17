import { useState } from 'react'
import Navbar from '../layout/navbar'
import { Modal } from '../layout/modal'
import '../styles/app.scss'
import HeroSection from '../layout/heroSection'
import { Footer } from '../layout/footer'

function App() {
  const [changelogOpen, setChangelogOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [modsOpen, setModsOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onChangelog={() => setChangelogOpen(true)} onRoadmap={() => setRoadmapOpen(true)} onMods={() => setModsOpen(true)} />
      {changelogOpen && (
        <Modal title="Changelog" onClose={() => setChangelogOpen(false)}>
          <p className="modal-empty">Aucun changelog disponible pour le moment.</p>
        </Modal>
      )}
      {roadmapOpen && (
        <Modal title="Futur du projet" onClose={() => setRoadmapOpen(false)}>
          <p className="modal-empty">Aucun contenu disponible pour le moment.</p>
        </Modal>
      )}
      {modsOpen && (
        <Modal title="Mods" onClose={() => setModsOpen(false)}>
          <p className="modal-empty">Aucun contenu disponible pour le moment.</p>
        </Modal>
      )}

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
            <p>
              L'expérience de jeu est identique sur les deux modèles — même contenu, mêmes items, mêmes ajouts.
              La New 3DS débloque simplement quelques fonctionnalités supplémentaires liées au matériel :
            </p>
            <ul>
              <li><strong>Boutons ZL et ZR</strong> — utilisables et rebindables (par défaut : ZR = attaquer, ZL = menu)</li>
              <li><strong>C-Stick</strong> — les 4 directions sont reconnues comme inputs</li>
              <li><strong>Option "N3DS Speedup" dans les settings</strong> — passe le CPU de 268 MHz à 804 MHz</li>
            </ul>

            {/* <h2>Mods ?</h2> */}

            <h2>Crédit et licence</h2>
            <p>
              Minicraft est un jeu original créé par <strong>Notch</strong> (Markus Persson) lors du Ludum Dare 22 en 2011.
            </p>
            <p>
              <strong><a href="https://github.com/DavidSM64/Minicraft3DS">DavidSM64</a></strong> a réécrit le jeu pour la 3DS en homebrew.
              Son travail a ensuite été forké par <strong><a href="https://github.com/andre111/Minicraft3DS">andre111</a></strong> qui y a apporté des améliorations, mais ce fork n'est aujourd'hui plus maintenu.
            </p>
            <p>
              Ce projet est un fork de celui d'andre111, repris pour être mis à jour et enrichi.
            </p>
            <p>
              Ce projet n'est pas officiel et n'est pas affilié à Notch. Minicraft reste la propriété intellectuelle de Notch, bien qu'aucune licence n'ait été attribuée au jeu original.
              Le code propre à ce fork — tout ce qui ne provient pas du jeu original — est entièrement libre : modification, fork et réutilisation sont les bienvenus.
            </p>
          </div>
        </section>
      </main>

      <Footer
        projectName="Minicraft3ds"
        description="3DS Homebrew port of Notch's ludum dare game 'Minicraft'"
        license="PolyForm Noncommercial"
        version="v2.0.0"
        lastRelease="5 Dec 2025"
        onChangelog={() => setChangelogOpen(true)}
      />
    </div>
  )
}

export default App
