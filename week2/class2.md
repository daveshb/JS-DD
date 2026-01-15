# Conceptos Fundamentales de JavaScript

## 1. Hoisting (Elevar las declaraciones)

El hoisting es un comportamiento en JavaScript por el cual las declaraciones de variables y funciones son "elevadas" al inicio de su contexto de ejecución durante la fase de compilación, antes de que el código se ejecute.

### Con var

```javascript
console.log(nombre); // undefined (no error)
var nombre = "Carlos";
console.log(nombre); // "Carlos"

// Esto es equivalente a:
// var nombre;
// console.log(nombre); // undefined
// nombre = "Carlos";
```

### Con let y const

```javascript
console.log(edad); // ReferenceError: Cannot access 'edad' before initialization
let edad = 25;

console.log(ciudad); // ReferenceError: Cannot access 'ciudad' before initialization
const ciudad = "Madrid";

// let y const se elevan, pero no se inicializan (Temporal Dead Zone)
```

### Hoisting de funciones

```javascript
saludar(); // "¡Hola, mundo!" (funciona)

function saludar() {
  console.log("¡Hola, mundo!");
}

// Las funciones declaradas se elevan completamente
// Pero las funciones expresadas NO se elevan
gritar(); // TypeError: gritar is not a function

var gritar = function() {
  console.log("¡GRITAR!");
};
```

---

## 2. Scope en JavaScript

El scope (ámbito) en JavaScript se refiere a la accesibilidad y visibilidad de las variables, funciones y objetos en diferentes partes del código. JavaScript tiene varios tipos de scope.

### Scope Global

```javascript
var global = "Soy global";
let globalLet = "También soy global";

function mostrarGlobal() {
  console.log(global); // "Soy global"
  console.log(globalLet); // "También soy global"
}

mostrarGlobal();
console.log(global); // "Soy global" (accesible desde cualquier parte)
```

### Scope de Función

```javascript
function crearVariable() {
  var localVar = "Soy local";
  console.log(localVar); // "Soy local"
}

crearVariable();
console.log(localVar); // ReferenceError: localVar is not defined
```

### Scope de Bloque (Introducido en ES6)

```javascript
if (true) {
  let bloqueVar = "Solo en el bloque";
  const bloqueConst = "También solo en el bloque";
  console.log(bloqueVar); // "Solo en el bloque"
}

console.log(bloqueVar); // ReferenceError
console.log(bloqueConst); // ReferenceError

// var ignora el scope de bloque
if (true) {
  var varGlobal = "Soy accesible fuera";
}
console.log(varGlobal); // "Soy accesible fuera"
```

### Ámbito Léxico (Lexical Scope)

```javascript
let nombre = "Externa";

function externa() {
  let nombre = "Función Externa";
  
  function interna() {
    console.log(nombre); // "Función Externa" (usa el scope más cercano)
  }
  
  interna();
}

externa();
```

### Variables sin declaración explícita

```javascript
function sinDeclaracion() {
  noDeclarada = "Soy global por accidente";
}

sinDeclaracion();
console.log(noDeclarada); // "Soy global por accidente" (¡evita esto!)
```

---

## 3. Closures

Un closure es una función que "recuerda" el scope en el que fue creada, incluso cuando se ejecuta fuera de ese scope. Esto permite que la función acceda a variables de su entorno externo.

### Ejemplo básico de Closure

```javascript
function crearMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  };
}

const multiplicarPor2 = crearMultiplicador(2);
const multiplicarPor5 = crearMultiplicador(5);

console.log(multiplicarPor2(10)); // 20
console.log(multiplicarPor5(10)); // 50
// Cada función recuerda su multiplicador
```

### Contador con Closure

```javascript
function crearContador() {
  let contador = 0; // Variable privada
  
  return {
    incrementar() {
      contador++;
      return contador;
    },
    decrementar() {
      contador--;
      return contador;
    },
    obtener() {
      return contador;
    }
  };
}

const miContador = crearContador();
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2
console.log(miContador.decrementar()); // 1
console.log(miContador.obtener()); // 1
```

### Closure en bucles

```javascript
// INCORRECTO
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3
  }, 1000);
}

// CORRECTO con let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 0, 1, 2
  }, 1000);
}

// CORRECTO con closure
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 0, 1, 2
    }, 1000);
  })(i);
}
```

### Encapsulación con Closure

