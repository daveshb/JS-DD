# Clase de JavaScript - Semana 1

## 1. Variables y Tipos de Datos

### Variables
En JavaScript, podemos declarar variables usando `let`, `const` o `var`:

```javascript
// let - variable que puede cambiar
let nombre = "Juan";
nombre = "Pedro"; // ✅ Permitido

// const - constante, no puede cambiar
const edad = 25;
// edad = 30; // ❌ Error

// var - forma antigua (evitar usar)
var ciudad = "Bogotá";
```


### Tipos de Datos Primitivos

```javascript
// String (texto)
let texto = "Hola mundo";
let otroTexto = 'JavaScript';

// Number (números)
let entero = 42;
let decimal = 3.14;

// Boolean (verdadero/falso)
let esVerdad = true;
let esFalso = false;

// Undefined
let noDefinido;
console.log(noDefinido); // undefined

// Null
let vacio = null;

// Symbol
let simbolo = Symbol("id");
```

![Tipos de Datos](Screenshot%202026-01-07%20at%2011.23.19%20PM.png)

## 2. Operadores

### Operadores Aritméticos

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 - Suma
console.log(a - b); // 7  - Resta
console.log(a * b); // 30 - Multiplicación
console.log(a / b); // 3.333... - División
console.log(a % b); // 1  - Módulo (residuo)
console.log(a ** b); // 1000 - Exponenciación
```

![Operadores](Screenshot%202026-01-07%20at%2011.23.45%20PM.png)

### Operadores de Comparación

```javascript
let x = 5;
let y = "5";

console.log(x == y);  // true - Igualdad (convierte tipos)
console.log(x === y); // false - Igualdad estricta
console.log(x != y);  // false - Desigualdad
console.log(x !== y); // true - Desigualdad estricta
console.log(x > 3);   // true - Mayor que
console.log(x < 10);  // true - Menor que
console.log(x >= 5);  // true - Mayor o igual
console.log(x <= 5);  // true - Menor o igual
```

### Operadores Lógicos

```javascript
let verdadero = true;
let falso = false;

console.log(verdadero && falso); // false - AND (y)
console.log(verdadero || falso); // true - OR (o)
console.log(!verdadero);         // false - NOT (negación)
```

![Operadores Lógicos](Screenshot%202026-01-07%20at%2011.26.01%20PM.png)

## 3. Estructuras de Control

### Condicionales - if/else

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres menor de edad");
}
```

### Switch

```javascript
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log(nombreDia); // "Miércoles"
```


## 4. Ciclos (Loops)

### For Loop

```javascript
// Imprimir números del 0 al 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Recorrer un array
let frutas = ["manzana", "pera", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

### While Loop

```javascript
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```

### Do-While Loop

```javascript
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);
```

### For...of (para arrays)

```javascript
let colores = ["rojo", "verde", "azul"];
for (let color of colores) {
    console.log(color);
}
```


## 5. Funciones

### Declaración de Funciones

```javascript
// Función tradicional
function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(saludar("María")); // "Hola, María"

// Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // 8
```

### Funciones Flecha (Arrow Functions)

```javascript
// Arrow function
const multiplicar = (a, b) => {
    return a * b;
};

// Arrow function simplificada (return implícito)
const multiplicar2 = (a, b) => a * b;

console.log(multiplicar2(4, 5)); // 20

// Con un solo parámetro
const cuadrado = x => x * x;
console.log(cuadrado(3)); // 9
```

### Funciones como Expresiones

```javascript
const dividir = function(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
};

console.log(dividir(10, 2)); // 5
```


## 6. Arrays (Arreglos)

### Creación y Acceso a Arrays

```javascript
// Crear un array
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "texto", true, null];

// Acceder a elementos (índice empieza en 0)
console.log(numeros[0]); // 1
console.log(numeros[2]); // 3
console.log(numeros[numeros.length - 1]); // 5 (último elemento)

// Modificar elementos
numeros[0] = 10;
console.log(numeros); // [10, 2, 3, 4, 5]
```

### Propiedades y Métodos de Arrays

```javascript
let frutas = ["manzana", "pera", "uva"];

// length - obtener la longitud
console.log(frutas.length); // 3

// push() - agregar al final
frutas.push("naranja");
console.log(frutas); // ["manzana", "pera", "uva", "naranja"]

// pop() - eliminar del final
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "naranja"
console.log(frutas); // ["manzana", "pera", "uva"]

