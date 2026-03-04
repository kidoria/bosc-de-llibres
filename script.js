// -----------------------------
// DETECTAR QUIN CONTE ÉS
// -----------------------------

const paginaActual = window.location.pathname.split("/").pop(); 
// exemple: "conte2.html"

const match = paginaActual.match(/conte(\d+)\.html/);
const conteId = match ? `conte${match[1]}` : null;

// -----------------------------
// CONFIGURACIÓ DE MÚSICA
// -----------------------------

const musicaURLs = {
  conte1: "arbre.mp3",
  conte2: "DRON.mp3",
  conte3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
};

const narracioURLs = {
  conte1: "..mp3",
  conte2: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  conte3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
};

// -----------------------------
// CREAR ÀUDIO NOMÉS SI ÉS UN CONTE
// -----------------------------

let musica = null;
let narr = null;

if (conteId && musicaURLs[conteId]) {

  musica = new Audio(musicaURLs[conteId]);
  musica.loop = true;

  narr = new Audio(narracioURLs[conteId]);
  narr.loop = false;

  console.log("Conte detectat:", conteId);
  console.log("Música:", musica.src);
  console.log("Narració:", narr.src);

}

// -----------------------------
// ESPERAR QUE EL DOM CARREGUI
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {

  const btnMusica = document.getElementById("musica-btn");
  const btnNarracio = document.getElementById("narracio-btn");

  // -----------------------------
  // BOTÓ MÚSICA
  // -----------------------------
  if (btnMusica && musica) {

    btnMusica.addEventListener("click", () => {

      if (musica.paused) {
        musica.play();
        btnMusica.textContent = "🎶 Música";
      } else {
        musica.pause();
        btnMusica.textContent = "🎶 Música";
      }

    });

  }

  // -----------------------------
  // BOTÓ NARRACIÓ
  // -----------------------------
  if (btnNarracio && narr) {

    btnNarracio.addEventListener("click", () => {

      if (narr.paused) {
        narr.play();
        btnNarracio.textContent = "🎙️ Narració";
      } else {
        narr.pause();
        btnNarracio.textContent = "🎙️ Narració";
      }

    });

  }

});
