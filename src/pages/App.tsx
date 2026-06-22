import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Navbar from '../layout/navbar'
import { Modal } from '../layout/modal'
import '../styles/app.scss'
import HeroSection from '../layout/heroSection'
import { Footer } from '../layout/footer'

function App() {
  const { t } = useTranslation();
  const [changelogOpen, setChangelogOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [modsOpen, setModsOpen] = useState(false);

  return (
    <div className="app">
      <Navbar
        onChangelog={() => setChangelogOpen(true)}
        onRoadmap={() => setRoadmapOpen(true)}
        onMods={() => setModsOpen(true)}
      />
      {changelogOpen && (
        <Modal title={t('navbar.changelog')} onClose={() => setChangelogOpen(false)}>
          <p className="modal-empty">{t('modal.changelogEmpty')}</p>
        </Modal>
      )}
      {roadmapOpen && (
        <Modal title={t('navbar.roadmap')} onClose={() => setRoadmapOpen(false)}>
          <p className="modal-empty">{t('modal.empty')}</p>
        </Modal>
      )}
      {modsOpen && (
        <Modal title={t('navbar.mods')} onClose={() => setModsOpen(false)}>
          <p className="modal-empty">{t('modal.empty')}</p>
        </Modal>
      )}
      <main>
        <section id="center">
          <div className="hero">
            <HeroSection title={t('hero.title')} image="/img/heroBg.jpg" />
          </div>
          <div className="centered-container">
            <h1>{t('home.intro.title')}</h1>
            <ul>
              <li>{t('home.intro.multiplayer')}</li>
              <li>{t('home.intro.inventory')}</li>
              <li>{t('home.intro.features3ds')}</li>
            </ul>

            <h2>{t('home.differences.title')}</h2>
            <p>{t('home.differences.description')}</p>
            <ul>
              <li>
                <Trans i18nKey="home.differences.zlzr" components={{ strong: <strong /> }} />
              </li>
              <li>
                <Trans i18nKey="home.differences.cstick" components={{ strong: <strong /> }} />
              </li>
              <li>
                <Trans i18nKey="home.differences.speedup" components={{ strong: <strong /> }} />
              </li>
            </ul>

            <h2>{t('home.credits.title')}</h2>
            <p>
              <Trans i18nKey="home.credits.original" components={{ strong: <strong /> }} />
            </p>
            <p>
              <Trans
                i18nKey="home.credits.davidsm64"
                components={{
                  strong: <strong />,
                  david: <a href="https://github.com/DavidSM64/Minicraft3DS" />,
                  andre: <a href="https://github.com/andre111/Minicraft3DS" />,
                }}
              />
            </p>
            <p>{t('home.credits.fork')}</p>
            <p>{t('home.credits.disclaimer')}</p>
          </div>
        </section>
      </main>
      <Footer
        projectName="Minicraft3ds"
        description={t('footer.description')}
        license={t('footer.license')}
        version="v2.0.0"
        lastRelease="5 Dec 2025"
        onChangelog={() => setChangelogOpen(true)}
      />
    </div>
  )
}

export default App