```javascript
function crearCuenta(saldoInicial) {
  let saldo = saldoInicial;
  
  return {
    depositar(cantidad) {
      if (cantidad > 0) {
        saldo += cantidad;
        return `Depósito exitoso. Nuevo saldo: ${saldo}`;
      }
    },
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
        return `Retiro exitoso. Nuevo saldo: ${saldo}`;
      }
      return "Fondos insuficientes";
    },
    obtenerSaldo() {
      return saldo;
    }
  };
}

const cuenta = crearCuenta(1000);
console.log(cuenta.depositar(500)); // "Depósito exitoso. Nuevo saldo: 1500"
console.log(cuenta.retirar(300)); // "Retiro exitoso. Nuevo saldo: 1200"
console.log(cuenta.obtenerSaldo()); // 1200
// No se puede acceder directamente a 'saldo', solo a través de los métodos
```

---

## 4. Bucle de Eventos (Event Loop)

El event loop es el mecanismo que permite que JavaScript gestione tareas asincrónicas. Mientras el código síncrono se ejecuta en el call stack, las tareas asincrónicas se colocan en una cola de tareas y se ejecutan una vez que el call stack esté vacío.

### Ejecución Síncrona vs Asincrónica

```javascript
console.log("Inicio");

setTimeout(function() {
  console.log("Timeout 1");
}, 0);

console.log("Fin");

// Output:
// Inicio
// Fin
// Timeout 1
```

### Event Loop visual

```javascript
// 1. Call Stack - Código síncrono
console.log("1. Inicio");

// 2. Web APIs - Operaciones asincrónicas
setTimeout(() => console.log("4. Callback del timeout"), 0);
fetch('https://api.ejemplo.com')
  .then(res => console.log("5. Respuesta del fetch"));

// 3. Call Stack continúa
console.log("2. Fin del código síncrono");

// Output:
// 1. Inicio
// 2. Fin del código síncrono
// 4. Callback del timeout (cuando el call stack está vacío)
// 5. Respuesta del fetch
```

### Microtask vs Macrotask

```javascript
console.log("Script inicia");

// Macrotask (setTimeout)
setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

// Microtask (Promise)
Promise.resolve()
  .then(() => console.log("Microtask: Promise 1"))
  .then(() => console.log("Microtask: Promise 2"));

console.log("Script termina");

// Output:
// Script inicia
// Script termina
// Microtask: Promise 1
// Microtask: Promise 2
// Macrotask: setTimeout
```

---

## 5. Callbacks (Manejo de tareas asincrónicas)

Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando la operación principal ha terminado. Este patrón es esencial para manejar tareas asincrónicas.

### Callback básico

```javascript
function descargar(url, callback) {
  console.log(`Descargando ${url}...`);
  
  setTimeout(() => {
    const datos = { url, contenido: "Datos del servidor" };
    callback(null, datos);
  }, 1000);
}

descargar("https://api.ejemplo.com", function(error, datos) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Datos recibidos:", datos);
  }
});
```

### Manejo de errores con callbacks

```javascript
function procesarDatos(archivo, callback) {
  setTimeout(() => {
    if (archivo === "datos.json") {
      callback(null, { id: 1, nombre: "Juan" });
    } else {
      callback("Archivo no encontrado", null);
    }
  }, 500);
}

procesarDatos("datos.json", (error, datos) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Datos:", datos);
  }
});
```

### Callbacks anidados (Callback Hell)

```javascript
// ❌ EVITA ESTO: Callback Hell
obtenerUsuario(1, function(error, usuario) {
  if (!error) {
    obtenerPosts(usuario.id, function(error, posts) {
      if (!error) {
        obtenerComentarios(posts[0].id, function(error, comentarios) {
          if (!error) {
            console.log(comentarios);
          }
        });
      }
    });
  }
});

// ✅ MEJOR: Usar Promises o async/await
```

### Callbacks útiles

```javascript
// Callback en array
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
  console.log(numero * 2);
});

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

const duplicados = numeros.map(num => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]
```

---

## 6. This en JavaScript

El valor de `this` en JavaScript varía dependiendo del contexto en el que se ejecuta. Es importante entender cómo se comporta en diferentes escenarios.

### This en el contexto global

```javascript
console.log(this); // window (en navegador) o global (en Node.js)

function miFuncion() {
  console.log(this); // window (en navegador, en modo no estricto)
}

miFuncion();
```

### This dentro de funciones normales

