//Básicos
/*1. Declara con let una variable nombre y asígnale tu nombre. 
Muéstrala en consola, reasígnale otro nombre y vuelve a mostrarla.*/

let nombre = "Sara";
console.log(nombre);
nombre = "Sarabeth";
console.log(nombre);

/*2. Declara una constante PI con el valor 3.1416. 
Intenta reasignarla, observa el error en consola y deja la línea 
comentada con el nombre del error que se produce.*/

const PI = 3.1416;
//PI = 3.14; // TypeError: Assignment to constant variable.

/*3. Declara una variable edad sin valor y muéstrala. 
Asígnale después un número y muéstrala de nuevo.
Salida esperada:
undefined
25                                        */
let edad;
console.log(edad);
edad = 34;
console.log(edad);

/*4. Declara precioBase con valor 100, iva con 0.21 y calcula precioFinal. 
Decide para cada una si debe ser let o const y justifícalo en un comentario.*/
let precioBase = 100; //let porque precio varia
const iva = 0.21; //const porque iva es fijo (en este ejemplo)
let precioFinal = precioBase + (precioBase * iva); //let porque precio final varia segun precio
console.log("El precio final es: " + precioFinal); // 121

//Para pensar
/*5. Predice qué imprime este código antes de ejecutarlo. 
Escribe tu predicción en un comentario y compárala con la consola.*/

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);
/*primero 2 y luego 1 porque 2 esta dentro de un bloque y 1 fuera, 
por lo que no se sustituye la variable x de fuera del bloque, el orden es el de los console.log*/

/*6. Predice de nuevo y explica en un comentario por qué la última línea falla 
si lista es una constante.*/

const lista = [1, 2];
lista.push(3);
//console.log(lista);
//lista = [];
/* falla porque lista es una constante y no se puede reasignar, 
aunque si se puede mutar el contenido del array, por eso push funciona pero la reasignacion no.*/

/*7. Estas variables tienen nombres inútiles. 
Renómbralas siguiendo la convención camelCase de forma que el nombre diga qué contienen.*/

let a = "Ana";
let b = 30;
let c = true;
let d = 1250.5;

let nombreMujer = "Ana";
let numeroEntero = 30;
let esAmarillo = true;
let numeroDecimal = 1250.5;
console.log(nombreMujer, numeroEntero, esAmarillo, numeroDecimal);

//Reto
/*8. Ejecuta este fragmento tal cual. setTimeout solo retrasa el console.log, 
no necesitas entenderlo todavía.*/

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
/* 3 
3 
3*/

/*Anota qué imprime. Cambia var por let, vuelve a ejecutar y anota la nueva salida. 
Explica en un comentario, usando lo que has visto sobre ámbito de bloque, 
por qué cambia el resultado.*/

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
/* 0 
1 
2*/

/*cambia de resultado porque let tiene ámbito de bloque, 
por lo que cada iteración del bucle tiene su propia variable i, 
mientras que var tiene ámbito de función, por lo que todas las iteraciones 
comparten la misma variable i.*/