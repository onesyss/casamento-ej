import React, { useState, useEffect } from 'react'
import './Countdown.css'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isToday, setIsToday] = useState(false)

  useEffect(() => {
    const targetDate = new Date('2025-12-12T20:00:00')
    const targetDateTime = targetDate.getTime()
    const targetDateOnly = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())

    const calculateTimeLeft = () => {
      const now = new Date()
      const nowTime = now.getTime()
      const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      
      // Verifica se é o dia do casamento
      if (nowDateOnly.getTime() === targetDateOnly.getTime()) {
        setIsToday(true)
        return
      }

      const difference = targetDateTime - nowTime

      if (difference > 0) {
        setIsToday(false)
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setIsToday(true)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  if (isToday) {
    return (
      <div className="countdown countdown-today">
        <div className="countdown-message">
          <div className="message-icon">💍</div>
          <div className="message-text">É Hoje o Grande Dia!</div>
          <div className="message-subtitle">Que este seja o início de uma linda jornada juntos</div>
        </div>
      </div>
    )
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.days}</div>
        <div className="countdown-label">Dias</div>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="countdown-label">Horas</div>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="countdown-label">Minutos</div>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="countdown-label">Segundos</div>
      </div>
    </div>
  )
}

export default Countdown

