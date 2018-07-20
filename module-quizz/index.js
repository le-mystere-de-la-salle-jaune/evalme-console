const service = require('./service');

const TITRE = 'Quizz';
const lg = console.log;
const afficherMenu = () => {
    lg('1. Lister');
    lg('3. Quitter');
}

function proposerChoix(rl) {
    afficherMenu()

    // récupération du choix
    rl.question("Votre choix : ", numeroChoix => {

        if (numeroChoix > 0 && numeroChoix < 3) {
            service.getMenu(numeroChoix)(service.getCallback(numeroChoix));
        } else {
            lg('Au revoir');
        }
        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();
    });
}

const demarrer = function (rl) {
    lg('*** ' + TITRE + ' ***');
    proposerChoix(rl);
}

module.exports = {
    titre: TITRE,
    demarrer
}