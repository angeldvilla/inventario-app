# 📦 Sistema de Gestión de Inventario - E-commerce

Aplicación web para la gestión de inventario de productos en un entorno e-commerce. Permite visualizar productos, registrar movimientos de stock y consultar alertas cuando el inventario es bajo.

---

## 🚀 Tecnologías utilizadas

### Backend
- Node.js
- Express
- TypeScript

### Frontend
- Angular (Standalone Components)
- Reactive Forms
- HttpClient
- TailwindCSS

---

## 🧠 Arquitectura

Se implementó una arquitectura desacoplada cliente-servidor:

- **Frontend Angular** consume una API REST
- **Backend Express** gestiona lógica de negocio y datos

Se utilizaron principios de:
- SOLID
- Clean Code
- DRY

---

## ⚙️ Funcionalidades principales

### 📦 Productos
- Listado de productos con:
  - Nombre
  - Categoría
  - Stock actual
- Indicador visual cuando el stock está por debajo del mínimo

---

### 🔄 Movimientos de stock
- Registro de movimientos:
  - Entrada
  - Salida
  - Ajuste
- Validación de formulario (Reactive Forms)
- Actualización automática del inventario tras registrar un movimiento

---

### 🚨 Alertas
- Visualización de alertas cuando el stock está por debajo del mínimo

---

## 🔌 Consumo de API

El frontend consume los siguientes endpoints:

- `GET /api/productos`
- `POST /api/productos/:id/movimiento`
- `GET /api/alertas`

Se implementó un servicio centralizado (`InventarioService`) para el consumo HTTP.

---

## 🛠️ Instalación

### 1. Clonar repositorio

```bash
git clone <repo-url>
cd inventario
cd backend
npm install
npm run dev
http://localhost:3001
```


```bash
cd frontend
npm install
npm start
http://localhost:4200
```

El frontend utiliza un InjectionToken para definir la URL base de la API:

```bash
{ provide: API_URL, useValue: 'http://localhost:3001/api' }
```

# ⚠️ Manejo de errores
- Manejo de errores en frontend mediante estado (error)
- Manejo de errores en backend con middleware centralizado
- Validaciones en formularios para evitar entradas inválidas


# 🤖 Uso de IA

Se utilizó IA como asistente para:

- Estructuración de servicios HTTP
- Implementación de formularios reactivos
- Mejores prácticas en Angular

# 🎯 Decisiones técnicas
- Uso de Standalone Components para simplificar la arquitectura
- Eliminación de SSR por no ser requerido
- No uso de routing debido a una única vista principal
- Uso de TailwindCSS para una UI rápida y consistente

# 👨‍💻 Autor

Desarrollado por Angel Villa como prueba técnica.