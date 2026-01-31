# Análisis de Competencia y Propuestas de Mejora

## 1. Resumen de la Competencia

Hemos analizado las aplicaciones líderes en el mercado de numismática (CoinSnap, Maktun, PCGS, UCoin, Numista) para identificar los estándares de la industria y las funcionalidades más valoradas por los usuarios.

| Característica | CoinSnap | Maktun | PCGS CoinFacts | Tu App (Estado Actual) |
| :--- | :--- | :--- | :--- | :--- |
| **Identificación por IA** | ✅ (Principal) | ✅ | ❌ | ❌ (Manual) |
| **Valor de Mercado** | ✅ (Estimado) | ❌ | ✅ (Subastas Reales) | ❌ |
| **Gestión de Colección** | ✅ | ✅ (Offline) | ✅ (Registry Set) | ✅ (Muy Visual) |
| **Base de Datos** | Extensa | Mundial | Centrada en EEUU/Graduadas | Euro + Mundo (Manual) |
| **Datos Técnicos** | ✅ | ✅ | ✅ (Peso, Metal, Tirada) | ⚠️ (Parcial) |
| **Social/Intercambio** | ❌ | ❌ | ✅ (Foros/Ranking) | ❌ |

## 2. Diferenciadores Clave de Tu App

Tu aplicación destaca en:

- **Estética Visual Premium:** El diseño glassmorphism y la interfaz limpia superan a muchas apps utilitarias antiguas.
- **Enfoque Especializado:** Muy fuerte en Euros (Commemorativas/Normales) y especificidades regionales (Billetes II República, etc.).
- **Mapas Interactivos:** La visualización geográfica es un punto fuerte.

## 3. Propuestas de Mejora (Roadmap)

### A. Mejoras Prioritarias (High Impact)

1. **Sistema de Valoración y Precios**
    - **El Problema:** Los usuarios quieren saber "cuánto vale" su colección.
    - **Solución:** Añadir campos de `Precio de Compra` (gastado) vs `Valor Estimado`.
    - **Avanzado:** Conectar con alguna API de precios o permitir scraping de eBay/sold listings para dar estimaciones.

2. **Ampliación de Metadatos (Tiradas y Especificaciones)**
    - **El Problema:** `AndorraEmissionData.js` y `CommemorativeCatalog.js` tienen el estado (circulación/set) pero faltan datos técnicos.
    - **Solución:** Enriquecer la BBDD con:
        - **Tirada (Mintage):** ¿Cuántas se acuñaron? (Clave para la rareza).
        - **Composición:** (Oro, Plata, Níquel).
        - **Peso/Diámetro:** Datos técnicos estándar.

3. **Gestión de "Faltas" y "Repes" (Exchange)**
    - **El Problema:** Los coleccionistas *siempre* tienen repetidas para cambiar.
    - **Solución:** Crear una lista explícita de "Intercambio" (For Trade) y "Búsqueda" (Wishlist) separada de la colección principal. Generar un texto/PDF exportable para compartir en foros.

### B. Mejoras "Wow" (Innovación)

1. **Escaneo/Subida de Fotos Propias**
    - Permitir al usuario subir *su* foto real de la moneda para ver el estado de conservación, en lugar de solo marcar la casilla.

2. **Gamificación Visual**
    - Barra de progreso por país/año más detallada (ej. "Has completado el 80% de Alemania 2015").
    - Badges/Logros (ej. "Experto en Microestados" al completar Mónaco/Vaticano/San Marino).

3. **Modo "Álbum Físico"**
    - Una vista que imite visualmente las hojas de los álbumes Pardo/Leuchtturm tradicionales para los nostálgicos.

### C. Funcionalidades de Utilidad (Phase 2)

7. **Calendario de Emisiones (Release Calendar)**
    - **Idea:** Una vista de calendario que muestre cuándo salen las próximas monedas de 2€ conmemorativas.
    - **Valor:** Mantiene a los usuarios entrando a la app mensualmente.

2. **Exportación de Datos (PDF/Excel)**
    - **Idea:** Generar un reporte PDF bonito con la lista de monedas y su valoración total.
    - **Valor:** Fundamental para usuarios con grandes colecciones (seguros, herencias).

3. **Búsqueda Global Inteligente**
    - **Idea:** Un buscador que permita escribir "Quijote" o "Tratado de Roma" y encuentre la moneda independientemente del país o año.

4. **Soporte Multilenguaje (i18n)**
    - **Idea:** Traducir la interfaz a Inglés y Francés.
    - **Valor:** Imprescindible si quieres subirla a la Play Store y conseguir descargas fuera de España (el mercado europeo de monedas es enorme).

## 4. Conclusión

Tu app ya es visualmente superior a muchas "bases de datos" aburridas. El siguiente gran paso para ponerla al nivel de las mejores es **la profundidad de los datos** (precios, tiradas) y **funcionalidades sociales/comerciales** (gestionar repetidas).
