'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');

// Cargamos el controlador
var autoController = require('../controllers/autoController');

// Llamamos al router
var api = express.Router();

//  Guardar Autos
api.post('/auto', autoController.guardar);
api.get('/auto', autoController.listar);
api.get('/autosimple', autoController.listarSimple);
api.delete('/eliminarauto/:id',autoController.eliminar);
// Exportamos la configuración
module.exports = api;