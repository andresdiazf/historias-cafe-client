# ☕ Historias de Café – E-commerce Full Stack

Plataforma completa de e-commerce especializada en la venta de café colombiano. Permite a los usuarios explorar productos, gestionar su carrito de compras y realizar pagos seguros, mientras que los administradores pueden gestionar inventario, órdenes y usuarios desde un panel de control completo.

**Proyecto Final Académico** – Generation Colombia | Bootcamp Java Full Stack Developer

---

## 📚 Repositorios del Proyecto

| Componente | Repositorio | Descripción |
|------------|------------|-------------|
| **Frontend** | [historias-cafe-client](https://github.com/andresdiazf/historias-cafe-client) | Interface de usuario con HTML/CSS/JS |
| **Backend** | [historias-cafe-api](https://github.com/andresdiazf/historias-cafe-api) | API REST con Spring Boot |

---

## 👥 Equipo de Desarrollo

| Nombre | Rol |
|--------|-----|
| Andrés Díaz | Full Stack Developer |
| Maira Pinilla | Full Stack Developer |
| Zully Camacho | Full Stack Developer |
| Didier Cuan | Full Stack Developer |

---

## 🏗️ Arquitectura del Proyecto

```
┌─────────────────────────────────────────────────────────────────┐
│                      HISTORIAS DE CAFÉ                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────────────────┐     ┌──────────────────────────┐ │
│  │    FRONTEND (Client)      │     │  BACKEND (API REST)      │ │
│  ├───────────────────────────┤     ├──────────────────────────┤ │
│  │ • HTML5 / CSS3            │     │ • Spring Boot            │ │
│  │ • JavaScript Vanilla      │     │ • Spring Security + JWT  │ │
│  │ • Bootstrap 5             │     │ • Spring Data JPA        │ │
│  │ • SweetAlert2             │     │ • PostgreSQL             │ │
│  │                           │     │ • Mercado Pago API       │ │
│  │ Componentes:              │     │                          │ │
│  │ • Catálogo                │     │ Capas:                   │ │
│  │ • Carrito                 │     │ • Controller             │ │
│  │ • Auth (Login/Register)   │     │ • Service                │ │
│  │ • Panel Admin             │     │ • Repository             │ │
│  │ • Checkout                │     │ • Model/DTO              │ │
│  │                           │     │ • Security/Config        │ │
│  │ Puerto: 3000              │     │ Puerto: 8080             │ │
│  └───────────────────────────┘     └──────────────────────────┘ │
│           │                                  ▲                    │
│           │      HTTP/REST + JWT            │                    │
│           └──────────────────────────────────┘                    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
                   ┌──────────────┐
                   │   Databases  |
                   |              | 
                   |  PostgreSQL  |
                   |   Supabase   │
                   │              │
                   └──────────────┘
```

---

## 🚀 Tecnologías

### Frontend
- **HTML5** – Estructura semántica
- **CSS3** – Estilos personalizados (paleta de colores café)
- **JavaScript Vanilla** – Lógica del cliente sin frameworks
- **Bootstrap 5** – Framework CSS responsive
- **Bootstrap Icons** – Iconografía moderna
- **SweetAlert2** – Modales y notificaciones elegantes

### Backend
- **Java 17** – Lenguaje de programación
- **Spring Boot 3.x** – Framework de aplicación
- **Spring Security** – Autenticación y autorización
- **JWT (JSON Web Tokens)** – Seguridad sin estado
- **Spring Data JPA** – Acceso a datos
- **Hibernate** – ORM (Object-Relational Mapping)
- **PostgreSQL y Supabase** – Base de datos relacional
- **Mercado Pago API** – Procesamiento de pagos
- **Swagger/OpenAPI** – Documentación de API
- **Maven** – Gestor de dependencias

### Herramientas Compartidas
- **Cloudinary** – Almacenamiento de imágenes en la nube
- **Git/GitHub** – Control de versiones
- **Postman/Insomnia** – Testing de API
- **Docker** – Contenerización
- **Render/AWS** – Despliegue en la nube

---

## 📁 Estructura del Proyecto

### Frontend

```
historias-cafe-client/
├── pages/                           # Páginas principales de la aplicación
│   ├── home/                        # Página de inicio
│   ├── catalogo/                    # Catálogo de productos
│   ├── admin/                       # Panel de administración
│   ├── acercaDeNosotros/            # Información sobre la empresa
│   ├── contactanosParts/            # Página de contacto
│   └── users/                       # Gestión de usuarios
├── components/                      # Componentes reutilizables
│   ├── navBar/                      # Barra de navegación
│   ├── footer/                      # Pie de página
│   ├── cart/                        # Carrito de compras
│   ├── product/                     # Tarjetas y formularios de productos
│   ├── auth/                        # Componentes de autenticación
│   ├── login/                       # Formulario de login
│   ├── register/                    # Formulario de registro
│   ├── contact/                     # Formulario de contacto
│   └── menuAdmin/                   # Menú lateral del administrador
├── assets/                          # Recursos estáticos
│   ├── css/                         # Estilos globales
│   ├── img/                         # Imágenes del proyecto
│   ├── imgProductos/                # Imágenes de productos
│   ├── icons/                       # Iconos personalizados
│   └── mp4/                         # Videos
├── js/                              # Scripts JavaScript
│   ├── main.js                      # Lógica principal
│   ├── server.js                    # Servidor Express
│   ├── config.js                    # Configuración (Cloudinary, etc.)
│   ├── admin.js                     # Lógica del panel de administración
│   ├── products.js                  # Gestión de productos
│   ├── cart.js                      # Gestión del carrito
│   ├── home.js                      # Lógica de la página principal
│   ├── catalogo.js                  # Lógica del catálogo
│   ├── login.js                     # Lógica de login
│   ├── register.js                  # Lógica de registro
│   ├── contact.js                   # Lógica del formulario de contacto
│   ├── validators.js                # Validaciones de formularios
│   └── diagnose-api.js              # Herramienta de diagnóstico de API
├── data-base/                       # Scripts SQL
│   └── scripts_historias_de_cafe.sql # Script de creación de BD
├── index.html                       # Página principal (SPA)
├── build.js                         # Script de construcción
├── package.json                     # Dependencias del proyecto
└── README.md                        # Este archivo
```

### Backend

```
historias-cafe-api/
├── src/main/java/com/historias/cafe/backend/
│   ├── BackendApplication.java                 # Punto de entrada de Spring Boot
│   ├── config/                                 # Configuraciones
│   │   ├── CorsConfig.java                     # Configuración de CORS
│   │   └── SecurityConfig.java                 # Configuración de seguridad
│   ├── security/                               # Seguridad JWT
│   │   ├── JwtService.java                     # Generador y validador de JWT
│   │   ├── JwtAuthenticationFilter.java        # Filtro JWT
│   │   └── CustomUserDetailsService.java       # Carga de usuario personalizada
│   ├── controller/                             # Endpoints REST
│   │   ├── AuthController.java                 # Auth (login/register)
│   │   ├── UserController.java                 # CRUD usuarios
│   │   ├── ProductController.java              # CRUD productos
│   │   ├── CategoriesController.java           # CRUD categorías
│   │   ├── OrderController.java                # Gestión de órdenes
│   │   └── PaymentController.java              # Integración Mercado Pago
│   ├── service/                                # Lógica de negocio
│   │   ├── AuthService.java                    # Autenticación
│   │   ├── UserService.java                    # Operaciones de usuario
│   │   ├── ProductService.java                 # Operaciones de producto
│   │   ├── CategoriesService.java              # Operaciones de categoría
│   │   ├── OrderService.java                   # Operaciones de orden
│   │   └── PaymentService.java                 # Pagos con Mercado Pago
│   ├── repository/                             # Acceso a datos (JPA)
│   │   ├── UserRepository.java
│   │   ├── ProductRepository.java
│   │   ├── CategoriesRepository.java
│   │   ├── OrderRepository.java
│   │   └── PaymentRepository.java
│   ├── model/                                  # Entidades JPA
│   │   ├── User.java
│   │   ├── Role.java                           # Enum: ADMIN, CLIENT
│   │   ├── Product.java
│   │   ├── Categories.java
│   │   ├── Order.java
│   │   ├── OrderDetail.java
│   │   ├── Payment.java
│   │   └── Tostado.java                        # Enum tipos de tostado
│   ├── dto/                                    # Data Transfer Objects
│   │   ├── AuthRequestDTO.java
│   │   ├── AuthResponseDTO.java
│   │   ├── RegisterRequestDTO.java
│   │   ├── UserRequestDTO.java
│   │   ├── UserResponseDTO.java
│   │   ├── ProductRequestDTO.java
│   │   ├── ProductResponseDTO.java
│   │   └── OrderRequestDTO.java
│   └── exception/                              # Manejo de excepciones
│       └── GlobalExceptionHandler.java
├── src/main/resources/
│   ├── application.properties                  # Configuración BD, servidor, etc.
│   └── application-dev.properties              # Configuración desarrollo
├── src/test/java/                              # Pruebas unitarias
├── pom.xml                                     # Dependencias Maven
└── README.md                                   # Documentación backend
```

---

## ⚙️ Instrucciones de Instalación

### Requisitos Previos (Ambos)
- **Git** – Control de versiones
- **Postman** o **Insomnia** – Para testing de API (opcional)

### Backend – Instalación

#### Requisitos previos
- **JDK 17+**
- **Maven 3.6+**
- **PostgreSQL 13+**

#### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/andresdiazf/historias-cafe-api.git
   cd historias-cafe-api
   ```

2. **Crear base de datos PostgreSQL**
   ```bash
   psql -U postgres
   CREATE DATABASE historias_cafe_db;
   \q
   ```

3. **Configurar `application.properties`**
   ```bash
   cd src/main/resources
   # Editar application.properties o crear application-dev.properties
   ```
   
   Contenido de `application.properties`:
   ```properties
   # Servidor
   server.port=8080
   spring.application.name=historias-cafe-api

   # Base de datos PostgreSQL
   spring.datasource.url=jdbc:postgresql://localhost:5432/historias_cafe_db
   spring.datasource.username=postgres
   spring.datasource.password=tu_contraseña_db
   spring.datasource.driver-class-name=org.postgresql.Driver

   # JPA/Hibernate
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

   # JWT
   jwt.secret.key=tu_clave_secreta_muy_larga_minimo_32_caracteres
   jwt.expiration.time=86400000

   # Mercado Pago
   mercadopago.access.token=tu_token_mp

   # CORS
   cors.allowed.origins=http://localhost:3000,http://localhost:5173,http://127.0.0.1:5500
   ```

4. **Compilar el proyecto**
   ```bash
   mvn clean install
   ```

5. **Ejecutar la aplicación**
   ```bash
   mvn spring-boot:run
   ```
   - Backend disponible en: `http://localhost:8080`
   - Swagger UI: `http://localhost:8080/swagger-ui.html`

### Frontend – Instalación

#### Requisitos previos
- **Node.js 14+** y **npm**
- Backend corriendo en puerto 8080

#### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/andresdiazf/historias-cafe-client.git
   cd historias-cafe-client
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crear archivo `js/config.js` en la raíz:
   ```javascript
   const APP_CONFIG = {
     apiBaseUrl: "http://localhost:8080",
     cloudinary: {
       cloudName: "tu_cloud_name",
       uploadPreset: "tu_preset"
     },
     mercadoPago: {
       publicKey: "tu_mp_public_key"
     }
   };
   ```

4. **Iniciar la aplicación**
   ```bash
   npm start
   ```
   - Frontend disponible en: `http://localhost:3000`

---

### Verificación de Instalación

**Checklist de verificación:**
- [ ] Backend corriendo en `http://localhost:8080`
- [ ] Swagger UI accesible en `http://localhost:8080/swagger-ui.html`
- [ ] Base de datos PostgreSQL creada y poblada
- [ ] Frontend corriendo en `http://localhost:3000`
- [ ] Puedes acceder a la página de inicio
- [ ] Swagger muestra todos los endpoints

---

## 📡 API REST – Documentación con Swagger

### Acceso a Swagger UI

**Swagger UI**: `http://localhost:8080/swagger-ui.html`

Swagger es una herramienta interactiva que documenta automáticamente todos los endpoints de la API. Desde aquí puedes:
- ✅ Ver todos los endpoints disponibles
- ✅ Probar endpoints sin necesidad de Postman
- ✅ Ver modelos de request/response
- ✅ Validaciones requeridas
- ✅ Códigos de estado esperados

### Endpoints Principales

#### **Autenticación** (`/auth`)

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| POST | `/auth/register` | 🔓 Público | Registrar nuevo usuario |
| POST | `/auth/login` | 🔓 Público | Login y recibir JWT |

**Ejemplo - Registro:**
```bash
POST http://localhost:8080/auth/register
Content-Type: application/json

{
  "name": "Andrés Díaz",
  "email": "andres@cafe.com",
  "password": "contraseña123",
  "role": "CLIENT"
}
```

**Respuesta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Andrés Díaz",
    "email": "andres@cafe.com",
    "role": "CLIENT",
    "creationDate": "2024-06-05T10:30:00Z",
    "stateActive": true
  }
}
```

#### **Productos** (`/products`)

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| GET | `/products` | 🔓 Público | Listar todos los productos activos |
| GET | `/products/{id}` | 🔓 Público | Obtener producto por ID |
| POST | `/products` | 🔒 ADMIN | Crear producto |
| PUT | `/products/{id}` | 🔒 ADMIN | Actualizar producto |
| DELETE | `/products/{id}` | 🔒 ADMIN | Eliminar producto (soft delete) |

**Ejemplo - Crear Producto:**
```bash
POST http://localhost:8080/products
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
  "name": "Café Geisha Panamá",
  "description": "Uno de los cafés más exclusivos del mundo",
  "price": 45.99,
  "stock": 25,
  "categoryId": 1,
  "imagen": "https://res.cloudinary.com/...",
  "origen": "Panamá",
  "tostado": "MEDIO"
}
```

#### **Órdenes** (`/orders`)

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| GET | `/orders` | 🔒 Autenticado | Listar órdenes |
| GET | `/orders/{id}` | 🔒 Autenticado | Obtener orden por ID |
| POST | `/orders` | 🔒 Autenticado | Crear nueva orden |
| PATCH | `/orders/{id}/state` | 🔒 ADMIN | Actualizar estado |
| DELETE | `/orders/{id}` | 🔒 ADMIN | Eliminar orden |

**Ejemplo - Crear Orden:**
```bash
POST http://localhost:8080/orders
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
  "userId": 1,
  "details": [
    {
      "productId": 1,
      "quantity": 2,
      "price": 45.99
    }
  ]
}
```

#### **Pagos** (`/payments`)

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| POST | `/payments` | 🔒 Autenticado | Crear preferencia Mercado Pago |
| GET | `/payments/{id}` | 🔒 Autenticado | Obtener pago |
| PATCH | `/payments/{id}/status` | 🔒 ADMIN | Actualizar estado |

#### **Usuarios** (`/users`)

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| GET | `/users` | 🔒 ADMIN | Listar usuarios |
| GET | `/users/{id}` | 🔒 Autenticado | Obtener usuario |
| POST | `/users` | 🔒 ADMIN | Crear usuario |
| PUT | `/users/{id}` | 🔒 Autenticado | Actualizar usuario |
| PATCH | `/users/{id}` | 🔒 Autenticado | Actualización parcial |
| DELETE | `/users/{id}` | 🔒 ADMIN | Eliminar usuario |

#### **Categorías** (`/categories`)

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| GET | `/categories` | 🔓 Público | Listar categorías |
| GET | `/categories/{id}` | 🔓 Público | Obtener categoría |
| POST | `/categories` | 🔒 ADMIN | Crear categoría |
| PUT | `/categories/{id}` | 🔒 ADMIN | Actualizar categoría |
| DELETE | `/categories/{id}` | 🔒 ADMIN | Eliminar categoría |

### Leyenda de Acceso
- 🔓 **Público** – Sin autenticación requerida
- 🔒 **Autenticado** – Requiere token JWT válido (cualquier rol)
- 🔒 **ADMIN** – Solo usuarios con rol ADMIN

### Usar JWT en Peticiones

Para acceder a endpoints protegidos, incluye el token en el header:

```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

