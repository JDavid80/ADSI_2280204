

/* Formas de declarar e inicializar un arreglo */
/* Forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] = 1;aprendiz1[0] = 1;
aprendiz1[1] = "Yeimi Katherin";
aprendiz1[2] = "Peña Ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "B. Villa del Prado";
aprendiz1[5] = 156;

/* Forma 2  */
var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "B. Simón Bolivar", 157);

/*Forma 3 */
var aprendiz3 = [3, "Jesus Nicolas", "Ayerbe Guarnizo", 17, "B. Las Palmitas", 177];

/* Mostrar el nombre completo del aprendiz N. 2 */
console.log("Nombre completo del aprendiz N. 2: " + aprendiz2[1] + " " + aprendiz2[2]);

/* Añadiendo elementos al array */
aprendiz3[6] = "0313207173524";
console.log(aprendiz3[6]);

/* Contando elementos */
var cantidadElementos = aprendiz1.length;
console.log("Aprendiz 1 tiene " + cantidadElementos + " elementos");

/* Contando carácteres */
var cantidadCaracteres = aprendiz2[1].length;
console.log("Cantidad de carácteres: " + cantidadCaracteres);















