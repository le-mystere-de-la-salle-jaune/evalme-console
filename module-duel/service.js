const request = require('request')

class Service {
    constructor() {

    }

    /** Lister les duels */
    lister() {
        return new Promise((resolve, reject) => {
            request('https://evalme-back.herokuapp.com/api/duels', { json: true }, (err, res, body) => {
                if (err) reject(err)
                else resolve(body)
            })
        })
    }

    /** Créer un duel */
    creer(newJson) {
        return new Promise((resolve, reject) => {
            request(
                {
                    method: 'POST',
                    uri: 'https://evalme-back.herokuapp.com/api/duels',
                    body: newJson,
                    json: true
                },
                (err, res, body) => {
                    if (res.statusCode === 201) resolve(`Duel correctement créé.`)
                    else reject(err)
                }
            )
        })
    }
}

module.exports = Service