En Swagger UI:
1. Click en botón "Authorize" (arriba a la derecha)
2. Ingresa el token sin la palabra "Bearer"
3. Haz clic en "Authorize"
4. ¡Listo! Todos los endpoints protegidos ya estarán autenticados

---

## 🔐 Seguridad – JWT y Autenticación

### Flujo de Autenticación

```
┌─────────────────────────────────────────────────────┐
│         1. USUARIO SE REGISTRA/LOGIN                │
└─────────────────────────────────────────┬───────────┘
                                          │
                                          ▼
                    ┌────────────────────────────────┐
                    │  Backend genera JWT (24h)       │
                    └────────────────┬─────────────────┘
                                     │
                                     ▼
                    ┌────────────────────────────────┐
                    │ Frontend almacena token (JS)    │
                    │ localStorage.setItem('token')   │
                    └────────────────┬─────────────────┘
                                     │
                    ┌────────────────▼─────────────────┐
                    │  2. PETICIONES AUTENTICADAS      │
                    │  Header: Authorization Bearer    │
                    └────────────────┬─────────────────┘
                                     │
                    ┌────────────────▼─────────────────┐
                    │  JwtAuthenticationFilter         │
                    │  Valida y carga usuario          │
                    └────────────────┬─────────────────┘
                                     │
                    ┌────────────────▼─────────────────┐
                    │  3. ENDPOINT EJECUTADO CON PERMS │
                    └─────────────────────────────────┘
```

