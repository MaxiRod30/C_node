
require('colors'); 
const { guardarDB,leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa,leerInput,listadoTareasBorrar,confirmar,mostrarListadoChecklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

//Parte asincrona
const main = async() => {

  let opt = '';
  let varpausa = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    //Establecer las tareas
    tareas.cargarTareasFromArray(tareasDB);
  }
  
  //await pausa()
  
  do{

  opt = await inquirerMenu();
  //console.log({ opt });
  
  switch (opt) {
    case '1':
      //Crear opcion
      const desc = await leerInput('Descripcion: ');
      tareas.crearTarea(desc);

    break;
    case '2':
      //Listar las opciones
      tareas.listadoCompleto();

    break;
    case '3':
      //Listar las Completadas
      tareas.listadoPendientesCompletadas(true);

    break;
    case '4':
      //Listar las Pendientes
      tareas.listadoPendientesCompletadas(false);

    break;
    case '5'://Completado
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        //console.log(ids);
        tareas.toggleCompletadas(ids);
    break;
    case '6': // Borrar 
      const id = await listadoTareasBorrar(tareas.listadoArr);
      if (id !== '0'){
        const ok = await confirmar('¿Estas seguro?');
        if (ok){
          tareas.borrarTarea(id);
          console.log('Tarea borrada');
        }
      }
    break;
  }
  
  guardarDB(tareas.listadoArr);

  //******* Prueba de clase Tarea********
  //Agregar const Tarea al princio para
  //const Tarea = require('./models/tarea');
  //const tareas = new Tareas();
  //const tarea = new Tarea('Comer Comida');
  //tareas._listado[tarea.id]=tarea;
  //console.log(tareas);

  varpausa = await pausa();
  console.log(varpausa);
    
  }while (opt !=='0');


}

main();