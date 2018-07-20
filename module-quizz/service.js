const request = require('request')
const lg = console.log;
lister = function (callback) {
    request('http://localhost:8080/api/quizzes/lister', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        callback(body)
        // body contient les données récupérées
        //console.log('Ok', body);
    });
};

listerParId = function (id, callback) {
    request('http://localhost:8080/api/quizzes/lister/' + id, { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        callback(body)
        // body contient les données récupérées
        //console.log('Ok', body);
    });
};

getMenu = (userChoice) => {
    return menuTab[userChoice - 1];
}
getCallback = (userChoice) => {
    return callbackTab[userChoice - 1];
}
const menuTab = [lister, listerParId]
const callbackTab = [(body) => {body.forEach(quizz => {lg(quizz.titre)})}];
module.exports = {
    menuTab,
    lister,
    getMenu,
    getCallback
}

/*
(
function(exports, require, module, __filename, __dirname) {
    // code du module

    exports = {

    }

    exports.lister = 2;
    
    module.exports = {
    
    }
    

});*/