### Roles Disponibles

| Rol | Permisos |
|-----|----------|
| **CLIENT** (por defecto) | Crear órdenes, ver perfil, realizar pagos |
| **ADMIN** | Acceso total, CRUD de todos los recursos |

### Encriptación de Contraseñas

- Las contraseñas se encriptan con **BCrypt** en el backend
- Nunca se almacenan en texto plano
- En el frontend, HTTPS protege la transmisión

---



## 📖 Guía de Uso

### Para Clientes

1. **Navegar al sitio** → `http://localhost:3000`
2. **Ver catálogo** → Explora productos en "Catálogo"
3. **Registrarse/Login** → Crea cuenta o inicia sesión con el backend
4. **Agregar al carrito** → Selecciona cantidad y agrega productos
5. **Ver carrito** → Revisa productos y cantidades
6. **Realizar pago** → Procesa compra con Mercado Pago (modo sandbox)
7. **Contacto** → Usa formulario de contacto para consultas

### Para Administradores

1. **Acceder a admin** → `http://localhost:3000/pages/admin/admin.html`
2. **Ingresar credenciales** con rol ADMIN (mediante el backend)
3. **Dashboard** → Visualiza estadísticas clave
4. **Gestión de Productos**
   - Ver listado paginado
   - Crear nuevo producto via API
   - Editar información
   - Eliminar o desactivar
