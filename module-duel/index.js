var TITRE = 'Duel';
var service = require('../module-duel/service')

// pour faciliter l'écriture des logs et la répétition des "console.log"
var lg = console.log;

var demarrer = function (rl, sortir) {
    lg('*** ' + TITRE + ' ***');
    lg('1. Lister');

    // récupération du choix
    rl.question("Votre choix : ", function (numeroChoix) {

        // une fois la saisie effectuée

        if (numeroChoix == 1) {
            service.lister(function (listeDuels) {
                listeDuels.forEach(function (element) {
                    lg(element.id + ' : ' + element.stagiaireA.nom + ' vs. ' + element.stagiaireB.nom + ' dans ' + element.quizz.titre)
                })
            });
        }

        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();
    });
};

module.exports = {
    titre: TITRE,
    demarrer: demarrer
}