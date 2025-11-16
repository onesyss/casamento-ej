import React, { useState } from 'react'
import './Repertorio.css'

const repertorio = {
  salaDeEspera: {
    titulo: 'SALA DE ESPERA',
    musicas: [
      {
        numero: '01',
        nome: '17 de Janeiro',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=OSgTvCS4EUQ&list=RDOSgTvCS4EUQ&start_radio=1',
        letra: null // Adicione a letra correta verificando no vídeo do YouTube
      },
      {
        numero: '02',
        nome: 'Oceans',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=PfpEefKiG2I&list=RDPfpEefKiG2I&start_radio=1',
        letra: null // Adicione a letra correta verificando no vídeo do YouTube
      },
      {
        numero: '03',
        nome: 'Primavera',
        artista: 'Tamires',
        link: 'https://www.youtube.com/watch?v=AS9z2A48xBg&list=RDAS9z2A48xBg&start_radio=1'
      },
      {
        numero: '04',
        nome: 'Amor pra dizer',
        artista: 'Marlon',
        link: 'https://www.youtube.com/watch?v=HIb-xD8uzOo&list=RDHIbxD8uzOo&start_radio=1'
      },
      {
        numero: '05',
        nome: 'Quando Deus criou você',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=5xT7HsyHTik&list=RD5xT7HsyHTik&start_radio=1'
      }
    ]
  },
  cerimonia: {
    titulo: 'CERIMÔNIA',
    musicas: [
      {
        numero: '01',
        nome: 'Holy Spirit',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=-qigjJIKm98&list=RD-qigjJIKm98&start_radio=1',
        momento: 'Entrada do Noivo',
        letra: null // Adicione a letra correta verificando no vídeo do YouTube
      },
      {
        numero: '02',
        nome: 'Goodness of God',
        artista: 'Cece Winans – Tamires',
        link: 'https://www.youtube.com/watch?v=9sE5kEnitqE&list=RD9sE5kEnitqE&start_radio=1',
        momento: 'Entrada dos pais',
        letra: null // Adicione a letra correta verificando no vídeo do YouTube
      },
      {
        numero: '03',
        nome: 'Só o começo',
        artista: 'Tamires & Jeff',
        link: 'https://www.youtube.com/watch?v=1MCvxwaAnlo&list=RD1MCvxwaAnlo&start_radio=1',
        momento: 'Padrinhos'
      },
      {
        numero: '04',
        nome: 'How Great Thou Art',
        artista: 'Marlon',
        link: 'https://www.youtube.com/watch?v=BWNdih5GK9A&list=RDBWNdih5GK9A&start_radio=1',
        momento: 'Bíblia'
      },
      {
        numero: '05',
        nome: 'Marcha Nupcial + Tu és',
        artista: 'Instrumental',
        link: 'https://www.instagram.com/reel/DAzZaSMxz8Z/?igsh=MWZucmZlY21vcWpjdg%3D%3D',
        momento: 'Noiva'
      },
      {
        numero: '06',
        nome: 'Bela e a fera',
        artista: 'Instrumental',
        link: 'https://www.youtube.com/watch?v=jjeypEymBnw&list=RDjjeypEymBnw&start_radio=1',
        momento: 'Daminhas'
      },
      {
        numero: '07',
        nome: 'Endless Love',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=nScV1qu-MZQ&list=RDnScV1qu-MZQ&start_radio=1',
        momento: 'ALIANÇA (Beijo, mesma música da aliança)'
      },
      {
        numero: '08',
        nome: 'Abenção',
        artista: 'Tamires',
        link: 'https://www.youtube.com/watch?v=Iou-YZSQ0gM&list=RDIou-YZSQ0gM&start_radio=1',
        momento: 'Louvor de agradecimento no fim da cerimônia'
      }
    ]
  },
  assinaturas: {
    titulo: 'ASSINATURAS / FOTOS',
    musicas: [
      {
        numero: '01',
        nome: 'Não fale',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=Ep78W53Iz08&list=RDEp78W53Iz08&start_radio=1'
      },
      {
        numero: '02',
        nome: 'O amor que nos faz um',
        artista: 'Marlon',
        link: 'https://www.youtube.com/watch?v=REzhcOe9rnY&list=RDREzhcOe9rnY&start_radio=1'
      },
      {
        numero: '03',
        nome: 'Eu te agradeço',
        artista: 'Jeff',
        link: 'https://www.youtube.com/watch?v=eiJ-9wg5W9g&list=RDeiJ-9wg5W9g&start_radio=1'
      },
      {
        numero: '04',
        nome: 'O nosso general é cristo',
        artista: 'Marlon, Tamires e Jeff',
        link: 'https://www.youtube.com/watch?v=dS35Xhf2UeI&list=RDdS35Xhf2UeI&start_radio=1'
      }
    ]
  },
  saida: {
    titulo: 'SAÍDA MÚSICA',
    musicas: [
      {
        numero: '01',
        nome: 'Som da Liberdade',
        artista: '',
        link: 'https://www.youtube.com/watch?v=Jq7oPNzI5mk&list=RDJq7oPNzI5mk&start_radio=1'
      }
    ]
  }
}

