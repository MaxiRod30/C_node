const {response , request} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs'); // para encriptar contraseñas

const usuariosGet = async (req = request , res = response) => {
    
    const { limite = 5 , desde = 0} = req.query;
    const query ={estado: true}
/*
Si lo realizamos de esta manera al ejecutar la primera promesa debemos esperar que termine para ejecutar la siguiente
    const usuarios = await Usuario.find(query)
    .skip(Number(desde))
    .limit(Number(limite));

   const total = await Usuario.countDocuments(query);
*/ 
   // DE esta manera procesamos las dos promesa a la misma vez, ademas agreagamos el await para que cuando termine ejecute la repuesta
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.status(200).json({
        total,
        usuarios
    });
}

const usuariosPost = async (req ,res = response) => {

   
   
    // para mas campos {google, ... rest}
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Incriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt)
    //Guardar en la base de datos
    await usuario.save();

    res.status(201).json({
        "msg": 'post API - usariosPost',
         usuario
        
    });
}

const usuariosPut = async (req ,res = response) => {

    const {id} = req.params; //levanta el 11 - http://127.0.0.1:8080/api/usuarios/11
    const {_id,password, google, correo, ...resto} = req.body;
    if(password){
        // Incriptar la contraseña
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id , resto);
    res.status(201).json({
        usuario,   
    });
}

const usuariosDelete = async (req,res = response) => {

    const { id } = req.params;
    //Fisicamente lo borramos
    //const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id,{estado :false});

    res.status(200).json({
        usuario
    });
}
const usuariosPatch = (req,res = response) => {
    res.status(200).json({
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