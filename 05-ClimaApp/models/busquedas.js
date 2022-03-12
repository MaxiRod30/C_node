const fs = require('fs');
const axios = require('axios');
class Busquedas{
  
  constructor(){

    
    this.historial = [];
    this.leerDB();
    this.dbPath='./db/database.json'

  }

  get historialCapitalizado(){
    //Capitalizado cada palabra
    //El split()método divide a String una lista ordenada de subcadenas, 
    //coloca estas subcadenas en una matriz y devuelve la matriz. La división se hace buscando un patrón; donde el patrón se proporciona como el primer parámetro en la llamada del método.

    //El toUpperCase()método devuelve el valor de la cadena de llamada convertido a mayúsculas (el valor se convertirá en una cadena si no lo es).
    //El substring()método devuelve la parte de stringentre los índices inicial y final, o al final de la cadena.
    return this.historial.map(lugar =>{
      let palabras = lugar.split(' ');
      palabras= palabras.map(p =>p[0].toUpperCase() + p.substring(1));
      return palabras.join(' ');
    })
  }  
  get paramsMapbox(){
    return {
      'types': 'place',
      'limit': 5,
      'language': 'es',
      'access_token': process.env.MAPBOX_KEY
    }
  }
  get paramsWeathermap(){
    return {
      'appid': process.env.OPENWEATHER_KEY,
      'units': 'metric',
      'lang': 'es'
    }
  }

  async ciudad(lugar = '') {

      try {
        //Peticion http
        const intance = axios.create({
          baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
          params: this.paramsMapbox
        });

        const resp = await intance.get();
        // de esta manera devuelvo un objeto con los datos que quiero
        //console.log(resp.data.features) respuesta completa
        //El método map() crea un nuevo vector (array, o matriz unidimensional) ejecutando una función en cada uno de los elementos del vector. Al mismo tiempo no ejecuta la función en elementos sin valor y no cambia el vector original.
        return resp.data.features.map(lugar => ({
          id: lugar.id,
          nombre: lugar.place_name,
          lng: lugar.center[0],
          lat: lugar.center[1],

        }));
      } catch (error) {
        console.log(error);
      }
      
      
      
      //console.log('Ciudad' , lugar);
  }

  async climaLugar(lat,lon){
    try {

      //Peticion http     api.openweathermap.org/data/2.5/weather?lat=-34.86694&lon=-56.16667&appid=09bface450259ea239a32fba8129b3d0&units=metric&lang=es
      const intance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
        params: {...this.paramsWeathermap , lat , lon}
      });

      const resp = await intance.get();
      //desestructuración del objeto para obtener lo que quiero
      const {weather , main} = resp.data;


      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max, 
        temp: main.temp
      };

    } catch (error) {
      console.log(error);
    }
    /* RESPUESTA DE CLIMA
    {
    "coord": {
        "lon": -56.1667,
        "lat": -34.8669
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "algo de nubes",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 18.9,
        "feels_like": 18.49,
        "temp_min": 18.9,
        "temp_max": 18.9,
        "pressure": 1017,
        "humidity": 63
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.09,
        "deg": 180
    },
    "clouds": {
        "all": 20
    },
    "dt": 1647041686,
    "sys": {
        "type": 1,
        "id": 8713,
        "country": "UY",
        "sunrise": 1646991629,
        "sunset": 1647036546
    },
    "timezone": -10800,
    "id": 3443207,
    "name": "Cerrito",
    "cod": 200
}
    */ 
  }

  agregarHistorial(lugar =''){
    //El includes()método determina si una matriz incluye un determinado valor entre sus entradas, devolviendo trueo falsesegún corresponda.
    //El toLocaleLowerCase()método devuelve el valor de la cadena de llamada convertido a minúsculas, de acuerdo con las asignaciones de casos específicas de la configuración regional.
    //El unshift()método agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
   

    if(this.historial.includes(lugar.toLocaleLowerCase())){
      return;
    }

    this.historial=this.historial.splice(0,5);

    this.historial.unshift(lugar.toLocaleLowerCase());
    this.guardarDB();

  }
  
  guardarDB(){
    
    const payload={
      historial: this.historial
    };
    //El JSON.stringify()método convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente los valores si se especifica una función de reemplazo u opcionalmente 
    //incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.
    fs.writeFileSync(this.dbPath,JSON.stringify(payload));

  }
  
  leerDB(){

    if(!fs.existsSync(this.dbPath)){
      return null;
    }
    //Lectura del archivo guardado
    const info = fs.readFileSync(this.dbPath, {encoding:'utf-8'});
    const data = JSON.parse(info);// conviero de string a array
    //console.log(data);
    
   
      this.historial = data.historial;
    


  }
}
module.exports = Busquedas;