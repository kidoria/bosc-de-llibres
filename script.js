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

function generarFitxa(){

document.getElementById("fitxaConte").style.display="block";

document.getElementById("fitxaConte").innerHTML = `

<h3 style="color:#8e44ad;">🌳 Fitxa del conte</h3>

<p><b>Títol:</b> L'arbre que contava històries</p>

<p><b>Personatge principal:</b> Brancaforta, l'arbre del parc.</p>

<p><b>Lloc:</b> un parc ple d'arbres i natura.</p>

<p><b>Tema:</b> escoltar el cor i cuidar la natura.</p>

<p><b>Missatge:</b> tots podem ajudar a cuidar el parc.</p>

<p style="color:#4caf50;"><b>Resum:</b>  
Brancaforta és un arbre especial que conta històries als nins del parc.  
A través dels seus relats, els infants aprenen a escoltar el seu cor  
i a respectar la natura que els envolta.</p>

`;

}
