// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
const request = require('request')

exports.lister = callback => {

    request('https://examen-web-admin.herokuapp.com/api/examens', { json: true }, (err, res, body) => {
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

exports.creer = (newJson, callback) => {

    request(
        { method: 'POST'
        , uri: 'https://examen-web-admin.herokuapp.com/api/examens'
        , body: newJson
        ,json: true
        }
      , (error, response, body) => {
          if(response.statusCode == 200){
            callback(200,"New examen corectly inserted")
          } else {
            callback(response.statusCode, body)
          }
        }
      )
};

exports.update = (newJson, callback) => {

    request(
        { method: 'PUT'
        , uri: 'https://examen-web-admin.herokuapp.com/api/examens/'+newJson.id
        , body: newJson
        ,json: true
        }
      , (error, response, body) => {
          if(response.statusCode == 200){
            callback(200,"New examen corectly inserted")
          } else {
            callback(response.statusCode, body)
          }
        }
      )
};

exports.supprimer = (idExamen, callback) => {

    request(
        { method: 'DELETE'
        , uri: 'https://examen-web-admin.herokuapp.com/api/examens/'+idExamen
        ,json: true
        }
      , (error, response, body) => {
          if(response.statusCode == 200){
            callback(200,"Examen corectly deleted")
          } else {
            callback(response.statusCode, body)
          }
        }
      )
};
