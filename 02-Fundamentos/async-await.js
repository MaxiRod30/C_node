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
  const getEmpleado = (id) =>{

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
// el async tranforma mi funcion en una funcion asincrona que retorna una promesa
// en este caso tranformo la funcion en asicrona por lo tanto despues puedo llamar al .then (como si fuese una promesa)

const getInfoUsuario = async(id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado: ${empleado} es de ${salario}`;
  
  }catch (error){

    throw error; // generas el error en el catch, si se coloca un return notaremos que imprime todo bien y luego el mensaje de error esto se corrige con throw

  }

}

// variable a modificar para probar programa
const id = 3;
getInfoUsuario(id)
  .then(msg => {
    console.log('TODO BIEN !!!')
    console.log(msg)
  })
  .catch(err => {
    console.log('TODO MAL !!!')
    console.log(err)
  })