// primer ejemplo de como crear una lista de menu(no se utiliza este programa)
// Utilizaremos el programa inquirer debido a que ya contine un blibloteca que resuleve todo estos pasos
require('colors'); 

//tranformo en promesa

const mostrarMenu = () =>{


    return new Promise (resolve => {

    console.clear();
    console.log('============================='.green);
    console.log('  Seleccione una opcion  '.green);
    console.log('=============================\n'.green);
    // Salto de linea con \n
    console.log(`${'1.'.green} Crear una tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas compretadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir \n`);
    
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readLine.question('Seleccione una opcion: ', (opt) => {
      //console.log({ opt });// de esta manera imprime opt:valor, comparar con console.log(opt)
      readLine.close();
      return resolve(opt);
    });

  })
}


const pausa = () => {

    return new Promise(resolve =>{
      const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
      readLine.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
        readLine.close();
        return resolve();
      });

    })
}


module.exports = {
  mostrarMenu,
  pausa
}