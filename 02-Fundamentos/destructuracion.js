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

let { nombre: primerNom, apellido, cedula } = persona;

console.log(primerNom, apellido, cedula);