const mots =[
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "PHP",
    "Swift",
    "Go",
    "C#",
    "Rust",
    "Kotlin",
    "TypeScript",
    "Scala",
    "Dart",
    "Perl", 
    "HTML", 
    "CSS"
  ];

// VARIABLES :
let motDeviner;
const motAffiche = [];
let alphabetBtn = document.querySelectorAll('#alphabet');

// FONCTIONS
function choisirMotsAleatoire(){

    const motsAleatoire = Math.floor(Math.random() * mots.length);
    motInitial = mots[motsAleatoire];
    motAdeviner = motInitial.split("");
    return motAdeviner;
}

function clickBtn(e){
  const lettre = e.target.textContent;
  alert("Lettre selectionnée : " + lettre);

}

alphabetBtn.forEach(button => {
  button.addEventListener('click', clickBtn)
})



