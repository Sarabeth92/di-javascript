//let
let cliente = "Germán";
cliente = "Ana";
cliente = 20;
console.log(cliente); // 20

let pipol = "Olegario";
pipol = "Eustaquio";
console.log(pipol); // Eustaquio

let precio;
console.log(precio); // undefined
precio = 20.5;
console.log(precio); // 20.5

//const
const cliente2 = "Germán";
// cliente = "Ana"; // TypeError en modo estricto habitual

const persona = { nombre: "Ana", edad: 30 };
persona.edad = 31; // válido: mutamos el objeto
// persona = {};    // inválido: reasignación del enlace
console.log(persona); // { nombre: "Ana", edad: 31 }

// const sinUsuario; // SyntaxError
const sinUsuario = null;

//var
function ejemplo() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1 — aún visible
  // console.log(y); // ReferenceError
}

// {...}
{
  // console.log(a);
  let a = 1;
  console.log(a); // 1
}
// console.log(a); // ReferenceError — fuera de ámbito

//Comparar let y const
let contador = 0;
contador += 1; // ok
let texto = "hola";
texto = "adiós"; // ok

const MAX = 100;
// MAX = 200; // TypeError

const lista = [1, 2];
lista.push(3); // ok — mismo array
// lista = []; // TypeError