# Instruções para Adicionar as Imagens do Casal

## 📁 Onde colocar as imagens

Crie a pasta `public/images/` na raiz do projeto e adicione as seguintes imagens:

### Imagens necessárias:

1. **`casal-header.jpg`** (ou `.png`)
   - Imagem do casal para o cabeçalho
   - Recomendado: foto do casal sorrindo, formato horizontal
   - Tamanho sugerido: 1200x600px ou maior
   - Será usada como fundo sutil no cabeçalho (opacidade baixa)

2. **`casal-bg.jpg`** (ou `.png`)
   - Imagem para fundo da página
   - Recomendado: uma das fotos do evento "Chá de Panela" com decoração
   - Tamanho sugerido: 1920x1080px ou maior
   - Será usada como marca d'água no fundo de toda a página

## 🎨 Como funciona

- **Cabeçalho**: A imagem `casal-header.jpg` aparece muito sutil (8% de opacidade) como fundo do cabeçalho, criando uma textura elegante
- **Fundo da página**: A imagem `casal-bg.jpg` aparece como fundo fixo de toda a página, com uma camada semi-transparente por cima para manter a legibilidade
- **Iniciais decorativas**: As letras "J & E" aparecem grandes e sutis acima do nome do casal, inspiradas nas decorações do evento

## 📝 Passos:

1. Crie a pasta: `public/images/`
2. Adicione as imagens com os nomes exatos:
   - `casal-header.jpg`
   - `casal-bg.jpg`
3. Se as imagens tiverem outros nomes, você pode:
   - Renomeá-las para os nomes sugeridos, OU
   - Atualizar os caminhos nos arquivos CSS:
     - `src/App.css` (linha 22): `url('/images/casal-header.jpg')`
     - `src/index.css` (linha 10): `url('/images/casal-bg.jpg')`

## ✨ Dica

Se você não tiver as imagens ainda, o site funcionará normalmente, apenas sem os efeitos visuais de fundo. As iniciais "J & E" sempre aparecerão como elemento decorativo.

