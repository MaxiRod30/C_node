const empleados =[
  {
    id: 1, 
    nombre: 'Fernando'
  },
  {
    id:2,
    nombre: 'Linda' 
  },
  {
    id:3,
    nombre: 'Karen'
  }
 ];
 
 const salarios =[
   {
     id: 1, 
     salario: 1000
   },
   {
     id:2,
     salario: 2000 
   }
 ];
 
 // promesas - se cambia las funciones callback por promesas debido a que no es recomendable trabajar con callbacks
//***********************************************  
  const getEmpledo = (id) =>{

    return promesa = new Promise((resolve,reject) =>{
      
      const empleado = empleados.find(e => e.id === id );
  // if simplificado
      ( empleado )
        ? resolve (empleado.nombre)
        : reject(`Empleado con id ${ id } no exite`)
      
  });
}
//***********************************************  
const getSalario = (id) =>{

  return promesa_salario = new Promise((resolve,reject) =>{
    
    const salario = salarios.find(s => s.id === id );
// if simplificado
    ( salario )
      ? resolve (salario.salario)
      : reject(`Empleado con id ${ id } no tiene salario`)
    
});
}
//***********************************************  
// Esta variable se modifica para probar el programa
const id = 3;

// Promesas en cadena (asi se debe realizar las promesas)
let nombre;

getEmpledo(id)
  .then (empleado =>{
    nombre = empleado;
    return getSalario(id) //retorna una promesa
  })
  .then (salario => console.log('El empleado:',nombre,'tiene un salario de',salario))
  .catch(err => console.log(err))