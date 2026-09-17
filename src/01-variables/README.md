# 01 · Variables

## Ejercicio 1 · Declarar y reasignar con `let`

**Explicación.** Declaro `nombre` con `let` porque el ejercicio pide reasignarla
después; con `const` la segunda asignación daría `TypeError`.

```js
let nombre = "Ana";
console.log(nombre);
nombre = "Luis";
console.log(nombre);
```

```txt
Ana
Luis
```

## Ejercicio 2 · Constante `PI`

**Explicación.** ...