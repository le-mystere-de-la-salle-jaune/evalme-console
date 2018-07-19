var lg = console.log;


var service = require('../module-stagiaire/service')

// fonction démarrer exprimant la logique de votre entité
var demarrer = function(rl) {

    // exemple d'affichage de menu
    lg("*** Stagiaire ***");
    lg("1. Lister");
    lg("2. Créer");
    lg("3. Editer");
    lg("4. Supprimer");



    // récupération du choix
    rl.question("Votre choix : ", function(numeroChoix) {

        // une fois la saisie effectuée

        if(numeroChoix == 1) {
            lg(">>>> Vous avez choisi Lister");
        } else if (numeroChoix == 2) {
            lg(">>>> Vous avez choisi Sauvegarder");
        }

        // liste les stagiaires
service.lister(function(uneListe) {
    uneListe.forEach(function(element) {
        console.log('Nom : ' + element.nom + ', Prenom : ' + element.prenom + ', Email : ' + element.email + ', Photo : ' + element.photo_url);
    });
});
        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();
    });
};


// exposition d'informations exploitées par le module parent
module.exports = {

    // titre utilisé par le menu parent
    titre : 'stagiaire',

    // fonction invoquée lorsque ce module est choisi
    demarrer : demarrer
}


