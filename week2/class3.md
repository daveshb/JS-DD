# Promesas, Clases y Modularidad en JavaScript

## 1. Promesas

Las promesas son una forma moderna de manejar tareas asincrónicas en JavaScript. Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. Una promesa tiene tres estados posibles:

- **Pendiente (Pending)**: cuando la operación asincrónica aún no ha terminado.
- **Resuelta (Fulfilled)**: cuando la operación se completa exitosamente.
- **Rechazada (Rejected)**: cuando ocurre un error durante la operación.

---

## 2. Crear una Promesa

Una promesa se crea usando el constructor `Promise`, que acepta una función con dos parámetros: `resolve` (para cuando la operación es exitosa) y `reject` (para cuando ocurre un error).

### Ejemplo básico

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('The promise succeeded'), 1000);
});

promise.then(result => console.log(result));
// Output: "The promise succeeded"
```

### Promesa resuelta exitosamente

```javascript
let promiseSucceed = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve('Operation successful!');
  } else {
    reject('Operation failed!');
  }
});

promiseSucceed.then(message => {
  console.log(message); // "Operation successful!"
});
```

### Promesa rechazada

```javascript
let promiseFail = new Promise((resolve, reject) => {
  let success = false;
  
  if (success) {
    resolve('Operation successful!');
  } else {
    reject('Operation failed!');
  }
});

promiseFail.catch(error => {
  console.log(error); // "Operation failed!"
});
```

### Simulando una solicitud a un servidor

```javascript
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, nombre: 'Juan', email: 'juan@ejemplo.com' });
      } else {
        reject('ID inválido');
      }
    }, 1000);
  });
}

obtenerUsuario(1).then(usuario => {
  console.log(usuario);
});

obtenerUsuario(-1).catch(error => {
  console.log('Error:', error);
});
```

---

## 3. Manejo de promesas con .then() y .catch()

Para manejar el resultado de una promesa, utilizamos `.then()` si la promesa se resolvió con éxito, y `.catch()` si fue rechazada.

### Encadenamiento de .then()

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('First'), 1000);
});

promise
  .then(result => {
    console.log(result); // "First"
    return result + ' operation';
  })
  .then(result => {
    console.log(result); // "First operation"
    return result + ' completed';
  })
  .then(result => {
    console.log(result); // "First operation completed"
  });
```

### Manejo de errores con .catch()

```javascript
function descargarDatos(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve({ datos: 'Información del servidor' });
      } else {
        reject('URL no válida');
      }
    }, 500);
  });
}

descargarDatos('')
  .then(resultado => console.log(resultado))
  .catch(error => console.log('Error:', error));
  // Output: "Error: URL no válida"
```

### Combinando .then() y .catch()

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      reject('Error en la operación');
    } else {
      resolve('Operación exitosa');
    }
  }, 1000);
});

promise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log('Se capturó el error:', error);
  });
```

### Promise.all() - Esperar múltiples promesas

```javascript
const promesa1 = Promise.resolve(3);
const promesa2 = new Promise((resolve) => setTimeout(() => resolve('foo'), 100));
const promesa3 = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json());

Promise.all([promesa1, promesa2, promesa3])
  .then(values => {
    console.log(values); // [3, "foo", {...usuario}]
  })
  .catch(error => console.log('Error:', error));
```

### Promise.race() - La primera promesa que se resuelva

```javascript
const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Primera'), 500));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve('Segunda'), 100));

Promise.race([promesa1, promesa2])
  .then(resultado => {
    console.log(resultado); // "Segunda"
  });
```

---

## 4. Async/Await

Es una sintaxis introducida en ES6 que simplifica el manejo de promesas y hace que el código sea más fácil de leer. En lugar de usar `.then()` y `.catch()`, puedes escribir código asincrónico que se parece más a código sincrónico.

---

## 4.1 Función Asincrónica (async)

Una función asincrónica se define usando la palabra clave `async` antes de la palabra clave `function`. Las funciones asincrónicas siempre retornan una promesa.

### Ejemplo básico

```javascript
async function saludar() {
  return 'Hola, mundo!';
}

