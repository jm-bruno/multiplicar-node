const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(err => console.log(err));
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(err));
        console.log('crear');
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let base = argv.split('=')[1];