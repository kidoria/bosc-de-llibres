console.log("Script carregat correctament!");

// --- IDENTIFICAR EL CONTE ---
const conteActual = document.body.dataset.conte;

// --- CONFIGURACIÓ DELS ARXIUS (POSA ELS TEUS NOMS REALS) ---
const arxius = {
  conte1: {
    musica: "musica-conte1.mp3",
    narracio: "ArbreN.mp3"
  },
  conte2: {
    musica: "DRON.mp3",
    narracio: "DronN.mp3"
  },
  conte3: {
    musica: "missio.mp3",
    narracio: "narracio3.mp3"
  },
  conte4: {
    musica: "hakejant.mp3",
    narracio: "HakejaN.mp3"
  }
};

// --- OBTENIR ELS ARXIUS DEL CONTE ACTUAL ---
const musicaFitxer = arxius[conteActual].musica;
const narracioFitxer = arxius[conteActual].narracio;

// --- CREAR ELS ÀUDIOS ---
const audioMusica = new Audio(musicaFitxer);
audioMusica.loop = true;

const audioNarracio = new Audio(narracioFitxer);

// --- BOTONS ---
const musicaBtn = document.getElementById("musica-btn");
const narracioBtn = document.getElementById("narracio-btn");

// --- ICONES ---
function actualitzaIcones() {
  musicaBtn.textContent = audioMusica.paused ? "🔊 Música" : "🔇 Silencia";
  narracioBtn.textContent = audioNarracio.paused ? "🎤 Narració" : "⏸️ Pausa narració";
}

// --- MÚSICA ---
musicaBtn.addEventListener("click", () => {
  if (audioMusica.paused) {
    audioMusica.play();
  } else {
    audioMusica.pause();
  }
  actualitzaIcones();
});

// --- NARRACIÓ ---
narracioBtn.addEventListener("click", () => {
  if (audioNarracio.paused) {
    if (audioMusica.paused) audioMusica.play(); // Música automàtica
    audioNarracio.play();
  } else {
    audioNarracio.pause();
  }
  actualitzaIcones();
});

// --- ICONES AL CARREGAR ---
actualitzaIcones();
