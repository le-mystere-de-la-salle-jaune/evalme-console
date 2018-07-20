lg = console.log

exports.lister = function (callback) {
    const request = require('request')

// Envoie de la requête http
request('http://localhost:8080/api/classes/lister', { json: true }, function(err, res, body) {
    if (err) { return lg('Erreur', err); }

    // body contient les données récupérées
    callback(body);
})};

exports.detail = function (id,callback)
{
    const request = require('request')

    request(`http://localhost:8080/api/classes/lister/${id}`, { json: true }, function(err, res, body) 
    {
        if (err) 
        { 
            return lg('Erreur', err) 
        }

    // body contient les données récupérées
    callback(body);
    })
}


exports.creer = function(sonNom) {
    const liste = lister
    const newClasse = 
    {
        id: liste.length+1,
        nom: sonNom
    }
    liste.add(newClasse)
    lg(`Classe ${newClasse.name} créée !`)
}