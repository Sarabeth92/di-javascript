//Básicos
/*1. Declara con let una variable nombre y asígnale tu nombre. 
Muéstrala en consola, reasígnale otro nombre y vuelve a mostrarla.*/

/*2. Declara una constante PI con el valor 3.1416. 
Intenta reasignarla, observa el error en consola y deja la línea 
comentada con el nombre del error que se produce.*/

/*3. Declara una variable edad sin valor y muéstrala. 
Asígnale después un número y muéstrala de nuevo.
Salida esperada:
undefined
25                                        */

/*4. Declara precioBase con valor 100, iva con 0.21 y calcula precioFinal. 
Decide para cada una si debe ser let o const y justifícalo en un comentario.*/

//Para pensar
/*5. Predice qué imprime este código antes de ejecutarlo. 
Escribe tu predicción en un comentario y compárala con la consola.*/

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

/*6. Predice de nuevo y explica en un comentario por qué la última línea falla 
si lista es una constante.*/

const lista = [1, 2];
lista.push(3);
console.log(lista);
lista = [];

/*7. Estas variables tienen nombres inútiles. 
Renómbralas siguiendo la convención camelCase de forma que el nombre diga qué contienen.*/

let a = "Ana";
let b = 30;
let c = true;
let d = 1250.5;

//Reto
/*8. Ejecuta este fragmento tal cual. setTimeout solo retrasa el console.log, 
no necesitas entenderlo todavía.*/

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

/*Anota qué imprime. Cambia var por let, vuelve a ejecutar y anota la nueva salida. 
Explica en un comentario, usando lo que has visto sobre ámbito de bloque, 
por qué cambia el resultado.*/