/*
function sumar(a, b) {
    return a + b;
}
*/

//let sumar = (a, b) => a + b; la funcion flecha permite reducir el codigo de programacion

//console.log(sumar(5, 4));

//function saludos() {
//    return 'Hola Mundo';
//}

//let saludos = () => 'Hola Mundo';

//console.log(saludos());

//let saludos = nombre => `Hola ${nombre}`;

//console.log(saludos('Maxi'));

let persona = {
    nombre: 'Maximiliano',
    apellido: 'Rodriguez',
    cedula: '123456',
    getNombre: () => {
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.getNombre());
// Caracteristica de la funcion flecha: el valor de this dentro de una funcion flecha  apunta al valor 
//                                      que tenga el objeto this fuera de esta funcion.