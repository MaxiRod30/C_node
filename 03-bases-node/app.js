//***Creacion de prograna para correr en consola*******
// Como iniciar un proyecto
// Primero que nada: npm unit (genera el json, archivo donde documentara todas las dependencias)
// Para instalar dependecias ejemplo colors: npm install colors
// Para instalar una dependecia de desarrollo: npm install nodemon --save-dev  : Para desinstalar npm uninstall nodemon  
// Para instalar una version que nosotros queramos: npm install colors@1.0.0
// npm update para actualizar dependencias
// package-lock.jason no se modifica


//yargs - npm i yargs : 
//*****llamado a funcion multiplicar********
//const { argv } = require('node:process');
const { demandOption } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs'); // traigo configuracion de yargs


//const base = 4;

console.clear();


//*****Diagnostico**********

//console.log(process.argv);// muestra el proceso que realiza el comando node app.js
//console.log('********************');
//console.log(argv);

//********Esta manera no es recomendada debido a la falencias que tiene**************
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(base);

//*******Creacion de archivo txt*********

crearArchivo(argv.b,argv.l,argv.h)
  .then( nombreArchivo => console.log(nombreArchivo,'creado'))
  .catch(err => console.log(err));


// ejemplo en consola se puede ejecutar node app -b 2 -l ( base=2 y listar)