//Básicos
/*1. Crea una declaración de función saludar(nombre) que devuelva "Hola, <nombre>".*/
console.log("Ejercicio 1: "); 

function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Sara")); // Hola, Sara

/*2. Crea una expresión de función sumar(a, b) que devuelva la suma de dos números.*/
console.log("Ejercicio 2: "); 

function sumar(a, b) {
  console.log(a + b);
}

sumar(9, 13); // 22

/*3. Crea una arrow function multiplicar(a, b) con retorno implícito (sin llaves ni return).*/
console.log("Ejercicio 3: "); 

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20

/*4. Crea una arrow function esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual 
a 18 y false en caso contrario.*/
console.log("Ejercicio 4: ");

const esMayorDeEdad = (edad) => edad >= 18;
console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false

/*5. Modifica saludar para que, si no se pasa nombre, salude a "invitado" usando un parámetro por defecto.
Salida esperada:
Hola, Ana
Hola, invitado */
console.log("Ejercicio 5: "); 

function saludar(nombre = "invitado") {
  return `Hola, ${nombre}`;
}
console.log(saludar("Sara")); // Hola, Sara
console.log(saludar());        // Hola, invitado

/*6. Crea sumarTodos(...numeros) con rest parameters que devuelva la suma de cualquier cantidad de 
argumentos.

sumarTodos(1, 2, 3)        → 6
sumarTodos(10, 20, 30, 40) → 100
sumarTodos()               → 0 */
console.log("Ejercicio 6: ");

function sumarTodos(...numeros) {
  let total = 0;
    for (const n of numeros) {
    total += n;
  } 
    return total;
}
console.log(sumarTodos(1, 2, 3)); // 6
console.log(sumarTodos(10, 20, 30, 40)); // 100
console.log(sumarTodos()); // 0

//Para pensar
/*7. Predice qué ocurre en cada console.log antes de ejecutar. Uno de los dos falla: 
explica en un comentario cuál y por qué, usando el concepto de hoisting.*/
console.log("Ejercicio 7: "); 

console.log(cuadrado(3));
function cuadrado(n) {
  return n * n;
}
/*El  console.log(cuadrado(3)) funciona correctamente porque las declaraciones de funciones son "hoisted", 
y se elevan al inicio del ámbito, devuelve 9.*/

// console.log(cubo(3)); // Descomentar para comprobar el ReferenceError
const cubo = n => n ** 3; 

/*El console.log(cubo(3)) falla porque las expresiones de funciones no son "hoisted", 
y la variable cubo no está definida en el momento de la llamada, por lo que devuelve un ReferenceError. 
Aunque su declaración participa en el hoisting, no puede utilizarse antes de
ser inicializada porque se encuentra en la Temporal Dead Zone (TDZ).*/

/*8. Escribe crearContador() que devuelva un objeto con los métodos incrementar, valor y reiniciar. 
Crea dos contadores independientes y demuestra que incrementar uno no afecta al otro. 
Explica en un comentario qué es lo que “recuerda” cada contador.*/
console.log("Ejercicio 8: "); 

function crearContador() {
  let contador = 0;
    return {
    incrementar: function() {
        contador++;
    },
    valor: function() {
        return contador;
    }
    ,
    reiniciar: function() {
        contador = 0;
    }
  };
}

const contador1 = crearContador(); 
const contador2 = crearContador();  

// Cada contador tiene su propio estado privado "contador" que recuerda su valor independientemente del otro.
contador1.incrementar();
contador1.incrementar();
console.log(contador1.valor()); // 2
contador2.incrementar();
console.log(contador2.valor()); // 1        

/*9. Escribe repetir(fn, veces) que reciba una función y la ejecute (veces) veces. 
Pruébala pasándole una arrow function que imprima un mensaje.*/
console.log("Ejercicio 9: ");

function repetir(fn, veces) {
  for (let i = 0; i < veces; i++) {
    fn();
  } 
}
repetir(() => console.log("¡Hola!"), 3); // ¡Hola! (tres veces)

/*10. Escribe multiplicador(factor) que devuelva una función. 
Úsala para crear doble y triple y aplícalas a varios números.*/
console.log("Ejercicio 10: "); 

function multiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}

const doble = multiplicador(2); // Crea una función que multiplica por 2
console.log(doble(5)); // 10   

const triple = multiplicador(3); // Crea una función que multiplica por 3
console.log(triple(5)); // 15

//Reto
/*11. Escribe crearCalculadora() que devuelva un objeto con los métodos sumar(a, b), 
restar(a, b), multiplicar(a, b) y dividir(a, b). 
Cada operación debe guardar un registro en un historial interno al que no se pueda 
acceder directamente, solo a través de un método historial() que devuelva una copia.

const calc = crearCalculadora();
calc.sumar(3, 4);
calc.multiplicar(2, 5);
calc.dividir(10, 0);
console.log(calc.historial());

Salida esperada:

["3 + 4 = 7", "2 × 5 = 10", "10 / 0 = Error: división por cero"]

Pista: es el mismo patrón que crearContador, pero el estado privado es un array. */
console.log("Ejercicio 11: ");

function crearCalculadora() {
  const historial = [];

  return {
    sumar: function(a, b) {
      const resultado = a + b;
      historial.push(`${a} + ${b} = ${resultado}`);
      return resultado;
    },

    restar: function(a, b) {
      const resultado = a - b;
      historial.push(`${a} - ${b} = ${resultado}`);
      return resultado;
    },

    multiplicar: function(a, b) {
      const resultado = a * b;
      historial.push(`${a} × ${b} = ${resultado}`);
      return resultado;
    },

    dividir: function(a, b) {
      if (b === 0) {
        historial.push(`${a} / ${b} = Error: división por cero`);
        return "Error: división por cero";
      }

      const resultado = a / b;
      historial.push(`${a} / ${b} = ${resultado}`);
      return resultado;
    },

    historial: function() {
      return [...historial];
    }
  };
}

const calc = crearCalculadora();

calc.sumar(3, 4);
calc.multiplicar(2, 5);
calc.dividir(10, 0);

console.log(calc.historial());
