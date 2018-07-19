exports.lister = function (callback) {
    var uneListe = [{ nom : 'D10', id : 01},{ nom : 'D11', id : 02},{ nom : 'D12', id : 03},{ nom : 'D13', id : 04},{ nom : 'D14', id : 05},{ nom : 'D15', id : 06}];
    // transmission de la réponse grâce à la technique du callback
    callback(uneListe);

};