var Libro = require('../modelos/libro.js');

function guardar(req,res){

    try{
      
            let libro = new Libro()
            libro.nombre = req.body.nombre
            libro.anio = req.body.anio
            libro.idioma = req.body.idioma
            libro.autor = req.body.autor
        
            libro.save((err, librostore) => {
        
                if (err) return res.status(400).send({mensaje:`Error al intentar guardar en base de datos> ${err}`})
        
                res.status(200).send({ libro: librostore })
        
            })
    } catch (error) {
        res.status(500).send({ mensaje: `error:` + error })
    }
}

function listar(req,res)
{
    Libro.find({}, (err, libros) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        res.status(200).send({ libros })
    })
}
function recupera(req,res)
{
    let idlibro = req.params.id
    Libro.findById(idlibro, (err, libro) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        res.status(200).send({ libro })
    })
}

function actualiza(req, res){

    let idlibro = req.params.id

    let nombre = req.body.nombre
    let año = req.body.anio
    let idioma = req.body.idioma
    let autor = req.body.autor

    Libro.findByIdAndUpdate(idlibro,{nombre: nombre, anio:año, idioma:idioma, autor:autor}, (err,libro)=>{

        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })

        res.status(200).send({ message: 'Editado correctamente ',data: libro})

    })

}

function eliminar(req, res){

    let idlibro = req.params.id

    Libro.findByIdAndDelete(idlibro, (err)=>{
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })

        res.status(200).send({ message: 'Eliminado correctamente'})
    })

}


module.exports = {
    guardar,
    listar,
    recupera,
    actualiza,
    eliminar
};
