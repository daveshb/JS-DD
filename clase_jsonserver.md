# JSON Server - Clase Completa (CRUD, Fetch, Axios, Manejo de Errores y CORS)

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [1. Fetch API (Solicitudes HTTP Simplificadas)](#1-fetch-api-solicitudes-http-simplificadas)
4. [2. Parámetros Detallados del Objeto Options en fetch()](#2-parámetros-detallados-del-objeto-options-en-fetch)
5. [3. Manejo de Errores en JavaScript](#3-manejo-de-errores-en-javascript)
6. [4. Uso de throw para Lanzar Errores Personalizados](#4-uso-de-throw-para-lanzar-errores-personalizados)
7. [5. Operador de Encadenamiento Opcional (?)](#5-operador-de-encadenamiento-opcional-)
8. [6. Uso de Debugger](#6-uso-de-debugger)
9. [7. Manejo de Errores Global](#7-manejo-de-errores-global)
10. [8. Depuración de Solicitudes de Red](#8-depuración-de-solicitudes-de-red)
11. [9. CORS (Cross-Origin Resource Sharing)](#9-cors-cross-origin-resource-sharing)
12. [Clase CRUD con Fetch](#clase-crud-con-fetch)
13. [Clase CRUD con Axios](#clase-crud-con-axios)
14. [HTML y Ejemplo Práctico](#html-y-ejemplo-práctico)

---

## Introducción

JSON Server es una librería que permite crear una API REST fake/simulada con datos en un archivo JSON. Es perfecta para:
- Aprender sobre APIs REST
- Desarrollo frontend sin backend real
- Testing y prototipado
- Practicar CRUD operations

---

## Instalación y Configuración

### Paso 1: Instalar JSON Server
```bash
npm install -g json-server
```

### Paso 2: Crear archivo db.json
Crea un archivo `db.json` en la raíz de tu proyecto:

```json
{
  "usuarios": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "email": "juan@example.com",
      "edad": 28,
      "ciudad": "Madrid"
    },
    {
      "id": 2,
      "nombre": "María García",
      "email": "maria@example.com",
      "edad": 25,
      "ciudad": "Barcelona"
    }
  ],
  "productos": [
    {
      "id": 1,
      "nombre": "Laptop",
      "precio": 899,
      "stock": 5
    },
    {
      "id": 2,
      "nombre": "Mouse",
      "precio": 25,
      "stock": 50
    }
  ]
}
```

### Paso 3: Ejecutar JSON Server
```bash
json-server --watch db.json --port 3000
```

O con opciones adicionales:
```bash
json-server --watch db.json --port 3000 --routes routes.json
```

---

## 1. Fetch API (Solicitudes HTTP Simplificadas)

Fetch es la forma moderna de hacer peticiones HTTP en JavaScript.

### Estructura Básica
```javascript
fetch(url, opciones)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Métodos HTTP Básicos

#### GET - Obtener datos
```javascript
// Obtener todos los usuarios
fetch('http://localhost:3000/usuarios')
  .then(response => response.json())
  .then(usuarios => console.log('Usuarios:', usuarios))
  .catch(error => console.error('Error:', error));

// Obtener usuario por ID
fetch('http://localhost:3000/usuarios/1')
  .then(response => response.json())
  .then(usuario => console.log('Usuario:', usuario))
  .catch(error => console.error('Error:', error));

// Con parámetros de búsqueda
fetch('http://localhost:3000/usuarios?ciudad=Madrid')
  .then(response => response.json())
  .then(usuarios => console.log('Usuarios de Madrid:', usuarios))
  .catch(error => console.error('Error:', error));
```

#### POST - Crear datos
```javascript
fetch('http://localhost:3000/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nombre: 'Pedro López',
    email: 'pedro@example.com',
    edad: 30,
    ciudad: 'Valencia'
  })
})
  .then(response => response.json())
  .then(usuario => console.log('Usuario creado:', usuario))
  .catch(error => console.error('Error:', error));
```

#### PUT - Actualizar datos completos
```javascript
fetch('http://localhost:3000/usuarios/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nombre: 'Juan Pérez Actualizado',
    email: 'juan.nuevo@example.com',
    edad: 29,
    ciudad: 'Madrid'
  })
})
  .then(response => response.json())
  .then(usuario => console.log('Usuario actualizado:', usuario))
  .catch(error => console.error('Error:', error));
```

#### PATCH - Actualizar datos parciales
```javascript
fetch('http://localhost:3000/usuarios/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    edad: 31
  })
})
  .then(response => response.json())
  .then(usuario => console.log('Usuario actualizado:', usuario))
  .catch(error => console.error('Error:', error));
```

#### DELETE - Eliminar datos
```javascript
fetch('http://localhost:3000/usuarios/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(() => console.log('Usuario eliminado'))
  .catch(error => console.error('Error:', error));
```

---

## 2. Parámetros Detallados del Objeto Options en fetch()

El segundo parámetro de fetch() es un objeto de opciones con las siguientes propiedades:

```javascript
fetch(url, {
  // Método HTTP
  method: 'GET', // 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'

  // Headers - Información sobre la solicitud
  headers: {
    'Content-Type': 'application/json',      // Tipo de contenido que envío
    'Accept': 'application/json',            // Tipo de contenido que espero
    'Authorization': 'Bearer token123',      // Autenticación
    'X-Custom-Header': 'valor'               // Headers personalizados
  },

  // Body - Datos a enviar (no se usa en GET)
  body: JSON.stringify({
    nombre: 'Juan',
    email: 'juan@example.com'
  }),

  // Credenciales para CORS
  credentials: 'include', // 'omit', 'same-origin', 'include'

  // Modo CORS
  mode: 'cors', // 'cors', 'no-cors', 'same-origin'

  // Nivel de seguridad para CORS
  credentials: 'same-origin',

  // Timeout en milisegundos (si es soportado)
  signal: AbortSignal.timeout(5000), // 5 segundos

  // Caché
  cache: 'default', // 'default', 'no-store', 'reload', 'no-cache', 'force-cache'

  // Redirecciones
  redirect: 'follow', // 'follow', 'error', 'manual'

  // Referencia
  referrer: 'about:client',

  // Integridad de recursos
  integrity: ''
});
```

### Ejemplo Completo con Todas las Opciones
```javascript
fetch('http://localhost:3000/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer mi-token'
  },
  body: JSON.stringify({
    nombre: 'Carlos',
    email: 'carlos@example.com',
    edad: 35,
    ciudad: 'Sevilla'
  }),
  credentials: 'include',
  mode: 'cors',
  cache: 'no-cache',
  redirect: 'follow'
})
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log('Datos:', data))
  .catch(error => console.error('Error:', error));
```

---

## 3. Manejo de Errores en JavaScript

### Try-Catch - Capturar Errores Síncronos
```javascript
try {
  // Código que puede generar error
  const resultado = JSON.parse('JSON inválido');
} catch (error) {
  // Capturar el error
  console.error('Tipo de error:', error.name);
  console.error('Mensaje:', error.message);
  console.error('Stack:', error.stack);
}
```

### Try-Catch-Finally - Con bloque finally
```javascript
try {
  const datos = JSON.parse('{}');
  console.log('Datos parseados:', datos);
} catch (error) {
  console.error('Error al parsear:', error.message);
} finally {
  console.log('Este código siempre se ejecuta');
}
```

### Try-Catch con Async/Await
```javascript
async function obtenerUsuarios() {
  try {
    const response = await fetch('http://localhost:3000/usuarios');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const usuarios = await response.json();
    console.log('Usuarios:', usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
  }
}
```

### Tipos de Errores en JavaScript
```javascript
try {
  // Error de sintaxis (SyntaxError)
  // eval('1 +'); // SyntaxError

  // Error de referencia (ReferenceError)
  // console.log(variableNoExistente); // ReferenceError

  // Error de tipo (TypeError)
  // null.toUpperCase(); // TypeError

  // Error personalizado
  // throw new Error('Mi error personalizado');

  // RangeError
  // const arr = new Array(-1); // RangeError

} catch (error) {
  console.log('Error capturado:', error.message);
  console.log('Tipo de error:', error.constructor.name);
}
```

---

## 4. Uso de throw para Lanzar Errores Personalizados

`throw` permite lanzar errores personalizados para manejar casos específicos.

### Lanzar Errores Simples
```javascript
function validarEmail(email) {
  if (!email.includes('@')) {
    throw new Error('El email debe contener @');
  }
  if (!email.includes('.')) {
    throw new Error('El email debe contener un punto');
  }
  return true;
}

try {
  validarEmail('emailinvalido');
} catch (error) {
  console.error('Error de validación:', error.message);
}
```

### Crear Clases de Error Personalizadas
```javascript
class ErrorValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.nombre = 'ErrorValidacion';
    this.timestamp = new Date();
  }
}

