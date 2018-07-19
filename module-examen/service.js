// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')

exports.lister = function (callback) {

    var uneListe = [{ nom : 'Hugues'}];

    request('https://examen-web-admin.herokuapp.com/api/examens', { json: true }, function(err, res, body) {
        if (err) { 
            return console.log('Erreur', err); 
        }

        // body contient les données récupérées
        //uneListe = body
        //console.log(body)

        // transmission de la réponse grâce à la technique du callback
        callback(body);
    });
};

exports.creer = function (newJson, callback) {

    request(
        { method: 'POST'
        , uri: 'https://examen-web-admin.herokuapp.com/api/examens'
        , body: newJson
        ,json: true
        }
      , function (error, response, body) {
          if(response.statusCode == 200){
            callback(200,"New examen corectly inserted")
          } else {
            callback(response.statusCode, body)
          }
        }
      )
};

exports.update = function (newJson, callback) {

    request(
        { method: 'POST'
        , uri: 'https://examen-web-admin.herokuapp.com/api/examens'
        , body: newJson
        ,json: true
        }
      , function (error, response, body) {
          if(response.statusCode == 200){
            callback(200,"New examen corectly inserted")
          } else {
            callback(response.statusCode, body)
          }
        }
      )
};

exports.supprimer = function (idExamen, callback) {

    request(
        { method: 'DELETE'
        , uri: 'https://examen-web-admin.herokuapp.com/api/examens/'+idExamen
        ,json: true
        }
      , function (error, response, body) {
          if(response.statusCode == 200){
            callback(200,"Examen corectly deleted")
          } else {
            callback(response.statusCode, body)
          }
        }
      )
};
