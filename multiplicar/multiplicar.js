/**REQUIRES**/
const fs = require('fs');
const colors = require('colors');

/*const fs = require('fs'); --> lIBRERÌA PROPIA DE NODE
const fs = require('express'); --> paquete que no son nativo de node pero es un plugin
const fs = require('./path');--->Archivos creados por nosostros*/


let listarTabla = (base, limite=10)=>{
	
	let data = "";
	console.log("================================".green)
	console.log(`tabla de ${base}`.green)
	console.log("================================".green)
	for(let i = 1; i<=limite; i++){
		data += `${base} * ${i} = ${base*i}\n`;
	}
	console.log(data);
}

let crearArchivo = (base, limite=10)=>{
	return new Promise((resolve, reject)=>{
		if(!Number(base))
			reject(`El valor introducido "${base}" No es un número`)
		else{
				let data = "";
		
				for(let i = 1; i<=limite; i++){
					data += `${base} * ${i} = ${base*i}\n`;
				}
		
				/**Archivo, contenido manejador de error*/
				fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
				  if (err) reject( err );
				 resolve(`tabla-${base}-al-${limite}.txt`);
				});
		}
	});
}


module.exports = {
	crearArchivo,
	listarTabla
}