class ErrorAPI extends Error {
  constructor(mensaje, codigoStatus) {
    super(mensaje);
    this.nombre = 'ErrorAPI';
    this.codigoStatus = codigoStatus;
  }
}

// Usar los errores personalizados
function crearUsuario(datos) {
  if (!datos.nombre) {
    throw new ErrorValidacion('El nombre es requerido');
  }

  fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
    .then(response => {
      if (!response.ok) {
        throw new ErrorAPI(
          `Error al crear usuario: ${response.statusText}`,
          response.status
        );
      }
      return response.json();
    })
    .catch(error => {
      if (error instanceof ErrorValidacion) {
        console.error('Validación fallida:', error.message);
      } else if (error instanceof ErrorAPI) {
        console.error(`Error de API (${error.codigoStatus}):`, error.message);
      } else {
        console.error('Error desconocido:', error);
      }
    });
}
```

### Re-lanzar Errores
```javascript
async function procesarDatos(id) {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`);
    if (!response.ok) {
      throw new Error('Usuario no encontrado');
    }
    return response.json();
  } catch (error) {
    // Re-lanzar el error con contexto adicional
    throw new Error(`Error procesando usuario ${id}: ${error.message}`);
  }
}

// Usar
procesarDatos(999)
  .catch(error => console.error(error.message));
```

---

## 5. Operador de Encadenamiento Opcional (?)

El operador `?.` permite acceder a propiedades anidadas de forma segura, retornando `undefined` si la propiedad no existe.

### Acceso a Propiedades
```javascript
const usuario = {
  nombre: 'Juan',
  direccion: {
    ciudad: 'Madrid',
    codigoPostal: '28001'
  }
};

// Sin optional chaining (puede dar error)
console.log(usuario.direccion.ciudad); // 'Madrid'
console.log(usuario.telefono.numero); // TypeError!

// Con optional chaining (seguro)
console.log(usuario?.direccion?.ciudad); // 'Madrid'
console.log(usuario?.telefono?.numero); // undefined
console.log(usuario?.direccion?.pais); // undefined
```

### Llamada a Funciones
```javascript
const usuario = {
  nombre: 'Juan',
  saludar: () => console.log('Hola!')
};

// Sin optional chaining
if (usuario.saludar) {
  usuario.saludar(); // 'Hola!'
}

// Con optional chaining
usuario?.saludar?.(); // 'Hola!'

const usuario2 = { nombre: 'María' };
usuario2?.saludar?.(); // undefined (no lanza error)
```

### Acceso a Arrays
```javascript
const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' }
];

console.log(usuarios?.[0]?.nombre); // 'Juan'
console.log(usuarios?.[5]?.nombre); // undefined

const usuariosVacio = null;
console.log(usuariosVacio?.[0]?.nombre); // undefined
```

### Usar con Valores Predeterminados
```javascript
// Combinar con operador ?? (nullish coalescing)
const usuario = null;
const nombre = usuario?.nombre ?? 'Usuario desconocido';
console.log(nombre); // 'Usuario desconocido'

// Con operador || (si la propiedad es falsy)
const edad = usuario?.edad || 0;
console.log(edad); // 0
```

---

## 6. Uso de Debugger

El debugger es una herramienta para pausar y inspeccionar el código.

### Declaración debugger
```javascript
function procesarUsuario(usuario) {
  console.log('Iniciando procesamiento...');
  
  debugger; // El código se pausará aquí si abres las DevTools
  
  if (!usuario.nombre) {
    throw new Error('Usuario sin nombre');
  }
  
  console.log('Usuario procesado:', usuario);
}

procesarUsuario({ nombre: 'Juan' });
```

### Usar debugger en Peticiones
```javascript
async function obtenerYProcesar(id) {
  try {
    console.log('Obteniendo usuario:', id);
    debugger; // Pausa aquí para inspeccionar
    
    const response = await fetch(`http://localhost:3000/usuarios/${id}`);
    
    debugger; // Pausa para ver la response
    
    const usuario = await response.json();
    
    debugger; // Pausa para ver los datos parseados
    
    return usuario;
  } catch (error) {
    debugger; // Pausa si hay error
    console.error('Error:', error);
  }
}
```

### Breakpoints en DevTools
1. Abre la pestaña "Sources" en DevTools
2. Haz clic en el número de línea para crear un breakpoint
3. Ejecuta el código y se pausará en ese punto
4. Usa los botones de control para:
   - **Resume** (▶): Continuar ejecución
   - **Step over** (⬇): Siguiente línea
   - **Step into** (🔽): Entrar en función
   - **Step out** (🔼): Salir de función

### Inspeccionar Variables
```javascript
async function ejemplo() {
  const usuarios = await fetch('http://localhost:3000/usuarios')
    .then(r => r.json());
  
  debugger; // En DevTools, abre la consola y escribe:
  // usuarios
  // usuarios.length
  // usuarios[0].nombre
  // typeof usuarios
}
```

---


## 8. Depuración de Solicitudes de Red

### Ver Solicitudes en DevTools
1. Abre DevTools (F12 o Cmd+Option+I)
2. Ve a la pestaña "Network"
3. Realiza una acción que genere una solicitud
4. Haz clic en la solicitud para verla

### Filtrar por Tipo
- **Fetch/XHR**: Solicitudes que hacemos
- **Doc**: Documentos HTML
- **CSS**: Hojas de estilos
- **JS**: Scripts

### Información de la Solicitud
- **Headers**: Headers enviados
- **Preview**: Respuesta en formato legible
- **Response**: JSON/XML sin formato
- **Timing**: Tiempo de respuesta

### Inspeccionar Solicitudes Manualmente
```javascript
// Log detallado de solicitudes
async function fetchConDebug(url, opciones = {}) {
  console.log('📤 Enviando solicitud:', { url, opciones });

  try {
    const response = await fetch(url, opciones);
    
    console.log('📥 Respuesta recibida:', {
      status: response.status,
      statusText: response.statusText,
      headers: {
        contentType: response.headers.get('content-type'),
        contentLength: response.headers.get('content-length')
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const datos = await response.json();
    console.log('✅ Datos parseados:', datos);
    return datos;

  } catch (error) {
    console.error('❌ Error en solicitud:', error.message);
    throw error;
  }
}

// Usar
fetchConDebug('http://localhost:3000/usuarios')
  .catch(console.error);
```

### Monitorear Todas las Solicitudes
```javascript
// Interceptar fetch global
const originalFetch = window.fetch;

window.fetch = function(...args) {
  const [url, opciones] = args;
  
  console.group(`🌐 ${opciones?.method || 'GET'} ${url}`);
  console.log('Opciones:', opciones);

  return originalFetch.apply(this, args)
    .then(response => {
      console.log('Status:', response.status);
      return response;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    })
    .finally(() => console.groupEnd());
};
```

---

## 9. CORS (Cross-Origin Resource Sharing)

CORS es un mecanismo que permite que servidores en diferentes dominios se comuniquen.

### ¿Cuándo se Necesita CORS?
- Frontend en `http://localhost:3001`
- API en `http://localhost:3000`
- Diferentes puertos = Diferente origen

### Configurar JSON Server para CORS

#### Opción 1: Comando en terminal
```bash
json-server --watch db.json --port 3000 --header Access-Control-Allow-Origin:"*"
```

#### Opción 2: Con archivo de configuración
Crea `json-server.config.js`:
```javascript
module.exports = {
  port: 3000,
  watch: true,
  middlewares: [
    function(req, res, next) {
      // Permitir CORS desde cualquier origen
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      // Responder a preflight
      if (req.method === 'OPTIONS') {
        res.sendStatus(200);
      } else {
        next();
      }
    }
  ]
};
```

Ejecutar:
```bash
json-server -c json-server.config.js
```

### Headers CORS Comunes
```javascript
// En servidor (Express, Node, etc.)
app.use((req, res, next) => {
  // Origen que puede acceder
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  
  // Métodos permitidos
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  // Headers permitidos
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Incluir credenciales
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Caché preflight
  res.header('Access-Control-Max-Age', '3600');
  
  next();
});
```

### Petición con CORS
```javascript
// Fetch automáticamente maneja CORS
fetch('http://localhost:3000/usuarios', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'cors', // Habilitar CORS
  credentials: 'include' // Incluir cookies
})
  .then(response => response.json())
  .then(datos => console.log(datos))
  .catch(error => console.error('Error CORS:', error));
```

### Errores Comunes de CORS
```
❌ "Access to XMLHttpRequest has been blocked by CORS policy: 
    No 'Access-Control-Allow-Origin' header is present on the requested resource."

Solución: Configurar headers en el servidor
```

```
❌ "The value of the 'Access-Control-Allow-Credentials' header in the response 
    is '' which must be 'true' when the request's credentials mode is 'include'."

Solución: Usar credentials: 'include' si el servidor tiene Access-Control-Allow-Credentials: true
```

---

## Clase CRUD con Fetch

Clase completa para realizar operaciones CRUD usando Fetch:

```javascript
/**
 * Clase API para manejar solicitudes HTTP con Fetch
 * Incluye validación, manejo de errores y logging
 */
class APIFetch {
  constructor(urlBase = 'http://localhost:3000') {
    this.urlBase = urlBase;
    this.timeoutMs = 5000; // 5 segundos de timeout
    this.log = true; // Mostrar logs en consola
  }

  /**
   * Método privado para hacer solicitudes genéricas
   */
  async _solicitud(url, opciones = {}) {
    const urlCompleta = this.urlBase + url;
    
    const opcionesCompletas = {
      headers: {
        'Content-Type': 'application/json',
        ...opciones.headers
      },
      mode: 'cors',
      credentials: 'include',
      ...opciones
    };

    // Logging
    if (this.log) {
      console.log(`📤 ${opciones.method || 'GET'} ${url}`);
    }

    try {
      // Crear AbortController para timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.timeoutMs
      );

      opcionesCompletas.signal = controller.signal;

      const response = await fetch(urlCompleta, opcionesCompletas);
      clearTimeout(timeoutId);

      // Validar response
      if (!response.ok) {
        throw new ErrorAPI(
          `${response.status} ${response.statusText}`,
          response.status
        );
      }

      // Respuestas vacías (204 No Content)
      if (response.status === 204) {
        return null;
      }

      const datos = await response.json();

      if (this.log) {
        console.log(`✅ Respuesta:`, datos);
      }

      return datos;

    } catch (error) {
      // Manejo de errores específicos
      if (error.name === 'AbortError') {
        throw new Error(`Timeout: La solicitud tardó más de ${this.timeoutMs}ms`);
      }

      if (this.log) {
        console.error(`❌ Error:`, error.message);
      }

      throw error;
    }
  }

  /**
   * GET - Obtener uno o múltiples registros
   */
  async obtener(ruta, id = null) {
    const url = id !== null ? `${ruta}/${id}` : ruta;
    return this._solicitud(url, { method: 'GET' });
  }

  /**
   * GET con filtros y paginación
   */
  async obtenerConFiltros(ruta, opciones = {}) {
    const {
      filtros = {},
      pagina = 1,
      limite = 10,
      ordenar = null,
      q = null // búsqueda general
    } = opciones;

    let url = `${ruta}?_page=${pagina}&_limit=${limite}`;

    // Agregar parámetros de búsqueda
    if (q) {
      url += `&q=${encodeURIComponent(q)}`;
    }

    // Agregar filtros
    Object.entries(filtros).forEach(([clave, valor]) => {
      url += `&${clave}=${encodeURIComponent(valor)}`;
    });

    // Agregar ordenamiento
    if (ordenar) {
      const [campo, direccion] = ordenar.split(':');
      url += `&_sort=${campo}&_order=${direccion || 'asc'}`;
    }

    return this._solicitud(url, { method: 'GET' });
  }

  /**
   * POST - Crear un nuevo registro
   */
  async crear(ruta, datos) {
    // Validar que datos no esté vacío
    if (!datos || typeof datos !== 'object') {
      throw new ErrorValidacion('Los datos deben ser un objeto');
    }

    return this._solicitud(ruta, {
      method: 'POST',
      body: JSON.stringify(datos)
    });
  }

  /**
   * PUT - Actualizar un registro completo
   */
  async actualizar(ruta, id, datos) {
    if (!id) {
      throw new ErrorValidacion('Se requiere un ID para actualizar');
    }

    if (!datos || typeof datos !== 'object') {
      throw new ErrorValidacion('Los datos deben ser un objeto');
    }

    const url = `${ruta}/${id}`;

    return this._solicitud(url, {
      method: 'PUT',
      body: JSON.stringify(datos)
    });
  }

  /**
   * PATCH - Actualizar parcialmente un registro
   */
  async actualizarParcial(ruta, id, datos) {
    if (!id) {
      throw new ErrorValidacion('Se requiere un ID para actualizar');
    }

    const url = `${ruta}/${id}`;

    return this._solicitud(url, {
      method: 'PATCH',
      body: JSON.stringify(datos)
    });
  }

  /**
   * DELETE - Eliminar un registro
   */
  async eliminar(ruta, id) {
    if (!id) {
      throw new ErrorValidacion('Se requiere un ID para eliminar');
    }

    const url = `${ruta}/${id}`;

    return this._solicitud(url, { method: 'DELETE' });
  }

  /**
   * DELETE - Eliminar múltiples registros
   */
  async eliminarMultiples(ruta, ids) {
    if (!Array.isArray(ids) || ids.length === 0) {
      throw new ErrorValidacion('Se requiere un array de IDs');
    }

    return Promise.all(
      ids.map(id => this.eliminar(ruta, id))
    );
  }

  /**
   * Desactivar logs
   */
  silenciar() {
    this.log = false;
  }

  /**
   * Activar logs
   */
  verboso() {
    this.log = true;
  }

  /**
   * Cambiar URL base
   */
  establecerURLBase(url) {
    this.urlBase = url;
  }

  /**
   * Cambiar timeout
   */
  establecerTimeout(ms) {
    this.timeoutMs = ms;
  }
}

// ============== CLASES DE ERROR PERSONALIZADAS ==============

class ErrorAPI extends Error {
  constructor(mensaje, codigoStatus = null) {
    super(mensaje);
    this.nombre = 'ErrorAPI';
    this.codigoStatus = codigoStatus;
  }
}

class ErrorValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.nombre = 'ErrorValidacion';
  }
}

class ErrorRed extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.nombre = 'ErrorRed';
  }
}

// ============== EJEMPLO DE USO ==============

/*
// Crear instancia
const api = new APIFetch('http://localhost:3000');

// Obtener todos los usuarios
api.obtener('/usuarios')
  .then(usuarios => console.log('Usuarios:', usuarios))
  .catch(error => console.error('Error:', error.message));

// Obtener usuario por ID
api.obtener('/usuarios', 1)
  .then(usuario => console.log('Usuario:', usuario))
  .catch(error => console.error('Error:', error.message));

// Crear usuario
api.crear('/usuarios', {
  nombre: 'Carlos López',
  email: 'carlos@example.com',
  edad: 32,
  ciudad: 'Bilbao'
})
  .then(usuario => console.log('Usuario creado:', usuario))
  .catch(error => console.error('Error:', error.message));

// Actualizar usuario completo
api.actualizar('/usuarios', 1, {
  nombre: 'Juan Pérez Actualizado',
  email: 'juan.nuevo@example.com',
  edad: 29,
  ciudad: 'Madrid'
})
  .then(usuario => console.log('Usuario actualizado:', usuario))
  .catch(error => console.error('Error:', error.message));

// Actualizar parcialmente
api.actualizarParcial('/usuarios', 1, { edad: 30 })
  .then(usuario => console.log('Usuario actualizado:', usuario))
  .catch(error => console.error('Error:', error.message));

// Eliminar usuario
api.eliminar('/usuarios', 1)
  .then(() => console.log('Usuario eliminado'))
  .catch(error => console.error('Error:', error.message));

// Obtener con filtros y paginación
api.obtenerConFiltros('/usuarios', {
  filtros: { ciudad: 'Madrid' },
  pagina: 1,
  limite: 5,
  ordenar: 'nombre:asc',
  q: 'Juan'
})
  .then(usuarios => console.log('Usuarios filtrados:', usuarios))
  .catch(error => console.error('Error:', error.message));
*/
```

---

## Clase CRUD con Axios

Axios es una librería HTTP más potente que Fetch. Primero, instálala:

```bash
npm install axios
```

```javascript
/**
 * Clase API para manejar solicitudes HTTP con Axios
 * Incluye interceptores, manejo de errores y validación
 */
class APIAxios {
  constructor(urlBase = 'http://localhost:3000') {
    this.urlBase = urlBase;
    this.timeoutMs = 5000;
    this.log = true;

    // Crear instancia de axios
    this.client = axios.create({
      baseURL: urlBase,
      timeout: this.timeoutMs,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Configurar interceptores
    this._configurarInterceptores();
  }

  /**
   * Configurar interceptores para logging y manejo de errores
   */
  _configurarInterceptores() {
    // Interceptor de solicitud
    this.client.interceptors.request.use(
      config => {
        if (this.log) {
          console.log(`📤 ${config.method.toUpperCase()} ${config.url}`);
        }
        return config;
      },
      error => {
        console.error('Error en solicitud:', error);
        return Promise.reject(error);
      }
    );

    // Interceptor de respuesta
    this.client.interceptors.response.use(
      response => {
        if (this.log) {
          console.log(`✅ Respuesta:`, response.data);
        }
        return response;
      },
      error => {
        // Manejo de errores de respuesta
        if (error.response) {
          // Servidor respondió con código de error
          const { status, statusText, data } = error.response;
          const mensaje = `${status} ${statusText}: ${data?.message || 'Error'}`;
          
          if (this.log) {
            console.error(`❌ Error ${status}:`, mensaje);
          }

          throw new ErrorAPI(mensaje, status);

        } else if (error.request) {
          // La solicitud se hizo pero no hay respuesta
          if (this.log) {
            console.error('❌ No hay respuesta del servidor');
          }
          throw new ErrorRed('No hay respuesta del servidor');

        } else {
          // Error al configurar la solicitud
          if (this.log) {
            console.error('❌ Error:', error.message);
          }
          throw new Error(error.message);
        }
      }
    );
  }

  /**
   * GET - Obtener uno o múltiples registros
   */
  async obtener(ruta, id = null) {
    try {
      const url = id !== null ? `${ruta}/${id}` : ruta;
      const response = await this.client.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * GET con filtros y paginación
   */
  async obtenerConFiltros(ruta, opciones = {}) {
    try {
      const {
        filtros = {},
        pagina = 1,
        limite = 10,
        ordenar = null,
        q = null
      } = opciones;

      const params = {
        _page: pagina,
        _limit: limite,
        ...filtros
      };

      if (q) {
        params.q = q;
      }

      if (ordenar) {
        const [campo, direccion] = ordenar.split(':');
        params._sort = campo;
        params._order = direccion || 'asc';
      }

      const response = await this.client.get(ruta, { params });
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  /**
   * POST - Crear un nuevo registro
   */
  async crear(ruta, datos) {
    try {
      if (!datos || typeof datos !== 'object') {
        throw new ErrorValidacion('Los datos deben ser un objeto');
      }

      const response = await this.client.post(ruta, datos);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  /**
   * PUT - Actualizar un registro completo
   */
  async actualizar(ruta, id, datos) {
    try {
      if (!id) {
        throw new ErrorValidacion('Se requiere un ID para actualizar');
      }

      if (!datos || typeof datos !== 'object') {
        throw new ErrorValidacion('Los datos deben ser un objeto');
      }

      const url = `${ruta}/${id}`;
      const response = await this.client.put(url, datos);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  /**
   * PATCH - Actualizar parcialmente un registro
   */
  async actualizarParcial(ruta, id, datos) {
    try {
      if (!id) {
        throw new ErrorValidacion('Se requiere un ID para actualizar');
      }

      const url = `${ruta}/${id}`;
      const response = await this.client.patch(url, datos);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  /**
   * DELETE - Eliminar un registro
   */
  async eliminar(ruta, id) {
    try {
      if (!id) {
        throw new ErrorValidacion('Se requiere un ID para eliminar');
      }

      const url = `${ruta}/${id}`;
      await this.client.delete(url);
      return null;

    } catch (error) {
      throw error;
    }
  }

  /**
   * DELETE - Eliminar múltiples registros
   */
  async eliminarMultiples(ruta, ids) {
    try {
      if (!Array.isArray(ids) || ids.length === 0) {
        throw new ErrorValidacion('Se requiere un array de IDs');
      }

      return Promise.all(
        ids.map(id => this.eliminar(ruta, id))
      );

    } catch (error) {
      throw error;
    }
  }

  /**
   * Desactivar logs
   */
  silenciar() {
    this.log = false;
  }

  /**
   * Activar logs
   */
  verboso() {
    this.log = true;
  }

  /**
   * Cambiar URL base
   */
  establecerURLBase(url) {
    this.urlBase = url;
    this.client.defaults.baseURL = url;
  }

  /**
   * Cambiar timeout
   */
  establecerTimeout(ms) {
    this.timeoutMs = ms;
    this.client.defaults.timeout = ms;
  }

  /**
   * Agregar header personalizado
   */
  agregarHeader(nombre, valor) {
    this.client.defaults.headers.common[nombre] = valor;
  }

  /**
   * Agregar token de autenticación
   */
  establecerToken(token) {
    this.agregarHeader('Authorization', `Bearer ${token}`);
  }
}

// ============== EJEMPLO DE USO ==============

/*
// Crear instancia
const api = new APIAxios('http://localhost:3000');

// Obtener todos los usuarios
api.obtener('/usuarios')
  .then(usuarios => console.log('Usuarios:', usuarios))
  .catch(error => console.error('Error:', error.message));

// Crear usuario
api.crear('/usuarios', {
  nombre: 'Elena Rodríguez',
  email: 'elena@example.com',
  edad: 28,
  ciudad: 'Alicante'
})
  .then(usuario => console.log('Usuario creado:', usuario))
  .catch(error => console.error('Error:', error.message));

// Usar token de autenticación
api.establecerToken('mi-token-secreto-123');

// Obtener con filtros
api.obtenerConFiltros('/usuarios', {
  filtros: { ciudad: 'Madrid' },
  pagina: 1,
  limite: 10,
  ordenar: 'nombre:asc'
})
  .then(usuarios => console.log('Usuarios:', usuarios))
  .catch(error => console.error('Error:', error.message));
*/
```

---


## Resumen de Temas Cubiertos

### ✅ **1. Fetch API (Solicitudes HTTP Simplificadas)**
- GET, POST, PUT, PATCH, DELETE
- Promesas y .then()
- Manejo básico de errores

### ✅ **2. Parámetros Detallados del Objeto Options en fetch()**
- method, headers, body
- credentials, mode, cache
- signal para timeout
- redirect e integrity

### ✅ **3. Manejo de Errores en JavaScript**
- try-catch
- try-catch-finally
- Async/await con try-catch
- Tipos de errores

### ✅ **4. Uso de throw para Lanzar Errores Personalizados**
- Clases de error personalizadas
- Re-lanzar errores
- Validaciones

### ✅ **5. Operador de Encadenamiento Opcional (?)**
- Acceso seguro a propiedades
- Llamadas a funciones seguras
- Acceso a arrays
- Combinación con ??

### ✅ **6. Uso de Debugger**
- Breakpoints en código
- Inspección de variables
- Step over, step into, step out
- DevTools Network


### ✅ **8. Depuración de Solicitudes de Red**
- DevTools Network tab
- Logging detallado
- Interceptores de fetch
- Monitoreo de todas las solicitudes

### ✅ **9. CORS (Cross-Origin Resource Sharing)**
- Configuración de JSON Server
- Headers CORS
- Errores comunes
- Soluciones

### ✅ **Clase CRUD con Fetch**
- Métodos para todas operaciones CRUD
- Validación de datos
- Timeout y AbortController
- Logging y debugging

### ✅ **Clase CRUD con Axios**
- Instancia de axios
- Interceptores
- Manejo de errores avanzado
- Token de autenticación


---

## Cómo Usar

1. **Instala JSON Server:**
   ```bash
   npm install -g json-server
   ```

2. **Crea db.json** con la estructura mostrada

3. **Ejecuta JSON Server:**
   ```bash
   json-server --watch db.json --port 3000
   ```

4. **Instala Axios** (si quieres usarlo):
   ```bash
   npm install axios
   ```

5. **Abre el HTML** en tu navegador

6. **Prueba el CRUD:**
   - Crea usuarios
   - Edita usuarios
   - Elimina usuarios
   - Cambia entre Fetch y Axios

¡Listo! 

