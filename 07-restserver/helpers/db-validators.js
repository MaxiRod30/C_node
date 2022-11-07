const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async (rol = '') =>{

    const existeRol = await Role.findOne({rol:rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en BD`)
    }
}

const emailExiste = async(correo = '') =>{
    const existeEmail = await Usuario.findOne({correo: correo})
   
    if(existeEmail){
        throw new Error( 'Este correo ya esta registrado');
    }
}
const existeUsuarioPorId = async(id) =>{
    const existeUsuario = await Usuario.findById(id)
       
    if(!existeUsuario){
        throw new Error( 'Este id no esta registrado');
    }
}

module.exports ={ esRolValido,emailExiste, existeUsuarioPorId}