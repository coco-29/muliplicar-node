const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require("./multiplicar/multiplicar");
const { imprimirTabla } = require("./multiplicar/multiplicar");


let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        imprimirTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.b, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

console.log(argv);

//const multiplicar = require('./multiplicar/multiplicar.js   ');

//console.log(process.argv);

//let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log('limite', argv.limite);
//console.log(argv2);


//let base = 'h1';