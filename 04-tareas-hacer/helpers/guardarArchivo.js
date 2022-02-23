const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = (data) => {


  //JSON.stringify(data) convierte a string el arreglo
  // esta funcion fs.writeFileSync trabaja con string
  fs.writeFileSync(archivo ,JSON.stringify(data));

}

const leerDB = ()=> {

  if(!fs.existsSync(archivo)){
    return null;
  }
  //Lectura del archivo guardado
  const info = fs.readFileSync(archivo, {encoding:'utf-8'});
  const data = JSON.parse(info);// conviero de string a array
  //console.log(data);
  return data;
}

module.exports = {
  guardarDB,
  leerDB
}