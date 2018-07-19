// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request');

exports.lister = function (callback) {

    // Envoie de la requête http
    request('https://question-web-admin.herokuapp.com/api/questions', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }

        callback(body);

    });

};