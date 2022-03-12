// Con esta importacion me permite leer variables de entorno(globales) que guarde en el archivo .env
// Para ver las variables de entorno console.log(process.env)
require('dotenv').config()

const { leerDB } = require('../04-tareas-hacer/helpers/guardarArchivo');
const { leerInput,inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() =>{


  const busquedas = new Busquedas();
  
  let opt = 0;
  let varpausa = '';
 // busquedas.leerDB();
  
  do{

  opt = await inquirerMenu();
  //console.log({ opt });
  
  switch (opt) {
    case 1:
      //Mostrar mensaje
      const termino = await leerInput('Ciudad: ');
      
      //Buscar los lugares
      const lugares = await busquedas.ciudad(termino);
      
      //Seleccionar el lugar
      const id = await listarLugares(lugares);
      //find() devuelve el primer elemento segun la comparacion hecha dentro del parentesis
      //El find()método devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve.
      if(id==='0') continue;

      const lugarSel = lugares.find(l => l.id ===id);

      //Guardar en DB
      busquedas.agregarHistorial(lugarSel.nombre);
      
      //Clima
      const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng);

      //console.log(clima);
      console.clear();
      //Mostrar resultados
      console.log('\nInformacion de la ciudad\n'.green);
      console.log('Ciudad: '.green ,lugarSel.nombre);
      console.log('Lat: '.green , lugarSel.lat);
      console.log('Lng: '.green ,lugarSel.lng);
      console.log('Temperatura: '.green ,clima.temp);
      console.log('Minima: '.green , clima.min);
      console.log('Maxima: '.green ,clima.max);
      console.log('El clima esta: '.green,clima.desc);

    break;
    case 2:
      //Historial
      busquedas.leerDB();
      busquedas.historialCapitalizado.forEach((lugar,i)=>{
        const idx=`${i+1}.`.green;
        console.log(`${idx}  ${ lugar }`);
      })

    break;

  }
  
  varpausa = await pausa();

    
  }while (opt !==0);



}

main();