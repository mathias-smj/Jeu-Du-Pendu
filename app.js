const mots = [
  "JAVASCRIPT", "PYTHON", "JAVA", "RUBY", "PHP", "SWIFT", "GO", "RUST", "KOTLIN", "TYPESCRIPT", "SCALA",
  "DART", "PERL", "HTML", "CSS", "REACT", "SYMFONY", "LARAVEL", "FLUTTER", "SPRING", "DJANGO"
];

// VARIABLES :
let motADeviner;
const motAffiche = [];
let chancesRestantes = 10;
let jeuxTermine = false;
let affichageMot = document.querySelector('#affichageMot');
const alphabetBtn = document.querySelectorAll('#alphabet button');
const compteurViesElement = document.querySelector('#compteurVies');
const proposerMotInput = document.querySelector('#proposerMot');
const rejouerBtn = document.querySelector('#rejouer');
const proposerMotBtn = document.querySelector('#proposerMotBtn');
const penduImage = document.querySelector('#penduImage');

// FONCTIONS
function choisirMotAleatoire() {
  chancesRestantes = 10;
  compteurViesElement.textContent = chancesRestantes;
  const motAleatoire = Math.floor(Math.random() * mots.length);
  motADeviner = mots[motAleatoire];
  motADeviner = motADeviner.split("");

  for (let i = 0; i < motADeviner.length; i++) {
    motAffiche.push('_');
  }
  afficherMot();
  restaurerBoutonsAlphabet();
}

function afficherMot() {
  affichageMot.textContent = motAffiche.join(" ");
}

function mettreAJourMotAffiche(lettre) {
  let lettreCorrecte = false;

  for (let i = 0; i < motADeviner.length; i++) {
    if (motADeviner[i] === lettre) {
      motAffiche[i] = lettre;
      lettreCorrecte = true;
    }
  }

  afficherMot();

  if (lettreCorrecte) {
    verifierResultat();
  } else {
    chancesRestantes--;
    compteurViesElement.textContent = chancesRestantes;
    penduImage.src = `assets/${chancesRestantes}.png`;
  }
  verifierResultat();
}


function genererNouveauMot() {
  motAffiche.length = 0;
  chancesRestantes = 10;
  compteurViesElement.textContent = chancesRestantes;
  choisirMotAleatoire();
}

function verifierResultat() {
  if (motADeviner.join('') === motAffiche.join('')) {
    setTimeout(() => {
      alert("Félicitations ! Vous avez trouvé le mot : " + motADeviner.join(''));
      nouvellePartie();
    }, 200);
  } else if (chancesRestantes === 0) {
    setTimeout(() => {
      alert("Vous avez perdu ! Le mot était : " + motADeviner.join(''));
      nouvellePartie();
    }, 200);
  }
}

function proposerMot() {
  const motProposer = proposerMotInput.value.trim();
  if (motProposer === motADeviner.join('')) {
    alert("Bravo vous avez trouvé le mot secret : " + motProposer);
    genererNouveauMot();
  } else {
    alert("Dommage ce n'est pas le bon mot.")
    chancesRestantes--;
    compteurViesElement.textContent = chancesRestantes;
    verifierResultat();
  }
  proposerMotInput.value = '';
}

function nouvellePartie() {
  genererNouveauMot();
  compteurViesElement.textContent = chancesRestantes;
  restaurerBoutonsAlphabet();
  afficherMot();
}

function restaurerBoutonsAlphabet() {
  alphabetBtn.forEach((button) => {
    button.disabled = false;
  });
}

function clickBtn(event) {
  const lettre = event.target.textContent;
  mettreAJourMotAffiche(lettre);
  event.target.disabled = true;
}


alphabetBtn.forEach((button) => {
  button.addEventListener("click", clickBtn);
});

rejouerBtn.addEventListener('click', nouvellePartie);

proposerMotBtn.addEventListener('click', proposerMot);

proposerMotInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    proposerMot();
  }
});

choisirMotAleatoire();