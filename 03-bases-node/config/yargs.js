// con las option defino mis comandos para la consola que estoy creando
// ejemplo en consola se puede ejecutar node app -b 2 -l ( base=2 y listar)

const argv = require('yargs')
        .option('b',{
          alias: 'base',
          type: 'number',
          demandOption: true,
          describe: 'Es la base de la tabla multiplicar ej: -b 5 '
        })
        .option ('l',{
          alias: 'listar',
          type: 'boolean',
          demandOption: false,
          default: false,
          describe: 'Imprime la tabla en consola'
          })
          .option ('h',{
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Determina hasta donde realiza la multiplicacion'
            })
        .check((argv,options)=> {
          if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
          }
          return true
        })
        .argv;//crea un objeto con lo que escribo en consola

module.exports = argv;