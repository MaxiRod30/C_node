const fs = require('fs');
const colors = require('colors');


//*****funcion asincrona (la convierte en promesa)****
const crearArchivo = async (base = 5 , l = false , h = 10) =>{
  
  try{
      let salida = '';
      let consola = '';
      let nombreArchivo = `./salida/tabla-${base}.txt`;

      for(let i=1 ;i<=h; i++)
      {
        salida +=` ${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        consola +=` ${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      }
      if(l)
      {
        console.log('============='.green);
        console.log('Tabla del'.red, base);
        console.log('============='.green);
        console.log(consola);
      }


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