5. **Gestión de Órdenes**
   - Ver todas las órdenes
   - Consultar detalles
   - Actualizar estado
6. **Gestión de Usuarios**
   - Ver clientes registrados
   - Crear nuevos usuarios
   - Modificar datos y roles
   - Desactivar usuarios

---

## 💡 Ejemplo de Resultados

### Respuesta de API GET /products
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Café Geisha Panamá",
      "description": "Uno de los cafés más exclusivos del mundo",
      "origen": "Panamá",
      "tostado": "MEDIO",
      "price": 45.99,
      "stock": 25,
      "imagen_url": "https://res.cloudinary.com/...",
      "active": true
    }
  ]
}
```

### Respuesta de Crear Orden
```json
{
  "id": 12345,
  "stateOrder": "PENDIENTE",
  "subtotal": 89.99,
  "total": 99.99,
  "orderDate": "2024-06-05T10:30:00Z",
  "userId": 1,
  "details": [
    {
      "id": 1,
      "quantity": 2,
      "price": 45.99,
      "productId": 1
    }
  ]
}
```

### Estructura de usuario registrado
```json
{
  "id": 1,
  "name": "Andrés Díaz",
  "email": "andres@cafe.com",
  "role": "CLIENT",
  "creationDate": "2024-06-05T10:30:00Z",
  "stateActive": true
}
```

---

## ✨ Funcionalidades Principales

### Autenticación y Usuarios
- ✅ Registro de nuevos usuarios
- ✅ Login seguro con validación
- ✅ Recuperación de contraseña (planeado)
- ✅ Roles: Cliente y Administrador
- ✅ Gestión de perfiles de usuario

### Catálogo de Productos
- ✅ Visualización de catálogo completo
- ✅ Filtrado por origen, tipo de tostado, región
- ✅ Búsqueda de productos
- ✅ Detalles completos del producto
- ✅ Galería de imágenes en Cloudinary
- ✅ Información nutricional y descripción

### Carrito de Compras
- ✅ Agregar productos al carrito
- ✅ Modificar cantidades
- ✅ Eliminar productos
- ✅ Cálculo automático de subtotales
- ✅ Persistencia en localStorage
- ✅ Notificaciones de acciones

### Procesamiento de Pagos
- ✅ Integración con Mercado Pago
- ✅ Checkout seguro
- ✅ Confirmación de pago
- ✅ Registro de transacciones
- ✅ Comprobantes de compra

### Panel de Administración
- ✅ Dashboard con estadísticas
  - Ventas totales
  - Órdenes del día
  - Usuarios activos
  - Productos con stock bajo
- ✅ CRUD completo de productos
- ✅ Gestión de órdenes
- ✅ Administración de usuarios
- ✅ Paginación en todas las vistas
- ✅ Formularios validados
- ✅ Búsqueda y filtros

### Página de Contacto
- ✅ Formulario de consultas
- ✅ Validación de campos
- ✅ Envío de mensajes
- ✅ Mapa de ubicación

### Responsive Design
- ✅ Diseño mobile-first
- ✅ Adaptativo a tablets
- ✅ Optimizado para desktop
- ✅ Bootstrap grid system

---

## 🛡️ Manejo de Errores

### Validación Frontend
```javascript
// Ejemplo: Validación de email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    mostrarError("Email inválido");
    return false;
  }
  return true;
}
```

### Errores comunes y su manejo

| Error | Causa | Solución |
|-------|-------|----------|
| "Email ya registrado" | Usuario duplicado | Usa otro email o recupera contraseña |
| "Stock insuficiente" | Cantidad excede inventario | Reduce la cantidad |
| "Error de conexión" | API no disponible | Verifica servidor y conexión |
| "Pago rechazado" | Fondos insuficientes | Verifica datos de tarjeta |
| "Token expirado" | Sesión vencida | Inicia sesión nuevamente | Verifica datos de prueba en categories y registro Users datos de Admin.

### Manejo global de excepciones
```javascript
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return await response.json();
} catch (error) {
  console.error("Error en API:", error);
  mostrarAlerta("Error", "Ocurrió un error. Intenta nuevamente.", "error");
}
```

### Notificaciones de error con SweetAlert2
```javascript
Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'No se pudo completar la operación',
  confirmButtonText: 'Aceptar'
});
```

---

## 📡 Información de APIs Externas

### Mercado Pago
- **Documentación**: https://www.mercadopago.com.ar/developers/es
- **Endpoint**: `https://api.mercadopago.com/v1/payments`
- **Autenticación**: Bearer Token (Access Token)
- **Uso en proyecto**: Procesar pagos y crear preferencias de compra
- **Integración**: Backend (PaymentController + PaymentService)
- **Respuesta exitosa**:
  ```json
  {
    "id": 123456,
    "status": "approved",
    "transaction_amount": 89.99,
    "payer": {
      "email": "cliente@example.com"
    }
  }
  ```

