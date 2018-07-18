exports.lister = function (callback) {

    var request = require('request')

    // Envoie de la requête http
    request('https://evalme-back.herokuapp.com/api/duels', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        // transmission de la réponse grâce à la technique du callback
        callback(body);

    });


}