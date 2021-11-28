'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

var marcaController = require('../controllers/marcaController');

var api = express.Router();

api.post('/marca', marcaController.guardar);
api.get('/marca', marcaController.todos);
api.delete('/eliminar/:id',marcaController.eliminar);

module.exports = api;