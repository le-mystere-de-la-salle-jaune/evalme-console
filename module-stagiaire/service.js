/*class Service {

    lister() {

    }

    creer() {
        
    }
}*/

/*exports.lister = function (callback) {

    // importation de la librairie request
    // recherche par défaut dans le répertoire node_modules
    const request = require('request')

    // Envoie de la requête http
    request('http://localhost:8080/api/stagiaires', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        // transmission de la réponse grâce à la technique du callback
        callback(body);
    });
};*/
exports.lister = () => {
    const rp = require('request-promise-native');
    return  rp('http://localhost:8080/api/stagiaires', { json: true })
               // .then(bodyString => JSON.parse(bodyString));
};

exports.creer = function (newStagiaire, callback) {

    const request = require('request')

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
