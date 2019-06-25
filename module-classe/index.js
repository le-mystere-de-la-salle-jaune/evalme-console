var lg = console.log;
var TITRE = 'Classe'
var service = require('../module-classe/service')
var request = require('request')
// fonction démarrer exprimant la logique de votre entité
var demarrer = function(rl) 
{

    // exemple d'affichage de menu
    lg(`*** Entité ${TITRE} ***`);
    lg(`1. Lister les classes`);
    lg(`2. Créer une nouvelle classe`);


    // récupération du choix
    rl.question(`Votre choix :`, function(numeroChoix) 
    {

        // une fois la saisie effectuée

        if(numeroChoix == 1) 
        {
            lg(`>>>> Vous avez choisi de lister`)
            lg(`ID classe || Nom classe`)
            lg(`-----------------------`)

            service.lister(function(uneListe) 
            {
                uneListe.forEach(element => 
                {
                    console.log(`    ${element.id}     ||    ${element.nom}`)
                })
            })

            lg(`*** Souhaitez vous voir les détails d'une ${TITRE} ? ***`)
            lg(`1. Oui`)
            lg(`2. Non`)

            rl.question(`Votre choix :`, function(numeroChoix) 
            {
                if(numeroChoix == 1) 
                {
                    lg(`*** Entrez l'id de la classe que vous souhaitez examiner ***`)

                    rl.question(`Id :`, function(id) 
                    {
                        service.detail(function(id,uneClasse) 
                        {
                                console.log(uneClasse)
                        })
                    })
                }
            })
        
        } 
        else if (numeroChoix == 2) 
        {
            lg(`>>>> Vous avez choisi de créer une nouvelle classe`);

            rl.question("Le nom de votre classe : ", function(nomClasse) 
                {
                    service.creer(sonNom)
                }
            )
        }

        // permet d'arrêter l'application
        // à n'invoquer que si l'on ne servira plus de la saisie utilisateur
        rl.close();
    })
};


// exposition d'informations exploitées par le module parent
module.exports = {

    // titre utilisé par le menu parent
    titre : TITRE,

    // fonction invoquée lorsque ce module est choisi
    demarrer : demarrer
}