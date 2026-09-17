# 01 · Variables

## Básicos

## Ejercicio 1 · Declarar y reasignar con `let`

**Explicación.** Declaro `nombre` con `let` porque el ejercicio pide reasignar su valor después. Primero contiene `"Sara"` y después se cambia por `"Sarabeth"`.

```js
let nombre = "Sara";
console.log(nombre);
nombre = "Sarabeth";
console.log(nombre);
```

**Salida**

```text
Sara
Sarabeth
```

---

## Ejercicio 2 · Constante `PI`

**Explicación.** Declaro `PI` con `const` porque representa un valor que no debe cambiar. Si intento asignarle un nuevo valor se produce un `TypeError`, ya que una constante no puede ser reasignada.

```js
const PI = 3.1416;
// PI = 3.14; // TypeError: Assignment to constant variable.
```

**Salida si se intenta reasignar**

```text
TypeError: Assignment to constant variable.
```

---

## Ejercicio 3 · Variable sin valor inicial

**Explicación.** Declaro `edad` sin asignarle inicialmente ningún valor. JavaScript le asigna automáticamente el valor `undefined`. Después le asigno el valor `34`.

```js
let edad;
console.log(edad);
edad = 34;
console.log(edad);
```

**Salida**

```text
undefined
34
```

---

## Ejercicio 4 · Precio final e IVA

**Explicación.** `precioBase` se declara con `let` porque su valor podría variar.

`iva` se declara con `const` porque en este ejemplo se mantiene fijo.

`precioFinal` depende del precio base y del IVA, por lo que también se declara con `let`.

```js
let precioBase = 100;
const iva = 0.21;
let precioFinal = precioBase + precioBase * iva;

console.log("El precio final es: " + precioFinal);
```

**Salida**

```text
El precio final es: 121
```

---

## Para pensar

## Ejercicio 5 · Ámbito de bloque con `let`

**Explicación.** Predije que primero se imprimiría `2` y después `1`. La variable `x` declarada dentro de las llaves pertenece únicamente a ese bloque y es diferente de la variable `x` declarada fuera. Por eso modificar su valor dentro del bloque no sustituye el valor de la variable exterior.

```js
let x = 1;

{
  let x = 2;
  console.log(x);
}

console.log(x);
```

**Predicción**

```text
2
1
```

**Salida**

```text
2
1
```

---

## Ejercicio 6 · Mutación y reasignación de una constante

**Explicación.** Aunque `lista` está declarada con `const`, es posible modificar el contenido del array mediante métodos como `push()`. Lo que no se puede hacer es reasignar la variable para que apunte a un array diferente.

```js
const lista = [1, 2];

lista.push(3);
console.log(lista);

// lista = []; // TypeError
```

**Salida**

```text
[1, 2, 3]
```

Si se ejecutase:

```js
lista = [];
```

se produciría un error:

```text
TypeError: Assignment to constant variable.
```

---

## Ejercicio 7 · Nombres descriptivos y `camelCase`

**Explicación.** Sustituyo los nombres `a`, `b`, `c` y `d` por nombres más descriptivos utilizando la convención `camelCase`, de forma que sea más sencillo identificar qué contiene cada variable.

```js
let a = "Ana";
let b = 30;
let c = true;
let d = 1250.5;

let nombreMujer = "Ana";
let numeroEntero = 30;
let esAmarillo = true;
let numeroDecimal = 1250.5;

console.log(nombreMujer, numeroEntero, esAmarillo, numeroDecimal);
```

**Salida**

```text
Ana 30 true 1250.5
```

---

## Reto

## Ejercicio 8 · Diferencia entre `var` y `let` en un bucle

### Utilizando `var`

**Explicación.** Al utilizar `var`, las tres iteraciones comparten la misma variable `i`. Los `console.log` se ejecutan después mediante `setTimeout`, momento en el que el bucle ya ha terminado y `i` tiene el valor `3`.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

**Salida**

```text
3
3
3
```

### Utilizando `let`

**Explicación.** Al cambiar `var` por `let`, cada iteración del bucle mantiene su propio valor de `i` debido al ámbito de bloque de `let`. Por eso cada función ejecutada posteriormente conserva el valor correspondiente a su iteración.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

**Salida**

```text
0
1
2
```

Por tanto, el resultado cambia porque `let` tiene **ámbito de bloque**, mientras que `var` tiene **ámbito de función**.
