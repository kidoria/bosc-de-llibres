// Funció per obrir un conte des del menú
function obrirConte(conte) {
  localStorage.setItem('conteSeleccionat', conte);
  window.location.href = 'conte.html';
}
const botones = document.querySelectorAll(".boton");
const resumen = document.getElementById("resumen");

botones.forEach(boton => {
  boton.addEventListener("mouseenter", () => {
    resumen.textContent = boton.dataset.resumen;
    resumen.style.display = "block";
  });

  boton.addEventListener("mouseleave", () => {
    resumen.style.display = "none";
  });
});

// Música diferent per a cada conte
let musica = new Audio();
const conteSeleccionat = localStorage.getItem('conteSeleccionat') || 'conte1';

switch(conteSeleccionat) {
  case 'conte1':
    musica.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    break;
  case 'conte2':
    musica.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
    break;
  case 'conte3':
    musica.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
    break;
}

musica.loop = true;
musica.play();

const musicaBtn = document.getElementById('musica-btn');
musicaBtn?.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    musicaBtn.textContent = '🔊 Música';
  } else {
    musica.pause();
    musicaBtn.textContent = '🔇 Silenciar';
  }
});

// Traducció (simple amb text dummy)
const tradueixBtn = document.getElementById('tradueix-btn');
tradueixBtn?.addEventListener('click', () => {
  const textConte = document.getElementById('text-conte');
  if (textConte.textContent.includes('Aquí va el text del conte')) {
    textConte.textContent = 'Here goes the text of the story (English)';
  } else {
    textConte.textContent = 'Aquí va el text del conte...';
  }
});

// Narració de veu
const narracioBtn = document.getElementById('narracio-btn');
narracioBtn?.addEventListener('click', () => {
  const textConte = document.getElementById('text-conte').textContent;
  const utterance = new SpeechSynthesisUtterance(textConte);
  speechSynthesis.speak(utterance);
});
