console.log('Inicio del programa'); // 1

setTimeout(()=> {
    console.log('Primer Timeout');//5
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeout');//3
}, 0);

setTimeout(function() {
    console.log('Tercer Timeout');//4
}, 0);

console.log('Fin programa');   //2