'use strict'

var Marca = require('../modelos/marca');

function guardar(req, res) {

    let marca = new Marca()
    marca.descripcion = req.body.descripcion

    marca.save((err, marcastore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ marca: marcastore })

    })
}


function todos(req, res) {

    Marca.find({}, (err, marca) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!marca) return res.status(404).send({ message: 'Error la persona no existe' })

        res.status(200).send({marca})
    })
}


module.exports = {
    guardar,
    todos,
};
