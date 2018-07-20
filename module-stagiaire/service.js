

exports.lister = function (callback) {

    // importation de la librairie request
    // recherche par défaut dans le répertoire node_modules
    var request = require('request')

    // Envoie de la requête http
    request('https://evalme-app.herokuapp.com/api/stagiaires', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        // transmission de la réponse grâce à la technique du callback
        callback(body);
    });
};

exports.creer = function (newStagiaire, callback) {

    var request = require('request')

    // Envoie de la requête http
    request.post({
        method: 'POST',
        uri: 'http://localhost:8080/api/stagiaires',
        json: true,
        body: newStagiaire,
    }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body);
    });
};
