// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
const request = require('request')

class Service{
  constructor() {

  }

  lister (){

    return new Promise((resolve, reject) => {
      request('https://examen-web-admin.herokuapp.com/api/examens', { json: true }, (err, res, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body)
        }
      })
    })
  };
  
  creer(newJson){
    return new Promise((resolve, reject) => {
      request(
        {
          method: 'POST'
          , uri: 'https://examen-web-admin.herokuapp.com/api/examens'
          , body: newJson
          , json: true
        }
        , (error, response, body) => {
          let responseArray = [response, body, error]
          if (response.statusCode == 201) {
            resolve("New exam correctly inserted.")
          } else {
            reject(responseArray)
          }
        }
      )
    })
  };
  
  update(newJson) {
  
    return new Promise((resolve, reject) => {
      request(
        {
          method: 'PUT'
          , uri: 'https://examen-web-admin.herokuapp.com/api/examens/' + newJson.id
          , body: newJson
          , json: true
        }
        , (error, response, body) => {
          let responseArray = [response, body, error]
          if (response.statusCode == 200) {
            resolve("Exam correctly updated.")
          } else {
            reject(responseArray)
          }
        }
      )
    })
  }
  
  supprimer(idExamen, callback) {
  
    return new Promise((resolve, reject) => {
      request(
        {
          method: 'DELETE'
          , uri: 'https://examen-web-admin.herokuapp.com/api/examens/' + idExamen
          , json: true
        }
        , (error, response, body) => {
          let responseArray = [response, body, error]
          if (response.statusCode == 200) {
            resolve("Examen corectly deleted.")
          } else {
            reject(responseArray)
          }
        }
      )
    })
  };
  
}

module.exports = Service


