# Clase de JavaScript: Estructuras, Bucles y Métodos


---

## 1. Arrays

### Teoría
Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable, manteniendo un orden. Cada elemento tiene un índice que comienza desde 0.

Los arrays se usan para manejar listas de datos como usuarios, productos, números o resultados de una API.

### Métodos comunes
- push(): agrega un elemento al final
- pop(): elimina el último elemento
- map(): transforma cada elemento y devuelve un nuevo array
- filter(): filtra elementos según una condición

### Ejemplo
```js
let numbers = [1, 2, 3];
numbers.push(4);

let doubled = numbers.map(num => num * 2);
console.log(doubled);
```

---

## 2. forEach

### Teoría
forEach es un método exclusivo de los arrays que ejecuta una función por cada elemento. No devuelve un nuevo array ni permite interrumpir el ciclo.

Se usa cuando solo se necesitan ejecutar acciones como mostrar información.

### Ejemplo
```js
const coders = [
  { name: 'Edwin', cohort: 1 },
  { name: 'Milton', cohort: 2 },
  { name: 'Javier', cohort: 3 }
];

coders.forEach(coder => {
  console.log(`${coder.name} is coder cohort ${coder.cohort}`);
});
```

---

## 3. for...of

### Teoría
for...of recorre los valores de estructuras iterables como arrays, strings, sets y maps.

### Ejemplo
```js
const developers = ['Antony', 'Kevin', 'Robin'];

for (const dev of developers) {
  console.log(dev);
}
```

---

## 4. for...in

### Teoría
for...in recorre las claves de un objeto. No se recomienda usarlo con arrays.

### Ejemplo
```js
const teamLeader = {
  name: 'Antony',
  language: 'JavaScript'
};

for (const key in teamLeader) {
  console.log(`${key}: ${teamLeader[key]}`);
}
```

---

## 5. Objetos

### Teoría
Los objetos representan entidades del mundo real mediante pares clave–valor. Son la base de las APIs y de muchas estructuras en JavaScript.

### Métodos y utilidades
- **Object.keys()**: Devuelve un array con todas las claves (propiedades) del objeto
- **Object.values()**: Devuelve un array con todos los valores del objeto
- **Object.entries()**: Devuelve un array de pares [clave, valor] del objeto


### Ejemplo
```js
let person = { name: 'Coder', age: 30, role: 'Student' };

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```

---

## 6. Map

### Teoría
Map es una colección clave–valor que permite usar cualquier tipo de dato como clave.

### Ejemplo
```js
let myMap = new Map();
myMap.set('name', 'Antony');
myMap.set(123, 'ID');

console.log(myMap.get('name'));
```

---

## 7. Set

### Teoría
Set almacena valores únicos y no permite duplicados.

### Ejemplo
```js
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1);

console.log(mySet);
```

---

## 8. console.table()

### Teoría
console.table muestra arrays u objetos en formato de tabla para facilitar la lectura.

### Ejemplo
```js
const authors = [
  { name: 'Antony', age: 25 },
  { name: 'Riwi', age: 1 }
];

console.table(authors);
```

---

## 9. Métodos de String

### Teoría
Los strings incluyen métodos para manipular texto, muy usados en formularios y validaciones.

### Métodos comunes
- **toUpperCase()**: Convierte el texto a mayúsculas
- **toLowerCase()**: Convierte el texto a minúsculas
- **trim()**: Elimina espacios en blanco al inicio y al final
- **split()**: Divide el string en un array según un separador
- **slice()**: Extrae una parte del string
- **substring()**: Similar a slice, extrae caracteres entre dos índices
- **replace()**: Reemplaza la primera coincidencia de un texto
- **replaceAll()**: Reemplaza todas las coincidencias de un texto
- **includes()**: Verifica si contiene un texto específico
- **startsWith()**: Verifica si comienza con un texto específico
- **endsWith()**: Verifica si termina con un texto específico
- **indexOf()**: Devuelve la posición de la primera coincidencia
- **charAt()**: Devuelve el carácter en una posición específica
- **repeat()**: Repite el string n veces
- **padStart()**: Rellena el inicio hasta alcanzar una longitud
- **padEnd()**: Rellena el final hasta alcanzar una longitud

