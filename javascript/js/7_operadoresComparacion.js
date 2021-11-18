"use strict"
/* Operadores de Comparación
>.......Mayor que
<.......Menor que
>=......Mayor o igual que
<=......Menor o igual que
!=......distinto sin importar tipo de dato
==......igual sin importar tipo de dato 
===.....estrictamente igual, incluyendo tipo de dato
!==.....distinto (si no son estrictamente iguales)*/

/* Quien ocupo el primer puesto? */
var nota1 = 8.5;
var nota2 = 8;

/* Condicionales */
if (nota1 > nota2) {
    console.log("la nota mas alta fue de: " + nota1);
}
else if(nota1 < nota2) {
    console.log("la nota mas alta fue de: " + nota2);
}
else if(nota1 === nota2) {
    console.log("Las dos notas tienen el mismo valor");
}
else {
    console.log("Ha surgido un error. Verifique, por favor.");
}



