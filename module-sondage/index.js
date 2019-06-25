const SondageService = require('../module-sondage/service')

const sondageService = new SondageService();

const lg = console.log;

const TITRE = 'Sondage';

const demarrer = function (rl, sortir) {
    lg('*** ' + TITRE + ' ***');
    lg("1. lister");
    lg("2. lister par ID");

    rl.question("votre choix: ", numeroChoix => {
        if (numeroChoix == 1) {
            sondageService.lister().then(liste => {
                liste.forEach(sondage => {
                    lg(`Titre : ${sondage.titre} | Classe : ${sondage.classe.nom} | Nombre d'option : ${sondage.nb_options}`)
                });
            })
                .then(rl.close())
                .catch(error => lg(error))
        } else if (numeroChoix == 2) {
            rl.question("Selectionner un id :", id => sondageService.listerById(id)
                .then(sondage => {
                    lg(`Titre : ${sondage.titre} | Classe : ${sondage.classe.nom}`);
                    sondage.options.forEach(opt =>
                        lg(`- Titre : ${opt.libelle} | description : ${opt.description}`)
                    )
                })
                .then(rl.close())
                .catch(error => lg(error))
            )
        }
    })
};

module.exports = {
    titre: TITRE,
    demarrer: demarrer
}