```javascript
// En modo no estricto
function saludar() {
  console.log(this.nombre);
}

const persona = {
  nombre: "María",
  saludar: saludar
};

persona.saludar(); // "María" (this se refiere a 'persona')
saludar(); // undefined (this se refiere a window/global)
```

### This en funciones flecha

```javascript
const objeto = {
  nombre: "Carlos",
  saludarNormal: function() {
    console.log(this.nombre); // "Carlos"
  },
  saludarFlecha: () => {
    console.log(this.nombre); // undefined (this es del contexto externo)
  }
};

objeto.saludarNormal(); // "Carlos"
objeto.saludarFlecha(); // undefined
```

### This con bind, call y apply

```javascript
const usuario = {
  nombre: "Ana",
  edad: 30
};

function presentar(ciudad, pais) {
  console.log(`${this.nombre} tiene ${this.edad} años y vive en ${ciudad}, ${pais}`);
}

// Call: ejecuta inmediatamente
presentar.call(usuario, "Madrid", "España");
// "Ana tiene 30 años y vive en Madrid, España"

// Apply: ejecuta inmediatamente (argumentos como array)
presentar.apply(usuario, ["Barcelona", "España"]);
// "Ana tiene 30 años y vive en Barcelona, España"

// Bind: retorna una nueva función
const presentarAna = presentar.bind(usuario, "Valencia");
presentarAna("España");
// "Ana tiene 30 años y vive en Valencia, España"
```

---

## 7. This en métodos de objetos

Cuando `this` se utiliza dentro de un método de un objeto, hace referencia al objeto que contiene el método.

### Ejemplo básico

```javascript
let persona = {
  nombre: "Coder",
  saludar() {
    console.log(this.nombre);
  }
};

persona.saludar(); // "Coder"
```

### This en funciones flecha en métodos

```javascript
let persona = {
  nombre: "Coder",
  edad: 25,
  greet() {
    console.log(this.nombre); // "Coder"
  },
  saludarConFlecha: () => {
    console.log(this.nombre); // undefined (this no se redefine)
  }
};

persona.greet(); // "Coder"
persona.saludarConFlecha(); // undefined
```

### En funciones flecha, this no se redefine

```javascript
let persona = {
  nombre: "Coder",
  hobbies: ["programar", "leer", "viajar"],
  
  mostrarHobbies: function() {
    // Aquí this = persona
    this.hobbies.forEach((hobby) => {
      console.log(this.nombre + " disfruta " + hobby);
    });
  }
};

persona.mostrarHobbies();
// Coder disfruta programar
// Coder disfruta leer
// Coder disfruta viajar
```

### Métodos encadenados

```javascript
const calculadora = {
  valor: 0,
  
  sumar(n) {
    this.valor += n;
    return this; // Retorna el objeto para encadenar
  },
  
  restar(n) {
    this.valor -= n;
    return this;
  },
  
  multiplicar(n) {
    this.valor *= n;
    return this;
  },
  
  obtenerValor() {
    return this.valor;
  }
};

const resultado = calculadora.sumar(5).restar(2).multiplicar(3).obtenerValor();
console.log(resultado); // 9
```

---

## 8. Conclusiones

En esta lección, hemos analizado varios conceptos fundamentales que te ayudarán a entender el funcionamiento interno de JavaScript y a manejar el lenguaje con mayor confianza y claridad:

- **Hoisting**: cómo las declaraciones de variables y funciones son "elevadas" al inicio del contexto de ejecución.
- **Scope**: cómo las variables y funciones están limitadas por el alcance de sus contextos, ya sea global, de función o de bloque.
- **Closures**: cómo las funciones pueden recordar el entorno en el que fueron creadas, facilitando la manipulación de estados internos.
- **Bucle de eventos**: el mecanismo que permite a JavaScript manejar tareas asincrónicas sin bloquear el flujo de ejecución.
- **Callbacks**: una técnica para manejar la asincronía y cómo evitar el callback hell.
- **This**: cómo cambia el valor de this dependiendo del contexto de ejecución, ya sea en el ámbito global, funciones o métodos de objetos.

Estos conceptos son fundamentales para llevar tus habilidades de JavaScript al siguiente nivel, permitiéndote escribir código más claro, eficiente y manejable. No olvides practicar cada uno de estos conceptos en tus proyectos más asimilados.

¡Nos vemos en la próxima lección, Coders, donde seguiremos profundizando en el increíble mundo de JavaScript!
