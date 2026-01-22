# Web Storage API: localStorage y sessionStorage

## Introducción

La Web Storage API proporciona dos mecanismos para almacenar datos en el navegador de forma segura y sencilla:
- **localStorage**: Almacenamiento persistente
- **sessionStorage**: Almacenamiento de sesión

---

## localStorage

### ¿Qué es?
localStorage es un almacenamiento de datos que persiste indefinidamente en el navegador, incluso después de cerrar la pestaña o reiniciar el navegador.

### Características
- Los datos se mantienen hasta que se limpien manualmente
- El alcance es por dominio (misma URL)
- Capacidad aproximada: 5-10MB por dominio
- Los datos se almacenan como strings (pares clave-valor)

### Métodos

#### `setItem(clave, valor)`
Guarda un dato en localStorage.
```javascript
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('edad', '25');
```

#### `getItem(clave)`
Recupera un dato de localStorage.
```javascript
const nombre = localStorage.getItem('nombre'); // 'Juan'
const edad = localStorage.getItem('edad');     // '25'
```

#### `removeItem(clave)`
Elimina un dato específico.
```javascript
localStorage.removeItem('nombre');
```

#### `clear()`
Elimina todos los datos de localStorage.
```javascript
localStorage.clear();
```

#### `key(índice)`
Obtiene la clave en la posición especificada.
```javascript
const primeraClav = localStorage.key(0);
```

### Ejemplo Práctico

```javascript
// Guardar información del usuario
function guardarUsuario(nombre, email) {
  localStorage.setItem('usuario_nombre', nombre);
  localStorage.setItem('usuario_email', email);
  localStorage.setItem('ultima_sesion', new Date().toISOString());
}

// Recuperar información
function obtenerUsuario() {
  return {
    nombre: localStorage.getItem('usuario_nombre'),
    email: localStorage.getItem('usuario_email'),
    ultimaSesion: localStorage.getItem('ultima_sesion')
  };
}

// Limpiar datos
function cerrarSesion() {
  localStorage.removeItem('usuario_nombre');
  localStorage.removeItem('usuario_email');
  localStorage.removeItem('ultima_sesion');
}

// Uso
guardarUsuario('Juan', 'juan@email.com');
console.log(obtenerUsuario());
cerrarSesion();
```

---

## sessionStorage

### ¿Qué es?
sessionStorage es un almacenamiento temporal que persiste solo durante la sesión actual del navegador. Se limpia automáticamente al cerrar la pestaña.

### Características
- Los datos se limpian al cerrar la pestaña
- El alcance es por pestaña (cada pestaña tiene su propia sesión)
- Capacidad aproximada: 5-10MB por sesión
- Los datos se almacenan como strings (pares clave-valor)

### Métodos

Los métodos son idénticos a localStorage:
- `setItem(clave, valor)`
- `getItem(clave)`
- `removeItem(clave)`
- `clear()`
- `key(índice)`

### Ejemplo Práctico

```javascript
// Guardar datos temporales durante la sesión
function guardarCarrito(productos) {
  sessionStorage.setItem('carrito', JSON.stringify(productos));
}

// Obtener el carrito
function obtenerCarrito() {
  const carrito = sessionStorage.getItem('carrito');
  return carrito ? JSON.parse(carrito) : [];
}

// Agregar un producto
function agregarProducto(producto) {
  const carrito = obtenerCarrito();
  carrito.push(producto);
  guardarCarrito(carrito);
}

// Vaciar carrito
function vaciarCarrito() {
  sessionStorage.clear();
}

// Uso
agregarProducto({ id: 1, nombre: 'Laptop', precio: 999 });
agregarProducto({ id: 2, nombre: 'Mouse', precio: 29 });
console.log(obtenerCarrito());
// Output: [{ id: 1, nombre: 'Laptop', precio: 999 }, { id: 2, nombre: 'Mouse', precio: 29 }]
```

---

## Diferencias Principales

