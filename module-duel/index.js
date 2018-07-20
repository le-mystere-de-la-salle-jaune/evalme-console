const TITRE = 'Duel';
const Service = require('../module-duel/service')
service = new Service()
const lg = console.log;
// TODO faire une map options {libelle, fonction}

const demarrer = rl => {
    proposerChoix(rl)
}

function afficherMenu() {
    lg(`
    *** ${TITRE} ***
    1. Lister les duels
    2. Créer un duel
    3. Editer un duel
    4. Supprimer un duel

    0. Quitter
    `)
}

function proposerChoix(rl) {
    afficherMenu()
    rl.question('Votre choix :\n', numeroChoix => {

        switch (numeroChoix) {
            // Lister les duels
            case '1':
                lister()
                proposerChoix(rl)
                break

            // Créer un duel
            case '2':
                creer()
                proposerChoix(rl)
                break

            // Editer un duel
            case '3':
                editer()
                proposerChoix(rl)
                break

            // Supprimer un duel
            case '4':
                supprimer()
                proposerChoix(rl)
                break

            // Quitter
            case '0':
                rl.close()
                break

            // default
            default:
                lg(`Cette option n'exixte pas !`)
                proposerChoix(rl)
                break
        }
    })
}

function lister() {
    service.lister().then(body => {
        body.forEach(element => {
            lg(`${element.id} : ${element.stagiaireA.nom} vs. ${element.stagiaireB.nom} dans ${element.quizz.titre}`)
        })
    }, error => {
        lg(`Erreur : ${error}`)
    })
}

function creer() {

}

function editer() {

}

function supprimer() {

}
module.exports = {
    titre: TITRE,
    demarrer: demarrer
}