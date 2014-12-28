/**
 * Created by arobles on 10/14/14.
 */
    'use strict';
var Pet = require('./../models/pet.js');
module.exports = {
    findAllPets: function(req, res) {
        console.log(res.send);
        return Pet.find(function(err, pets) {
            if(!err) {
                return res.send({status: 'OK', pets:pets});
            } else {
                res.statusCode = 500;
                console.error('Error', res.statusCode, err.message);
                return res.send({ error: 'Server error' });
            }
        });
    },
    findById: function(req, res) {
        return Pet.findById(req.params.id, function(err, pet) {
            if(!pet) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if(!err) {
                return res.send({ status: 'OK', pet:pet });
            } else {
                res.statusCode = 500;
                console.error('Error', res.statusCode, err.message);
                return res.send({ error: 'Server error' });
            }
        });
    },
    addPet: function(req, res) {
        console.log(req.body);
        var pet = new Pet({
            animal:    req.body.animal,
            age :    req.body.age,
            color:    req.body.color
        });
        pet.save(function(err) {
            var toPrint = null;
            if(err) {
                console.log('Error while saving pet: ' + err);
                res.send({ error:err });
            } else {
                console.log("Pet created");
                toPrint =  res.send({ status: 'OK', pet:pet });
            }
            return toPrint;
        });
    },
    updatePet: function(req, res) {
        return Pet.findById(req.params.id, function(err, pet) {
            if(!pet) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if (req.body.animal !== null) {
                pet.animal = req.body.animal;
            }
            if (req.body.age !== null) {
                pet.age = req.body.age;
            }
            if (req.body.color !== null) {
                pet.color = req.body.color;
            }
            return pet.save(function(err) {
                if(!err) {
                    console.log('Updated');
                    return res.send({ status: 'OK', pet:pet });
                } else {
                    if(err.name === 'ValidationError') {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    } else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                    }
                    console.error('Error',res.statusCode,err.message);
                }
                return res.send(pet);
            });
        });
    },
    deletePet: function(req, res) {
        return Pet.findById(req.params.id, function(err, pet) {
            if(!pet) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            return pet.remove(function(err) {
                if(!err) {
                    console.log('Removed pet');
                    return res.send({ status: 'OK' });
                } else {
                    res.statusCode = 500;
                    console.error('Error', res.statusCode, err.message);
                    return res.send({ error: 'Server error' });
                }
            });
        });
    }
};