### Ejemplo
```js
let greeting = 'Hello, world!';
console.log(greeting.toUpperCase()); // HELLO, WORLD!
console.log(greeting.toLowerCase()); // hello, world!

let text = '  JavaScript  ';
console.log(text.trim()); // 'JavaScript'

let email = 'user@example.com';
console.log(email.split('@')); // ['user', 'example.com']

let phrase = 'Aprender JavaScript es divertido';
console.log(phrase.slice(0, 8)); // 'Aprender'
console.log(phrase.includes('JavaScript')); // true
console.log(phrase.replace('divertido', 'genial')); // 'Aprender JavaScript es genial'

let code = '5';
console.log(code.padStart(3, '0')); // '005'
```

---

## 10. Métodos de Number

### Teoría
Los números también tienen métodos útiles para formato y conversión.

### Métodos comunes
- **toFixed()**: Formatea el número con una cantidad específica de decimales
- **toPrecision()**: Formatea el número a una longitud total específica
- **toString()**: Convierte el número a string (puede especificar la base)
- **toExponential()**: Convierte el número a notación exponencial
- **Number.isInteger()**: Verifica si es un número entero
- **Number.isNaN()**: Verifica si el valor es NaN
- **Number.parseFloat()**: Convierte un string a número decimal
- **Number.parseInt()**: Convierte un string a número entero
- **Number.isFinite()**: Verifica si es un número finito
- **Math.round()**: Redondea al entero más cercano
- **Math.floor()**: Redondea hacia abajo
- **Math.ceil()**: Redondea hacia arriba
- **Math.abs()**: Devuelve el valor absoluto
- **Math.max()**: Devuelve el mayor de los números dados
- **Math.min()**: Devuelve el menor de los números dados
- **Math.random()**: Genera un número aleatorio entre 0 y 1

### Ejemplo
```js
let num = 123.456;
console.log(num.toFixed(2)); // '123.46'
console.log(num.toPrecision(4)); // '123.5'
console.log(num.toString()); // '123.456'

let price = 99.99;
console.log(Math.round(price)); // 100
console.log(Math.floor(price)); // 99
console.log(Math.ceil(price)); // 100

console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.5)); // false

let str = '42.5';
console.log(Number.parseFloat(str)); // 42.5
console.log(Number.parseInt(str)); // 42

console.log(Math.max(10, 20, 5, 30)); // 30
console.log(Math.min(10, 20, 5, 30)); // 5
console.log(Math.abs(-15)); // 15

// Número aleatorio entre 1 y 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
```

---

## 11. typeof

### Teoría
typeof permite identificar el tipo de dato de una variable.

### Ejemplo
```js
typeof 42;
typeof 'Hola';
typeof [];
```

Nota: typeof null devuelve 'object' por un error histórico.

---

## 12. Punto y coma en JavaScript

### Teoría
JavaScript usa ASI (Automatic Semicolon Insertion), pero no siempre es confiable. Usar punto y coma evita errores.

### Ejemplo
```js
let x = 5;
(function () {
  console.log('Seguro');
})();
```

---

## Ejercicios

1. Crea un array de números y usa map para multiplicarlos por 3.
2. Usa forEach para imprimir nombres de un array.
3. Crea un objeto car y recórrelo con for...in.
4. Elimina duplicados de un array usando Set.
5. Crea un Map con claves no string.
6. Usa typeof para validar un número.
7. Convierte un texto a mayúsculas.

---

## Ejemplo de respuesta de una API (GET vehículos)

```js
const vehicles = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    available: true,
    specs: {
      engine: '2.0L',
      fuel: 'Gasoline'
    }
  },
  {
    id: 2,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    available: false,
    specs: {
      engine: 'Electric',
      autonomy: '500km'
    }
  }
];
```

### Uso común
```js
vehicles.forEach(v => {
  if (v.available) console.log(v.model);
});

const brands = vehicles.map(v => v.brand);
console.log(brands);

console.table(vehicles.filter(v => v.year >= 2022));
```