### Cloudinary
- **Documentación**: https://cloudinary.com/documentation
- **Endpoint**: `https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload`
- **Uso en proyecto**: Almacenar y servir imágenes de productos
- **Integración**: Frontend (subidas) + URLs almacenadas en BD backend
- **Características**:
  - Optimización automática
  - Transformaciones de imagen (resize, crop)
  - URLs con caché
  - Soporte para CORS

### API Rest Backend (Spring Boot)
- **Base URL**: `http://localhost:8080`
- **Puerto desarrollo**: 8080
- **Documentación interactiva**: Swagger UI en `/swagger-ui.html`
- **Formato de datos**: JSON
- **Autenticación**: JWT Bearer Token (24 horas de expiración)

**Configuración CORS permitida para desarrollo:**
- `http://localhost:3000` (Frontend local)
- `http://localhost:5173` (Vite dev server)
- `http://127.0.0.1:5500` (Live Server)
- (Agregar más orígenes según necesidad)

**Base de datos**: PostgreSQL
- Gestión de datos de usuarios, productos, órdenes y pagos
- Relaciones normalizadas con entidades principales

---

## 🔮 Mejoras Futuras

### Corto Plazo (1-2 meses)
- [ ] Sistema de recuperación de contraseña por email (backend + frontend)
- [ ] Perfil de usuario con historial de compras
- [ ] Sistema de reseñas y calificaciones de productos
- [ ] Notificaciones por email de estado de órdenes
- [ ] Búsqueda y filtros avanzados de productos

