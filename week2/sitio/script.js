import { getWeather } from "./services/weather.js";
import { getDay, obtenerClima, saludar, upperCase } from "./utils.js";
// console.log("funciona")

// const numbers = [1,2,3,4]

// const doubles = numbers.map((num)=> num * 8)

// console.log(doubles)

// numbers.forEach((number)=>{
//     console.log(`El doble es ${number*2}`)
// })

// const coders = [
//   { name: 'Edwin', cohort: 1 },
//   { name: 'Milton', cohort: 2 },
//   { name: 'Javier', cohort: 3 }
// ];

// coders.forEach((coder)=>{
//     const message = `Hola ${coder.name} pertence a ${coder.cohort}`
//     console.log(message)
// })

// const teamLeader = {
//   name: 'Antony',
//   language: 'JavaScript'
// };

// for (const key in teamLeader) {
//   console.log(`${key}: ${teamLeader[key]}`);
// }

// const coders2 = [
//   { name: 'Edwin', cohort: 1 },
//   { name: 'Milton', cohort: 2 },
//   { name: 'Javier', cohort: 3 },
//   { name: 'Hugo', cohort: 4 },
//   { name: 'Miguel', cohort: 7 },
//   { name: 'Camilo', cohort: 9 },
// ];

// const user = {
//     name: "Kevin",
//     lastName: "Restrepo",
//     age: 19,
//     email: "Kevin@correo.com",
//     addres:{
//         street: "avenida siempre viva",
//         number: 123,
//         city: "Medellin"
//     }
// }
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// const ArrayKeys = Object.values(user)

// console.log(ArrayKeys[2])

// let myMap = new Map()

// myMap.set(12, "Doce")
// myMap.set(true, "Verdadero")

// console.log(myMap)

// let myMap = new Map();
// myMap.set('name', 'Antony');
// myMap.set(123, 'ID');

// console.log(myMap.get('name'));

// console.table(user);

// console.error("va marcar un error")

// console.info("va a mostrar info")

// const name2 = "David Henao"

// const upperCase = name2.toUpperCase()
// const lowerCase = name2.toLowerCase()

// console.log(name2.toLowerCase())

// console.log(`Hoy es ${days[day]} la hora es ${hour} y la fecha es ${date}`)

// let name = "david";

// saludar();

// console.log(upperCase(name));

// console.log(getDay());

// select
const inputCity = document.getElementById("cityId");
const button = document.getElementById("button");

let city;

inputCity.addEventListener("input", (e) => {
  city = e.target.value;
});

button.addEventListener("click", () => {
  console.log("se hizo clic");
  getResult();
});

const getResult = async () => {
  const result = await getWeather(city);

  console.log(result);

  render();
};

// sum(200,300);

// function sum(a,b) {
//   console.log(a + b)
// }

// const sum = (a,b)=>{
//   console.log(a + b)
// }

// sum(2,6);

// console.log(value);

// var value = 200;

// console.log(value)

// let value = 200;
// console.log(value);

// const valuePi = 3.1416
// console.log(valuePi)

// let global = "global externo"

// function mostrarGlobal() {

//   var global = "Soy global";
//   let globalLet = "También soy global";

//   console.log(global); // "Soy global"
//   console.log(globalLet); // "También soy global"
// }
// console.log(global)
// console.log(globalLet); // "Soy global" (accesible desde cualquier parte)

// let response;

// mostrarGlobal();

// if (valuePi > 3){
//   let valueInterno = 11
//   let result = valuePi + valueInterno
//   var response = result
// }

// console.log(response)

// let nombre = "Externa";

// function externa() {
//   // let nombre = "Función Externa";

//   function interna() {
//     console.log(nombre);
//   }

//   interna();
// }

// externa();

// function crearMultiplicador(mul){
//   return function(num){
//     return `mul=${mul} y num = ${num}`
//   }
// }

// const multiplicadorPor8 = crearMultiplicador(8)
// const multiplicadorPor2 = crearMultiplicador(2)

// console.log(multiplicadorPor8(100))
// console.log(multiplicadorPor2(20))

// function crearMultiplicador(multiplicador){
//   return function(num){
//     return numero * multiplicador
//   }
// }

// const response = crearMultiplicador()
// console.log(response)

// function crearMultiplicador(multiplicador) {
//   return function(numero) {
//     return numero * multiplicador;
//   };
// }

// const multiplicarPor2 = crearMultiplicador(2);
// const multiplicarPor5 = crearMultiplicador(5);

// console.log(multiplicarPor2(10)); // 20
// console.log(multiplicarPor5(10)); // 50

// console.log("Inicio");

// setTimeout(function() {
//   console.log("Timeout 1");
// }, 0);

// console.log("Fin");

// console.log("1. Inicio");

// const API_KEY = "5b5b731343003351e1780f61e7a57c21";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=${API_KEY}&units=metric&lang=es`;

// // 2. Web APIs - Operaciones asincrónicas
// setTimeout(() => console.log("4. Callback del timeout"), 0);
// fetch(url)
//   .then((res) => console.log("5. Respuesta del fetch"))
//   .catch((err) => console.log("el error que puse"));

// // 3. Call Stack continúa
// console.log("2. Fin del código síncrono");

// setTimeout(function(){
//   console.log("se imprime algo")
// },6000)

// const numbers = [1,2,3,9,8,7,0];

// numbers.forEach((number)=>{
//   console.log(number * 100)
// })

// function saludarOtraFunc(cosa, func){
//   console.log(`hola ${cosa}`)

//   func(2,4)

// }

// const lastname = "Bustamante"

// saludarOtraFunc(lastname, (a,b)=>{
// console.log(a+b)
// })

// function descargar(url, callback) {
//   console.log(`Descargando ${url}...`);

//   setTimeout(() => {
//     const datos = { url, contenido: "Datos del servidor" };
//     callback(null, datos);
//   }, 1000);
// }

// descargar("https://api.ejemplo.com", function(error, datos) {
//   if (error) {
//     console.log("Error:", error);
//   } else {
//     console.log("Datos recibidos:", datos);
//   }
// });

// const objeto = {
//   name: "hugo",
//   lastname: "mbappe",
//   isActive: true,
//   saludar2: ()=>{
//     console.log(`hello ${objeto.name}`)
//   },
//   saludar: function(){
//     console.log(`hello ${this.name}`)
//     console.log(`hello ${this.lastname}`)
//   }
// }

// objeto.saludar2()

let promesa = new Promise((resolve, reject) => {
  let falla = false;

  if (falla) {
    reject("fallo");
  } else {
    resolve([
      { name: "esteban", lastName: "perez", age: 30 },
      { name: "esteban", lastName: "perez", age: 30 },
      { name: "esteban", lastName: "perez", age: 30 },
    ]);
  }
});

promesa
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => console.log(err))
  .finally(console.log("algo que se ejecuta siempre al terminar"));

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('The promise succeeded'), 1000);
// });

// promise.then(result => console.log(result));

// const objeto = {
//   nombre: "Carlos",
//   saludarNormal: function() {
//     console.log(this.nombre); // "Carlos"
//   },
//   saludarFlecha: () => {
//     console.log(this.nombre); // undefined (this es del contexto externo)
//   }
// };

// objeto.saludarNormal(); // "Carlos"
// objeto.saludarFlecha(); // undefined
