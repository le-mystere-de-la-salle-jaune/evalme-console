const lg = console.log;


const service = require('../module-stagiaire/service')

// fonction démarrer exprimant la logique de votre entité
const demarrer = function(rl) {

    // exemple d'affichage de menu
    lg("*** Stagiaire ***");
    lg("1. Lister");
    lg("2. Créer");
    lg("3. Editer");
    lg("4. Supprimer");



    // récupération du choix
    rl.question("Votre choix : ", numeroChoix => {

        // une fois la saisie effectuée

        if(numeroChoix == 1) {
            lg(">>>> Vous avez choisi Lister");
            // liste les stagiaires

service.lister().then(uneListe => {
    console.log(typeof uneListe)
    uneListe.forEach(element => {
        console.log(`
        Nom : ${element.nom}, 
        Prenom : ${element.prenom},
        Email : ${element.email}, 
        Photo : ${element.photo_url}
         `);
        rl.close();
    });
});
        } else if (numeroChoix == 2) {
            lg(">>>> Vous avez choisi Créer");
            // création d'un stagiaire
const newStagiaire = {};

rl.question("Nom : ", newNom => {
    newStagiaire.nom = newNom;
    rl.question("Prénom : ", newPrenom => {
        newStagiaire.prenom = newPrenom;
        rl.question("Email : ", newEmail => {
            newStagiaire.email = newEmail;
            rl.question("Photo : ", newPhoto => {
                newStagiaire.photo_url = newEmail;

                service.creer(newStagiaire, body => {
                    console.log(`Un nouveau stagiaire a été créé : ${newStagiaire.nom}, avec l'id ${body.stagiaire_id}`);
        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();

                });

            });
        });
    });
});
        }
  
    });
};


// exposition d'informations exploitées par le module parent
module.exports = {

    // titre utilisé par le menu parent
    titre : 'stagiaire',

    // fonction invoquée lorsque ce module est choisi
    demarrer : demarrer
}


