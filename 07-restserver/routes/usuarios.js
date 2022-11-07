const {Router} = require('express');
const { usuariosGet, usuariosPost,usuariosPut,usuariosDelete,usuariosPatch } = require('../controllers/usuarios');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

router.get('/', usuariosGet);

router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
],
usuariosPut);

// Verifico con midderwares el correr con express validator
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio y mas de 6 letras').isLength({min: 6}),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    //check('rol','NO es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),   la idea es validar contra una base de datos
    check('rol').custom(esRolValido), // (rol => esRolValido(rol)) es lo mismo que (esRolValido) debiedo a que cuando tienen el mismo argumento no es necesario escribirlo
    validarCampos
] ,usuariosPost);

router.delete('/:id',
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos,
    usuariosDelete);

router.patch('/',usuariosPatch);

module.exports = router;
