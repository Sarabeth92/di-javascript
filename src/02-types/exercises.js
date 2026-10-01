//Básicos
/*1. Crea una variable de cada tipo: string, number, boolean, undefined y null. 
Imprime cada una junto con su typeof.

Salida esperada (una línea por variable):

Ana string
25 number
true boolean
undefined undefined
null object */
console.log("Ejercicio 1: ");

let nombre = "Sortia";
let edad = 33;
let esEstudiante = true;
let ciudad;
let pais = null;    

/*2. Convierte la cadena "42" a número con Number() y el número 42 a cadena con String(). 
Muestra el typeof de ambos resultados.*/
console.log("Ejercicio 2: ");

console.log(typeof Number("42")); // number
console.log(typeof String(42));   // string

/*3. Crea un objeto persona con las propiedades nombre, edad y ciudad. 
Accede a nombre con notación de punto y a ciudad con notación de corchetes. 
Añade después la propiedad profesion y muestra el objeto con console.table.*/
console.log("Ejercicio 3: "); 

let persona = {
  nombre: "Sara",
  edad: 34,
  ciudad: "Sotrondio"
};

console.log(persona.nombre);
console.log(persona["ciudad"]);

persona.profesion = "Ilustradora";

console.table(persona);

/*4. Crea un array numeros con cinco valores y compara lo que devuelven typeof numeros 
y Array.isArray(numeros).*/
console.log("Ejercicio 4: ");

let numeros = [1, 2, 3, 4, 5];

console.log(typeof numeros); // object
console.log(Array.isArray(numeros)); // true

//Para pensar
/*5.Predice el resultado de cada línea antes de ejecutar. Escribe tus predicciones en un comentario y corrige las que fallen.

console.log(typeof null);
console.log(typeof []);
console.log(typeof (() => {}));
console.log(null === undefined);
console.log(null == undefined); */
console.log("Ejercicio 5: "); 

console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof (() => {})); // function
console.log(null === undefined); // false
console.log(null == undefined); // true

/*6. Predice, ejecuta y explica en un comentario por qué a.x cambia y c no.

const a = { x: 1 };
const b = a;
b.x = 5;
console.log(a.x);

let c = 1;
let d = c;
d = 5;
console.log(c); */
console.log("Ejercicio 6: ");

const a = { x: 1 };
const b = a;
b.x = 5;
console.log(a.x); // 5

let c = 1;
let d = c;
d = 5;
console.log(c); // 1

/* a.x cambia porque a y b apuntan al mismo objeto, por lo que al modificar
b.x también se modifica el objeto al que apunta a.

En cambio, c no cambia porque los valores primitivos se copian. Al hacer
d = c, d recibe una copia del valor 1, por lo que cambiar d a 5 no modifica c. */

/*7. Number() no siempre devuelve lo que esperas. 
Predice el resultado de cada conversión y comprueba en consola.

Number("hola");
Number("");
Number(null);
Number(undefined);
Number(true);
Number("3.14");*/
console.log("Ejercicio 7: "); 

console.log(Number("hola"));      // NaN
console.log(Number(""));          // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN
console.log(Number(true));        // 1
console.log(Number("3.14"));      // 3.14

//Reto
/*8. typeof tiene huecos: devuelve "object" para null y para los arrays. Escribe una función describir(valor) que devuelva el tipo real como cadena: "null", "array", "function", "object" o el resultado de typeof en el resto de casos. Pruébala con al menos ocho valores distintos.

Salida esperada para algunos casos:

describir(null)        → "null"
describir([1, 2])      → "array"
describir(() => {})    → "function"
describir({ a: 1 })    → "object"
describir("hola")      → "string"
describir(NaN)         → "number"*/
console.log("Ejercicio 8: "); 

function describir(valor) {
  if (valor === null) {
    return "null";
  }

  if (Array.isArray(valor)) {
    return "array";
  }

  return typeof valor;
}

console.log(describir(null));        // null
console.log(describir([1, 2]));      // array
console.log(describir(() => {}));    // function
console.log(describir({ a: 1 }));    // object
console.log(describir("hola"));      // string
console.log(describir(NaN));         // number
console.log(describir(true));        // boolean
console.log(describir(undefined));   // undefined