
const { v4:uudiv4 } = require('uuid');
const Tarea = require('./tarea');
require('colors');
//_listado:
//        {'uuid-123123123-123123':{id:12,desc:asd,completadoEN:4568435}},
//se utiliza objeto para listar las tareas debido a que es mas facil de buscar que un array
class Tareas {

  get listadoArr(){
    const listado =[];
    //metodo que me devuelve un arreglo a partir de un objeto(_listado)
    Object.keys(this._listado).forEach(key =>{
      const tarea = this._listado[key];
      listado.push(tarea);
    })

    return listado;
  }

  constructor(){
    this._listado ={};
  }

  borrarTarea(id = ''){

    if(this._listado[id]){

      delete this._listado[id];

    }

   };

  listadoPendientesCompletadas(completadas= true){

   
      let mjs ='';
      let contador = 0;
      console.log("");
      // primer argumento son los objetos y el segudo el indice
      this.listadoArr.forEach((tarea,indice) =>{
        let completado_EN ="";

        if(tarea.completadoEn != null & completadas) 
        {
          ++contador;
          completado_EN='Completado'.green;
          mjs = (contador + ".").green + tarea.desc +" :: " + tarea.completadoEn;
          console.log(mjs);
        }
        if(tarea.completadoEn === null & !completadas) 
        {
          ++contador;
          completado_EN='Pendiente'.red;
          mjs = (contador + ".").green +tarea.desc +" :: " + completado_EN;
          console.log(mjs); 
        }

      })
    }
  
  

  listadoCompleto(){
    // 1 en verde
    //Completada: verde
    //Pendiente rojo
    // 1. descripcion :: Completado
    
    let mensaje ='';
    console.log("");
    // primer argumento son los objetos y el segudo el indice
    this.listadoArr.forEach((tarea,indice) =>{
      //console.log(element);

     
      const idx = `${indice + 1}. `;//para que arranque en 1

      let completado_EN ='Pendiente'.red;
    
      if(tarea.completadoEn != null) completado_EN='Completado'.green;

      mensaje = idx.green + tarea.desc +" :: " + completado_EN;

      console.log(mensaje);

      /* Solucion de la clase
      const idx = `${indice +1}.green`;
      ---Desestructura el objeto y obtiene sus dos datos deseados ---
      const { desc,completadoEn } = tarea;
      const estado = (completadoEn) ?'Completada'.green : 'Pendiente'.red;

      console.log(`${idx} ${desc} ::  ${estado}`)
      */
    })
  }

  cargarTareasFromArray(tareas = []){

    tareas.forEach(tarea =>{
      this._listado[tarea.id] = tarea;
      
    })

  }

  crearTarea( descripcion = '' ){ 

    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;

  }

  toggleCompletadas (ids = []){

    ids.forEach(id => {
  
      const tarea = this._listado[id];
      //console.log(tarea);
      if(!tarea.completadoEn){
        
        tarea.completadoEn = new Date().toISOString();
  
      }
  
    });
//Esta logica accesde a las tareas que no estan seleccionada y la coloca como no completada("null")
//consulta los ids que no vienen 
    this.listadoArr.forEach(tarea =>{

      if(!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null;
      }
    })
  
  }

} 


/*
Tareas {
  _listado:
   { '61857aa5-8025-4d59-838e-cdcc600e6eb9':
      Tarea {
        id: '61857aa5-8025-4d59-838e-cdcc600e6eb9',
        desc: 'Comer Comida',
        completadoEn: null } } }
*/




module.exports= Tareas;