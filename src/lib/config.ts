/**
 * CONFIGURAÇÃO DO SITE DE ANIVERSÁRIO
 * * Instruções:
 * 1. Para adicionar fotos: Adicione o caminho da foto no array 'photos' abaixo
 * 2. Para adicionar vídeos: Adicione a URL do vídeo no array 'videos' abaixo
 * 3. Para alterar a música: Altere o caminho em 'backgroundMusic'
 * * Exemplo com caminhos locais:
 * const photos = [
 * "assets/WhatsApp Image 2026-02-25 at 09.08.42.jpeg",
 * "assets/WhatsApp Image 2026-02-25 at 09.08.43.jpeg",
 * ];
 */

export const config = {
  // FOTOS - Adicione aqui os caminhos das suas fotos locais
  photos: [
    "assets/foto1.jpeg",
    "assets/foto2.jpeg",
    "assets/foto3.jpeg",
    "assets/foto4.jpeg",
    "assets/foto5.jpeg",
    "assets/foto6.jpeg",
    "assets/foto7.jpeg",
    "assets/foto8.jpeg",
    "assets/foto9.jpeg",
    "assets/foto10.jpeg",
    "assets/foto11.jpeg",
    "assets/foto12.jpeg",
    "assets/foto13.jpeg",
    "assets/foto14.jpeg",
    "assets/foto15.jpeg",
    "assets/foto16.jpeg",
    "assets/foto17.jpeg",
    "assets/foto18.jpeg",
    "assets/foto19.jpeg",
    "assets/foto20.jpeg",
    "assets/foto21.jpeg",
    "assets/foto22.jpeg",
    "assets/foto23.jpeg",
    "assets/foto24.jpeg",
    "assets/foto25.jpeg",
    "assets/foto26.jpeg",
    "assets/foto27.jpeg",
    "assets/foto28.jpeg",
    "assets/foto20.jpeg",
    "assets/foto21.jpeg",
    "assets/foto22.jpeg",
    "assets/foto23.jpeg",
    "assets/foto24.jpeg",
    "assets/foto25.jpeg",
    "assets/foto26.jpeg",
    "assets/foto27.jpeg",
    "assets/foto28.jpeg",
    "assets/foto29.jpeg",
    "assets/foto30.jpeg",
    "assets/foto31.jpeg",
    "assets/foto32.jpeg",
    "assets/foto33.jpeg",
    "assets/foto34.jpeg",
    "assets/foto35.jpeg",
    "assets/foto36.jpeg",
    "assets/foto37.jpeg",
    "assets/foto38.jpeg",
    "assets/foto39.jpeg",
    "assets/foto40.jpeg",
    "assets/foto41.jpeg",
    "assets/foto42.jpeg",
    "assets/foto43.jpeg",
    "assets/foto44.jpeg",
    "assets/foto45.jpeg",
    "assets/foto46.jpeg",
    "assets/foto47.jpeg",
    "assets/foto48.jpeg",
    "assets/foto49.jpeg",
    "assets/foto50.jpeg",
    "assets/foto51.jpeg",
    "assets/foto52.jpeg",
    "assets/foto53.jpeg",
    "assets/foto54.jpeg",
    "assets/foto55.jpeg",
    "assets/foto56.jpeg",
    "assets/foto57.jpeg",
    "assets/foto58.jpeg",
    "assets/foto59.jpeg",
    "assets/foto60.jpeg",
    "assets/foto61.jpeg",
    "assets/foto62.jpeg",
    "assets/foto63.jpeg",
    "assets/foto64.jpeg",
    "assets/foto65.jpeg",
    "assets/foto66.jpeg",
    "assets/foto67.jpeg",
    "assets/foto68.jpeg",
    "assets/foto69.jpeg",
    "assets/foto70.jpeg",
    "assets/foto71.jpeg",
    "assets/foto72.jpeg",
    "assets/foto73.jpeg",
    "assets/foto74.jpeg",
    "assets/foto75.jpeg",
    "assets/foto76.jpeg",
    "assets/foto77.jpeg",
    "assets/foto78.jpeg",
    "assets/foto79.jpeg",
    "assets/foto80.jpeg",
    "assets/foto81.jpeg",
    "assets/foto82.jpeg",
    "assets/foto83.jpeg",
    "assets/foto84.jpeg",
    "assets/foto85.jpeg",
    "assets/foto86.jpeg",
    "assets/foto87.jpeg",
    "assets/foto88.jpeg",
    "assets/foto89.jpeg",
    "assets/foto90.jpeg",
    "assets/foto91.jpeg",
    "assets/foto92.jpeg"
  ],

  // VÍDEOS - Adicione aqui os caminhos dos seus vídeos
  // Formato: { type: 'video', url: 'assets/video.mp4', position: número }
  videos: [] as Array<{
    type: "video";
    url: string;
    position: number;
  }>,

  // MÚSICA DE FUNDO - Altere aqui o caminho da sua música
  backgroundMusic: "assets/musica.mp3",

  // CONFIGURAÇÕES DE TEMPO
  slideShowDuration: 5000, // Tempo em ms que cada foto fica visível (5 segundos)
  transitionDuration: 800, // Duração da transição entre fotos (800ms)

  // MENSAGENS DE PARABÉNS - Mensagens de um pai para sua filha
  congratulationMessages: [
    "Minha princesa, você chegou e transformou minha vida.",
    "15 anos se foram tão rápido, mas cada momento foi especial.",
    "Você é o maior presente que a vida me deu.",
    "Como é bom ser seu pai, meu amor.",
    "Esses 15 anos foram os melhores da minha vida.",
    "Você sempre será meu bebê, minha princesa.",
    "Cada dia com você é uma bênção.",
    "Crescer vendo você crescer foi meu privilégio.",
    "Você é a razão do meu sorriso todos os dias.",
    "15 presentes, 15 anos de pura felicidade.",
    "Minha filha, você é tudo para mim.",
    "Como é lindo ver você se tornando uma mulher incrível.",
    "Você tem o coração mais puro que já conheci.",
    "Ser seu pai é meu maior orgulho.",
    "Esses 15 anos foram 15 presentes que recebi de você.",
    "Você sempre será a princesa do seu pai.",
    "Meu bebê, você cresceu, mas nunca deixará de ser.",
    "Estarei sempre aqui, em cada passo seu.",
    "Você é a luz da minha vida, meu amor.",
    "15 anos de histórias, risos e lágrimas felizes.",
    "Como é bom poder te abraçar e dizer que tudo vai ficar bem.",
    "Você é minha filha, meu tesouro, meu tudo.",
    "Esses 15 anos me ensinaram o verdadeiro significado do amor.",
    "Você sempre terá um lugar especial no meu coração.",
    "Minha princesa, você é mais forte do que imagina.",
    "Estarei aqui para te apoiar em cada decisão.",
    "Você é a melhor coisa que já aconteceu comigo.",
    "15 anos de você me tornando um homem melhor.",
    "Meu bebê, você é perfeita do jeito que é.",
    "Como é lindo ser seu pai, sua força, seu apoio.",
    "Você merece toda a felicidade do mundo.",
    "Esses 15 anos foram um presente que nunca vou devolver.",
    "Você é minha filha, minha princesa, meu amor.",
    "Estarei aqui sempre que você precisar de mim.",
    "Você tem um pai que te ama mais que a vida.",
    "15 anos de você me ensinando a ser melhor.",
    "Minha filha, você é a minha maior realização.",
    "Como é bom poder estar ao seu lado nessa jornada.",
    "Você é meu bebê, minha princesa, para sempre.",
    "Esses 15 anos foram os mais felizes da minha vida.",
    "Você sempre terá um ombro para chorar em mim.",
    "Meu amor, você é tudo que eu sempre quis.",
    "15 presentes em 15 anos, você é cada um deles.",
    "Como é lindo ver você se tornando quem você é.",
    "Você é a razão pela qual acordo feliz todos os dias.",
    "Estarei aqui para secar suas lágrimas e celebrar suas vitórias.",
    "Minha princesa, você é mais valiosa que ouro.",
    "Esses 15 anos me mostraram o poder do amor de pai.",
    "Você é minha filha, meu orgulho, meu coração.",
    "Como é bom poder te dizer que você é amada.",
    "Você sempre será meu bebê, minha princesa querida.",
    "15 anos de você me tornando a melhor versão de mim.",
    "Meu amor, você é a resposta a todas as minhas orações.",
    "Estarei sempre aqui, em cada momento importante.",
    "Você é minha filha, meu tesouro, minha vida.",
    "Como é lindo poder ser seu pai, seu herói.",
    "Esses 15 anos foram um privilégio que não meço preço.",
    "Você merece ser feliz, sempre, meu amor.",
    "Minha princesa, você é a estrela mais brilhante.",
    "15 presentes que você me deu em 15 anos de vida.",
    "Você é meu bebê, meu tesouro, meu tudo.",
    "Estarei aqui para te abraçar em cada dificuldade.",
    "Como é bom poder dizer que você é minha filha.",
    "Você sempre terá um lugar seguro em meus braços.",
    "Esses 15 anos me ensinaram o que é amar de verdade.",
    "Meu amor, você é a minha maior bênção.",
    "Você é minha filha, minha princesa, meu coração.",
    "Como é lindo poder estar ao seu lado nessa vida.",
    "15 anos de você sendo meu maior motivo de felicidade.",
    "Estarei sempre aqui, para o que você precisar.",
    "Minha princesa, você é a luz que guia meu caminho.",
    "Você é meu bebê, meu tesouro, meu orgulho.",
    "Como é bom poder ser seu pai, seu apoio, seu amor.",
    "Esses 15 anos foram os melhores que já vivi.",
    "Você merece toda a felicidade que o mundo pode dar.",
    "Meu amor, você é a razão de eu ser melhor.",
    "Você é minha filha, e isso é meu maior privilégio.",
    "Estarei aqui para secar cada lágrima sua.",
    "Como é lindo poder dizer que você é minha princesa.",
    "15 presentes em 15 anos, você é cada um deles.",
    "Você sempre será meu bebê, minha vida, meu tudo.",
    "Minha filha, você é a melhor coisa que me aconteceu.",
    "Como é bom poder estar aqui para você, sempre.",
    "Esses 15 anos me mostraram o verdadeiro amor.",
    "Você é meu coração fora do peito, meu amor.",
  ],

  // INFORMAÇÕES GERAIS
  celebrantName: "Rafaella Cesari",
  celebrantAge: 15,
  celebrantMessage: "Um presente especial para você no seu dia especial",
};

// Função para criar sequência de mídia (fotos + vídeos intercalados)
export function createMediaSequence() {
  const sequence: Array<{
    type: "photo" | "video";
    url: string;
  }> = [];

  // Adiciona fotos
  config.photos.forEach((photo) => {
    sequence.push({ type: "photo", url: photo });
  });

  // Intercala vídeos nas posições especificadas
  (config.videos as Array<{
    type: "video";
    url: string;
    position: number;
  }>).forEach((video) => {
    if (video.position < sequence.length) {
      sequence.splice(video.position, 0, {
        type: "video",
        url: video.url,
      });
    }
  });

  return sequence;
}

// Função para obter mensagem aleatória
export function getRandomMessage(): string {
  return config.congratulationMessages[
    Math.floor(Math.random() * config.congratulationMessages.length)
  ];
}