// unshift() - agregar al inicio
frutas.unshift("fresa");
console.log(frutas); // ["fresa", "manzana", "pera", "uva"]

// shift() - eliminar del inicio
let primeraFruta = frutas.shift();
console.log(primeraFruta); // "fresa"
console.log(frutas); // ["manzana", "pera", "uva"]

// indexOf() - encontrar el índice de un elemento
console.log(frutas.indexOf("pera")); // 1
console.log(frutas.indexOf("kiwi")); // -1 (no existe)

// includes() - verificar si existe un elemento
console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("kiwi")); // false
```

### Métodos de Iteración

```javascript
let numeros = [1, 2, 3, 4, 5];

// forEach() - ejecutar función para cada elemento
numeros.forEach(function(numero) {
    console.log(numero * 2);
});

// map() - crear nuevo array transformado
let duplicados = numeros.map(num => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

// filter() - filtrar elementos
let mayoresQue2 = numeros.filter(num => num > 2);
console.log(mayoresQue2); // [3, 4, 5]

// find() - encontrar el primer elemento que cumple condición
let encontrado = numeros.find(num => num > 3);
console.log(encontrado); // 4

// reduce() - reducir a un solo valor
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 15

// some() - verifica si al menos uno cumple
let hayMayoresQue4 = numeros.some(num => num > 4);
console.log(hayMayoresQue4); // true

// every() - verifica si todos cumplen
let todosMayoresQue0 = numeros.every(num => num > 0);
console.log(todosMayoresQue0); // true
```

### Métodos de Modificación

```javascript
let letras = ['a', 'b', 'c', 'd', 'e'];

// slice() - extraer porción (no modifica original)
let porcion = letras.slice(1, 4);
console.log(porcion); // ['b', 'c', 'd']
console.log(letras); // ['a', 'b', 'c', 'd', 'e']

// splice() - eliminar/agregar elementos (modifica original)
letras.splice(2, 1, 'x', 'y'); // desde índice 2, eliminar 1, agregar 'x' y 'y'
console.log(letras); // ['a', 'b', 'x', 'y', 'd', 'e']

// concat() - unir arrays
let array1 = [1, 2];
let array2 = [3, 4];
let unidos = array1.concat(array2);
console.log(unidos); // [1, 2, 3, 4]

// join() - convertir a string
let palabras = ["Hola", "mundo", "JS"];
let frase = palabras.join(" ");
console.log(frase); // "Hola mundo JS"

// reverse() - invertir array
let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]

// sort() - ordenar
let desordenado = [3, 1, 4, 1, 5];
desordenado.sort();
console.log(desordenado); // [1, 1, 3, 4, 5]

// sort con función comparadora (para números)
let numeros2 = [10, 5, 40, 25, 1000, 1];
numeros2.sort((a, b) => a - b);
console.log(numeros2); // [1, 5, 10, 25, 40, 1000]
```

### Arrays Multidimensionales

```javascript
// Array de arrays (matriz)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8

// Recorrer matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
```

## 7. Introducción al DOM (Document Object Model)

### ¿Qué es el DOM?

El DOM es una representación estructurada del documento HTML que permite a JavaScript acceder y manipular los elementos de la página web.

### Seleccionar Elementos del DOM

```javascript
// Por ID
let titulo = document.getElementById("miTitulo");

// Por clase (devuelve una colección)
let parrafos = document.getElementsByClassName("parrafo");

// Por etiqueta
let divs = document.getElementsByTagName("div");

// Query selector (primer elemento que coincida)
let primerBoton = document.querySelector(".boton");
let elementoPorId = document.querySelector("#miId");

// Query selector all (todos los elementos que coincidan)
let todosLosBotones = document.querySelectorAll(".boton");
```

### Capturar el Clic de un Botón

```javascript
// HTML:
// <button id="miBoton">Haz clic aquí</button>

// Opción 1: addEventListener
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    console.log("¡Botón clickeado!");
});

// Opción 2: función flecha
boton.addEventListener("click", () => {
    console.log("¡Botón clickeado con arrow function!");
});

// Opción 3: función externa
function manejarClic() {
    console.log("¡Botón clickeado con función externa!");
}
boton.addEventListener("click", manejarClic);

// Opción 4: onclick (no recomendado)
boton.onclick = function() {
    console.log("Click con onclick");
};
```

### Mostrar Texto en el DOM

```javascript
// HTML:
// <div id="contenedor"></div>
// <p id="parrafo">Texto original</p>
// <button id="btnMostrar">Mostrar texto</button>

