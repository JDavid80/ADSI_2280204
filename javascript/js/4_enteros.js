"use strict"

var costoSinIva = 32000;
var costoIva = 3200;
var domicilio = 3000;
var costoTotal = costoSinIva + costoIva + domicilio;
/* Mostrar cual es el valor final del producto */
console.log("El costo total es de: $" + costoTotal);

console.log("El límite para usar un entero es: " + Number.MAX_SAFE_INTEGER);
var numMaximo = Number.MAX_SAFE_INTEGER;
/* La siguiente operación genera un error por sobrepasar el número máximo disponible */
console.log("Generando erro: " + numMaximo + 9999999);
console.log(Number.MAX_SAFE_INTEGER);
console.log("Generando error: " + (numMaximo + 9999999999999999999999));
var telefono = "5465165465465165";

