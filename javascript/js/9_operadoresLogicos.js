"use strict"
/* Operadores Lógicos */
/* &&...y
   ||...o
   !=...negación
   xor..O exclusivo */


   /* Si el aprendiz tiene jovenes en acción o sisben
   puede acceder al subsidio de transporte.
   Si tiene jovenes en acción y sisbén NO puede acceder
   al subsidio de transporte
   Si no tiene jovenes en acción y no tiene sisbén
   tampoco puede acceder al subsidio de transporte */
   var jovenAccionUsuario = true;
   var sisbenUsuario = true;

   if (jovenAccionUsuario === true ^ sisbenUsuario === true) {
       console.log("Usted puede acceder al beneficio de transporte");
   }
   else {
        console.log("No puede acceder al subsidio de transporte.");
   }


