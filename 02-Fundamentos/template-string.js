let nombre = 'Maximiliano';
let real = 'Rodriguez Miguez';

//console.log(nombre + ' ' + real);
//console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre completo es ${getNombre()}`);