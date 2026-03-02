# Plan Integral de Mejoras y Optimización - NumisApp v5.0

Este documento detalla la estrategia para llevar la aplicación al siguiente nivel, enfocándose en rendimiento, mantenibilidad y experiencia de usuario.

## 1. Rendimiento y Carga (Prioridad Alta) 🚀

El objetivo es reducir el tiempo de carga inicial y mejorar la fluidez en dispositivos móviles.

### 1.1. Code Splitting & Lazy Loading

- **Problema Actual**: El *bundle* principal es muy grande (>700kB), cargando todas las rutas y datos de golpe.
- **Acción**:
  - Implementar `React.lazy` y `Suspense` para todas las rutas principales (`EuroCountryView`, `CommemorativeYearView`, `World`).
  - Separar los archivos de datos grandes (`SpainCoinsData.js`, etc.) en *chunks* dinámicos que solo se carguen cuando se visitan esas secciones.

### 1.2. Virtualización de Listas

- **Problema Actual**: Renderizar cientos de monedas en `CoinGridView` o `EuroMatrix` consume mucha memoria y ralentiza el scroll.
- **Acción**:
  - Usar `react-window` o `react-virtuoso` para renderizar solo los elementos visibles en pantalla.
  - Crucial para las vistas de "Todas las Conmemorativas" o "Mundo".

### 1.3. Optimización de Imágenes

- **Problema Actual**: Carga de imágenes directas desde URLs externas sin optimización de tamaño/formato.
- **Acción**:
  - Implementar un *Service Worker* para cacheo agresivo de imágenes.
  - Evaluar uso de servicio de proxy/CDN para redimensionar imágenes al vuelo (WebP).

## 2. Arquitectura y Código (Mantenibilidad) 🛠️

Preparar el código para escalar y evitar bugs recurrentes (como el de `editId`).

### 2.1. Refactorización de `CoinContext`

- **Problema Actual**: El contexto maneja demasiadas responsabilidades (carga, filtrado, CRUD, auth) y provoca re-renders masivos.
- **Acción**:
  - Dividir en contextos más pequeños: `AuthContext`, `CoinDataContext`, `UIContext`.
  - Usar `useReducer` para lógica de estado compleja.
  - Implementar React Query (TanStack Query) para el manejo de estado del servidor (caching, revalidación, *optimistic updates*). Esto eliminaría gran parte de la complejidad manual de `useEffect`.

### 2.2. TypeScript (Migración Gradual)

- **Problema Actual**: Errores de tipo en tiempo de ejecución (como string vs number).
- **Acción**: Introducir TypeScript progresivamente, empezando por las interfaces de datos (`Coin`, `User`) y componentes comunes (`ItemForm`).

### 2.3. Unificación de Lógica de Negocio

- **Problema Actual**: Lógica repetida en varias vistas (cálculo de progreso, filtrado de cecas).
- **Acción**: Extraer "Selectores" o "Hooks" específicos (`useCoinStats`, `useCoinFilter`).

## 3. Experiencia de Usuario (UX) ✨

Hacer que la app se sienta "Premium" y nativa.

### 3.1. Feedback Visual y *Optimistic UI*

- **Mejora**: Al guardar/borrar, reflejar el cambio instantáneamente en la UI sin esperar a Firebase (con reversión si falla).
- **Mejora**: Micro-animaciones al marcar monedas (check verde animado, confeti al completar serie).

### 3.2. Modo Offline (PWA Real)

- **Mejora**: Permitir consulta (y edición básica) sin conexión, sincronizando cambios al volver online.
- **Acción**: Configurar Workbox correctamente en Vite PWA.

### 3.3. Buscador Global Potente

- **Mejora**: Una barra de búsqueda siempre accesible (CTRL+K) para saltar rápido a cualquier país, año o moneda específica.

## 4. Nuevas Funcionalidades 🌟

### 4.1. Estadísticas Avanzadas (Dashboards)

- Gráficos de evolución del valor de la colección en el tiempo.
- Mapas de calor (Heatmaps) de completitud por Europa/Mundo.
- "Top 10 Joyas de la Corona" (monedas más valiosas).

### 4.2. Funciones Sociales

- **Compartir Perfil**: Generar una URL pública (solo lectura) para enseñar tu colección a amigos.
- **Ranking**: (Opcional) Ver posición respecto a otros usuarios (anónimo).

### 4.3. Gestión de Inventario Masivo

- Importación/Exportación CSV/Excel robusta.
- Edición en lote (seleccionar varias monedas -> "Marcar como EBC").

## Hoja de Ruta Sugerida (Próximos Pasos)

1. **Fase 1 (Inmediata)**: Implementar Lazy Loading de rutas y separar datos pesados (Mejora tiempos de carga).
2. **Fase 2**: Refactorizar `CoinContext` / Introducir React Query (Estabilidad).
3. **Fase 3**: Virtualización y mejoras visuales (Fluidez).
4. **Fase 4**: Nuevas funcionalidades (Estadísticas, Social).
