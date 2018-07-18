var readline = require('readline');

// Module démo à supprimer
var moduleDemo = require('./module-demo');
var moduleDuel = require('./module-duel');

// pour faciliter l'écriture des logs et la répétition des "console.log"
var lg = console.log;

// liste des modules
// si vous créer un nouveau module, n'oubliez pas de mettre à jour cette liste
var listeModules = [moduleDemo, moduleDuel];

lg('**** EvalMe - Console Administration ****');

// affichage du menu
listeModules.forEach(function(module, index) {
    lg(index + 1 + '.', module.titre);
});

// création d'un objet permet de lire l'entrée de la console
// l'équivalent du Scanner(System.in) Java SE
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// lecture de l'entrée de la console
// la variable `numero` représente la saisie effectuée, ici un chiffre est attendu
rl.question('Choisir une entité :', function(numero) {

    // invocation de la méthode `demarrer` du module choisi.
    // => chaque module doit exposer une méthode qui demarrer(rl)
    listeModules[numero-1].demarrer(rl);
});



