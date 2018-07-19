var service = require('../module-sondage/service')
var lg = console.log;

var TITRE = 'Sondage';

var demarrer = function (rl, sortir) {
    lg('*** ' + TITRE + ' ***');
    lg("1. lister");
    lg("2. lister par ID");

    rl.question("votre choix:", function (numeroChoix) {
        if (numeroChoix == 1) {
            service.lister(function (sondages) {
                sondages.forEach( element =>
                    lg("Titre :", element.titre, " | Classe :", element.classe.nom, " | Nombre d'option :", element.nb_options)
                );
            });
            rl.close();
        } else if (numeroChoix == 2) {
            rl.question("selectionner un ID :", function(id){
                service.listerById(id, function(sondage) {
                    lg("Titre :",sondage.titre, "| Classe :", sondage.classe.nom);
                    lg("Options :");
                    sondage.options.forEach( opt => 
                        lg("- Titre :", opt.libelle, "| description :", opt.description)
                    );
                });
                rl.close();
            });
        }
    });
};

module.exports = {
    titre: TITRE,
    demarrer: demarrer
}