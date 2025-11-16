import React from 'react'
import './VideoModal.css'

function VideoModal({ isOpen, videoUrl, onClose }) {
  if (!isOpen || !videoUrl) return null

  // Extrair o ID do vídeo do YouTube
  const getYouTubeId = (url) => {
    if (!url) return null
    
    // Para URLs do YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    if (match) return match[1]
    
    // Para URLs do Instagram (não podemos embedar, então retornamos null)
    if (url.includes('instagram.com')) return null
    
    return null
  }

  const videoId = getYouTubeId(videoUrl)
  const isInstagram = videoUrl.includes('instagram.com')

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          ×
        </button>
        {videoId ? (
          <div className="video-modal-player">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : isInstagram ? (
          <div className="video-modal-instagram">
            <p>Este vídeo está no Instagram</p>
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              Abrir no Instagram
            </a>
          </div>
        ) : (
          <div className="video-modal-error">
            <p>Link não suportado</p>
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              Abrir em nova aba
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoModal

