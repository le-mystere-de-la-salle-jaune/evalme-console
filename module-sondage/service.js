class SondageService {
    constructor(){
        this.request = require('request')
    }

    lister(){
        return new Promise(
            (resolve, reject) => {
                this.request('https://evalme-noel.herokuapp.com/api/sondages/lister', { json: true }, (err, res, body) => {
                    if (err)
                        reject("Erreur : " + err)
                    else
                        resolve(body)
                })
            }
        )
    }

    listerById(id){
        return new Promise(
            (resolve, reject) => {
                this.request('https://evalme-noel.herokuapp.com/api/sondages/lister/' + id, { json: true }, (err, res, body) => {
                    if (err)
                        reject('Erreur :' + err)
                    else
                        resolve(body)
                })
            }
        )
    }
}

module.exports = SondageService