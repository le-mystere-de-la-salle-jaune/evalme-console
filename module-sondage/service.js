exports.lister = function (callback) {

    var request = require('request')

    // Envoie de la requête http
    request('https://evalme-noel.herokuapp.com/api/sondages/lister', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        var sondages = body;

        // transmission de la réponse grâce à la technique du callback
        callback(sondages);
    });
};

exports.listerById = function (callback) {

    var request = require('request')

    // Envoie de la requête http
    request('https://evalme-noel.herokuapp.com/api/sondages/lister/1', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        var sondageById = body;

        // transmission de la réponse grâce à la technique du callback
        callback(sondageById);
    });
};