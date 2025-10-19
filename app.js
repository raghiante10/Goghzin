// Objeto com dados de cada obra
const obras = {
  "Amendoeira em Flores": {
    imagem: "imagens/Amendoeira-em-Flor.jpg",
    descricao: "Essa obra foi pintada em 1890 como presente para o sobrinho de Van Gogh. Representa a primavera, o renascimento e a esperança, com ramos floridos contra um céu azul vibrante."
  },
  "Auto-Retrato": {
    imagem: "imagens/Auto-Retrato.jpg",
    descricao: "Van Gogh pintou mais de 30 autorretratos. Este mostra sua expressão intensa e pinceladas marcantes, refletindo seu estado emocional e estilo único."
  },
  "Comedores de Batatas": {
    imagem: "imagens/Comedores-de-Batatas.jpg",
    descricao: "Uma das primeiras obras importantes de Van Gogh, retrata camponeses em uma refeição simples. Ele quis mostrar a dignidade da vida rural e o trabalho duro."
  },
  "Lírio": {
    imagem: "imagens/Lirios.jpg",
    descricao: "Pintado durante sua estadia no asilo de Saint-Rémy, os lírios representam paz e beleza. As cores vibrantes e o movimento das flores são típicos de seu estilo."
  },
  "Noite Estrelada": {
    imagem: "imagens/Noite-Estrelada.jpeg",
    descricao: "Talvez sua obra mais famosa, mostra um céu noturno turbulento com estrelas em espiral. Van Gogh pintou essa vista da janela do asilo onde estava internado."
  },
  "Os Girassóis": {
    imagem: "imagens/Os-Girassois.jpeg",
    descricao: "Parte de uma série de pinturas feitas para decorar o quarto de Gauguin. Os girassóis simbolizam luz, calor e amizade, com cores intensas e textura marcante."
  },
  "Quarto em Arles": {
    imagem: "imagens/Quarto.jpg",
    descricao: "Van Gogh pintou seu quarto em Arles com cores suaves e perspectiva distorcida. A obra transmite simplicidade, tranquilidade e um senso de intimidade."
  },
  "Terraço do Café à Noite": {
    imagem: "imagens/Terraço.jpg",
    descricao: "Pintado em Arles, mostra um café iluminado sob um céu estrelado. Van Gogh foi um dos primeiros a pintar cenas noturnas sem usar preto, criando uma atmosfera acolhedora."
  }
};

// Função para abrir o modal com dados da obra
function abrirModal(imagem, titulo, descricao) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-img').src = imagem;
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-descricao').innerText = descricao;
  modal.style.display = 'block';
}

// Função que busca os dados da obra pelo título
function abrirModalPorTitulo(titulo) {
  const obra = obras[titulo];
  if (obra) {
    abrirModal(obra.imagem, titulo, obra.descricao);
  }
}

// Fecha o modal
function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fecha ao clicar fora da imagem
window.addEventListener('click', function(e) {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    fecharModal();
  }
});

// Fecha ao pressionar ESC
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharModal();
  }
});