saludar().then(mensaje => {
  console.log(mensaje); // "Hola, mundo!"
});

// Es equivalente a:
function saludarNormal() {
  return Promise.resolve('Hola, mundo!');
}
```

### Función asincrónica con operaciones asincrónicas

```javascript
async function obtenerDatos() {
  let resultado = await fetch('https://jsonplaceholder.typicode.com/users/1');
  let datos = await resultado.json();
  return datos;
}

obtenerDatos().then(usuario => {
  console.log(usuario);
});
```

---

## 4.2 Uso de await

La palabra clave `await` pausa la ejecución de una función asincrónica hasta que una promesa se resuelva. Solo puede usarse dentro de una función asincrónica.

### Ejemplo básico de await

```javascript
async function procesarDatos() {
  console.log('Inicio');
  
  let resultado = await new Promise((resolve) => {
    setTimeout(() => resolve('Datos procesados'), 2000);
  });
  
  console.log(resultado);
  console.log('Fin');
}

procesarDatos();
// Output:
// Inicio
// Datos procesados (después de 2 segundos)
// Fin
```

### Múltiples awaits

```javascript
async function flujoCompleto() {
  console.log('Paso 1');
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Paso 2 (después de 1 segundo)');
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Paso 3 (después de 2 segundos)');
}

flujoCompleto();
```

### Await con fetch

```javascript
async function obtenerUsuarios() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await respuesta.json();
  return usuarios;
}

obtenerUsuarios().then(usuarios => {
  console.log(usuarios);
});
```

### Await en paralelo

```javascript
async function operacionesParalelas() {
  // Estas se ejecutan en paralelo, no secuencial
  const [usuarios, posts] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
  ]);
  
  console.log('Usuarios:', usuarios.length);
  console.log('Posts:', posts.length);
}

operacionesParalelas();
```

---

## 4.3 Manejo de errores con try/catch

En lugar de usar `.catch()`, puedes usar los bloques `try/catch` para manejar errores en funciones asincrónicas.

### Ejemplo básico

```javascript
async function operacionConError() {
  try {
    let resultado = await fetch('https://url-invalida.com');
    let datos = await resultado.json();
    console.log(datos);
  } catch (error) {
    console.log('Error capturado:', error.message);
  }
}

