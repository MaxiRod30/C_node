const {response , request} = require('express');


const usuariosGet = (req = request , res = response) => {
    
    const {nombre= "NO NAME", apikey , limit , page = 1 } = req.query; //  http://127.0.0.1:8080/api/usuarios?q=hola&nombre=maxi&edad=20&sexo=puto&page=1&apikey=21144

    res.status(201).json({
        "ok": true,
        "msg":"get API - Controller",
        nombre,
        apikey,
        limit,
        page
    });
}

const usuariosPost = (req ,res = response) => {

    const {nombre,edad} = req.body;

    res.status(201).json({
        "ok": true,
        "msg":` ${ nombre } se la come y la edad es de ${ edad} `
        
    });
}

const usuariosPut = (req ,res = response) => {

    const {id} = req.params; //levanta el 11 - http://127.0.0.1:8080/api/usuarios/11
    
    res.status(201).json({
        "ok": true,
        "msg":"Put API - Controller",
        id
    });
}

const usuariosDelete = (req,res = response) => {
    res.status(201).json({
        "ok": true,
        "msg":"Delete API - Controller"
    });
}
const usuariosPatch = (req,res = response) => {
    res.status(201).json({
        "ok": true,
        "msg":"patch API - Controller"
    });
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}