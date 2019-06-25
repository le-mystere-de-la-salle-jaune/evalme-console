var service = require('../module-sondage/service')

// exemple d'utilisation de la liste.
service.lister(function(sondages) {
    console.log(sondages);
});