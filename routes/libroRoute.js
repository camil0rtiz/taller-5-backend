'use strict'

var express = require('express');

var libroController = require('../controllers/libroController');

var api = express.Router();


api.post('/libros', libroController.guardar);
api.get('/libros', libroController.listar);
api.get('/libro/:id', libroController.recupera);
api.put('/libros/:id', libroController.actualiza);
api.delete('/eliminar/:id', libroController.eliminar);

module.exports = api;
