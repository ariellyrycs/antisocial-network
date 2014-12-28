'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    pet = new Schema({
        animal: {
            type    : String,
            enum    :  ['cat', 'dog', 'snake', 'hamster'],
            require : true
        },
        age: {
            type    : Number,
            enum    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            require : true
        },
        color: {
            type: String
        },
        modified: {
            type    : Date,
            default : Date.now
        }
});

module.exports = mongoose.model('pet', pet);