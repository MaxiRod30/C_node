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

const salario =[
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

 const getEmpledo = (id, callback) =>{
   const empleado = empleados.find(e => e.id === id )

   if (empleado){
      callback(null, empleado);
   }
   else{
      callback(`Empleado con id ${ id } no exite`)
   }
 }
// Esta variable se modifica para probar el programa - donde esta el 1
 getEmpledo(1, (err, empleado)=>{

  if(err){
    console.log('ERROR!');
    return console.log(err);
  }
  console.log('Empleado existe!');
  console.log(empleado);
 });