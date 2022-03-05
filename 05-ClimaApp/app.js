// Con esta importacion me permite leer variables de entorno(globales) que guarde en el archivo .env
// Para ver las variables de entorno console.log(process.env)
require('dotenv').config()

const { leerInput,inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() =>{


  const busquedas = new Busquedas();
  
  let opt = 0;
  let varpausa = '';

  
  do{

  opt = await inquirerMenu();
  //console.log({ opt });
  
  switch (opt) {
    case 1:
      //Mostrar mensaje
      const lugar = await leerInput('Ciudad: ');
      await busquedas.ciudad(lugar);
      console.log(lugar);
      //Buscar los lugares

      //Seleccionar el lugar

      //Clima
 
      //Mostrar resultados
      console.log('\nInformacion de la ciudad\n'.green);
      console.log('Ciudad: ' ,);
      console.log('Lat: ' ,);
      console.log('Lng: ' ,);
      console.log('Temperatura: ' ,);
      console.log('Minima: ' ,);
      console.log('Maxima: ' ,);

    break;
    case 2:
      //Historial
      console.log("Historial");

    break;

  }
  
  varpausa = await pausa();

    
  }while (opt !==0);



}

main();