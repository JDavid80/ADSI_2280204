/* Operador Condicional */
"use strict"

/* Condicional Simple */
var edad = 18;
if (edad >= 18) {
    console.log("Bienvenido. Dirijase a la mesa de votación");
}

/* Condicional Compuesto */
/* Ambiente 1: 20 personas */
/* Ambiente 2: 40 personas */
/* Bioaditorio: 100 personas */
/* Informar si no hay ambiente con capacidad suficiente */
/* Informar si ha surgido un error */

var cantidadPersonas = "ocho"; 

if (cantidadPersonas >=1 && cantidadPersonas <= 20) {
    console.log("Por favor, utilice el ambiente N. 1");
}
else if (cantidadPersonas > 20 && cantidadPersonas <= 40) {
    console.log("Por favor, utilice el ambiente N. 2");
} 
else if (cantidadPersonas > 40 && cantidadPersonas <=100 ) {
    console.log("Por favor, utilice el Bioauditorio");
}
else if (cantidadPersonas > 100) {
    console.log("No hay ambientes con la capacidad mencionada");
}
else {
    console.log("Ha surgido un error.");
}

/* Condicional Anidado */
/* Sistema para determinar el descuento del usuario */
/* Si el usuario es menor de 10 años 0 mayor a 70 años tiene 
un descuento sobre el valor del tiquete de 10%.
Si el destino es Cartagena, estos usuarios tienen
 descuento adicional acumulable del 10%.
Si la aerolinea es Latam a dicho destino, estos usuarios 
tiene descuento adicional acumulable del 10%*/
var edadUsuario = 68;
var aerolineaUsuario = "Latam";
var destinoUsuario = "San Andrés";
var valorTiquete = 250000;
var descuento = .10;
var valorDescuento = (valorTiquete * .10);

if (edadUsuario <= 10 || edadUsuario >= 70) {
    valorTiquete = (valorTiquete -valorDescuento);
    if (destinoUsuario === "Cartagena") {
        valorTiquete = (valorTiquete - valorDescuento);
        if (aerolineaUsuario === "Latam") {
            valorTiquete = (valorTiquete - valorDescuento);
        }
    }
}
console.log("Valor del Tiquete: $" + valorTiquete);

