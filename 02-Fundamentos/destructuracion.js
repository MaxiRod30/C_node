let persona = {
        nombre: 'Maximiliano',
        apellido: 'Rodriguez',
        cedula: '123456',
        getNombre: function() {
            return `${this.nombre} ${this.apellido}`
        }
    }
    //let nombre = persona.nombre;
    //let apellido = persona.apellido;
    //let cedula = persona.cedula;

//let { nombre: primerNom, apellido, cedula } = persona;
// Accedo a cada elemento del objeto
function imprimePersona({nombre,apellido,cedula, edad=0}){

    console.log(nombre,apellido,cedula,edad);
}
//console.log(primerNom, apellido, cedula);
//imprimePersona(persona);

const heroes =['maxi','roberto','batman'];// los arreglos comienzan en base 0
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
const [ , , h3]= heroes;// [, , h3] no me interesa el primero ni el segundo

console.log(h3);
