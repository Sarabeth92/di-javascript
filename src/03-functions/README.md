# 03 · Funciones

## Básicos

## Ejercicio 1 · Declaración de función `saludar`

**Explicación.** Creo una función `saludar(nombre)` que recibe un nombre como parámetro y devuelve un saludo utilizando un template literal.

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar("Sara"));
```

**Salida**

```text
Hola, Sara
```

---

## Ejercicio 2 · Función `sumar`

**Explicación.** Creo una función `sumar(a, b)` que recibe dos números como parámetros y muestra por consola el resultado de sumarlos.

```js
function sumar(a, b) {
  console.log(a + b);
}

sumar(9, 13);
```

**Salida**

```text
22
```

---

## Ejercicio 3 · Arrow function con retorno implícito

**Explicación.** Creo una arrow function `multiplicar(a, b)` que multiplica dos números. Al no utilizar llaves ni `return`, el resultado se devuelve de forma implícita.

```js
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5));
```

**Salida**

```text
20
```

---

## Ejercicio 4 · Comprobar mayoría de edad

**Explicación.** Creo una arrow function `esMayorDeEdad(edad)` que comprueba si la edad recibida es mayor o igual que `18`. La comparación devuelve `true` si se cumple y `false` en caso contrario.

```js
const esMayorDeEdad = (edad) => edad >= 18;

console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(15));
```

**Salida**

```text
true
false
```

---

## Ejercicio 5 · Parámetro por defecto

**Explicación.** Modifico la función `saludar` para establecer `"invitado"` como valor por defecto del parámetro `nombre`. Si no se pasa ningún nombre al llamar a la función, se utiliza automáticamente ese valor.

```js
function saludar(nombre = "invitado") {
  return `Hola, ${nombre}`;
}

console.log(saludar("Sara"));
console.log(saludar());
```

**Salida**

```text
Hola, Sara
Hola, invitado
```

---

## Ejercicio 6 · Rest parameters

**Explicación.** Creo la función `sumarTodos(...numeros)`, utilizando un rest parameter para poder recibir cualquier cantidad de números. Recorro los valores con un `for...of` y voy acumulando su suma en `total`.

```js
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));
console.log(sumarTodos(10, 20, 30, 40));
console.log(sumarTodos());
```

**Salida**

```text
6
100
0
```

---

## Para pensar

## Ejercicio 7 · Hoisting

**Explicación.** Predije que `cuadrado(3)` funcionaría correctamente porque las declaraciones de funciones son `hoisted` y se elevan al inicio del ámbito, por lo que devuelve `9`.

En cambio, `cubo(3)` falla porque la función se encuentra asociada a una variable declarada con `const`. Aunque su declaración participa en el hoisting, no puede utilizarse antes de ser inicializada porque se encuentra en la Temporal Dead Zone (TDZ).

```js
console.log(cuadrado(3));

function cuadrado(n) {
  return n * n;
}

/*El console.log(cuadrado(3)) funciona correctamente porque las declaraciones de funciones son "hoisted", 
y se elevan al inicio del ámbito, devuelve 9.*/

// console.log(cubo(3)); // Descomentar para comprobar el ReferenceError
const cubo = (n) => n ** 3;

/*El console.log(cubo(3)) falla porque las expresiones de funciones no son "hoisted", 
y la variable cubo no está definida en el momento de la llamada, por lo que devuelve un ReferenceError. 
Aunque su declaración participa en el hoisting, no puede utilizarse antes de
ser inicializada porque se encuentra en la Temporal Dead Zone (TDZ).*/
```

**Salida**

```text
9
```

Si se descomenta:

```js
console.log(cubo(3));
```

se produce un `ReferenceError`.

---

## Ejercicio 8 · Contadores independientes

**Explicación.** Creo `crearContador()`, que mantiene una variable `contador` y devuelve un objeto con los métodos `incrementar`, `valor` y `reiniciar`. Cada contador creado tiene su propio estado privado y recuerda su valor independientemente de los demás.

```js
function crearContador() {
  let contador = 0;
  return {
    incrementar: function () {
      contador++;
    },
    valor: function () {
      return contador;
    },
    reiniciar: function () {
      contador = 0;
    },
  };
}

const contador1 = crearContador();
const contador2 = crearContador();

// Cada contador tiene su propio estado privado "contador" que recuerda su valor independientemente del otro.
contador1.incrementar();
contador1.incrementar();
console.log(contador1.valor());

contador2.incrementar();
console.log(contador2.valor());
```

**Salida**

```text
2
1
```

---

## Ejercicio 9 · Función como parámetro

**Explicación.** Creo la función `repetir(fn, veces)`, que recibe una función y una cantidad de veces. Mediante un bucle `for` ejecuto la función recibida tantas veces como se indique.

```js
function repetir(fn, veces) {
  for (let i = 0; i < veces; i++) {
    fn();
  }
}

repetir(() => console.log("¡Hola!"), 3);
```

**Salida**

```text
¡Hola!
¡Hola!
¡Hola!
```

---

## Ejercicio 10 · Función `multiplicador`

**Explicación.** Creo una función `multiplicador(factor)` que devuelve otra función. Utilizo esta función para crear `doble` y `triple`, que multiplican el número recibido por `2` y por `3` respectivamente.

```js
function multiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const doble = multiplicador(2);
console.log(doble(5));

const triple = multiplicador(3);
console.log(triple(5));
```

**Salida**

```text
10
15
```

---

## Reto

## Ejercicio 11 · Calculadora con historial privado

**Explicación.** Creo `crearCalculadora()`, que contiene un array `historial` privado. Los métodos `sumar`, `restar`, `multiplicar` y `dividir` realizan las operaciones y guardan un registro de cada una en el historial.

El método `historial()` devuelve una copia del array utilizando `[...historial]`, de forma que el historial original no pueda modificarse directamente desde fuera de la función.

```js
function crearCalculadora() {
  const historial = [];

  return {
    sumar: function (a, b) {
      const resultado = a + b;
      historial.push(`${a} + ${b} = ${resultado}`);
      return resultado;
    },

    restar: function (a, b) {
      const resultado = a - b;
      historial.push(`${a} - ${b} = ${resultado}`);
      return resultado;
    },

    multiplicar: function (a, b) {
      const resultado = a * b;
      historial.push(`${a} × ${b} = ${resultado}`);
      return resultado;
    },

    dividir: function (a, b) {
      if (b === 0) {
        historial.push(`${a} / ${b} = Error: división por cero`);
        return "Error: división por cero";
      }

      const resultado = a / b;
      historial.push(`${a} / ${b} = ${resultado}`);
      return resultado;
    },

    historial: function () {
      return [...historial];
    },
  };
}

const calc = crearCalculadora();

calc.sumar(3, 4);
calc.multiplicar(2, 5);
calc.dividir(10, 0);

console.log(calc.historial());
```

**Salida**

```text
["3 + 4 = 7", "2 × 5 = 10", "10 / 0 = Error: división por cero"]
```
