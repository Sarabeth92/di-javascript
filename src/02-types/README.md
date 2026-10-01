# 02 · Tipos de datos

## Básicos

## Ejercicio 1 · Tipos primitivos y `typeof`

**Explicación.** Creo una variable de tipo `string`, `number`, `boolean`, `undefined` y `null`. Utilizo `typeof` para comprobar el tipo de cada una. En el caso de `null`, JavaScript devuelve `"object"` debido a una peculiaridad histórica del lenguaje.

```js
let nombre = "Sortia";
let edad = 33;
let esEstudiante = true;
let ciudad;
let pais = null;

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(esEstudiante, typeof esEstudiante);
console.log(ciudad, typeof ciudad);
console.log(pais, typeof pais);
```

**Salida**

```text
Sortia string
33 number
true boolean
undefined undefined
null object
```

---

## Ejercicio 2 · Conversión de tipos

**Explicación.** Utilizo `Number()` para convertir la cadena `"42"` en un número y `String()` para convertir el número `42` en una cadena. Con `typeof` compruebo el tipo obtenido después de cada conversión.

```js
console.log(typeof Number("42"));
console.log(typeof String(42));
```

**Salida**

```text
number
string
```

---

## Ejercicio 3 · Objetos y propiedades

**Explicación.** Creo un objeto `persona` con las propiedades `nombre`, `edad` y `ciudad`. Accedo al nombre utilizando notación de punto y a la ciudad mediante notación de corchetes. Después añado la propiedad `profesion` y utilizo `console.table()` para mostrar el objeto.

```js
let persona = {
  nombre: "Sara",
  edad: 34,
  ciudad: "Sotrondio",
};

console.log(persona.nombre);
console.log(persona["ciudad"]);

persona.profesion = "Ilustradora";

console.table(persona);
```

**Salida**

```text
Sara
Sotrondio
```

El objeto mostrado con `console.table()` contiene:

```text
nombre      Sara
edad        34
ciudad      Sotrondio
profesion   Ilustradora
```

---

## Ejercicio 4 · Arrays y `Array.isArray()`

**Explicación.** Creo un array `numeros` con cinco valores. `typeof` devuelve `"object"` para los arrays, por lo que utilizo `Array.isArray()` para comprobar específicamente si el valor es un array.

```js
let numeros = [1, 2, 3, 4, 5];

console.log(typeof numeros);
console.log(Array.isArray(numeros));
```

**Salida**

```text
object
true
```

---

## Para pensar

## Ejercicio 5 · Predicciones con `typeof` y comparaciones

**Explicación.** Compruebo el resultado de `typeof` con `null`, un array y una función. También comparo `null` y `undefined` utilizando tanto el operador estricto `===` como el operador `==`.

`typeof null` y `typeof []` devuelven `"object"`, mientras que una función devuelve `"function"`. Con `===`, `null` y `undefined` son diferentes, pero con la comparación no estricta `==` se consideran iguales.

```js
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof (() => {})); // function
console.log(null === undefined); // false
console.log(null == undefined); // true
```

**Predicción**

```text
object
object
function
false
true
```

**Salida**

```text
object
object
function
false
true
```

---

## Ejercicio 6 · Valor y referencia

**Explicación.** `a` y `b` apuntan al mismo objeto, por lo que al modificar `b.x` también cambia el valor que vemos mediante `a.x`.

En cambio, los valores primitivos se copian. Al hacer `d = c`, `d` recibe una copia del valor `1`, por lo que cambiar posteriormente `d` a `5` no modifica el valor de `c`.

```js
const a = { x: 1 };
const b = a;
b.x = 5;
console.log(a.x);

let c = 1;
let d = c;
d = 5;
console.log(c);

/* a.x cambia porque a y b apuntan al mismo objeto, por lo que al modificar
b.x también se modifica el objeto al que apunta a.

En cambio, c no cambia porque los valores primitivos se copian. Al hacer
d = c, d recibe una copia del valor 1, por lo que cambiar d a 5 no modifica c. */
```

**Predicción**

```text
5
1
```

**Salida**

```text
5
1
```

---

## Ejercicio 7 · Conversiones con `Number()`

**Explicación.** Compruebo cómo se comporta `Number()` al intentar convertir distintos valores. Una cadena que no representa un número y `undefined` producen `NaN`. Una cadena vacía y `null` se convierten en `0`, `true` se convierte en `1` y una cadena que contiene un número decimal se convierte en un valor de tipo `number`.

```js
console.log(Number("hola")); // NaN
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number("3.14")); // 3.14
```

**Predicción**

```text
NaN
0
0
NaN
1
3.14
```

**Salida**

```text
NaN
0
0
NaN
1
3.14
```

---

## Reto

## Ejercicio 8 · Función `describir`

**Explicación.** Creo una función `describir(valor)` para obtener de forma más concreta el tipo de un valor. Primero compruebo si el valor es `null` mediante `=== null`. Después utilizo `Array.isArray()` para detectar los arrays. Para el resto de valores utilizo directamente `typeof`.

Pruebo la función con ocho valores diferentes para comprobar el comportamiento con `null`, arrays, funciones, objetos, strings, `NaN`, booleanos y `undefined`.

```js
function describir(valor) {
  if (valor === null) {
    return "null";
  }

  if (Array.isArray(valor)) {
    return "array";
  }

  return typeof valor;
}

console.log(describir(null));
console.log(describir([1, 2]));
console.log(describir(() => {}));
console.log(describir({ a: 1 }));
console.log(describir("hola"));
console.log(describir(NaN));
console.log(describir(true));
console.log(describir(undefined));
```

**Salida**

```text
null
array
function
object
string
number
boolean
undefined
```
