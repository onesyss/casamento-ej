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
        letra: `Eu olhei a tristeza nos olhos e sorri
Mesmo quebrantado pela vida que escolhi
Da janela, eu vi cada estação fugir
Como as árvores, eu permaneço no mesmo lugar
No outono, no inverno, eu espero primavera chegar

Da estrada, eu quis retornar pra onde parti
Da distância, avistei alegria e a esperança
Das migalhas que desperdiçamos, faremos jantar
Eu voltaria atrás pra tentar me avisar

Que o caminho será escuro
Mas que Cristo é a luz do mundo
Deixe Ele te falar
Quem você é

Que a Palavra te desfaça
Que te afogue em Sua graça
Só a cruz esconderá
Quem você não é

Eu olhei a tristeza nos olhos e sorri`
      },
      {
        numero: '02',
        nome: 'Oceans',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=PfpEefKiG2I&list=RDPfpEefKiG2I&start_radio=1',
        letra: `You call me out upon the waters
The great unknown where feet may fail
And there I find You in the mystery
In oceans deep, my faith will stand

And I will call upon Your name
And keep my eyes above the waves
When oceans rise, my soul will rest in Your embrace
For I am Yours and You are mine

Your grace abounds in deepest waters
Your sovereign hand will be my guide
Where feet may fail and fear surrounds me
You've never failed and You won't start now

So I will call upon Your name
And keep my eyes above the waves
When oceans rise, my soul will rest in Your embrace
For I am Yours and You are mine, oh
And You are mine, oh

Spirit lead me where my trust is without borders
Let me walk upon the waters
Wherever You would call me
Take me deeper than my feet could ever wander
And my faith will be made stronger
In the presence of my Savior

I will call upon Your name
Keep my eyes above the waves
My soul will rest in Your embrace
I am Yours and You are mine`
      },
      {
        numero: '03',
        nome: 'Primavera',
        artista: 'Tamires',
        link: 'https://www.youtube.com/watch?v=AS9z2A48xBg&list=RDAS9z2A48xBg&start_radio=1',
        letra: `Mil motivos, mil razões
Tenho para te amar
Tantas vezes eu tentei demonstrar
A grandeza desse amor
Que arde no meu coração
Você é tudo que um dia eu sempre quis

Hoje já é primavera
Te tenho ao meu lado
Em todos os momentos
Sigo te amando
Sigo te querendo
Já não importa o que vão dizer
Porque te quero e sempre vou amar você

Procurei um amigo
Que pudesse então me compreender
Foi quando encontrei você
Para sempre vou agradecer a Deus
O melhor Ele me deu
Você é mais do que eu podia imaginar

Mesmo que a vida seja tão difícil
Em minha frente esteja impossível
Brilha a luz do teu olhar
Que aquece o meu coração`
      },
      {
        numero: '04',
        nome: 'Amor pra dizer',
        artista: 'Marlon',
        link: 'https://www.youtube.com/watch?v=HIb-xD8uzOo&list=RDHIbxD8uzOo&start_radio=1',
        letra: `Só quem viu alguém partir
Sem poder se despedir
Sabe o que é se arrepender
Por não conseguir dizer

Obrigado ou Adeus
Eu te amo ou Valeu
Simplesmente abraçar
Me perdoe o erro é meu

Só dá valor quem sabe o que é
Privação de um pai, de mãe, de um filho, de um amor
De uma amizade, de um irmão

Amor pra dizer, Amor pra sentir
Amor... Que quando sem palavras
Fala por si só
Amor pra viver, Amor pra abraçar
Amor .... Que não se contradiz
Quem vive para amar
Demonstra e nisso é feliz
Não cala a voz do amor mais diz
Mais diz

Only One who's loved and lost
Know how much it really costs
To not have known a tear or cried
For those who've said their last goodbyes
A simple thank you or hello
The smallest gesture you might show
Cause love declares and never hides
Behind the foolishness of pride
We take for granted
Life will give us
Time to say how we feel
A father, a mother, a friend
They all deserve to hear you say
That it's real

Amor pra dizer, Amor pra sentir
Amor... Que quando sem palavras
Fala por si só
Amor pra viver, Amor pra abraçar
Amor .... Que não se contradiz
Quem vive para amar
Demonstra e nisso é feliz
Não cala a voz do amor mais diz
Mais diz

Quem ama, perdoa
Suporta, espera
Quem ama, sempre quer bem
Se entrega, se alegra
O amor é, Verdade
E nunca inveja, ninguém
O amor crê e diz

Amor pra dizer, Amor pra sentir
Amor... Que quando sem palavras
Fala por si só
Amor pra viver, Amor pra abraçar
Amor .... Que não se contradiz
Quem vive para amar
Demonstra e nisso é feliz
Não cala a voz do amor mais diz
Mais diz`
      },
      {
        numero: '05',
        nome: 'Quando Deus criou você',
        artista: 'Marlon & Tamires',
        link: 'https://www.youtube.com/watch?v=5xT7HsyHTik&list=RD5xT7HsyHTik&start_radio=1',
        letra: `Eu sempre achei difícil entender
Como duas vidas podem se tornar apenas uma
Mas quando eu te encontrei, eu te amei
E um milagre aconteceu, e então eu entendi
Que Deus tem sempre um plano para nós
É preciso paciência e ouvir Sua voz

O que será que meu Deus pensava
Quando criou você?
Acho que Ele estava pensando em mim
Porque me deu mais do que sonhei
Deu muito mais do que eu podia imaginar

Prometo que ao seu lado vou estar
Nas horas mais difíceis, eu contigo vou chorar
E onde quer que a vida te levar
O meu coração vai junto, para sempre vou te amar
E Deus já tem um plano para nós
É preciso paciência e ouvir Sua voz

O que será que meu Deus pensava
Quando criou você?
Acho que Ele estava pensando em mim
Porque me deu mais do que sonhei
Deu muito mais do que eu podia imaginar

Nós dois agora somos um
E bate um só coração
Juntos sempre viveremos
Para sempre amaremos

E assim eu posso perceber
Não sou nada sem você
Você é inspiração (inspiração)
Move o meu coração

O que será que meu Deus pensava
Quando criou você?
Acho que Ele estava pensando em mim
Porque me deu mais do que sonhei

Será que Ele lembrou quantas vezes
De joelhos a Ele eu orei?
Me abençoou (Deus me abençoou)
Me deu você (meu amor, meu amor)
Deu muito mais do que eu podia imaginar`
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
        letra: `There's nothing worth more
That will ever come close
No thing can compare
You're our living hope
Your presence Lord

I've tasted and seen
Of the sweetest of love
Where my heart becomes free
And my shame is undone
Your presence Lord

Holy Spirit you are welcome here
Come flood this place and fill the atmosphere
Your glory God is what our hearts long for
To be overcome by Your presence Lord

Let us become more aware of Your presence
Let us experience the glory of Your goodness
Let us become more aware of Your presence
Let us experience the glory of Your goodness
Lord`
      },
      {
        numero: '02',
        nome: 'Goodness of God',
        artista: 'Cece Winans – Tamires',
        link: 'https://www.youtube.com/watch?v=9sE5kEnitqE&list=RD9sE5kEnitqE&start_radio=1',
        momento: 'Entrada dos pais',
        letra: `I love You, Lord, for Your mercy never fails me
All my days, I've been held in Your hand
From the moment that I wake up until I lay my head
Oh, I will sing of the goodness of God

'Cause all my life You have been faithful
And all my life You have been so, so good
With every breath that I am able
Oh, I will sing of the goodness of God

I love Your voice, You have led me through the fire
In darkest nights, You are close like no other
I've known You as a Father, I've known You as a Friend
And I have lived in the goodness of God

'Cause all my life You have been faithful
And all my life You have been so, so good
With every breath that I am able
Oh, I will sing of the goodness of God

Your goodness is running after, is running after me
Your goodness is running after, is running after me
With my life laid down, I surrendered now
I give You everything, oh, Lord
Your goodness is running after, is running after me

And all my life You have been faithful
And all my life You have been so, so good
With every breath that I am able
Oh, I'm gonna sing of the goodness of God
I'm gonna sing of the goodness of God`
      },
      {
        numero: '03',
        nome: 'Só o começo',
        artista: 'Tamires',
        link: 'https://www.youtube.com/watch?v=1MCvxwaAnlo&list=RD1MCvxwaAnlo&start_radio=1',
        momento: 'Padrinhos',
        letra: `Eu aprendi qual é o valor de um sonho alcançar
Eu entendi que, o caminho, pedras terá
Eu vi em campo aberto se erguer construção
E foi com muitas pedras e foi com muitas mãos

Eu vi o meu limite vir diante de mim
Eu enfrentei batalhas que eu não venci
Mas o troféu não é de quem não fracassou
Eu tive muitas quedas, mas não fiquei no chão

E ao olhar pra trás, tudo que passou
Venho agradecer quem comigo estava
Ergo minhas mãos pra reconhecer

E hoje eu sou quem eu sou
Pois Sua mão me acompanhava
Mas eu sei, não é o fim, é só o começo da jornada
Eu abro o meu coração pra minha nova história

Vejo vitórias se hoje eu olho pra trás
E à minha frente, eu sei
Existem muito mais
Eu sei que minha jornada aqui só começou
Ao longo dessa estrada, sozinho não estou

E ao olhar pra trás, tudo que passou
Venho agradecer quem comigo estava
Ergo minhas mãos pra reconhecer

E hoje eu sou quem eu sou
Pois Sua mão me acompanhava
Mas eu sei, não é o fim, é só o começo da jornada
Eu abro o meu coração pra minha nova história

E hoje eu sou quem eu sou
Pois Sua mão me acompanhava
Mas eu sei, não é o fim, é só o começo da jornada
Eu abro o meu coração pra minha nova história`
      },
      {
        numero: '04',
        nome: 'How Great Thou Art',
        artista: 'Marlon',
        link: 'https://www.youtube.com/watch?v=BWNdih5GK9A&list=RDBWNdih5GK9A&start_radio=1',
        momento: 'Bíblia',
        letra: `Oh, Lord, my God, when I in awesome wonder
Consider all the world Thy hands have made
I see the stars, I hear the rolling thunder
Thy power throughout the universe displayed

Then sings my soul, my Savior God to Thee
How great Thou art, how great Thou art
Then sings my soul, my Savior God to Thee
How great Thou art, how great Thou art

And when I think that God, His son not sparing
Sent Him to die I scarce can take it in
That on the cross my burden gladly bearing
He bled and died to take away my sin

Then sings my soul, my Savior God to Thee
How great Thou art, how great Thou art
Then sings my soul, my Savior God to Thee
How great Thou art, how great Thou art

When Christ shall come with shout of acclamation
And take me home what joy shall feel my heart
Then I shall bow in humble adoration and there proclaim
My God, how great Thou art

Then sings my soul, my Savior God to Thee
How great Thou art, how great Thou art
Then sings my soul, my Savior God to Thee
How great Thou art, how great Thou art
How great Thou art, how great Thou art
How great Thou art`
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
        link: 'https://www.youtube.com/watch?v=gF6w21T_2e8&list=RDgF6w21T_2e8&start_radio=1',
        momento: 'ALIANÇA (Beijo, mesma música da aliança)',
        letra: `My love
There's only you in my life
The only thing that's right
My first love
You're every breath that I take
You're every step I make

And I (I), I want to share
All my love with you
No one else will do
And your eyes (your eyes, your eyes)
They tell me how much you care
Oh, yes, you will always be
My endless love

Two hearts
Two hearts that beat as one
Our lives have just begun
Forever (oh-oh-oh-ooh)
I'll hold you close in my arms
I can't resist your charms

And love (oh, love)
I'll be a fool for you, I'm sure
You know I don't mind (oh, you know I don't mind)
'Cause you, you mean the world to me
Oh, I know (I know)
(I've found) I've found in you
My endless love

Oh-oh
Oh-oh, boom-boom
Boom-boom-boom, boom-boom-boom

Oh-oh-ooh, and love (oh, love)
I'll be that fool for you, I'm sure
You know I don't mind (oh, you know I don't mind)
And I don't mind
And, yes, you'll be the only one
'Cause no one can deny (no one can deny)
This love I have inside
And I'll give it all to you, my love (my love, my love)
My endless love`
      },
      {
        numero: '08',
        nome: 'A benção',
        artista: 'Tamires',
        link: 'https://www.youtube.com/watch?v=Iou-YZSQ0gM&list=RDIou-YZSQ0gM&start_radio=1',
        momento: 'Louvor de agradecimento no fim da cerimônia',
        letra: `Que o Senhor te abençoe
E faça brilhar Seu rosto em ti
Que conceda Sua graça
E te dê paz

Amém, amém, amém
Amém, amém, amém

Que o Senhor te abençoe
E faça brilhar Seu rosto em ti
Que conceda Sua graça
E te dê paz

Amém, amém, amém
Amém, amém, amém

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Sua presença te acompanhe
Por detrás e por diante
Do teu lado e em ti
É contigo, é por ti

E de dia, e de noite
Tua entrada e saída
Em teu riso, em teu choro
É contigo, é por ti

É contigo, é por ti
É contigo, é por ti
É contigo, é por ti
É contigo, é por ti

Amém, amém, amém
Amém, amém, amém

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Sua presença te acompanhe
Por detrás e por diante
Do teu lado e em ti
É contigo, é por ti

E de dia, e de noite
Tua entrada e saída
Em teu riso, em teu choro
É contigo, é por ti

É contigo, é por ti
É contigo, é por ti
É contigo, é por ti
É contigo, é por ti

Amém, amém, amém
Amém, amém, amém`
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
        link: 'https://www.youtube.com/watch?v=Ep78W53Iz08&list=RDEp78W53Iz08&start_radio=1',
        letra: `Não fale que o conhece se o esquece em cada esquina
Não fale que o encontra nas suas ondas de fé e não na palavra, não na palavra
Que falta hoje é fé na palavra, que muda quem eu sou não deixa nada
Amando o que é de Deus deixando o mal que tanto amei

Pois se tenho a Cristo tenho a verdade, sim
No 'assim diz o Senhor' e não no 'eu acho que'

Não fale que o conhece se o esquece em cada esquina
Não fale que o encontra nas suas ondas de fé e não na palavra, não na palavra
Que mais há hoje é graça sem juízo, que traga amor e paz sem compromisso
Seguindo tradições de homens não de Cristo

Pois se tenho a Cristo tenho a verdade, sim
No 'assim diz o Senhor' e não no 'eu sinto que'

Não fale que o conhece se o esquece em cada esquina
Não fale que o encontra nas suas ondas de fé e não na palavra, não na palavra`
      },
      {
        numero: '02',
        nome: 'Donos dos meus Dias',
        artista: 'Tamires',
        link: 'https://www.youtube.com/watch?v=o0T3kEGTDWM&list=RDo0T3kEGTDWM&start_radio=1',
        letra: `És o dono dos meus dias
Sempre comigo, todo tempo
És o centro da minha vida
Que seja Teu o meu pensamento

És o dono dos meus dias
Sempre comigo, todo tempo
És o centro da minha vida
Que seja Teu o meu pensamento

E se eu me desviar
Fala comigo Senhor
Com todo o Teu amor
Não me importa a hora ou lugar
Que toda vida em mim seja pra Te adorar
Vejo, sinto, penso para o Teu louvor
Choro, canto, vivo para Ti, Senhor

És o dono dos meus dias
És o dono dos meus dias

Tudo que sou é Teu
Tudo que quero ser é Teu
O meu prazer esta em Ti
Que meu louvor alegre a Ti

Tudo que sou é Teu
Todo o meu tempo seja Teu
O meu prazer esta em Ti
Que meu louvor alegre a Ti

Para o Teu louvor
Choro, canto, vivo para Ti, Senhor
Vejo, sinto, penso para o Teu louvor
Choro, canto, vivo para Ti, Senhor

Choro, canto, vivo para Ti, Senhor

És o dono dos meus dias
És o dono dos meus dias
Dono dos meus dias`
      },
      {
        numero: '03',
        nome: 'Eu te agradeço',
        artista: 'Marlon',
        link: 'https://www.youtube.com/watch?v=eiJ-9wg5W9g&list=RDeiJ-9wg5W9g&start_radio=1',
        letra: `Hoje acordei com a intenção
De te falar tudo que eu vi
E percebi você fazendo a mim
Sem merecer me dando de melhor

A tempestade se passou
Quando eu ouvia só trovões
Brilhou o sol tão lindo e me aqueceu
Depois da chuva que me encharcou

Eu te agradeço
Só te agradeço

Eu te agradeço
Por toda graça que me deu
Todo amor que ofereceu
Sem eu merecer
Eu te agradeço
Pois sei que um dia me escolheu
E entregou tudo que era seu
E me fez viver`
      },
      {
        numero: '04',
        nome: 'O nosso general é cristo',
        artista: 'Marlon e Tamires',
        link: 'https://www.youtube.com/watch?v=AMycd3y3Vns&list=RDHyzOF2P-2wM&index=2',
        letra: `Pelo Senhor, marchamos sim
O Seu exército, poderoso é
E Sua glória será vista em toda terra

Vamos cantar o canto da vitória
Glória Deus, vencemos a batalha
Toda arma contra nós perecerá

O nosso general é Cristo
Seguimos os Seus passos
Nenhum inimigo nos resistirá

O nosso general é Cristo
Seguimos os Seus passos
Nenhum inimigo nos resistirá

Pelo Messias, marchamos sim
Em suas mãos, a chave da vitória
Que nos leva a possuir a Terra Prometida

Vamos cantar o canto da vitória
Glória Deus, vencemos a batalha
Toda arma contra nós perecerá

O nosso general é Cristo
Seguimos os seus passos
Nenhum inimigo nos resistirá

O nosso general é Cristo
Seguimos os seus passos
Nenhum inimigo nos resistirá

O nosso general é Cristo
Seguimos os seus passos
Nenhum inimigo nos resistirá

O nosso general é Cristo
Seguimos os seus passos
Nenhum inimigo nos resistirá

O nosso general é Cristo
Seguimos os seus passos
Nenhum inimigo nos resistirá

Nenhum inimigo nos resistirá
Nenhum inimigo nos resistirá`
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
        link: 'https://www.youtube.com/watch?v=Jq7oPNzI5mk&list=RDJq7oPNzI5mk&start_radio=1',
        letra: `Hey, chega mais, irmão
DJ PV, Ivair, Tevão
Seguindo o mestre Jesus
Eu creio sempre na palavra Dele, pode crer
Tô com Ele não importa o que acontecer
Só Ele me enche de amor e paz
Só Ele me satisfaz

Posso ouvir o som da liberdade vindo sobre nós
O som da vida do Espírito em mim
Posso ouvir o som de muitas correntes caindo ao chão
Pois antes morto, agora eu vivo só por Ti

Na minha liberdade, eu pulo e danço ao Senhor Deus
Na minha liberdade, eu pulo e danço ao Senhor

Posso ouvir o som da liberdade vindo sobre nós
O som da vida do Espírito em mim
Posso ouvir o som de muitas correntes caindo ao chão
Pois antes morto, agora eu vivo só por Ti

Na minha liberdade, eu pulo e danço ao Senhor Deus
Na minha liberdade, eu pulo e danço ao Senhor

Agora livre sou, Cristo me libertou
Agora eu posso cantar, aquela dor que eu tinha já passou
É uma nova história, Ele me deu vitória
Eu vou seguindo com fé
Eu sei, no fim vamos se ver na Glória

Não vou parar (não)
Eu vou gritar (vou)
Até o mundo (yeah, yeah)
Me escutar (uou)

Não vou parar (não)
Eu vou gritar (vou)
Até o mundo (yeah, yeah)
Me escutar (uou)
Vai (vai, vai)
Yeah, até o mundo me escutar

Na minha liberdade, eu pulo e danço ao Senhor Deus
Na minha liberdade, eu pulo e danço ao Senhor

Não vou parar (não)
Eu vou gritar (vou)
Até o mundo (yeah, yeah)
Me escutar (uou)

Não vou parar (não)
Eu vou gritar (vou)
Até o mundo (yeah, yeah)
Me escutar (uou)
Vai (vai, vai)
Yeah, até o mundo me escutar`
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
    setOpenLyrics(prev => {
      // Se a letra que está sendo clicada já está aberta, fecha ela
      if (prev[musicaId]) {
        return {}
      }
      // Caso contrário, fecha todas as outras e abre apenas esta
      return {
        [musicaId]: true
      }
    })
  }

  const getYouTubeId = (url) => {
    if (!url) return null
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    return match ? match[1] : null
  }

  const getInstagramEmbedUrl = (url) => {
    if (!url) return null
    // Extrai o ID do post/reel do Instagram
    const instagramRegex = /instagram\.com\/(?:reel|p)\/([A-Za-z0-9_-]+)/
    const match = url.match(instagramRegex)
    if (match) {
      return `https://www.instagram.com/p/${match[1]}/embed/`
    }
    return null
  }

  const identificarRefroes = (letra) => {
    if (!letra) return new Set()
    const linhas = letra.split('\n').map(l => l.trim()).filter(l => l.length > 0)
    const contagem = {}
    const refroes = new Set()
    
    // Conta quantas vezes cada linha aparece
    linhas.forEach(linha => {
      if (linha.length > 0) {
        contagem[linha] = (contagem[linha] || 0) + 1
      }
    })
    
    // Identifica linhas que aparecem mais de uma vez como refrões
    Object.keys(contagem).forEach(linha => {
      if (contagem[linha] > 1) {
        refroes.add(linha)
      }
    })
    
    return refroes
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
            const instagramEmbedUrl = isInstagram ? getInstagramEmbedUrl(musica.link) : null

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
                {isVideoOpen && isInstagram && instagramEmbedUrl && (
                  <div className="musica-video-wrapper">
                    <div className="musica-video instagram-video">
                      <iframe
                        src={instagramEmbedUrl}
                        title={musica.nome}
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen
                        scrolling="no"
                      ></iframe>
                    </div>
                    <div className="instagram-fallback">
                      <p>Se o vídeo não aparecer,</p>
                      <a 
                        href={musica.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="instagram-link-button"
                      >
                        Abrir no Instagram
                      </a>
                    </div>
                  </div>
                )}
                {isVideoOpen && isInstagram && !instagramEmbedUrl && (
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
                <div className="musica-buttons">
                  <button
                    onClick={() => toggleVideo(musicaId)}
                    className="musica-link"
                  >
                    <span>{isVideoOpen ? 'Fechar' : 'Ouvir'}</span>
                  </button>
                </div>
                {musica.letra && (
                  <div className="musica-letra-collapse">
                    <button
                      onClick={() => toggleLyrics(musicaId)}
                      className="letra-collapse-button"
                    >
                      <span className="letra-collapse-text">
                        {isLyricsOpen ? 'Ocultar Letra' : 'Ver Letra'}
                      </span>
                      <span className={`letra-collapse-icon ${isLyricsOpen ? 'open' : ''}`}>▼</span>
                    </button>
                    {isLyricsOpen && (() => {
                      const refroes = identificarRefroes(musica.letra)
                      return (
                        <div className="musica-letra">
                          <div className="letra-content">
                            {musica.letra.split('\n').map((linha, index) => {
                              const linhaTrim = linha.trim()
                              const isRefrao = linhaTrim.length > 0 && refroes.has(linhaTrim)
                              return (
                                <p key={index} className={`letra-linha ${isRefrao ? 'refrao' : ''}`}>
                                  {linha || '\u00A0'}
                                </p>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                )}
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

