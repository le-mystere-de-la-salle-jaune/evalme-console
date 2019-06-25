const readline = require('readline');

// Module démo à supprimer
const moduleDemo = require('./module-demo');
const moduleSondage = require('./module-sondage');

// pour faciliter l'écriture des logs et la répétition des "console.log"
const lg = console.log;

// liste des modules
// si vous créer un nouveau module, n'oubliez pas de mettre à jour cette liste
const listeModules = [moduleDemo, moduleSondage];

lg('**** EvalMe - Console Administration ****');

// affichage du menu
listeModules.forEach((module, index) => lg(index + 1 + '.', module.titre));

// création d'un objet permet de lire l'entrée de la console
// l'équivalent du Scanner(System.in) Java SE
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// lecture de l'entrée de la console
// la variable `numero` représente la saisie effectuée, ici un chiffre est attendu
rl.question('Choisir une entité :', numero => {

    // invocation de la méthode `demarrer` du module choisi.
    // => chaque module doit exposer une méthode qui demarrer(rl)
    listeModules[numero-1].demarrer(rl);
});
