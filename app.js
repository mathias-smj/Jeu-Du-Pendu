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

const tentatives = 5;

function choisirMotsAleatoire(){
    let motsRandom = Math.floor(Math.random() * mots.length);
    return mots[motsRandom];
}
console.log(motsRandom)



