console.log("Script carregat correctament!");

// --- DETECTAR QUIN CONTE ÉS ---
const pagina = window.location.pathname.split("/").pop(); 
const nomConte = pagina.replace(".html", ""); // conte1, conte2, conte3...

// --- ARXIUS D'AUDIO ---
const audioMusica = new Audio(`musica-${nomConte}.mp3`);
audioMusica.loop = true;

const audioNarracio = new Audio(`narracio-${nomConte}.mp3`);

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
    // Si la narració comença, la música també
    if (audioMusica.paused) audioMusica.play();
    audioNarracio.play();
  } else {
    audioNarracio.pause();
  }
  actualitzaIcones();
});

// --- ACTUALITZAR ICONES AL CARREGAR ---
actualitzaIcones();
