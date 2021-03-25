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
 
 // busqueda dentro de un array de objetos
//***********************************************  
  const getEmpledo = (id, callback) =>{
    const empleado = empleados.find(e => e.id === id )
 
    if (empleado){
       callback(null, empleado.nombre);
    }
    else{
       callback(`Empleado con id ${ id } no exite`)
    }
  }
//***********************************************  
  const getSalario = (id, callback) =>{
    const salario = salarios.find(s => s.id === id ) // ?.salario pregunta si exite salario 
 
    if (salario){
       callback(null, salario);
    }
    else{
       callback(`Empleado con id ${ id } no tiene registro del salario`)
    }
  }
//***********************************************  
// Esta variable se modifica para probar el programa
const id = 3;

  getEmpledo(id, (err, empleado)=>{
 
   if(err){
     console.log('ERROR!');
     return console.log(err);
   }
   console.log('Empleado existe!');
   //console.log(empleado.nombre);

   getSalario(id, (err, salario)=>{
 
    if(err){
      console.log('ERROR!');
      return console.log(err);
    }
    //console.log('Empleado existe y tiene salario asignado!');
    console.log('El empleado:', empleado, 'tiene un salario de: ', salario.salario);
   });
  });


