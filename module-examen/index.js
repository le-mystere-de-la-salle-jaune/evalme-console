const lg = console.log;

const Service = require('../module-examen/service')

serviceObj = new Service()

const optionsTab = [lister, creer, update, supprimer]
const saveOrUpdate = [serviceObj.creer, serviceObj.update]

// fonction démarrer exprimant la logique de votre entité
const demarrer = rl => {

    proposerChoix(rl)

};

function proposerChoix(rl) {
    afficherMenu()

    // récupération du choix
    rl.question("Votre choix : ", numeroChoix => {

        if (numeroChoix > 0 && numeroChoix < 5) {
            optionsTab[numeroChoix - 1](rl)
        } else if (numeroChoix == 99) {
            // permet d'arrêter l'application
            // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
            rl.close();
        }

    });
}

function lister(rl) {

    lg("Request is sent, please wait ...")

    serviceObj.lister().then(body =>{
        body.forEach(element => {
            printExam(element)
        })
        proposerChoix(rl)
    }, error => {
        lg("Error :", error)
        proposerChoix(rl)
    })
}

function creer(rl) {

    lg("*** Création d'un nouvel examen ***");
    // récupération du choix
    let emptyJson = {}

    saveExamInfos(rl, 0, emptyJson)
}

function update(rl) {

    let newJson = {}

    lg("*** Mise à jour d'un examen ***");
    // récupération du choix

    rl.question("Id de l'éxamen à metre à jour : ", numeroChoix =>{
        newJson.id = numeroChoix
        saveExamInfos(rl, 1, newJson)
    })
}

function supprimer(rl) {
    lg("*** Suppression d'un éxamen ***")
    serviceObj.lister().then(body =>{
        body.forEach(element => {
            printExam(element)
        })

        return questionPromise(rl, "Id de l'éxamen à supprimer : ")

    }).then(numeroSuppr => {
        return serviceObj.supprimer(numeroSuppr)
    }).then(okString => {
        lg(okString)
        return Promise.resolve();
    }, errorArray =>{
        lg("Error :", errorArray[0].statusCode)
        lg(errorArray[2])
        lg(errorArray[1])
        return Promise.resolve();
    }).then(() => {
        proposerChoix(rl)
    })
}

function printExam(exam) {

    lg(`
    {
        id : ${exam.id},
        titre : ${exam.titre},
        classe : {
            id : ${exam.classe.id},
            nom : ${exam.classe.nom}
        },
        quizz : {
            id : ${exam.quizz.id},
            titre : ${exam.quizz.titre},
            nb_questions : ${exam.quizz.nb_questions}
        }
    }`)
}

function afficherMenu() {

    lg(`
    *** Entité Examen ***
    1.  Lister
    2.  Sauvegarder
    3.  Editer
    4.  Supprimer
    99. Quitter`)
}

function saveExamInfos(rl, service, newJson) {
    rl.question("Titre de l'examen : ", numeroChoix => {
        newJson.titre = numeroChoix
        rl.question("Id du quizz : ", numeroChoix => {
            newJson.quizz_id = numeroChoix
            rl.question("Id de la classe : ", numeroChoix => {
                newJson.classe_id = numeroChoix

                lg("Transmiting request, please wait ...")
                saveOrUpdate[service](newJson).then(okString =>{
                    lg(okString)
                    proposerChoix(rl)
                },errorArray =>{
                    lg("Error :", errorArray[0].statusCode)
                    lg(errorArray[2])
                    lg(errorArray[1])
                    proposerChoix(rl)
                })
            });
        });
    });
}

function questionPromise(rl, question){
    return new Promise((resolve, reject) => {
        rl.question(question, numeroChoix => {
            resolve(numeroChoix)
        })
    })
}

// exposition d'informations exploitées par le module parent
module.exports = {

    // titre utilisé par le menu parent
    titre: 'Examen',

    // fonction invoquée lorsque ce module est choisi
    demarrer
}
