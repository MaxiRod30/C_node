const axios = require('axios');

class Busquedas{

  //historial = ['Tegucigalpa', 'Madrir', 'San Jose'];

  constructor(){
    //TODO: leer DB si exite

  }
  
  get paramsMapbox(){
    return {
      'types': 'place',
      'limit': 5,
      'language': 'es',
      'access_token': process.env.MAPBOX_KEY
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
        
        console.log(resp.data);
        
        return[];
        
      } catch (error) {
        return[];
      }
      
      
      
      //console.log('Ciudad' , lugar);

      return []; // retornar los lugares
  }


}
module.exports = Busquedas;