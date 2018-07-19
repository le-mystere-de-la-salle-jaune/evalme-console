

exports.lister = function (callback) {

    // importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')

// Envoie de la requête http
request('https://evalme-app.herokuapp.com/api/stagiaire', { json: true }, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
    console.log('Ok', body);
    // transmission de la réponse grâce à la technique du callback
    callback(body);
});


    

};