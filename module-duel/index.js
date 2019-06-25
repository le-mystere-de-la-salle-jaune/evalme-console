"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TITRE = 'Duel';
var Service = require('../module-duel/service');
var service = new Service();
var utils_1 = require("../utils");
// TODO faire une map options {libelle, fonction}
var demarrer = function (rl) {
    proposerChoix(rl);
};
function afficherMenu() {
    utils_1.lg("\n    *** " + TITRE + " ***\n    1. Lister les duels\n    2. Cr\u00E9er un duel\n    3. Editer un duel\n    4. Supprimer un duel\n\n    0. Quitter\n    ");
}
function proposerChoix(rl) {
    afficherMenu();
    rl.question('Votre choix :\n', function (numeroChoix) {
        switch (numeroChoix) {
            // Lister les duels
            case '1':
                lister();
                proposerChoix(rl);
                break;
            // Créer un duel
            case '2':
                creer();
                proposerChoix(rl);
                break;
            // Editer un duel
            case '3':
                editer();
                proposerChoix(rl);
                break;
            // Supprimer un duel
            case '4':
                supprimer();
                proposerChoix(rl);
                break;
            // Quitter
            case '0':
                rl.close();
                break;
            // default
            default:
                utils_1.lg("Cette option n'exixte pas !");
                proposerChoix(rl);
                break;
        }
    });
}
function lister() {
    service.lister().then(function (body) {
        body.forEach(function (element) {
            utils_1.lg(element.id + " : " + element.stagiaireA.nom + " vs. " + element.stagiaireB.nom + " dans " + element.quizz.titre);
        });
    }, function (error) {
        utils_1.lg("Erreur : " + error);
    });
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
};