### Mediano Plazo (2-4 meses)
- [ ] Sistema de cupones y descuentos
- [ ] Programa de lealtad / puntos de cliente
- [ ] Recomendaciones personalizadas (ML)
- [ ] Chat de soporte en vivo
- [ ] Comparador de productos
- [ ] Wishlist / Favoritos
- [ ] Sistema de notificaciones en tiempo real (WebSocket)
- [ ] Reportes y análisis para administradores

### Largo Plazo (4+ meses)
- [ ] App móvil nativa (React Native / Flutter)
- [ ] Análisis predictivo de inventario (AI)
- [ ] Integración con proveedores (API B2B)
- [ ] Sistema de suscripciones mensuales
- [ ] Geolocalización y cálculo automático de envíos
- [ ] Blockchain para trazabilidad de café
- [ ] Marketplace para productores locales

### Optimizaciones Técnicas
- [ ] Migración frontend a React/Vue/Angular
- [ ] Implementar PWA (Progressive Web App)
- [ ] Caching con Redis en backend
- [ ] CI/CD automatizado (GitHub Actions)
- [ ] Testing automatizado (JUnit, Selenium, Jest)
- [ ] Monitoreo y logging centralizado (ELK Stack)
- [ ] Dockerización del proyecto completo
- [ ] Despliegue en cloud (AWS, Azure, Google Cloud)
- [ ] CDN para contenido estático
- [ ] Optimización de performance (lazy loading, code splitting)

