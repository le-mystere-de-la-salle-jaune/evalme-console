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
                sondages.forEach(function (element) {
                    lg("Titre :", element.titre, " | Classe :", element.classe.nom, " | Nombre d'option :", element.nb_options);
                });
            });
        } else if (numeroChoix == 2) {
           
        }

        rl.close();
    });
};

module.exports = {
    titre: TITRE,
    demarrer: demarrer
}