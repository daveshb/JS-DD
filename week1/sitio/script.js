// const PI = 3.1416
// let age = 20
// let isActive = true

// let name_ = "David";

// let message = "Hola mundo"
// let saludo = 'hola ${name_}'
// let saludo2 = `hola ${name_}`

// let fruits = ["manzana", "pera", "mango"]

// let persona = {
//     nombre: "Ana",
//     edad: 28,
//     ciudad: "Bogotá"
// };

// function saludar(){
//     console.log("hola, bn o no?")
// }
// saludar()

// function sumar(a, b){
//     let result;
//     result = a + b
//     console.log(result)
// }

// let response = sumar2(4,8)

// console.log(response)

// const obtenerFechaActual = () => {
//     return new Date();
// };

// let date = obtenerFechaActual()

// console.log(date)

// const sumar2 = (a,b) => a + b

// let num = prompt("Ingrese un numero: ")
// let num2 = prompt("Ingrese otro numero: ")

// let suma = sumar2(+num, num2)

// alert(`la suma es ${suma}`)
// console.log(typeof suma)

// let number = 40

// if (number > 30){
//     console.log("es mayo que 30")
// } else {
//     console.log("es menor que 30")
// }

// let name = prompt("Ingrese su nombre: ")
// let age = prompt("Ingrese su edad: ")
// let city = prompt("Ingrese su ciudad: ")
// let message = "";

// if (age >= 18){
//     message = "eres mayor de edad"
// } else{
//     message = "eres menor de edad"
// }

// alert(`Eres ${name} vives en ${city} y ${message}`)

// let lastName = "henao";
// let lastName2 = "Santamaria";
// let num = 16;
// let num2 = 15;
// let num3 = 20;
// let result;
// let msn;


// if (num == num2) {
//   console.log("Se cumple la validación");
// }  else {
//   console.log("No cumple la validación");
// }

// num > num2 
// ? msn = "Se cumple la validación" 
// : msn = "No cumple la validación";

// console.log(msn)

// let result;


// const sumar = (num1, num2 = 5) => {
//     console.log("esto sirve para sumar")
//     return `El resultado es ${num1 + num2}`
// }

// result = sumar(100)

// console.log(sumar(200))




// if (stateUser == "active"){
    //     msn = "El usuario puede ingresar"
    // } else if (stateUser == "noActive") {
        //     msn = "El usuario no puede ingresar"
        // } else if (stateUser == "deleted"){
            //         msn = "El usuario se retiro"
            // } else {
                //     msn = "El usuario no tiene esatdo"
                // }
                
// let stateUser = "active";
// let msn;

// switch (stateUser){
//     case "active":
//         msn = "El usuario puede ingresar"
//         break
//     case "noActive":
//         msn = "El usuario no puede ingresar"
//         break
//     case "deleted":
//         msn = "El usuario se retiro"
//         console.log(2 + 2)
//         console.log(msn)
//         break
//     default:
//         msn = "El usuario no tiene estado"
//         break
// }

// console.log(msn)


// for ( let i = 0; i < 10; i++){
//     console.log(i)
// }

// const fruits =["manzana", "pera", "piña", "mora", "mango", "melocoton"];

// // console.log(fruits.length)

// for (let i = 0; i < fruits.length; i++){
//     console.log(`La fruta es ${fruits[i]} `)
// }

// for (let fruta of fruits) {
//     if (fruta != "pera"){
//         console.log(`me gusta la ${fruta} `);
//     }
// }


// let contador = 10;

// while (contador <= 5) {
//     console.log(contador);
//     contador++;
// }


// let num = 10;

// do {
//     console.log(num);
//     num++;
// } while (num < 5);



// const fruits = ["manzana", "pera", "piña", "mora", "mango", "melocoton"];

// fruits.push("papaya")
// console.log(fruits)
// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()
// console.log(fruits)

// fruits.unshift("fresa")
// console.log(fruits)

// console.log(fruits.indexOf("piña"))

// let fresaExist;
// let uvaExit;

// fresaExist = fruits.includes("fresa");
// // uvaExit = fruits.includes("uva");

// if (fresaExist){
//     console.log("si hay fresa")
// } else {
//     console.log(" se acabo fresa")
// }



// console.log(fruits.length)
// console.log(fruits.)



// let isActive = true;
// console.log(isActive)

// if (isActive){
//     console.log("Es verdadero")
// } else{
//     console.log("Es falso")
// }
// let majorThat18 = false


// let userAllowed;

// let isActive = "Esta activo";

// userAllowed =  ""  ||  isActive

// console.log(userAllowed)



// let flag = true
// let isActive;


// isActive = flag && "esta activo";

// flag = isActive && "esta activo";

// console.log(flag)



// const boton = document.getElementById("myBoton");

// console.log(boton)

// // boton.addEventListener("click",  () => {
// //     console.log(" se hizo click");
// // })


// let number = 10

// document.addEventListener('DOMContentLoaded', (event) => {


// });



let num = 2

let task = [];

const increment = ()=>{
    num++
    console.log(`el contador va en ${num}`);
    contador.innerHTML = `<h2>¡El contador es ${num}!</h2>`
    task.push(title)
    console.log(task)
}

const miBoton = document.getElementById('myBoton');

miBoton.addEventListener('click', () => {
    increment();
});

let contador = document.getElementById("contador");





let title;


let input = document.getElementById("miInput");

input.addEventListener("input", (event) => {
    console.log("el texto es:", event.target.value);
    title = event.target.value
});