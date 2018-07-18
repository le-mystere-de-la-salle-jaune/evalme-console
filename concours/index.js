var lg = console.log;

var TITRE = 'Concours';

var demarrer = function(rl, sortir) {
    lg('*** ' + TITRE + ' ***');
    lg("1. Lister");

    rl.question("Votre choix : ", function(numeroChoix) {

        // une fois la saisie effectuée

        if(numeroChoix == 1) {
            lg(">>>> Vous avez choisi Lister");
        } else if (numeroChoix == 2) {
            lg(">>>> Vous avez choisi Sauvegarder");
        }

        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();
    });

};

module.exports = {
    titre : TITRE,
    demarrer : demarrer
}