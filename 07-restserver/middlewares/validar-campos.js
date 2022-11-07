const { validationResult } = require('express-validator');


const validarCampos = (req,res, next) =>{

    const errors = validationResult(req);

    if (!errors.isEmpty()){
     return res.status(400).json(errors);
    }
    // continua con el siguiente middlewares()funcion
    next();
}

module.exports = {
    validarCampos
}