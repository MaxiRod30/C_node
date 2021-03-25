let nombre = 'Maximiliano';
let real = 'Rodriguez Miguez';

//console.log(nombre + ' ' + real);
//console.log(`${nombre} ${real}`);
//${ejecuta codigo de javascript}

function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre completo es ${getNombre()}`);