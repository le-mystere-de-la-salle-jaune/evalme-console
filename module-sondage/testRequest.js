var request = require('request')

// Envoie de la requête http
request('https://evalme-noel.herokuapp.com/api/sondages/lister', { json: true }, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
    console.log('Ok', body);
});