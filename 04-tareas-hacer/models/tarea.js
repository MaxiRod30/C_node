
const { v4:uudiv4 } = require('uuid');// bibloteca crea un identificador unico 


class Tarea {

  constructor( desc ){
    this.id = uudiv4();
    this.desc = desc;
    this.completadoEn = null;
  }
  
}

module.exports= Tarea;