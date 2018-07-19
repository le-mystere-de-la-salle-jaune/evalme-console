var lg = console.log;

var service = require('../module-examen/service')

var optionsTab = [lister, creer, update, supprimer]
var saveOrUpdate = [service.creer, service.update]

// fonction démarrer exprimant la logique de votre entité
var demarrer = function (rl) {

    proposerChoix(rl)

};

function proposerChoix(rl) {
    afficherMenu()

    // récupération du choix
    rl.question("Votre choix : ", function (numeroChoix) {

        if (numeroChoix > 0 && numeroChoix < 5) {
            optionsTab[numeroChoix - 1](rl)
        } else if (numeroChoix == 99) {
            // permet d'arrêter l'application
            // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
            rl.close();
        }

    });
}

function proposerChoixRec(rl) {

    afficherMenu()

    // récupération du choix
    rl.question("Votre choix : ", function (numeroChoix) {

        if (numeroChoix > 0 && numeroChoix < 4) {
            optionsTab[numeroChoix - 1](rl)
            proposerChoixRec(rl)
        }

    });

}

function lister(rl) {
    service.lister(function (uneListe) {
        uneListe.forEach(element => {
            printExam(element)
        });

        proposerChoix(rl)
    });
}

function creer(rl) {

    lg("*** Création d'un nouvel examen ***");
    // récupération du choix
    var emptyJson = {}

    saveExamInfos(rl, 0, emptyJson)
}

function update(rl) {

    var newJson = {}

    lg("*** Mise à jour d'un examen ***");
    // récupération du choix
    var newJson = {}

    rl.question("Id de l'éxamen à metre à jour : ", function(numeroChoix){
        newJson.id = numeroChoix
        saveExamInfos(rl, 1, newJson)
    })
}

function supprimer(rl) {
    lg("*** Suppression d'un éxamen ***")
    service.lister(function (uneListe) {
        uneListe.forEach(element => {
            printExam(element)
        })

        rl.question("Id de l'éxamen à supprimer : ", function (numeroChoix) {
            service.supprimer(numeroChoix, function (code, message) {
                if (code == 200) {
                    lg(message)
                } else {
                    lg("Error :", code)
                    lg(message)
                }

                //loop back
                proposerChoix(rl)
            })
        })
    })

}

function printExam(exam) {
    lg("{"
        , "\n\tid :", exam.id
        , "\n\ttitre :", exam.titre
        , "\n\tclasse : {"
        , "\n\t\tid :", exam.classe.id
        , "\n\t\tnom :", exam.classe.nom
        , "},"
        , "\n\tquizz : {"
        , "\n\t\tid :", exam.quizz.id
        , "\n\t\ttitre :", exam.quizz.titre
        , "\n\t\tnb_questions :", exam.quizz.nb_questions
        , "\n\t}\n}")
}

function afficherMenu() {
    lg("*** Entité Examen ***");
    lg("1.  Lister");
    lg("2.  Sauvegarder");
    lg("3.  Editer");
    lg("4.  Supprimer");
    lg("99. Quitter")
}

function saveExamInfos(rl, service, newJson) {
    rl.question("Titre de l'examen : ", function (numeroChoix) {
        newJson.titre = numeroChoix
        rl.question("Id du quizz : ", function (numeroChoix) {
            newJson.quizz_id = numeroChoix
            rl.question("Id de la classe : ", function (numeroChoix) {
                newJson.classe_id = numeroChoix

                lg("Transmiting request, please wait ...")
                saveOrUpdate[service](newJson, function (code, message) {
                    if (code == 200) {
                        lg(message)
                    } else {
                        lg("Error :", code)
                        lg(message)
                    }

                    //loop back
                    proposerChoix(rl)
                })
            });
        });
    });
}

// exposition d'informations exploitées par le module parent
module.exports = {

    // titre utilisé par le menu parent
    titre: 'Examen',

    // fonction invoquée lorsque ce module est choisi
    demarrer: demarrer
}
