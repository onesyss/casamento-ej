import React, { useState, useEffect } from 'react'
import './ImageCarousel.css'

const IMAGES = [
  '/images/je-1.jpg',
  '/images/je-2.jpg',
  '/images/je-3.jpg',
  '/images/je-4.jpg',
  '/images/je-5.jpg'
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % IMAGES.length
      })
    }, 4000) // Muda a imagem a cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="image-carousel">
      {IMAGES.map((image, index) => (
        <div
          key={`slide-${index}`}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${image})`,
            zIndex: index === currentIndex ? 1 : 0
          }}
        />
      ))}
    </div>
  )
}

export default ImageCarousel

