# Introducción a JavaScript

## 📚 ¿Qué es JavaScript?

JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos que se ha convertido en una de las tecnologías fundamentales de la web moderna. Junto con HTML y CSS, forma la tríada de tecnologías esenciales para el desarrollo web.

## 🕰️ Historia de JavaScript

JavaScript fue creado por **Brendan Eich** en tan solo **10 días** en mayo de 1995, mientras trabajaba en Netscape Communications Corporation. Originalmente se llamó **Mocha**, luego **LiveScript**, y finalmente fue renombrado a **JavaScript** como estrategia de marketing para aprovechar la popularidad de Java en ese momento.

### Momentos clave:
- **1995**: Creación de JavaScript por Brendan Eich
- **1997**: Se estandariza como ECMAScript (ES1)
- **2009**: Node.js permite JavaScript en el backend
- **2015**: ES6/ES2015 revoluciona el lenguaje con nuevas características
- **2020s**: JavaScript domina el desarrollo web moderno

## 🚀 ¿Cómo funciona JavaScript?

JavaScript es un lenguaje:
- **Interpretado**: No necesita compilación previa
- **De tipado dinámico**: Las variables pueden cambiar de tipo
- **Orientado a eventos**: Responde a interacciones del usuario
- **Basado en prototipos**: Herencia diferente a lenguajes clásicos

### Entorno de ejecución:
1. **En el navegador**: Manipula el DOM (Document Object Model)
2. **En el servidor**: Node.js permite JavaScript del lado del servidor
3. **Aplicaciones móviles**: React Native, Ionic
4. **Aplicaciones de escritorio**: Electron

## 📊 Popularidad y uso actual

![Top 10 programming languages on GitHub 2023-2025](../assets/github-languages-2023-2025.png)