---

## 📊 Estado del Proyecto

**Fase**: MVP Completado ✅ | En mejoras continuas 🚀

| Funcionalidad | Frontend | Backend | Estado |
|---|---|---|---|
| Autenticación & Autorización | ✅ | ✅ | Completado |
| Catálogo de Productos | ✅ | ✅ | Completado |
| Carrito de Compras | ✅ | ✅ | Completado |
| Procesamiento de Pagos | ✅ | ✅ | Completado |
| Gestión de Órdenes | ✅ | ✅ | Completado |
| Panel Admin | ✅ | ✅ | Completado |
| Gestión de Usuarios | ✅ | ✅ | Completado |
| API REST Documentada | - | ✅ | Completado |
| JWT + Seguridad | ✅ | ✅ | Completado |
| Validaciones | ✅ | ✅ | Completado |
| Responsive Design | ✅ | - | Completado |
| Swagger UI | - | ✅ | Completado |

**Progreso General**: ~95% ✨

**Próximos pasos:**
- Pruebas exhaustivas en producción
- Feedback de usuarios finales
- Optimización de performance
- Despliegue en servidores dedicados

---

## 📚 Documentación Adicional

### Repositorios
- **Frontend**: [historias-cafe-client](https://github.com/andresdiazf/historias-cafe-client)
- **Backend**: [historias-cafe-api](https://github.com/andresdiazf/historias-cafe-api)

### Documentos de Referencia
- [Script SQL de base de datos](../historias-cafe-api/data-base/) - Backend
- [Documentación detallada del Backend](../historias-cafe-api/DOCUMENTATION.md)
- [Validadores de formulario Frontend](js/validators.js)
- [Configuración de Cloudinary](js/config.js)

### Recursos Útiles
- [Swagger OpenAPI](http://localhost:8080/swagger-ui.html) - Documentación interactiva API
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Spring Boot Docs](https://spring.io/projects/spring-boot)
- [Mercado Pago API](https://www.mercadopago.com.ar/developers/es)

---

## 📝 Notas Importantes

### Seguridad
- ⚠️ **Proyecto Académico**: Usar datos de prueba. NO realizar compras reales.
- 🔐 Nunca incluir `application.properties` o `.env` con credenciales reales en repositorio.
- 🧪 **Modo Sandbox**: Usar siempre Mercado Pago en modo sandbox para pruebas.
- 🔒 Las contraseñas se encriptan con BCrypt en el backend.
- 📱 CORS está configurado solo para orígenes de desarrollo.

### Base de Datos
- 💾 PostgreSQL es la base de datos principal (NO SQL Server).
- 📊 Las migraciones se aplican automáticamente con Hibernate (`ddl-auto=update`).
- 🗑️ Borrado lógico en tablas User (no se eliminan físicamente).
- 🔗 Integridad referencial preservada con relaciones Foreign Key.

### Desarrollo
- 📦 Las imágenes de productos se almacenan en **Cloudinary**, no en el servidor.
- 🌐 Frontend y Backend operan en puertos diferentes (3000 y 8080).
- 📄 JWT expira después de 24 horas (configurable).
- 🔄 CORS permite múltiples orígenes durante desarrollo.

### Deployment
- ☁️ Preparado para despliegue en Docker/Kubernetes.
- 📈 Base de datos puede escalarse a clusters PostgreSQL.
- 🚀 Optimizado para producción (minificación, caché, etc.)

---

## 🤝 Contribuciones

Este es un proyecto académico de Generation Colombia. Las contribuciones internas del equipo son bienvenidas a través de:
- Pull requests en ambos repositorios
- Issues para reportar bugs o sugerir mejoras
- Discusiones en la sección de Projects

**Proceso de contribución:**
1. Crear un branch desde `main` con nombre descriptivo
2. Hacer commits con mensajes claros
3. Enviar pull request con descripción detallada
4. Esperar revisión de los compañeros

---

## 📞 Contacto

**Equipo de Desarrollo:**
- Andrés Díaz – [LinkedIn](https://linkedin.com) | [GitHub](https://github.com/andresdiazf)
- Maira Pinilla – [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
- Zully Camacho – [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
- Didier Cuan – [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)

---

## 📄 Licencia

Este proyecto fue desarrollado por estudiantes de Generation Colombia (Grupo 2 Cohorte JAVA 11) y está destinado únicamente con **fines educativos**. 

Todos los derechos reservados © 2026 Historias de Café.

---

## 🙏 Agradecimientos

- **Generation Colombia** – Por la formación y oportunidad
- **Compañeros de bootcamp** – Por el apoyo y colaboración
- **Mentores y coaches** – Por la guía durante el desarrollo
- **Comunidad open source** – Por las herramientas y librerías utilizadas

---

**¡Gracias por visitarnos! ☕**

*Si encuentras bugs o tienes sugerencias, abre un issue en GitHub.*

*Último actualizado: Junio 2026*
*Versión: 1.0.0 (MVP)*
