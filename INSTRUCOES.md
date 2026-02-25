# 🎂 Site de Aniversário Rafaela - Instruções Completas

Bem-vindo! Este é um site cinematográfico e emocionante criado como presente de aniversário para Rafaela.

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn instalado

### Passos para Rodar

1. **Abra o terminal** no diretório do projeto

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra seu navegador** e acesse:
   ```
   http://localhost:3000
   ```

## 📸 Como Adicionar Suas Fotos

### Opção 1: Usando URLs (Recomendado)

1. Abra o arquivo `client/src/lib/config.ts`

2. Localize a seção `photos`:
   ```typescript
   photos: [
     "https://exemplo.com/foto1.jpg",
     "https://exemplo.com/foto2.jpg",
   ],
   ```

3. Substitua as URLs pelas URLs das suas fotos. Você pode:
   - Usar um serviço de hospedagem como Google Drive, Dropbox, ou Imgur
   - Fazer upload das fotos em um servidor
   - Usar URLs diretas de suas fotos

4. Salve o arquivo e o site atualizará automaticamente

### Opção 2: Usando Arquivos Locais (Mais Complexo)

1. Coloque suas fotos na pasta `client/public/photos/`

2. No arquivo `client/src/lib/config.ts`, use caminhos relativos:
   ```typescript
   photos: [
     "/photos/foto1.jpg",
     "/photos/foto2.jpg",
   ],
   ```

## 🎥 Como Adicionar Vídeos

1. Abra `client/src/lib/config.ts`

2. Localize a seção `videos`:
   ```typescript
   videos: [
     {
       type: "video",
       url: "https://exemplo.com/video1.mp4",
       position: 3, // Aparece após a 3ª foto
     },
   ],
   ```

3. Adicione seus vídeos com as URLs e a posição desejada

4. **Dica:** O `position` indica após qual foto o vídeo aparecerá
   - `position: 3` = após a 3ª foto
   - `position: 8` = após a 8ª foto

## 🎵 Como Adicionar Música de Fundo

1. Abra `client/src/lib/config.ts`

2. Localize a seção `backgroundMusic`:
   ```typescript
   backgroundMusic: "https://exemplo.com/musica.mp3",
   ```

3. Substitua pela URL da sua música

4. A música começará automaticamente quando o usuário clicar no coração

## ⚙️ Configurações Adicionais

No arquivo `client/src/lib/config.ts`, você pode customizar:

### Tempo de Exibição das Fotos
```typescript
slideShowDuration: 5000, // 5 segundos (em milissegundos)
```

### Duração da Transição
```typescript
transitionDuration: 800, // 800 milissegundos
```

### Mensagens de Parabéns
```typescript
congratulationMessages: [
  "Feliz 15 Anos!",
  "Você é incrível!",
  // Adicione mais mensagens aqui
],
```

### Informações Gerais
```typescript
celebrantName: "Eliana",
celebrantAge: 15,
celebrantMessage: "Um presente especial para você no seu dia especial",
```

## 🎨 Personalizando o Design

### Cores
As cores estão definidas em `client/src/index.css`. Para alterar:

1. Abra `client/src/index.css`

2. Localize a seção `:root` com as variáveis de cor:
   ```css
   --primary: oklch(0.8 0.15 45); /* Gold */
   --background: oklch(0.08 0 0); /* Deep black */
   --foreground: oklch(0.95 0.01 65); /* Warm white */
   ```

3. Modifique os valores conforme desejado

### Tipografia
As fontes estão em `client/index.html`:
- **Display:** Playfair Display (títulos)
- **Body:** Inter (textos)

Para alterar, edite o link do Google Fonts em `client/index.html`

## 📁 Estrutura do Projeto