JavaScript continúa siendo uno de los lenguajes más populares del mundo. Según el [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/#the-top-programming-languages-of-2025-typescript-jumps-to-1-while-python-takes-2):

### 🏆 Tendencias destacadas:

- **TypeScript salta al #1**: TypeScript (un superconjunto de JavaScript) ahora es el lenguaje más popular en GitHub
- **Python en #2**: Desplazado del primer lugar pero mantiene fuerte presencia
- **JavaScript mantiene relevancia**: Permanece en el top 3 del ranking
- **Crecimiento impulsado por IA**: La inteligencia artificial está impulsando la adopción de nuevas tecnologías
- **Un nuevo desarrollador cada segundo**: GitHub ve una incorporación masiva de desarrolladores constantemente

### 💼 Estadísticas de uso:
- Utilizado por más del **98%** de los sitios web
- **13+ millones** de desarrolladores JavaScript en el mundo
- Frameworks populares: React, Vue, Angular, Next.js
- TypeScript (extensión de JS) está en crecimiento explosivo

## 💻 Primeras demostraciones

### 1. Variables en JavaScript

Las variables son contenedores para almacenar datos. En JavaScript moderno, usamos principalmente `let` y `const`:

```javascript
// Declaración con let (valor puede cambiar)
let nombre = "Juan";
let edad = 25;
let estaActivo = true;

console.log(nombre); // Juan
nombre = "María"; // Podemos cambiar el valor
console.log(nombre); // María

// Declaración con const (valor constante)
const PI = 3.14159;
const pais = "Colombia";

// PI = 3.14; // ❌ Error: no se puede reasignar una constante

// var (forma antigua, evitar en código moderno)
var apellido = "García"; // No recomendado
```

### 2. Tipos de datos

```javascript
// Números
let entero = 42;
let decimal = 3.14;
let negativo = -10;

// Strings (cadenas de texto)
let saludo = "Hola Mundo";
let mensaje = 'JavaScript es genial';
let plantilla = `Mi nombre es ${nombre}`; // Template literals

// Booleanos
let esVerdadero = true;
let esFalso = false;

// Arrays (arreglos)
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];

// Objetos
let persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Bogotá"
};
```

### 3. Funciones

Las funciones son bloques de código reutilizables:

```javascript
// Función tradicional
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

console.log(saludar("Carlos")); // Hola, Carlos!

// Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8

// Arrow functions (ES6+) - forma moderna
const multiplicar = (a, b) => {
    return a * b;
};

// Arrow function simplificada
const duplicar = (numero) => numero * 2;

console.log(multiplicar(4, 5)); // 20
console.log(duplicar(7)); // 14

// Función sin parámetros
const obtenerFechaActual = () => {
    return new Date();
};
```

## 🔔 Interacción con el usuario: Alert y Prompt

JavaScript permite interactuar directamente con el usuario en el navegador mediante funciones sencillas:

### Alert - Mostrar mensajes

`alert()` muestra una ventana emergente con un mensaje:

```javascript
// Mostrar un mensaje simple
alert("¡Bienvenido a JavaScript!");

// Mostrar el resultado de una operación
let suma = 10 + 20;
alert("La suma es: " + suma);

// Concatenar variables
let usuario = "Ana";
alert("Hola " + usuario + ", bienvenida!");
```

⚠️ **Nota**: `alert()` es útil para aprender, pero en aplicaciones reales se prefieren métodos más elegantes de notificación.

### Prompt - Solicitar información

`prompt()` muestra una ventana donde el usuario puede escribir información:

```javascript
// Solicitar el nombre del usuario
let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Nombre ingresado: " + nombreUsuario);

// Solicitar con valor por defecto
let ciudad = prompt("¿De qué ciudad eres?", "Bogotá");

// Solicitar un número y usarlo
let edad = prompt("¿Cuántos años tienes?");
alert("En 10 años tendrás " + (parseInt(edad) + 10) + " años");

// Ejemplo completo: calculadora simple
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");
let suma = parseFloat(numero1) + parseFloat(numero2);
alert("La suma es: " + suma);
```

### Ejemplo práctico combinado

```javascript
// Programa de bienvenida interactivo
let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");

// Procesar la información
let mensaje = `¡Hola ${nombre}! Tienes ${edad} años.`;
alert(mensaje);

// Calcular año de nacimiento aproximado
let anioActual = 2025;
let anioNacimiento = anioActual - parseInt(edad);
alert(`Naciste aproximadamente en el año ${anioNacimiento}`);
```

**Importante sobre prompt()**:
- Siempre retorna un **string** (texto)
- Para usar números, debemos convertir: `parseInt()` o `parseFloat()`
- Si el usuario cancela, retorna `null`

## 🎯 Ejercicio práctico

Intenta crear un programa que:
1. Pregunte el nombre del usuario
2. Pregunte su lenguaje de programación favorito
3. Muestre un mensaje personalizado combinando ambos datos

```javascript
// Tu código aquí
let nombre = prompt("¿Cuál es tu nombre?");
let lenguaje = prompt("¿Cuál es tu lenguaje favorito?");
alert(`¡Genial ${nombre}! ${lenguaje} es un excelente lenguaje.`);
```

## 📝 Puntos clave para recordar

1. JavaScript es el lenguaje de la web moderna
2. TypeScript (basado en JS) es ahora el lenguaje #1 en GitHub
3. `let` para variables que cambian, `const` para constantes
4. Las funciones permiten reutilizar código
5. `alert()` muestra mensajes, `prompt()` solicita entrada del usuario
6. JavaScript es versátil: frontend, backend, móvil, desktop

## 🔗 Recursos adicionales

- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript) - Documentación oficial
- [JavaScript.info](https://javascript.info) - Tutorial completo
- [GitHub Octoverse](https://github.blog/news-insights/octoverse/) - Tendencias de desarrollo

---

**¡Felicidades!** Has dado tus primeros pasos en JavaScript. En las próximas clases profundizaremos en estructuras de control, manipulación del DOM y mucho más. 🚀