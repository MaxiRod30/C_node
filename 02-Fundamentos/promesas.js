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
const id = 1;

  getEmpledo(id)
    .then ( empleado => {
//        console.log(empleado)
        getSalario(id)
          .then ( salario => {console.log('El empleado:',empleado,'tiene el salario:',salario)})
          .catch(err => console.log(err) )
        })
    .catch(err => console.log(err))

//este manejo de promesas no es recomendable, esto se usa como ejemplo para entenderlo