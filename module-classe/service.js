lg = console.log

exports.lister = function (callback) {
    var request = require('request')

// Envoie de la requête http
request('http://localhost:8080/api/classes', { json: true }, function(err, res, body) {
    if (err) { return lg('Erreur', err); }

    // body contient les données récupérées
    callback(body);
})};


exports.creer = function(sonNom) {
    var liste = lister
    var newClasse = 
    {
        id: liste.length+1,
        nom: sonNom
    }
    liste.add(newClasse)
    lg("classe créée !")
}