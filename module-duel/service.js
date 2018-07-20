"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var Service = /** @class */ (function () {
    function Service() {
    }
    /** Lister les duels */
    Service.prototype.lister = function () {
        return new Promise(function (resolve, reject) {
            request_promise_native_1.default('https://evalme-back.herokuapp.com/api/duels', { json: true }, function (err, res, body) {
                if (err)
                    reject(err);
                else
                    resolve(body);
            });
        });
    };
    /** Créer un duel */
    Service.prototype.creer = function (newJson) {
        return new Promise(function (resolve, reject) {
            request_promise_native_1.default({
                method: 'POST',
                uri: 'https://evalme-back.herokuapp.com/api/duels',
                body: newJson,
                json: true
            }, function (err, res, body) {
                if (res.statusCode === 201)
                    resolve("Duel correctement cr\u00E9\u00E9.");
                else
                    reject(err);
            });
        });
    };
    return Service;
}());
module.exports = Service;
