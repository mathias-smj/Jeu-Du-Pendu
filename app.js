const mots = [
  "JAVASCRIPT", "PYTHON", "JAVA", "RUBY", "PHP", "SWIFT", "GO", "RUST", "KOTLIN", "TYPESCRIPT", "SCALA",
  "DART", "PERL", "HTML", "CSS", "REACT", "SYMFONY", "LARAVEL", "FLUTTER", "SPRING", "DJANGO"
];

// VARIABLES :
let motADeviner; 
const motAffiche = [];
let chancesRestantes = 6;
let affichageMot = document.querySelector('#affichageMot');
let alphabetBtn = document.querySelectorAll('#alphabet');
const compteurViesElement = document.querySelector('#compteurVies');
const viesRestantesElement = document.querySelector('#viesRestantes');
const rejouerBtn = document.querySelector('#rejouer');
const proposerMotInput = document.querySelector('#proposerMot');
const proposerMotBtn = document.querySelector('#proposerMotBtn');

// FONCTIONS
function initialiserJeu() {
  genererNouveauMot();
  afficherMot();
  alphabetBtn.forEach((button) => {
    button.addEventListener("click", clickBtn);
  });
  proposerMotBtn.addEventListener('click', proposerMot);
  proposerMotInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter'){
      proposerMot();
    }
  });
  rejouerBtn.addEventListener('click', genererNouveauMot);
}

function genererNouveauMot() {
  motAffiche.length = 0;
  chancesRestantes = 6;
  compteurViesElement.textContent = chancesRestantes;
  choisirMotAleatoire();
}

function choisirMotAleatoire() {
  const motAleatoire = Math.floor(Math.random() * mots.length);
  motADeviner = mots[motAleatoire].split("");
  for (let i = 0; i < motADeviner.length; i++) {
    motAffiche.push('_');
  }
  afficherMot();
}

function afficherMot() {
  affichageMot.textContent = motAffiche.join(" ");
}

function mettreAJourMotAffiche(lettre) {
  let lettreDeviner = false;
  let lettreCorrecte = false;
  
  for (let i = 0; i < motADeviner.length; i++) {
    if (motADeviner[i] === lettre && motAffiche[i] !== lettre) {
      motAffiche[i] = lettre;
      lettreDeviner = true;
      lettreCorrecte = true;
    }
  }

  if (lettreDeviner) {
    afficherMot(); 
  }

  if (!lettreCorrecte) {
    chancesRestantes--;
    compteurViesElement.textContent = chancesRestantes;
    verifierResultat();
  }
}

function verifierResultat() {
  if (motADeviner.join('') === motAffiche.join('')) {
    alert("Félicitations ! Vous avez trouvé le mot : " + motADeviner.join(''));
    nouvellePartie();
  } else if (chancesRestantes === 0) {
    alert("Vous avez perdu ! Le mot était : " + motADeviner.join(''));
    nouvellePartie();
  }
}

function proposerMot() {
  const motProposer = proposerMotInput.value.trim();

  if (motProposer === motADeviner.join('')){
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
}

function clickBtn(event) {
  const lettre = event.target.textContent;
  mettreAJourMotAffiche(lettre);
}

initialiserJeu();
