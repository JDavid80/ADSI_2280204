"use strict"

/* Imprimir fecha y hora del navegador */
var currentTime = new Date();
console.log(currentTime);

/* Desglosando fechas y horas */
var anyoActual = currentTime.getFullYear();
var mesActual = currentTime.getMonth();
var diaMes = currentTime.getDate();
var diaSemana = currentTime.getDay();
var horaActual = currentTime.getHours();
var minutosActual = currentTime.getMinutes();
var segundosActual = currentTime.getSeconds();
var msActual = currentTime.getMilliseconds();
var ms1970 = currentTime.getTime(); 
console.log("Año: " + anyoActual);
console.log("Mes: " + (mesActual + 1));
console.log("dia del Mes: " + diaMes);
console.log("dia de la semana: " + diaSemana);
console.log("Hora: " + horaActual);
console.log("Minutos: " + minutosActual);
console.log("Segundos: " + segundosActual);
console.log("Milisegundos: " + msActual);
console.log("Milisegundos desde 1/01/1970: " + ms1970);

/* cambiar el número del día por texto */
var diaSemanaStr = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes",
                    "Sabado"];
console.log("Hoy es " + diaSemanaStr[diaSemana]);

/* Fecha: Jueves, 2 de Diciembre del año 2021 */
var mesesStr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Fecha: " + diaSemanaStr[diaSemana] + ", " + diaMes + " de " + mesesStr[mesActual] + 
          " del año " + anyoActual);

var fechaFutura = new Date("January 1, 2022");
/* Obtengo los milisegundos transcurridos hasta el día de hoy */
var msCurrent = currentTime.getTime();
var msFechaFutura = fechaFutura.getTime();
console.log(msCurrent, msFechaFutura);
var diffMsFechaFutura = (msFechaFutura - msCurrent);
console.log(diffMsFechaFutura);
