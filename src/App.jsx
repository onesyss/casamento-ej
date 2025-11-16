import React from 'react'
import './App.css'
import Repertorio from './components/Repertorio'
import ImageCarousel from './components/ImageCarousel'
import Countdown from './components/Countdown'

function App() {
  return (
    <div className="app">
      <ImageCarousel />
      <header className="header">
        <div className="header-background"></div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="couple-initials">J & E</div>
          <h1 className="couple-names">Ezidio Sandim & Jhenifer Quaresma</h1>
          <Countdown />
          <div className="wedding-info">
            <div className="info-item">
              <span className="info-label">Data</span>
              <span className="info-value">12 de Dezembro de 2025</span>
            </div>
            <div className="info-item">
              <span className="info-label">Horário</span>
              <span className="info-value">20:00</span>
            </div>
            <div className="info-item">
              <span className="info-label">Local</span>
              <span className="info-value">Igreja do Evangelho Quadrangular - Sede</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <Repertorio />
      </main>
    </div>
  )
}

export default App

