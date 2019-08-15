//const multiplicar = require('./multiplicar/multiplicar'); // seria igual que poner ./multiplicar/multiplicar.js
// Para hacerlo más fácil y poder llamar directamente a crearArchivo, en vez de poner multiplicar.crearArchivo, utilizamos destructuración
/*const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 'abc';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err));*/

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        /*
                    .then(tabla => console.log(tabla))
                    .catch(err => console.log(err));*/

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `, colors.green(archivo)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido');
}


//console.log(argv.limite);
//console.log(argv2);