| Característica | localStorage | sessionStorage |
|---|---|---|
| **Duración** | Persistente (indefinido) | Sesión actual |
| **Limpieza** | Manual o usuario | Al cerrar pestaña |
| **Alcance** | Por dominio | Por pestaña |
| **Capacidad** | 5-10MB | 5-10MB |
| **Caso de uso** | Preferencias, autenticación | Datos temporales, carrito |

---

## Almacenamiento de Objetos

Dado que localStorage y sessionStorage solo almacenan strings, necesitamos convertir objetos a JSON y viceversa.

### Guardar un Objeto

```javascript
const usuario = {
  id: 1,
  nombre: 'María',
  email: 'maria@email.com',
  rol: 'admin'
};

// Convertir a JSON y guardar
localStorage.setItem('usuario', JSON.stringify(usuario));
```

### Recuperar un Objeto

```javascript
// Obtener y convertir desde JSON
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioGuardado.nombre); // 'María'
```

### Clase Auxiliar para Simplificar

```javascript
class StorageManager {
  constructor(tipo = 'local') {
    this.storage = tipo === 'local' ? localStorage : sessionStorage;
  }

  // Guardar cualquier tipo de dato
  set(clave, valor) {
    if (typeof valor === 'object') {
      this.storage.setItem(clave, JSON.stringify(valor));
    } else {
      this.storage.setItem(clave, valor);
    }
  }

  // Obtener un dato
  get(clave) {
    const valor = this.storage.getItem(clave);
    try {
      return JSON.parse(valor);
    } catch {
      return valor;
    }
  }

  // Eliminar un dato
  remove(clave) {
    this.storage.removeItem(clave);
  }

  // Limpiar todo
  clear() {
    this.storage.clear();
  }

  // Obtener todas las claves
  getKeys() {
    const keys = [];
    for (let i = 0; i < this.storage.length; i++) {
      keys.push(this.storage.key(i));
    }
    return keys;
  }
}

// Uso
const local = new StorageManager('local');
const session = new StorageManager('session');

// Guardar objeto
local.set('usuario', { nombre: 'Juan', edad: 30 });

// Obtener objeto
const usuario = local.get('usuario');
console.log(usuario.nombre); // 'Juan'

// Guardar string
local.set('tema', 'oscuro');
console.log(local.get('tema')); // 'oscuro'
```

---

## Consideraciones de Seguridad

⚠️ **Importante**: No almacenes información sensible como:
- Contraseñas
- Tokens de autenticación (sin precaución)
- Datos personales sensibles

✅ **Seguro almacenar**:
- Preferencias de usuario
- Datos de caché
- IDs de sesión (si es necesario)
- Información no sensible

---

## Ejemplo Completo: Formulario con Persistencia

```javascript
class FormularioPersistente {
  constructor(idFormulario, clavesGuardar = []) {
    this.form = document.getElementById(idFormulario);
    this.clavesGuardar = clavesGuardar;
    this.inicializar();
  }

  inicializar() {
    // Cargar datos guardados
    this.cargarDatos();

    // Guardar datos cuando cambien
    this.form.addEventListener('change', () => this.guardarDatos());
  }

  guardarDatos() {
    const datos = new FormData(this.form);
    const objeto = Object.fromEntries(datos);
    localStorage.setItem('formulario_datos', JSON.stringify(objeto));
  }

  cargarDatos() {
    const datosGuardados = localStorage.getItem('formulario_datos');
    if (datosGuardados) {
      const objeto = JSON.parse(datosGuardados);
      Object.entries(objeto).forEach(([clave, valor]) => {
        const input = this.form.elements[clave];
        if (input) {
          input.value = valor;
        }
      });
    }
  }

  limpiar() {
    localStorage.removeItem('formulario_datos');
    this.form.reset();
  }
}

// Uso
const formulario = new FormularioPersistente('miFormulario');
```

---

## Resumen

- **localStorage**: Para datos que deben persistir entre sesiones
- **sessionStorage**: Para datos temporales de la sesión actual
- Siempre serializa objetos a JSON antes de guardar
- No almacenes datos sensibles
- Usa una clase auxiliar para simplificar el código
