"use strict"

/* Hallar el total (Suma) */
console.log("====SUMA====");
var producto1 = 2560;
var producto2 = 3520;
var producto3 = 4680;
var totalSuma = producto1 + producto2 + producto3;
console.log("La suma de los productos es: $" + totalSuma);
console.log();

/* Hallar el descuento (Resta) */
console.log("====RESTA====");
var producto4 = 15600;
var descuento = 3000;
var totalConDescuento = producto4 - descuento;
console.log("El valor total con el descuento incluido es: " + totalConDescuento);
console.log();

/* Hallar el total (Multiplicación) */
console.log("====Multiplicación====");
var producto5 = 2420;
var cantidadProductos = 5;
var totalMultiplicacion = producto5 * cantidadProductos;
console.log("El valor total de los 5 productos es: " + totalMultiplicacion);
console.log();

/* Hallar el promedio de calificaciones */
console.log("====División====");
var calificacion1 = 9.5;
var calificacion2 = 8.2;
var calificacion3 = 7.9;
var totalCalificaciones = 3;
var promedioFinal = (calificacion1 + calificacion2 + calificacion3) / totalCalificaciones;
promedioFinal = promedioFinal.toFixed(2);
console.log("El promedio final de calificaciones es: " + promedioFinal);
console.log();

/* Hallar el residuo */
console.log("====Residuo====");
var ahorros = 25011;
var cantidadAportantes = 102;
var montoIndividual = 0;
var montoSobrante = 0;
/* Cuanto dinero coresponde a cada uno y cuanto sobra */
montoIndividual = parseInt(ahorros / cantidadAportantes);
console.log("El monto individual es de: " + montoIndividual);  
/* El signo de residuo es % */
montoSobrante = (ahorros % cantidadAportantes);
console.log("El monto sobrante es de: " + montoSobrante);
console.log("El monto sobrante es de: " + (ahorros - (montoIndividual * cantidadAportantes)));