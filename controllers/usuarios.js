const {response,request} = require('express');

const usuariosGet =(req,res = response)=>{
    const {q,nombre = 'No name',apiKey, page, limit} = req.query;
    res.json({
        msg: 'get API -controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    });
}

const usuariosPost= (req,res = response)=>{

    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API -controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response)=>{
    const {id} = req.params;
    res.json({
        msg: 'put API -controlador',
        id
    });
}

const usuariosPath = (req,res)=>{
    res.json({

        msg: 'patch API -controlador'
    });
}

const usuariosDelete = (req,res)=>{
    res.json({
        msg: 'delete API -controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}