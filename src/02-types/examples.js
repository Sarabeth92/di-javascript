// TIPOS DE DATOS EN JAVASCRIPT

// 1. TIPOS PRIMITIVOS

// Hay siete tipos primitivos:
// string, number, boolean, undefined, null, symbol y bigint.

// STRING

let nombre = "Juan";
let saludo = "Hola";
let mensaje = `Bienvenido ${nombre}`;

console.log(nombre);   // Juan
console.log(saludo);   // Hola
console.log(mensaje);  // Bienvenido Juan

// NUMBER
// JavaScript utiliza number tanto para enteros como para decimales.

let edad = 25;
let pi = 3.1416;
let infinito = Infinity;
let infinitoNegativo = -Infinity;
let noNumero = NaN;

console.log(edad);              // 25
console.log(pi);                // 3.1416
console.log(infinito);          // Infinity
console.log(infinitoNegativo);  // -Infinity
console.log(noNumero);          // NaN

// Aunque NaN significa "Not a Number", su tipo es number.
console.log(typeof NaN);        // number


// BOOLEAN

let activo = true;
let mayor = false;

console.log(activo); // true
console.log(mayor);  // false


// UNDEFINED
// Una variable declarada pero sin valor tiene undefined.

let x;

console.log(x);        // undefined
console.log(typeof x); // undefined

// Una función sin return explícito también devuelve undefined.
function sinRetorno() {
  console.log("Esta función no tiene return");
}

let resultado = sinRetorno();
console.log(resultado); // undefined

// NULL
// null representa la ausencia intencional de un valor.

let vacio = null;
console.log(vacio);        // null

// typeof null devuelve "object" por una peculiaridad histórica
// de JavaScript.

console.log(typeof vacio); // object

// Para comprobar correctamente si algo es null:

console.log(vacio === null); // true


// SYMBOL
// Cada Symbol crea un valor único.

const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");

console.log(simbolo1 === simbolo2); // false
console.log(typeof simbolo1);       // symbol


// BIGINT
// BigInt permite trabajar con enteros de precisión arbitraria.
// Se utiliza el sufijo n.

let numeroGrande = 123456789012345678901234567890n;

console.log(numeroGrande);
console.log(typeof numeroGrande); // bigint


// 2. TYPEOF

console.log(typeof "hola");          // string
console.log(typeof 42);              // number
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
console.log(typeof Symbol());        // symbol
console.log(typeof 10n);             // bigint
console.log(typeof {});              // object
console.log(typeof []);              // object
console.log(typeof function () {});  // function


// 3. OBJETOS Y OTROS VALORES NO PRIMITIVOS

// OBJETO

let persona = {
  nombre: "Ana",
  edad: 30
};

console.log(persona);
console.log(persona.nombre); // Ana
console.log(persona.edad);   // 30

// ARRAY

let numeros = [1, 2, 3, 4];

console.log(numeros);
console.log(numeros[0]); // 1
console.log(numeros[1]); // 2

// typeof no permite distinguir correctamente un array
// de otros objetos.

console.log(typeof numeros); // object

// Para comprobar si es un array usamos Array.isArray().

console.log(Array.isArray(numeros)); // true
console.log(Array.isArray(persona)); // false

// FUNCIÓN

function saludarPersona() {
  return "Hola";
}

console.log(typeof saludarPersona); // function
console.log(saludarPersona());      // Hola

// DATE

let hoy = new Date();

console.log(hoy);
console.log(typeof hoy); // object

// MAP

let mapa = new Map();

mapa.set("nombre", "Ana");
mapa.set("edad", 30);

console.log(mapa);
console.log(mapa.get("nombre")); // Ana

// SET

// Set permite almacenar valores sin duplicados.

let conjunto = new Set([1, 2, 2, 3, 3, 3]);

console.log(conjunto); // Set con 1, 2 y 3


// 4. ARRAYS

// Los arrays son listas ordenadas por índices.
// El primer índice es 0.

let colores = ["rojo", "verde", "azul"];

console.log(colores[0]); // rojo
console.log(colores[1]); // verde
console.log(colores[2]); // azul

console.log(colores.length); // 3


// 5. FUNCIONES COMO VALORES
// Las funciones pueden asignarse a variables.

const decirHola = function() {
  return "Hola";
};

console.log(decirHola()); // Hola

// También pueden pasarse como argumentos.

function ejecutar(fn) {
  fn();
}
ejecutar(() => console.log("Función recibida como argumento"));

// Y una función puede devolver otra función.

function crearSaludo() {
  return function() {
    return "Hola desde otra función";
  };
}

const nuevoSaludo = crearSaludo();

console.log(nuevoSaludo()); // Hola desde otra función


// 6. VALOR VS REFERENCIA

// PRIMITIVOS
// Al asignarlos a otra variable se copia el contenido.

let a = 1;
let b = a;

b = 2;

console.log(a); // 1
console.log(b); // 2


// OBJETOS
// Dos variables pueden apuntar al mismo objeto.

const o1 = {
  x: 1
};

const o2 = o1;

o2.x = 2;

console.log(o1.x); // 2
console.log(o2.x); // 2

// El cambio se observa desde las dos variables porque
// ambas hacen referencia al mismo objeto.