```
eliana_birthday/
├── client/
│   ├── public/          # Arquivos estáticos
│   │   └── photos/      # Coloque suas fotos aqui (se usar arquivos locais)
│   ├── src/
│   │   ├── pages/       # Páginas do site
│   │   │   ├── Home.tsx         # Página principal
│   │   │   ├── Landing.tsx      # Tela inicial
│   │   │   ├── Slideshow.tsx    # Slideshow de fotos
│   │   │   └── Ending.tsx       # Tela final
│   │   ├── lib/
│   │   │   └── config.ts        # ⭐ ARQUIVO PRINCIPAL PARA EDITAR
│   │   ├── App.tsx              # Componente raiz
│   │   └── index.css            # Estilos globais
│   └── index.html               # HTML principal
├── INSTRUCOES.md                # Este arquivo
└── package.json                 # Dependências
```

## 🔧 Dicas Úteis

### Como Obter URLs de Fotos

**Google Drive:**
1. Faça upload da foto no Google Drive
2. Clique com botão direito > Obter link
3. Copie o ID do arquivo da URL
4. Use: `https://drive.google.com/uc?export=view&id=SEU_ID_AQUI`

**Imgur:**
1. Acesse imgur.com
2. Faça upload da foto
3. Copie o link direto

**Dropbox:**
1. Compartilhe o arquivo
2. Copie o link
3. Altere `?dl=0` para `?dl=1` no final

### Testando Localmente

1. Sempre salve o arquivo `config.ts` após fazer alterações
2. O site atualizará automaticamente no navegador
3. Abra o console (F12) para verificar se há erros

### Resolvendo Problemas

**As fotos não aparecem:**
- Verifique se a URL está correta
- Tente acessar a URL no navegador diretamente
- Certifique-se de que a imagem é acessível publicamente

**A música não toca:**
- Verifique se a URL do arquivo MP3 está correta
- Alguns navegadores podem bloquear autoplay de áudio
- O usuário pode clicar no botão de play para iniciar

**Erros de compilação:**
- Verifique se não há vírgulas faltando em `config.ts`
- Certifique-se de que todas as URLs estão entre aspas
- Reinicie o servidor com `npm run dev`

## 📝 Exemplo Completo de Configuração

```typescript
export const config = {
  photos: [
    "https://drive.google.com/uc?export=view&id=1ABC123",
    "https://drive.google.com/uc?export=view&id=2DEF456",
    "https://drive.google.com/uc?export=view&id=3GHI789",
  ],

  videos: [
    {
      type: "video",
      url: "https://exemplo.com/video1.mp4",
      position: 3,
    },
  ],

  backgroundMusic: "https://exemplo.com/musica.mp3",

  slideShowDuration: 5000,
  transitionDuration: 800,

  congratulationMessages: [
    "Feliz 15 Anos!",
    "Você é incrível!",
    "Que dia especial!",
  ],

  celebrantName: "Eliana",
  celebrantAge: 15,
  celebrantMessage: "Um presente especial para você",
};
```

## 🎬 Fluxo do Site

1. **Landing Page** - Tela inicial com botão de coração
   - Clique no coração para começar
   - Música inicia automaticamente

2. **Slideshow** - Exibição de fotos e vídeos
   - Cada foto fica visível por 5 segundos
   - Mensagens de parabéns aparecem entre as fotos
   - Controles: Play/Pause, Anterior/Próximo, Volume

3. **Ending Page** - Tela final com mensagem de encerramento
   - Botão "Ver Novamente" para reiniciar

## 🆘 Precisa de Ajuda?

Se encontrar problemas:

1. Verifique se todas as URLs estão acessíveis
2. Abra o console do navegador (F12) para ver erros
3. Reinicie o servidor com `npm run dev`
4. Limpe o cache do navegador (Ctrl+Shift+Del)

## 🎁 Personalizações Avançadas

Se quiser fazer mudanças mais profundas no design ou funcionalidade, os arquivos principais são:

- `client/src/pages/Landing.tsx` - Tela inicial
- `client/src/pages/Slideshow.tsx` - Slideshow
- `client/src/pages/Ending.tsx` - Tela final
- `client/src/index.css` - Estilos e animações

Bom divertimento criando este presente especial! 🎉