let contenedor = document.getElementById("contenedor");
let parrafo = document.getElementById("parrafo");
let btnMostrar = document.getElementById("btnMostrar");

// Método 1: innerHTML (puede incluir HTML)
btnMostrar.addEventListener("click", () => {
    contenedor.innerHTML = "<h2>¡Hola desde JavaScript!</h2>";
});

// Método 2: textContent (solo texto)
btnMostrar.addEventListener("click", () => {
    contenedor.textContent = "Este es un texto simple";
});

// Método 3: innerText (similar a textContent)
btnMostrar.addEventListener("click", () => {
    contenedor.innerText = "Otro texto";
});

// Modificar texto existente
btnMostrar.addEventListener("click", () => {
    parrafo.textContent = "Texto modificado";
});
```

### Crear y Agregar Elementos al DOM

```javascript
// HTML:
// <div id="lista"></div>
// <button id="btnAgregar">Agregar elemento</button>

let lista = document.getElementById("lista");
let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", () => {
    // Crear un nuevo elemento
    let nuevoElemento = document.createElement("p");
    
    // Agregar texto al elemento
    nuevoElemento.textContent = "Nuevo párrafo creado dinámicamente";
    
    // Agregar clases
    nuevoElemento.classList.add("mi-clase");
    
    // Agregar el elemento al DOM
    lista.appendChild(nuevoElemento);
});

// Crear lista con múltiples elementos
btnAgregar.addEventListener("click", () => {
    let ul = document.createElement("ul");
    let frutas = ["Manzana", "Pera", "Uva"];
    
    frutas.forEach(fruta => {
        let li = document.createElement("li");
        li.textContent = fruta;
        ul.appendChild(li);
    });
    
    lista.appendChild(ul);
});
```

### Manipular Estilos CSS

```javascript
// HTML:
// <div id="caja">Caja</div>
// <button id="btnEstilo">Cambiar estilo</button>

let caja = document.getElementById("caja");
let btnEstilo = document.getElementById("btnEstilo");

btnEstilo.addEventListener("click", () => {
    // Cambiar estilos individuales
    caja.style.backgroundColor = "blue";
    caja.style.color = "white";
    caja.style.padding = "20px";
    caja.style.borderRadius = "10px";
});

// Agregar/remover clases CSS
btnEstilo.addEventListener("click", () => {
    caja.classList.add("activo");
    caja.classList.remove("inactivo");
    caja.classList.toggle("destacado"); // alterna
});
```

### Ejemplo Completo: Contador Interactivo

```javascript
// HTML:
// <div id="contador">0</div>
// <button id="btnIncrementar">+</button>
// <button id="btnDecrementar">-</button>
// <button id="btnReset">Reset</button>

let contador = 0;
let displayContador = document.getElementById("contador");
let btnIncrementar = document.getElementById("btnIncrementar");
let btnDecrementar = document.getElementById("btnDecrementar");
let btnReset = document.getElementById("btnReset");

function actualizarDisplay() {
    displayContador.textContent = contador;
    
    // Cambiar color según el valor
    if (contador > 0) {
        displayContador.style.color = "green";
    } else if (contador < 0) {
        displayContador.style.color = "red";
    } else {
        displayContador.style.color = "black";
    }
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    actualizarDisplay();
});

btnDecrementar.addEventListener("click", () => {
    contador--;
    actualizarDisplay();
});

btnReset.addEventListener("click", () => {
    contador = 0;
    actualizarDisplay();
});
```

### Eventos Comunes del DOM

```javascript
let elemento = document.getElementById("miElemento");

// Click
elemento.addEventListener("click", () => {
    console.log("Click");
});

// Doble click
elemento.addEventListener("dblclick", () => {
    console.log("Doble click");
});

// Mouse over (pasar por encima)
elemento.addEventListener("mouseover", () => {
    console.log("Mouse encima");
});

// Mouse out (salir)
elemento.addEventListener("mouseout", () => {
    console.log("Mouse fuera");
});

// Eventos de teclado
let input = document.getElementById("miInput");

input.addEventListener("keydown", (event) => {
    console.log("Tecla presionada:", event.key);
});

input.addEventListener("keyup", (event) => {
    console.log("Tecla liberada:", event.key);
});

