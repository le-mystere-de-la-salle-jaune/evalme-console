const lg = console.log;

// fonction démarrer exprimant la logique de votre entité
const demarrer = function(rl) {

    // exemple d'affichage de menu
    lg("*** Entité Personne ***");
    lg("1. Lister");
    lg("2. Sauvegarder");


    // récupération du choix
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


// exposition d'informations exploitées par le module parent
module.exports = {

    // titre utilisé par le menu parent
    titre : 'Personne',

    // fonction invoquée lorsque ce module est choisi
    demarrer
}