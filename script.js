// -----------------------------
// CONFIGURACIÓN DE CUENTOS
// -----------------------------

const conteSeleccionat = localStorage.getItem('conteSeleccionat') || 'conte1';

// URLs de música por cuento
const musicaURLs = {
  conte1: 'arbre.mp3',
  conte2: 'DRON.mp3',
  conte3: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
};

// URLs de narración por cuento (pueden ser iguales o diferentes)
const narracioURLs = {
  conte1: 'arbre.mp3',
  conte2: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  conte3: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
};

// -----------------------------
// CONFIGURACIÓN DE AUDIO
// -----------------------------

const musica = new Audio(musicaURLs[conteSeleccionat]);
musica.loop = true;

const narr = new Audio(narracioURLs[conteSeleccionat]);
narr.loop = false; // Normalmente narración no se repite

// Intentar reproducir la música (algunos navegadores requieren interacción)
musica.play().catch(e => console.warn('No se pudo reproducir la música automáticamente:', e));

// -----------------------------
// BOTONES DE CONTROL
// -----------------------------

// Botón música
const btnMusica = document.getElementById('musica-btn');
btnMusica?.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = 'Silenciar música';
  } else {
    musica.pause();
    btnMusica.textContent = 'Reproducir música';
  }
});

// Botón narración
const btnNarracio = document.getElementById('narracio-btn');
btnNarracio?.addEventListener('click', () => {
  if (narr.paused) {
    narr.play();
    btnNarracio.textContent = 'Pausar narración';
  } else {
    narr.pause();
    btnNarracio.textContent = 'Reproducir narración';
  }
});

// -----------------------------
// FUNCIÓN PARA ABRIR CUENTO
// -----------------------------

function obrirConte(conte) {
  localStorage.setItem('conteSeleccionat', conte);
  window.location.href = 'conte.html';
}

// -----------------------------
// OPCIONAL: Animación o log de prueba
// -----------------------------
console.log('Cuento seleccionado:', conteSeleccionat);
console.log('Música cargada:', musica.src);
console.log('Narración cargada:', narr.src);