// Eventos de formulario
let formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir envío del formulario
    console.log("Formulario enviado");
});
```

## 8. Truthy y Falsy (Coerción a Booleano)

En JavaScript, en los `if`, operadores lógicos y otras evaluaciones, los valores se convierten implícitamente a booleano. Un valor es "truthy" si se convierte a `true` y "falsy" si se convierte a `false`.

### Valores Falsy
Estos valores se consideran `false` al convertirlos a booleano:

```javascript
false
0
-0
0n         // BigInt cero
""         // cadena vacía (también '' y ``)
null
undefined
NaN
```

Puedes verificarlo con `Boolean()` o doble negación `!!`:

```javascript
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach(v => console.log(Boolean(v))); // todos -> false
```

### Ejemplos de Truthy
Casi todo lo demás es `truthy`:

```javascript
Boolean("0")        // true (cadena no vacía)
Boolean("false")    // true
Boolean([])         // true (array)
Boolean({})         // true (objeto)
Boolean(function(){}) // true (función)
Boolean(Infinity)   // true
Boolean(-1)         // true
```

### Doble Negación y Validaciones Comunes

```javascript
const valor = "Hola";
const esVerdadero = !!valor; // true

// 1) Validar texto no vacío
if (!nombre || nombre.trim() === "") {
    console.log("Nombre requerido");
}

// 2) Validar número presente (sin descartar 0)
if (numero === null || numero === undefined || Number.isNaN(numero)) {
    console.log("Número inválido");
}

// 3) Validar array con elementos
if (!Array.isArray(items) || items.length === 0) {
    console.log("Lista vacía");
}

// Cuidado: 0 es falsy
const cantidad = 0;
if (!cantidad) {
    // Entra aquí porque 0 es falsy, pero tal vez 0 sea válido
}
// Mejor:
if (cantidad === 0) {
    console.log("Cantidad es exactamente cero");
}
```

### Operadores con Truthy/Falsy

```javascript
// OR (||) usa el primer valor truthy
const nombreMostrado = inputNombre || "Anónimo";

// AND (&&) devuelve el segundo operando si el primero es truthy
const estado = flag && "ACTIVO"; // "ACTIVO" solo si flag es truthy

// Nullish coalescing (??): solo usa el valor por defecto si es null/undefined
const valorConDefault = entrada ?? "default"; // diferente de ||, no trata "" o 0 como vacíos
```

---

## Ejercicios Prácticos

### Ejercicio 1: Lista de Tareas
Crea una aplicación de lista de tareas donde puedas:
- Agregar nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas

### Ejercicio 2: Calculadora Simple
Crea una calculadora que:
- Tenga botones para números y operaciones
- Muestre el resultado en pantalla
- Soporte suma, resta, multiplicación y división

### Ejercicio 3: Filtro de Array
Dado un array de productos con precios:
- Muestra todos los productos
- Filtra productos por rango de precio
- Ordena por precio ascendente/descendente

### Ejercicio 3: Buscador y Orden de Usuarios
Crea una pequeña app que gestione un array de usuarios (por ejemplo: `{ nombre, edad }`).
- Renderiza la lista completa de usuarios en el DOM.
- Agrega un input para buscar por `nombre` en tiempo real (escucha `input` y filtra con `includes`).
- Agrega dos botones para ordenar por `edad` ascendente y descendente (usa `sort`).
- Muestra el total de usuarios encontrados.

### Ejercicio 4: Carrito de Compras Básico
Usa un array para representar el carrito. Parte de una lista de productos fija.
- Renderiza productos con botón "Agregar" que los empuje al carrito (`push`).
- Muestra el carrito en el DOM con cantidades y subtotal por producto.
- Agrega botones para `eliminar` un producto del carrito (`filter`/`splice`) y para `vaciar` el carrito.
- Calcula y muestra el total usando `reduce`.

### Ejercicio 5: Galería Dinámica con Filtros
Crea una galería de imágenes o tarjetas con categorías (por ejemplo: `nature`, `city`, `tech`).
- Renderiza todas las tarjetas desde un array de objetos.
- Agrega botones o un `select` para filtrar por categoría (`filter`).
- Agrega un input para buscar por título/descripcion.
- Muestra un mensaje cuando no haya resultados y restaura la vista completa con un botón "Limpiar filtros".

---

## Recursos Adicionales

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://es.javascript.info/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

---

**¡Practica estos conceptos para dominar JavaScript!** 🚀