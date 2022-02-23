const inquirer = require('inquirer');
require('colors');


//inquirer bibloteca para hacer intercativa mi consola(trabaja con promesas).
const preguntas = [
  {
    type: 'list',
    name: 'Opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name:`${'1.'.green} Crear una tarea`
      },
      {
        value: '2',
        name:`${'2.'.green} Listar tareas`
      },
      {
        value: '3',
        name:`${'3.'.green} Listar tareas compretadas`
      },
      {
        value: '4',
        name:`${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name:`${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name:`${'6.'.green} Borrar tarea`
      },
      {
        value: '0',
        name:`${'0.'.green} Salir`
      }
    ]
  }
]
const question = [
  {
    type: 'input',
    name: 'enter',
    message: `\nPresione ${'ENTER'.blue} para continuar\n`
  }
]

const inquirerMenu = async() =>{

  console.clear();
  console.log('============================='.green);
  console.log('  Seleccione una opcion  '.green);
  console.log('=============================\n'.green);
  
  const {Opcion} = await inquirer.prompt(preguntas);
  return Opcion;

};

const pausa = async()=>{

  console.log('\n');
  const validacion = await inquirer.prompt(question);


}

const leerInput = async(message)=>{

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate ( value ){
        if(value.length ===0) return 'Por favor ingrese un valor';
        return true;
      }
    }
  ];
  const {desc} = await inquirer.prompt(question);
  return desc;

}

const listadoTareasBorrar = async(tareas = [])=>{

  const choices = tareas.map((tarea,i) =>{
    
    const idx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`
    }
  });
  //console.log(choices);
  // Esta logica agrega un item de tipo objeto al principio del arreglo

  choices.unshift({
    value: '0',
    name: '0 '.green + 'Cancelar'
  });
//console.log(choices);


const preguntas = [
  {
    type: 'list',
    name: 'id',
    message:'borrar',
    choices
  }
]

  const { id } = await inquirer.prompt(preguntas);

  return id;

}

const confirmar = async(message) =>{

  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]
  const { ok } = await inquirer.prompt(question);
  return ok;
}

const mostrarListadoChecklist = async(tareas = [])=>{

  const choices = tareas.map((tarea,i) =>{
    
    const idx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: (tarea.completadoEn) ? true : false
    }
  });
  //console.log(choices);

const preguntas = [
  {
    type: 'checkbox',
    name: 'ids',
    message:'Selecciones',
    choices
  }
]

  const { ids } = await inquirer.prompt(preguntas);

  return ids;

}



module.exports ={
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
}