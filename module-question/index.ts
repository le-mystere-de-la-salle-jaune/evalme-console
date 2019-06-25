var lg = console.log;
var TITRE = 'QUESTION';
import {lister} from './service';

var demarrer = function(rl:any, sortir:any) {
    lg('*** ' + TITRE + ' ***');

    lg("1. Lister");
    lg("2. Sauvegarder");

    // récupération du choix
    rl.question("Votre choix : ", function(numeroChoix:any) {

        // une fois la saisie effectuée

        if(numeroChoix == 1) {
            lg(">>>> Vous avez choisi Lister");
            lister(function(liste:any){

                lg("liste recupere", liste);

                lg("liste[0].titre : "+liste[0].titre);

                lg("liste[i].options[j].id : "+liste[0].options[0].id)

                for(let i in liste){
                    lg("------------");
                    lg("QUESTION  "+liste[i].id+") " +liste[i].titre);
                    for(let j in liste[i].options){
                        lg("..... Reponse "+liste[i].options[j].id+") "+liste[i].options[j].libelle);
                    }
                }

                
                rl.close();
            });
        } else if (numeroChoix == 2) {
            lg(">>>> Vous avez choisi Sauvegarder");
            lg(">>>> La fonctionnalité n'est pas encore disponible, veuillez réessayer plus tard");
        } else{
            lg(">>>> Erreur de saisie");
        }

        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();
    });
};

export let modulQuestion = {
    titre : TITRE,
    demarrer : demarrer
}