operacionConError();
```

### Try/catch con múltiples operaciones

```javascript
async function procesarMultiples() {
  try {
    const usuario = await fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(r => r.json());
    
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`)
      .then(r => r.json());
    
    console.log(`${usuario.name} tiene ${posts.length} posts`);
  } catch (error) {
    console.log('Error:', error);
  }
}

procesarMultiples();
```

### Finally con async/await

```javascript
async function operacionConFinally() {
  try {
    let resultado = await new Promise((resolve, reject) => {
      setTimeout(() => reject('Error simulado'), 1000);
    });
    console.log(resultado);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    console.log('Operación completada (con o sin error)');
  }
}

operacionConFinally();
```

---

## 5. Declaración de clases

Una clase se define usando la palabra clave `class`. Dentro de la clase puedes tener un constructor para inicializar las propiedades.

### Ejemplo básico

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let coder = new Person('Coder');
coder.greet();
// Output: "Hello, my name is Coder"
```

### Propiedades privadas (con #)

```javascript
class Banco {
  #saldo = 0; // Propiedad privada
  
  constructor(nombreCuenta) {
    this.nombreCuenta = nombreCuenta;
  }
  
  depositar(cantidad) {
    this.#saldo += cantidad;
    return `Depósito de ${cantidad}. Saldo: ${this.#saldo}`;
  }
  
  obtenerSaldo() {
    return this.#saldo;
  }
}

const miCuenta = new Banco('Mi Cuenta');
console.log(miCuenta.depositar(1000)); // "Depósito de 1000. Saldo: 1000"
console.log(miCuenta.obtenerSaldo()); // 1000
// console.log(miCuenta.#saldo); // SyntaxError: Private field '#saldo' must be declared
```

### Métodos estáticos

```javascript
class Matematica {
  static PI = 3.14159;
  
  static areaCirculo(radio) {
    return this.PI * radio * radio;
  }
}

console.log(Matematica.areaCirculo(5)); // 78.53975
console.log(Matematica.PI); // 3.14159
```

---

## 6. Herencia en clases

Con las clases, puedes utilizar el concepto de herencia de manera más sencilla que con prototipos manuales. La palabra clave `extends` permite que una clase herede propiedades y métodos de otra.

### Ejemplo básico de herencia

```javascript
class Person {
  constructor(name, language) {
    this.name = name;
    this.language = language;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Developer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  
  code() {
    console.log(`${this.name} codes in ${this.language}`);
  }
}

let dev = new Developer('Coder', 'JavaScript');
dev.greet();
dev.code();
// Output:
// "Hello, my name is Coder"
// "Coder codes in JavaScript"
```

### Sobrescritura de métodos (Override)

```javascript
class Animal {
  hablar() {
    console.log('El animal hace un sonido');
  }
}

class Perro extends Animal {
  hablar() {
    console.log('El perro ladra: ¡Guau!');
  }
}

const perro = new Perro();
perro.hablar(); // "El perro ladra: ¡Guau!"
```

### Super para acceder a la clase padre

```javascript
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
  
  mostrarInfo() {
    console.log(`Marca: ${this.marca}`);
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  
  mostrarInfo() {
    super.mostrarInfo(); // Llama al método de la clase padre
    console.log(`Modelo: ${this.modelo}`);
  }
}

const miAuto = new Auto('Toyota', 'Corolla');
miAuto.mostrarInfo();
// Output:
// "Marca: Toyota"
// "Modelo: Corolla"
```

---

## 7. Función constructora y Prototipos

Cuando creas un objeto mediante una función constructora (es una función especial que se utiliza para crear e inicializar objetos), puedes compartir métodos entre todas las instancias de ese objeto usando prototipos.

### Función constructora

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

let person1 = new Person('Antony');
let person2 = new Person('Coder');

person1.greet();
person2.greet();
// Output:
// "Hello, my name is Antony"
// "Hello, my name is Coder"
```

### Prototipo compartido

```javascript
function Empleado(nombre, departamento) {
  this.nombre = nombre;
  this.departamento = departamento;
}

Empleado.prototype.presentar = function() {
  console.log(`Soy ${this.nombre} del departamento ${this.departamento}`);
};

const emp1 = new Empleado('Marco', 'Ventas');
const emp2 = new Empleado('Laura', 'TI');

emp1.presentar(); // "Soy Marco del departamento Ventas"
emp2.presentar(); // "Soy Laura del departamento TI"
```

### Herencia con prototipos

```javascript
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hablar = function() {
  console.log(`${this.nombre} hace un sonido`);
};

function Gato(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza;
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.maullar = function() {
  console.log(`${this.nombre} (${this.raza}) maúlla`);
};

const miGato = new Gato('Whiskers', 'Persa');
miGato.hablar(); // "Whiskers hace un sonido"
miGato.maullar(); // "Whiskers (Persa) maúlla"
```

---

## 8. Modularidad en JavaScript

A medida que tu código JavaScript crece en tamaño y complejidad, se vuelve esencial organizarlo en diferentes archivos o "módulos" que se puedan reutilizar en distintas partes de tu aplicación. La modularización facilita el mantenimiento, reduce la duplicación de código y mejora la legibilidad.

### ¿Qué es un módulo?

Un módulo en JavaScript es simplemente un archivo que contiene código que puedes exportar para utilizar en otros archivos. Esto ayuda a que tu código esté más organizado y separado por funcionalidades.

---

## 8.1 Uso de export

La palabra clave `export` permite compartir código de un módulo para que sea utilizado en otros archivos.

### Exportar una función

**math.js**
```javascript
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}
```

### Exportar una clase

**Usuario.js**
```javascript
export class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  
  presentarse() {
    console.log(`Soy ${this.nombre}, mi email es ${this.email}`);
  }
}
```

### Exportación por defecto

**mensaje.js**
```javascript
export default function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}
```

---

## 8.2 Uso de import

La palabra clave `import` permite utilizar código exportado de otros módulos.

### Importar funciones específicas

**main.js**
```javascript
import { sumar, restar } from './math.js';

console.log(sumar(5, 3)); // 8
console.log(restar(10, 4)); // 6
```

### Importar todo con alias

**main.js**
```javascript
import * as Matematica from './math.js';

console.log(Matematica.sumar(5, 3)); // 8
console.log(Matematica.multiplicar(4, 5)); // 20
```

### Importar una clase

**main.js**
```javascript
import { Usuario } from './Usuario.js';

const usuario1 = new Usuario('Juan', 'juan@ejemplo.com');
usuario1.presentarse(); // "Soy Juan, mi email es juan@ejemplo.com"
```

### Importar exportación por defecto

**main.js**
```javascript
import saludar from './mensaje.js';

console.log(saludar('Carlos')); // "¡Hola, Carlos!"
```

---

## 8.3 Importación dinámica

La importación dinámica permite cargar módulos cuando los necesites, en lugar de cargarlos todos al inicio.

### Importación dinámica básica

```javascript
async function cargarModulo() {
  const { sumar } = await import('./math.js');
  console.log(sumar(5, 3)); // 8
}

cargarModulo();
```

### Importación condicional

```javascript
async function cargarFuncionalidad(tipo) {
  if (tipo === 'calculos') {
    const { sumar, restar } = await import('./math.js');
    console.log(sumar(10, 5));
  } else if (tipo === 'usuario') {
    const { Usuario } = await import('./Usuario.js');
    const usuario = new Usuario('Ana', 'ana@ejemplo.com');
    usuario.presentarse();
  }
}

cargarFuncionalidad('calculos'); // 15
cargarFuncionalidad('usuario'); // "Soy Ana, mi email es ana@ejemplo.com"
```

---

## 8.4 Ventajas de la Modularidad

- **Organización**: Código separado por funcionalidades y responsabilidades.
- **Reutilización**: Puedes usar el mismo módulo en diferentes partes de tu aplicación.
- **Mantenimiento**: Más fácil localizar y corregir errores en código modular.
- **Escalabilidad**: Permite que proyectos grandes crezcan sin volverse caóticos.
- **Encapsulación**: Cada módulo tiene su propio scope, evitando conflictos de nombres.
- **Pruebas**: Más fácil escribir tests para módulos individuales.

### Ejemplo completo de aplicación modular

**utils/validar.js**
```javascript
export function esEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function esContraseña(contraseña) {
  return contraseña.length >= 8;
}
```

**modelos/Usuario.js**
```javascript
export class Usuario {
  constructor(nombre, email, contraseña) {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
  }
}
```

**main.js**
```javascript
import { esEmail, esContraseña } from './utils/validar.js';
import { Usuario } from './modelos/Usuario.js';

const nuevoUsuario = new Usuario('Pedro', 'pedro@ejemplo.com', 'password123');

if (esEmail(nuevoUsuario.email) && esContraseña(nuevoUsuario.contraseña)) {
  console.log('Usuario válido:', nuevoUsuario);
} else {
  console.log('Datos inválidos');
}
```

---

## Conclusiones

En esta clase hemos cubierto conceptos avanzados de JavaScript:

- **Promesas**: La forma moderna de manejar asincronía en JavaScript.
- **Async/Await**: Una sintaxis más limpia y legible para trabajar con promesas.
- **Clases**: La forma más moderna de crear objetos reutilizables.
- **Herencia**: Permite crear jerarquías de clases para reutilizar código.
- **Prototipos**: Entiende cómo JavaScript maneja la herencia a nivel fundamental.
- **Modularidad**: Organiza tu código en módulos reutilizables y mantenibles.

Estos conceptos son fundamentales para desarrollar aplicaciones JavaScript profesionales y escalables. Practica cada uno de ellos en tus proyectos para dominarlos completamente.

¡Nos vemos en la próxima lección, Coders!
