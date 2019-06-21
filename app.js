//Destructuración para obtener solamente el nombre de la función
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


//let argv2 = process.argv; //Tiene los argumentos del script

/*let parametro = argv[2];
let base = parametro.split('=')[1];*/
let comando = argv._[0];
switch (comando) {
	case 'listar':
		console.log("'listar'", 'listar');
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo=> console.log(colors.green(`Archivo creado ${archivo}`)))
			.catch(
				err=> console.log(colors.red(err))
			);
		
		break;
	default:
		console.log("No reconocido");
		break;
}

