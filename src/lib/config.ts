/**
 * CONFIGURAÇÃO DO SITE DE ANIVERSÁRIO
 * * Instruções:
 * 1. Para adicionar fotos: Adicione o caminho da foto no array 'photos' abaixo
 * 2. Para adicionar vídeos: Adicione a URL do vídeo no array 'videos' abaixo
 * 3. Para alterar a música: Altere o caminho em 'backgroundMusic'
 * * Exemplo com caminhos locais:
 * const photos = [
 * "src/assets/WhatsApp Image 2026-02-25 at 09.08.42.jpeg",
 * "src/assets/WhatsApp Image 2026-02-25 at 09.08.43.jpeg",
 * ];
 */

export const config = {
  // FOTOS - Adicione aqui os caminhos das suas fotos locais
  photos: [
    "src/assets/foto (1).jpeg",
    "src/assets/foto (2).jpeg",
    "src/assets/foto (3).jpeg",
    "src/assets/foto (4).jpeg",
    "src/assets/foto (5).jpeg",
    "src/assets/foto (6).jpeg",
    "src/assets/foto (7).jpeg",
    "src/assets/foto (8).jpeg",
    "src/assets/foto (9).jpeg",
    "src/assets/foto (10).jpeg",
    "src/assets/foto (11).jpeg",
    "src/assets/foto (12).jpeg",
    "src/assets/foto (13).jpeg",
    "src/assets/foto (14).jpeg",
    "src/assets/foto (15).jpeg",
    "src/assets/foto (16).jpeg",
    "src/assets/foto (17).jpeg",
    "src/assets/foto (18).jpeg",
    "src/assets/foto (19).jpeg",
    "src/assets/foto (20).jpeg",
    "src/assets/foto (21).jpeg",
    "src/assets/foto (22).jpeg",
    "src/assets/foto (23).jpeg",
    "src/assets/foto (24).jpeg",
    "src/assets/foto (25).jpeg",
    "src/assets/foto (26).jpeg",
    "src/assets/foto (27).jpeg",
    "src/assets/foto (28).jpeg",
    "src/assets/foto (29).jpeg",
    "src/assets/foto (30).jpeg",
    "src/assets/foto (31).jpeg",
    "src/assets/foto (32).jpeg",
    "src/assets/foto (33).jpeg",
    "src/assets/foto (34).jpeg",
    "src/assets/foto (35).jpeg",
    "src/assets/foto (36).jpeg",
    "src/assets/foto (37).jpeg",
    "src/assets/foto (38).jpeg",
    "src/assets/foto (39).jpeg",
    "src/assets/foto (40).jpeg",
    "src/assets/foto (41).jpeg",
    "src/assets/foto (42).jpeg",
    "src/assets/foto (43).jpeg",
    "src/assets/foto (44).jpeg",
    "src/assets/foto (45).jpeg",
    "src/assets/foto (46).jpeg",
    "src/assets/foto (47).jpeg",
    "src/assets/foto (48).jpeg",
    "src/assets/foto (49).jpeg",
    "src/assets/foto (50).jpeg",
    "src/assets/foto (51).jpeg",
    "src/assets/foto (52).jpeg",
    "src/assets/foto (53).jpeg",
    "src/assets/foto (54).jpeg",
    "src/assets/foto (55).jpeg",
    "src/assets/foto (56).jpeg",
    "src/assets/foto (57).jpeg",
    "src/assets/foto (58).jpeg",
    "src/assets/foto (59).jpeg",
    "src/assets/foto (60).jpeg",
    "src/assets/foto (61).jpeg",
    "src/assets/foto (62).jpeg",
    "src/assets/foto (63).jpeg",
    "src/assets/foto (64).jpeg",
    "src/assets/foto (65).jpeg",
    "src/assets/foto (66).jpeg",
    "src/assets/foto (67).jpeg",
    "src/assets/foto (68).jpeg",
    "src/assets/foto (69).jpeg",
    "src/assets/foto (70).jpeg",
    "src/assets/foto (71).jpeg",
    "src/assets/foto (72).jpeg",
    "src/assets/foto (73).jpeg",
    "src/assets/foto (74).jpeg",
    "src/assets/foto (75).jpeg",
    "src/assets/foto (76).jpeg",
    "src/assets/foto (77).jpeg",
    "src/assets/foto (78).jpeg",
    "src/assets/foto (79).jpeg",
    "src/assets/foto (80).jpeg",
    "src/assets/foto (81).jpeg",
    "src/assets/foto (82).jpeg",
    "src/assets/foto (83).jpeg",
    "src/assets/foto (84).jpeg",
    "src/assets/foto (85).jpeg",
    "src/assets/foto (86).jpeg",
    "src/assets/foto (87).jpeg",
    "src/assets/foto (88).jpeg",
    "src/assets/foto (89).jpeg",
    "src/assets/foto (90).jpeg",
    "src/assets/foto (91).jpeg",
    "src/assets/foto (92).jpeg"
  ],

  // VÍDEOS - Adicione aqui os caminhos dos seus vídeos
  // Formato: { type: 'video', url: 'src/assets/video.mp4', position: número }
  videos: [] as Array<{
    type: "video";
    url: string;
    position: number;
  }>,

  // MÚSICA DE FUNDO - Altere aqui o caminho da sua música
  backgroundMusic: "src/assets/musica.mp3",

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