function Repertorio() {
  const [openVideos, setOpenVideos] = useState({})
  const [openLyrics, setOpenLyrics] = useState({})

  const toggleVideo = (musicaId) => {
    setOpenVideos(prev => ({
      ...prev,
      [musicaId]: !prev[musicaId]
    }))
  }

  const toggleLyrics = (musicaId) => {
    setOpenLyrics(prev => ({
      ...prev,
      [musicaId]: !prev[musicaId]
    }))
  }

  const getYouTubeId = (url) => {
    if (!url) return null
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    return match ? match[1] : null
  }

  const renderSecao = (secao) => {
    return (
      <div key={secao.titulo} className="secao">
        <h2 className="secao-titulo">{secao.titulo}</h2>
        <div className="musicas-grid">
          {secao.musicas.map((musica) => {
            const musicaId = `${secao.titulo}-${musica.numero}`
            const isVideoOpen = openVideos[musicaId]
            const isLyricsOpen = openLyrics[musicaId]
            const videoId = getYouTubeId(musica.link)
            const isInstagram = musica.link.includes('instagram.com')

            return (
              <div key={musica.numero} className="musica-card">
                <div className="musica-header">
                  <span className="musica-numero">{musica.numero}</span>
                  <h3 className="musica-nome">{musica.nome}</h3>
                </div>
                {musica.artista && (
                  <p className="musica-artista">{musica.artista}</p>
                )}
                {musica.momento && (
                  <div className="musica-momento">
                    <span className="momento-texto">{musica.momento}</span>
                  </div>
                )}
                {isVideoOpen && videoId && (
                  <div className="musica-video-wrapper">
                    <div className="musica-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={musica.nome}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                {isVideoOpen && isInstagram && (
                  <div className="musica-video-instagram">
                    <p>Este vídeo está no Instagram</p>
                    <a 
                      href={musica.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="instagram-link-button"
                    >
                      Abrir no Instagram
                    </a>
                  </div>
                )}
                {isLyricsOpen && musica.letra && (
                  <div className="musica-letra">
                    <div className="letra-content">
                      {musica.letra.split('\n').map((linha, index) => (
                        <p key={index} className="letra-linha">
                          {linha || '\u00A0'}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                <div className="musica-buttons">
                  <button
                    onClick={() => toggleVideo(musicaId)}
                    className="musica-link"
                  >
                    <span>{isVideoOpen ? 'Fechar' : 'Ouvir'}</span>
                  </button>
                  {musica.letra && (
                    <button
                      onClick={() => toggleLyrics(musicaId)}
                      className="musica-link letra-button"
                    >
                      <span>{isLyricsOpen ? 'Ocultar Letra' : 'Ver Letra'}</span>
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="repertorio">
      {renderSecao(repertorio.salaDeEspera)}
      {renderSecao(repertorio.cerimonia)}
      {renderSecao(repertorio.assinaturas)}
      {renderSecao(repertorio.saida)}
    </div>
  )
}

export default Repertorio

