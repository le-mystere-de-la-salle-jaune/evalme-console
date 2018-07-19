var service = require('../module-classe/service')

// exemple d'utilisation de la liste.
service.lister(function(uneListe) {
    console.log(uneListe[0].nom);
});