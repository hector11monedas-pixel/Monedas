# Plan de Implementación: Expansión de Datos y Funcionalidades

## Objetivo

Mejorar la aplicación de Numismática para competir con las mejores del mercado añadiendo tres pilares fundamentales: **Valoración Económica**, **Datos Técnicos** y **Gestión de Intercambios**.

## Cambios Propuestos

### Fase 1: Esquema de Datos (Cimientos)

#### [MODIFICAR] CoinContext.jsx

* **Actualizar estructura de `items`**: Asegurar soporte para nuevos campos al guardar:
  * `purchasePrice` (Precio de Compra): Coste de adquisición.
  * `estimatedValue` (Valor Estimado): Valor actual de mercado.
  * `condition` (Conservación): Estado (SC, EBC, MBC, etc.).
  * `notes` (Notas): Notas personales.
  * `status`: 'Colección', 'Repetida', 'Búsqueda'.
* **Nuevo Estado**: `duplicates` (lista derivada o separada) para gestión de intercambios.

### Fase 2: Interfaz de Usuario (UI/UX) - Entrada de Datos

#### [MODIFICAR] ItemForm.jsx

* **Añadir Campos**: Entradas para Precio, Valor y Conservación.
* **Checkbox**: "Añadir a Repetidas/Intercambio".

#### [MODIFICAR] Vistas de País (Euro y Conmemorativas)

* **Indicadores Visuales**: Iconos/colores diferentes si se posee vs repetida.
* **Interacción**: Menú contextual o pulsación larga para "Mover a Lista de Intercambio".

### Fase 3: Datos Técnicos (Datos Estáticos)

#### [MODIFICAR] EuroData.js (o nueva utilidad)

* Crear función de búsqueda para especificaciones del Euro estándar (Peso, Diámetro, Composición) basado en la denominación (1ct a 2€).
* *Nota*: Esto automatiza los datos técnicos para monedas estándar sin entrada manual.

### Fase 4: Analítica y Vista de Intercambio

#### [MODIFICAR] Statistics.jsx

* **Nuevas Métricas**:
  * Inversión Total (Suma de Precio de Compra).
  * Valor Estimado de Cartera.
  * Revalorización (Valor - Coste).

#### [NUEVO] TradeList.jsx

* Una nueva página para ver solo los artículos "Repetidos".
* "Exportar como Texto": Botón para copiar la lista y compartirla en foros/WhatsApp.

## Plan de Verificación

### Verificación Manual

1. **Añadir Moneda**: Verificar flujos para añadir una moneda con Precio/Valor.
2. **Estadísticas**: Comprobar si el widget de "Valor Total" se actualiza correctamente.
3. **Lista de Intercambio**: Prueba específica de marcar una moneda como "Repetida" y asegurar que aparece en la nueva sección de Intercambio pero no desordena el conteo principal de "Colección" (o cuenta como extra).
