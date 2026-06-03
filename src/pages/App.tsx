import React from 'react'
import navbar from '../layout/navbar'

import '../styles/app.scss'

function App() {

  return (
    <>
      {navbar()}
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>Scroll down</h1>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
