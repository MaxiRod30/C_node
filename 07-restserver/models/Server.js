const express = require('express');
const cors = require('cors');
const { dbConnetion } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //Conectar a la base de datos
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnetion();
    }
    middlewares(){
        // CORS - paquete utilizado para pedir informacion desde afuera
        /*
         CORS es la abreviatura de Cross-Origin Resource Sharing . 
         Es un mecanismo para permitir o restringir los recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP. 
         Esta política se utiliza para proteger un determinado servidor web del acceso de otro sitio web o dominio
        */
        this.app.use(cors());
        //Parseo y lectura del body
        this.app.use(express.json());
        // Servir contenido estatico en carpeta public
        this.app.use(express.static('public'));
    }
    routes() {
        
        this.app.use('/api/usuarios' , require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor en el puerto", this.port);
        });
    }
}
module.exports = Server;