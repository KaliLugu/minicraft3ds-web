import Markdown from 'markdown-to-jsx'
import { useState, useEffect } from 'react'
import navbar from '../layout/navbar'
import '../styles/app.scss'
import HeroSection from '../layout/heroSection'

const files = import.meta.glob("../../public/md/**/*.md", { query: "?raw", import: "default" });

function App() {
  const [contentmd, setContentmd] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarkdown = async () => {
      const path = `../../public/md/fr/index.md`;

      if (files[path]) {
        const content = await files[path]() as string;
        setContentmd(content);
      } else {
        setContentmd("404. Markdown file not found.");
      }

      setLoading(false);
    };

    loadMarkdown();
  }, []);

  if (loading) return <div>loading... happy pride month</div>;

  return (
    <>
      {navbar()}
      <section id="center">
        <div className="hero">
          <HeroSection title="Minicraft3ds"></HeroSection>
        </div>
        <div className="markdown-body">
        <Markdown>
          {contentmd}
        </Markdown>
      </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
