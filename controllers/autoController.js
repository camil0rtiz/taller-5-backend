'use strict'

var Auto = require('../modelos/auto');


function guardar(req, res) {


    let auto = new Auto()
    auto.anio = req.body.anio
    auto.patente = req.body.patente
    auto.marca = req.body.idMarca

    auto.save((err, autostore) => {

        res.status(200).send({ autoregistrado: autostore })

    })

}

function listarSimple(req, res) {
    Auto.find({}, (err, auto) => {
        if (!auto) return res.status(404).send({ message: 'Error asignatura no existe' })
        res.status(200).send({ auto })
    })
}

function listar(req, res) {
    Auto.find()
        .populate('marca').exec((err, autoconmarca) => {
            res.status(200).send({ autoconmarca })
        })
}


function eliminar(req, res){

    let idAuto = req.params.id

    Auto.findByIdAndDelete(idAuto, (err)=>{
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })

        res.status(200).send({ message: 'Eliminado correctamente'})
    })
}

module.exports = {
    guardar,
    listarSimple,
    listar,
    eliminar
};