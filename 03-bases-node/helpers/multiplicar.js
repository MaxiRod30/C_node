const fs = require('fs');

const crearArchivo = async (base = 5) =>{
  
  try{
      let salida = '';
      let nombreArchivo = `tabla-${base}.txt`;

      console.log('=============');
      console.log('Tabla del', base);
      console.log('=============');

      for(let i=1 ;i<11; i++)
      {
        salida +=` ${base} x ${i} = ${base * i}\n`;
      }

      console.log(salida);

      fs.writeFile(nombreArchivo , salida,(err)=> {
        if(err) throw console.log(err);
        //console.log(`tabla-${base} creada!`)
      })

      return (nombreArchivo)

  }
  catch(err){

    throw(err)

  } 
}

module.exports={
  crearArchivo : crearArchivo
}
