
# Clase: Manipulación del DOM con JavaScript (Selección y Modificación)

## Objetivo de la clase
Aprender qué es el DOM, cómo seleccionar elementos y cómo modificarlos usando JavaScript: texto/HTML, atributos, estilos y clases.

---

# 1) HTML y su relación con JavaScript

## Teoría
HTML define la **estructura** de una página (títulos, párrafos, botones, etc.).  
JavaScript permite **interactuar** con esa estructura: leer elementos, cambiar contenido, reaccionar a eventos.

El puente entre ambos es el **DOM**.

## Demostración
```html
<h1 id="title">Hola</h1>
<button id="btn">Cambiar título</button>
```

```js
const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  title.textContent = "Hola, DOM 👋";
});
```

---

# 2) ¿Qué es el DOM?

## Teoría
El **DOM (Document Object Model)** es una representación en forma de árbol del documento HTML.
Permite que JavaScript lea y modifique la página sin recargarla.

## Demostración
```js
console.log(document);
console.log(document.body);
```

---

# 3) Tipos principales de nodos

- **Element Nodes**: etiquetas HTML (`div`, `p`, `h1`)
- **Text Nodes**: texto dentro de los elementos
- **Attribute Nodes**: atributos (`id`, `class`)
- **Comment Nodes**: comentarios HTML

## Demostración
```html
<p id="p1">Hola <strong>mundo</strong></p>
```

```js
const p = document.getElementById("p1");
console.log(p.childNodes);
```

---

# 4) Selección de elementos en el DOM

## Métodos
- `getElementById`
- `getElementsByClassName`
- `getElementsByTagName`
- `querySelector`
- `querySelectorAll`

## Demostración
```js
document.getElementById("main-title");
document.querySelectorAll(".item");
```

---

# 5) Modificación del DOM (contenido)

## textContent
Cambia solo texto, no interpreta HTML.

```js
title.textContent = "Nuevo texto";
```

## innerHTML
Cambia contenido HTML interno.

```js
div.innerHTML = "<strong>Hola</strong>";
```

## outerHTML
Reemplaza el elemento completo.

```js
div.outerHTML = "<section>Nueva sección</section>";
```

---

# 6) Atributos del DOM

- `setAttribute`
- `getAttribute`
- `removeAttribute`

```js
img.setAttribute("alt", "Imagen");
```

---

# 7) Estilos con style

Solo estilos en línea.

```js
box.style.backgroundColor = "blue";
```

---

# 8) Clases con classList

- `add`
- `remove`
- `toggle`
- `contains`

```js
div.classList.toggle("dark");
```

---

# Ejercicios

## Mini reto 1: Tarjeta de perfil
Crea una tarjeta con:
- Nombre
- Bio
- Botón editar

Al hacer click:
- Cambia el nombre con `textContent`
- Cambia la bio con `innerHTML`
- Alterna una clase con `classList.toggle`
- Modifica un atributo con `setAttribute`

---

## Mini reto 2: TODO List (CRUD)

### Objetivo
Crear una lista de tareas donde puedas:
- **C**reate (crear tareas)
- **R**ead (ver tareas)
- **U**pdate (editar tareas)
- **D**elete (eliminar tareas)

### Requisitos HTML
```html
<h2>Todo List</h2>
<input type="text" id="taskInput" placeholder="Nueva tarea">
<button id="addTask">Agregar</button>

<ul id="taskList"></ul>
```

### Requisitos JavaScript
- Al hacer click en **Agregar**:
  - Crear un `<li>` con el texto del input
  - Agregar botones **Editar** y **Eliminar**
- **Editar**:
  - Cambiar el texto usando `prompt()` y `textContent`
- **Eliminar**:
  - Eliminar el `<li>` usando `remove()`
- Usar:
  - `createElement`
  - `appendChild`
  - `classList`
  - Eventos `click`

### Extra (opcional)
- Marcar tarea como completada con `classList.toggle("done")`
- Guardar las tareas en `localStorage`

---

🎯 **Objetivo final:** practicar selección, modificación del DOM, manejo de eventos y lógica CRUD básica.
