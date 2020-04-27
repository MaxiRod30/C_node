let nombre = 'Maxi';

if (true) {
    let nombre = 'Magmento';
}
console.log(nombre);


//La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.
/*
EJEMPLO
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // ¡misma variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // variable diferente
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
// llamamos a las funciones
varTest();
letTest();

Cuando usamos let dentro de un bloque, podemos limitar el alcance de la variable a dicho bloque. Notemos la diferencia con var, cuyo alcance reside dentro de la función donde ha sido declarada la variable.
*/