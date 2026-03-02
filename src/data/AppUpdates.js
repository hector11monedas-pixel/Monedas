export const APP_UPDATES = [
    {
        id: -143,
        version: "4.7.3",
        date: "26/02/2026",
        title: "Versión 4.7.3 - Formulario Ultra-Compacto 📝",
        description: "Optimización extrema del espacio en el formulario de añadir moneda.",
        changes: [
            "📏 Reducción de Márgenes: Rediseño del CSS para las modales y el formulario interno, ahorrando valioso espacio vertical.",
            "📱 Sin Scroll en Móviles: El formulario ahora intenta encajar completamente en la pantalla de un móvil moderno sin necesidad de desplazar la ventana.",
            "👁️ Interfaz Limpia: Ajuste de paddings y gaps más ajustados para una visualización más profesional y densa de los datos."
        ]
    },
    {
        id: -142,
        version: "4.7.2",
        date: "25/02/2026",
        title: "Versión 4.7.2 - Variantes Conmemorativas 🔧",
        description: "Nueva opción para controlar la visibilidad de variantes en monedas conmemorativas.",
        changes: [
            "✨ Variantes Conmemorativas: Añadida opción en ajustes para incluir o excluir variantes (color, errores de canto) del catálogo.",
            "📊 Estadísticas Dinámicas: El tamaño total del catálogo se ajusta automáticamente según tu preferencia de variantes.",
            "📑 Vista Filtrada: Las vistas de países conmemorativos ahora ocultan las variantes si la opción está desactivada.",
            "⚙️ Euro Group: Organización compacta de los ajustes de Euro en una nueva sección desplegable."
        ]
    },
    {
        id: -141,
        version: "4.7.1",
        date: "25/02/2026",
        title: "Versión 4.7.1 - Organización de Ajustes ⚙️",
        description: "Mejora en la organización del menú de ajustes con agrupaciones lógicas.",
        changes: [
            "🇪🇺 Grupo Euro: Las preferencias de catálogo específicas de Euro ahora están agrupadas en una sección desplegable dedicada.",
            "📑 Interfaz Limpia: Reducción del ruido visual en el modal de ajustes para una mejor usabilidad.",
            "✨ Micro-interacciones: Añadidos efectos de hover y transiciones suaves al navegar por las secciones de configuración."
        ]
    },
    {
        id: -140,
        version: "4.7.0",
        date: "25/02/2026",
        title: "Versión 4.7.0 - Rediseño de Navegación y Dashboard 🎨",
        description: "Gran optimización de la interfaz con nueva barra superior, dashboard ultra-compacto y navegación inteligente.",
        changes: [
            "🍔 Top Navbar: Integrada nueva barra superior con logo y botón de menú persistente para una mejor navegación.",
            "📊 Dashboard Streamlined: Eliminada la sección Hero para ganar espacio, integrando el gráfico de progreso directamente en el widget de Colección.",
            "📑 Sidebar Inteligente: Los controles de Usuario y Ajustes se han movido a la parte superior para ser visibles de inmediato.",
            "📱 Optimización Mobile: Corregidos solapamientos de botones y mejorada la ergonomía del menú lateral en pantallas pequeñas.",
            "✨ Estética Premium: Refinado de sombras, desenfoques y transiciones en toda la interfaz principal."
        ]
    },
    {
        id: -139,
        version: "4.6.0",
        date: "23/02/2026",
        title: "Versión 4.6.0 - Catálogo del Vaticano 🇻🇦",
        description: "Integración masiva de las 5 series del Vaticano (2002-Presente) con fotos locales y precios de mercado exhaustivos.",
        changes: [
            "🇻🇦 Serie I a V: Incorporación completa de las series de Juan Pablo II, Sede Vacante, Benedicto XVI, Francisco I y Escudo.",
            "🖼️ Fotos Locales: Migración total a imágenes locales para garantizar la carga rápida y offline de las piezas del Vaticano.",
            "💰 Precios Francisco: Actualización completa de precios SC para las series de Francisco (2014-2018) según mercado actual.",
            "⚖️ Lógica de Emisión: Ajuste preciso de tiradas para marcar los 50 céntimos (2010+) como circulación y el resto como emisiones para coleccionistas (Set-only).",
            "🧹 Optimización: Limpieza de claves duplicadas y mejora en el rendimiento del catálogo de precios generales."
        ]
    },
    {
        id: -138,
        version: "4.5.5",
        date: "19/02/2026",
        title: "Versión 4.5.5 - Mejora en Dashboard 📊",
        description: "Separación del contador de Deseos del total de la colección y mejoras en el layout de widgets.",
        changes: [
            "❤️ Deseos Independiente: Nueva sección exclusiva para la Lista de Deseos con su propio contador.",
            "📊 Total Colección: El contador principal ahora se centra exclusivamente en las piezas conseguidas vs total del catálogo.",
            "📱 Reordenación Móvil: El acceso a 'Deseos' se ha posicionado encima de 'Repetidas' para una mejor ergonomía."
        ]
    },
    {
        id: -137,
        version: "4.5.4",
        date: "19/02/2026",
        title: "Versión 4.5.4 - Restauración Bélgica 🇧🇪",
        description: "Restauración completa de las imágenes nacionales de Bélgica para todas las series.",
        changes: [
            "🖼️ Serie 4 Restaurada: Recuperadas las imágenes del Rey Felipe (2014-Presente) utilizando los activos locales originales.",
            "📸 Series 1-3: Mantenimiento de las nuevas fotografías reales de alta calidad para los periodos de Alberto II.",
            "🛠️ Fix Estabilidad: Corregidos los enlaces rotos en el banner de series de EuroSeriesData."
        ]
    },
    {
        id: -136,
        version: "4.5.3",
        date: "18/02/2026",
        title: "Versión 4.5.3 - Hotfix Selección Plata 🛠️",
        description: "Corrección crítica para la selección y visualización de monedas de colección de España.",
        changes: [
            "🔄 Normalización Automática: El formulario ahora detecta y corrige automáticamente los valores '12', '20', '30', '40' añadiendo el símbolo '€' para desbloquear la edición.",
            "🐛 Fix Precios: Restaurada la visualización de precios MBC/EBC/SC que no aparecían si el valor no tenía el formato exacto."
        ]
    },
    {
        id: -135,
        version: "4.5.2",
        date: "18/02/2026",
        title: "Versión 4.5.2 - Correcciones Plata España (II) 🥈",
        description: "Solucionado el problema que impedía seleccionar monedas de 20€ y 40€, e integración total de precios de mercado.",
        changes: [
            "🐞 Fix Selección: Añadidas las opciones faltantes de 20€ y 40€ al formulario de añadir moneda.",
            "💰 Precios Inteligentes: Ahora el formulario busca el precio exacto (MBC/EBC/SC) en el catálogo de colección en lugar de ofrecer una estimación genérica.",
            "🏷️ Auto-Formato: Corrección automática del formato de valor (ej. '20' -> '20 €') para garantizar la consistencia de los datos."
        ]
    },
    {
        id: -134,
        version: "4.5.1",
        date: "18/02/2026",
        title: "Versión 4.5.1 - Correcciones Plata España 🥈",
        description: "Ajustes de catálogo y precios para las monedas de colección de 12€, 20€, 30€ y 40€.",
        changes: [
            "🏷️ 2004 Desglosado: Separadas las dos emisiones de 12€ (Isabel la Católica y Boda Real) que antes compartían ficha.",
            "📅 Corrección 2017-2018: Ajustados los nombres y años de las monedas de 30€ (Tratado UE y Felipe VI).",
            "💰 Actualización de Precios: Nuevas valoraciones de mercado para todas las series de plata, eliminando emisiones no oficiales (Lotería)."
        ]
    },
    {
        id: -133,
        version: "4.5.0",
        date: "17/02/2026",
        title: "Versión 4.5.0 - Análisis y Seguridad 📊",
        description: "Gran actualización con sistema de Copias de Seguridad, Mapa Interactivo mejorado y Estadísticas Financieras avanzadas.",
        changes: [
            "💾 Copias de Seguridad: Exporta e importa tu colección completa (incluyendo ajustes) en formato JSON.",
            "🌍 Mapa Pro: Nuevos filtros por Año y Valor, con controles de Zoom y tooltips detallados.",
            "📈 Estadísticas Financieras: Gráficos de Evolución de Valor, Top 10 Joyas y desglose por valor facial vs cantidad.",
            "✨ Interfaz: Pequeños ajustes visuales en los selectores y gráficos."
        ]
    },
    {
        id: -132,
        version: "4.4.0",
        date: "17/02/2026",
        title: "Versión 4.4.0 - Monedas de Colección (Plata) 🥈",
        description: "Nueva sección dedicada para las monedas de 12€, 20€, 30€ y 40€ de España.",
        changes: [
            "🇪🇸 Sección Exclusiva: Las monedas de plata de España ahora tienen su propia pestaña '12€ - 40€ (Plata)' separada de las conmemorativas de 2€.",
            "🖼️ Visualización Premium: Diseño distintivo para las monedas de colección con degradados plateados.",
            "💰 Valor Facial Correcto: Al añadir estas monedas, el sistema reconoce automáticamente su valor facial (12, 20, 30, 40 euros).",
            "📊 Estadísticas Independientes: Los contadores ahora separan el progreso de las monedas de circulación del de las piezas de colección."
        ]
    },
    {
        id: -131,
        version: "4.3.2",
        date: "17/02/2026",
        title: "Versión 4.3.2 - Mejoras UX ⚡",
        description: "Pequeñas mejoras de usabilidad en el formulario de gestión.",
        changes: [
            "✨ Estado por Defecto: Al añadir una nueva moneda, el estado se marca automáticamente como 'SC / UNC'.",
            "🚀 Cálculo Inmediato: El precio estimado se calcula al instante al abrir el formulario si los datos ya están rellenos.",
            "🐞 Fix Conmemorativas: Corregida la actualización de precio al marcar el check de conmemorativa."
        ]
    },
    {
        id: -130,
        version: "4.3.1",
        date: "17/02/2026",
        title: "Versión 4.3.1 - Datos España Euro 🇪🇸",
        description: "Actualización masiva de precios y tiradas para todas las monedas Euro de España (1999-2026).",
        changes: [
            "📊 Precios Reales: Sincronizados los valores de mercado con catalogodemonedas.es para 1c-50c y 1€.",
            "💎 2 Euros: Ajustes precisos en las tiradas y precios de las monedas de 2€ regulares y conmemorativas.",
            "🛠️ Fix Estimación: El formulario ahora sugiere automáticamente el precio de catálogo correcto en lugar del facial."
        ]
    },
    {
        id: -129,
        version: "4.3.0",
        date: "17/02/2026",
        title: "Versión 4.3.0 - Catálogo Histórico (S. XIX) 🏛️",
        description: "Incorporación completa de los reinados de Alfonso XII y Alfonso XIII.",
        changes: [
            "👑 Alfonso XIII (1886-1931): Catálogo completo con todas las variantes de ensayadores (PG M, SG V, etc.) y monedas de Puerto Rico y Filipinas.",
            "🎩 Alfonso XII (1874-1885): Integración total de precios y variantes, incluyendo las raras emisiones de Manila.",
            "💎 Variantes Exclusivas: Desglose detallado de variantes como 'Rizos' vs 'Palo Recto' en 5 Pesetas.",
            "📊 Precios de Mercado: Valoraciones actualizadas para más de 50 nuevas referencias históricas."
        ]
    },
    {
        id: -128,
        version: "4.2.9",
        date: "17/02/2026",
        title: "Versión 4.2.9 - Correcciones Juan Carlos I 🛠️",
        description: "Ajustes de precisión en el catálogo de Pesetas.",
        changes: [
            "🐞 Fix 500 Pesetas: Solucionado el error que duplicaba los modelos de 1987-1990 en la vista móvil.",
            "📅 5 Pesetas (80s): Corregida la lógica de emisión para los años 1985-1988 (No emitidos para circulación).",
            "✨ Estabilidad: Mejoras generales en el filtrado de monedas por año."
        ]
    },
    {
        id: -127,
        version: "4.2.8",
        date: "16/02/2026",
        title: "Versión 4.2.8 - Auditoría Juan Carlos I 👑",
        description: "Actualización completa del catálogo de Juan Carlos I (1975-2001).",
        changes: [
            "💰 Precios Detallados: Añadidos valores MBC/EBC/SC para las Series 1, 2, 3 y 4.",
            "🥈 2000 Pesetas Plata: Refinados los precios y detalles de la serie conmemorativa de plata (1994-2001).",
            "🧹 Limpieza de Etiquetas: Unificados los nombres y etiquetas de las denominaciones para mayor claridad.",
            "🇪🇸 Serie Mundial 82: Actualizadas las valoraciones de las estrellas de la serie de 1980."
        ]
    },
    {
        id: -126,
        version: "4.2.7",
        date: "16/02/2026",
        title: "Versión 4.2.7 - Auditoría II República 📜",
        description: "Actualización completa del catálogo de la Segunda República Española.",
        changes: [
            "💰 Precios MBC/EBC/SC: Añadidos valores detallados para todas las denominaciones de 1931-1939.",
            "🧹 Limpieza de Catálogo: Simplificadas las etiquetas y nombres de las monedas republicanas.",
            "🎯 Precisión Histórica: Ajustada la valoración de piezas raras como los 10 céntimos de 1938."
        ]
    },
    {
        id: -125,
        version: "4.2.6",
        date: "16/02/2026",
        title: "Versión 4.2.6 - Corrección de Compatibilidad 🔄",
        description: "Restauración de la Peseta de 1946 y optimización de la lógica de catálogo.",
        changes: [
            "🛠️ Restauración 1 Pta 1946: Revertido el cambio de ID para asegurar la compatibilidad con las colecciones existentes.",
            "🖼️ Variantes Visuales: La pieza de 1946 mantiene su foto específica en la vista de variantes sin interferir con la de 1947.",
            "📦 Estructura Unificada: Simplificado el catálogo de Franco para evitar entradas duplicadas de un mismo valor."
        ]
    },
    {
        id: -124,
        version: "4.2.5",
        date: "16/02/2026",
        title: "Versión 4.2.5 - Fotos y Rarezas 📸",
        description: "Diferenciación visual de piezas clave y ajustes de catálogo.",
        changes: [
            "🖼️ Foto 1 Peseta 1946: Separada de la de 1947 para que cada una tenga su propia representación visual.",
            "📑 Desglose de Modelos: Creada nueva entrada específica para la peseta de 1946 (Benlliure) en el catálogo de Franco.",
            "⚙️ Lógica Mejorada: Refinado el motor de estatus para manejar múltiples denominaciones de un mismo valor en el mismo año."
        ]
    },
    {
        id: -123,
        version: "4.2.4",
        date: "16/02/2026",
        title: "Versión 4.2.4 - Depuración de Catálogo 📦",
        description: "Eliminación de piezas duplicadas y ajustes finales de emisiones.",
        changes: [
            "🗑️ Peseta 1948: Eliminada la denominación '1 Peseta 1948' del catálogo de Franco siguiendo requerimientos del usuario.",
            "📑 Limpieza de Variantes: Borradas las variantes de reverso de la peseta de 1948.",
            "📉 Ajuste de Contadores: Actualizados los totales de emisión para reflejar la eliminación de la pieza de 1948."
        ]
    },
    {
        id: -122,
        version: "4.2.3",
        date: "16/02/2026",
        title: "Versión 4.2.3 - Robustez Histórica 🛡️",
        description: "Corrección de interferencias entre periodos y restauración de piezas míticas.",
        changes: [
            "🧱 Enrutado por ID: Reestructurado el sistema de estatus para que cada moneda siga sus reglas históricas sin interferir con otros periodos.",
            "🪙 25 Céntimos Franco: Restaurada la visibilidad de la pieza de 1937 en la vista de tabla, eliminando bloqueos de la II República.",
            "🧹 Limpieza de 1937: Corregida la 'fuga' de años que hacía que monedas de diferentes eras se mezclaran en las vistas de Franco."
        ]
    },
    {
        id: -121,
        version: "4.2.2",
        date: "16/02/2026",
        title: "Versión 4.2.2 - Fix de Contadores Locales 🧮",
        description: "Corrección de la lógica de progreso para las emisiones locales de la Guerra Civil.",
        changes: [
            "🎯 Contadores Precisos: Solucionado el error que impedía mostrar el progreso (ej: 0/5) en Menorca, Ibi y otros consejos locales.",
            "📐 Herencia de Años: Los sub-periodos ahora heredan correctamente el rango de años de su periodo padre si no tienen uno propio.",
            "📈 Sincronización: Asegurada la actualización del contador global al añadir monedas desde la vista de cuadrícula local."
        ]
    },
    {
        id: -120,
        version: "4.2.1",
        date: "16/02/2026",
        title: "Versión 4.2.1 - Perfeccionamiento II República 🏛️",
        description: "Ajustes precisos de variantes, precios y lógica de emisión para España.",
        changes: [
            "💎 Variantes Desglosadas: Mejorada la visibilidad de las 6 variantes de 50 céntimos de 1937 en la matrix, con precios de catálogo exactos (35€-70€).",
            "🧠 Selección Inteligente: El formulario ahora filtra automáticamente los años de emisión válidos según la moneda seleccionada.",
            "🏷️ Nomenclatura Céntimos: Los valores inferiores a 1 Peseta ahora se muestran correctamente como 'Céntimos' en toda la interfaz.",
            "⚖️ Valoración SC/UNC: Unificada la lógica de tasación para estados de conservación máximos."
        ]
    },
    {
        id: -119,
        version: "4.2.0",
        date: "16/02/2026",
        title: "Versión 4.2.0 - Rejilla Inteligente ✨",
        description: "Mejoras mayores en la visualización de colecciones mundiales.",
        changes: [
            "📑 Agrupación por Valor: Las monedas ahora se organizan por secciones según su valor nominal, facilitando la navegación.",
            "🖼️ Layout Mejorado: Encabezados premium con líneas de gradiente y símbolos de moneda dinámicos.",
            "📊 Progreso Visual: Refinado el diseño de las barras de progreso en la vista de rejilla."
        ]
    },
    {
        id: -118,
        version: "4.1.2",
        date: "16/02/2026",
        title: "Versión 4.1.2 - Hotfix de Contadores 🚀",
        description: "Corrección urgente de la visualización de totales en series mundiales.",
        changes: [
            "🐞 Fix JCI 27: Corregido el error que mostraba un total de 27 años para todas las piezas de Juan Carlos I.",
            "📦 Data Context: Asegurada la propagación de datos globales en las vistas de periodo y denominación.",
            "🔧 Estabilidad+: Mejorada la robustez de las utilidades de conteo para evitar fallbacks incorrectos."
        ]
    },
    {
        id: -117,
        version: "4.1.0",
        date: "16/02/2026",
        title: "Versión 4.1.0 - Contadores Inteligentes 📊",
        description: "Mejora global de la lógica de estadísticas y seguimiento de la colección.",
        changes: [
            "🎯 Conteo Único: El progreso de la colección ahora se basa en 'Holes' (huecos) únicos. Tener monedas duplicadas ya no falsea el porcentaje de completado.",
            "📐 Catálogo España+: Corregida la suma total del catálogo de España para incluir todas las variantes y estrellas de Franco y JCI.",
            "📈 Rankings Precisos: Las estadísticas por país ahora reflejan el completado real de la serie sin sobreconteo por duplicados.",
            "🛠️ Fix de Guerra Civil: Asegurada la inclusión de las emisiones locales en los totales globales."
        ]
    },
    {
        id: -116,
        version: "4.0.0",
        date: "16/02/2026",
        title: "Versión 4.0.0 - Catálogo de España Completo 💎",
        description: "Hito alcanzado: Todas las monedas de España (1931-2001) tienen ahora valoraciones de mercado integradas.",
        changes: [
            "📑 Auditoría Total: Completados los precios faltantes en las series de Franco (1947-1975) y Juan Carlos I (Series 4).",
            "📊 Precios Base: Implementados valores estimados SC (Sin Circular) para piezas comunes, evitando sugerencias de 0€.",
            "🏛️ República: Revisión final de la serie 1931-1939 con valores actualizados para plata y metales base.",
            "🚀 Major Release: Esta versión consolida todo el trabajo de valoración de moneda española en un motor de precios unificado y robusto."
        ]
    },
    {
        id: -115,
        version: "3.9.9",
        date: "16/02/2026",
        title: "Versión 3.9.9 - Detección Inteligente de Divisas 🛡️",
        description: "Mejorada la robustez del sistema de valoración para evitar errores de entrada.",
        changes: [
            "🧠 Detección Automática: El sistema ahora detecta automáticamente si una moneda es pre-Euro (Pesetas) basándose en el año y país, incluso si el usuario olvida cambiarlo.",
            "🛡️ Blindaje Global: Aplicada lógica de seguridad en el motor de precios para normalizar valores nominales altos.",
            "🔄 Formulario Reactivo: La divisa se actualiza instantáneamente al cambiar el año o el país en el formulario de edición."
        ]
    },
    {
        id: -114,
        version: "3.9.8",
        date: "16/02/2026",
        title: "Versión 3.9.8 - Corrección de Divisas 🇪🇸",
        description: "Solucionado el error de valoración en las piezas de valor nominal alto.",
        changes: [
            "🐞 Corrección 500 Ptas: Solucionado el error que sugería 500€ de valor estimado. Ahora el sistema distingue entre Pesetas y Euros correctamente.",
            "💱 Conversor: Implementada la tasa de cambio oficial de la Peseta (166.386 pts/€) en el motor de valoración.",
            "🛠️ Datos: Limpieza de años no emitidos en la serie de 500 Pesetas (1991, 1992)."
        ]
    },
    {
        id: -113,
        version: "3.9.7",
        date: "16/02/2026",
        title: "Versión 3.9.7 - Finalización Catálogo Juan Carlos I 🇪🇸",
        description: "Actualización final de precios para la era de la Peseta (JCI).",
        changes: [
            "💎 2000 Pesetas: Implementados los precios refinados para toda la serie de plata (1994-2001), diferenciando entre estado MBC (valor plata/cartera) y SC (numismático).",
            "🛡️ Integridad: Verificado el catálogo de 500 Pesetas descartando emisiones inexistentes.",
            "✅ Juan Carlos I: Catálogo de precios 100% completado."
        ]
    },
    {
        id: -112,
        version: "3.9.6",
        date: "16/02/2026",
        title: "Versión 3.9.6 - Actualización Catálogo España (25 Ptas Hoyo) 🇪🇸",
        description: "Actualización de precios para la serie de 25 Pesetas de Juan Carlos I.",
        changes: [
            "📈 25 Pesetas: Implementados los precios específicos para toda la serie conmemorativa de 'Comunidades Autonómicas' (1990-2001).",
            "💎 Variedades: Actualizado el precio de la rara variante de 1995 Castilla y León sin la letra 'Y'."
        ]
    },
    {
        id: -111,
        version: "3.9.5",
        date: "16/02/2026",
        title: "Versión 3.9.5 - Actualización Catálogo España (200 Ptas) 🇪🇸",
        description: "Actualización de precios para las series de 200 Pesetas de Juan Carlos I.",
        changes: [
            "📈 200 Pesetas: Implementados los precios específicos para las series de 1986-1989 y la serie de 'Capitales' (1990-2000).",
            "✨ Datos: Refinado el catálogo de variantes para incluir precios en todas las emisiones de 200 Ptas."
        ]
    },
    {
        id: -110,
        version: "3.9.4",
        date: "16/02/2026",
        title: "Versión 3.9.4 - Actualización Catálogo España (100 Ptas) 🇪🇸",
        description: "Actualización de precios para las series de 100 Pesetas de Juan Carlos I.",
        changes: [
            "📈 100 Pesetas: Implementados los precios específicos para las series 3 ('Chocolate') y serie 4 ('Bronce').",
            "✨ Refinamiento: Mejora en la visualización de precios en el catálogo de variantes."
        ]
    },
    {
        id: -109,
        version: "3.9.3",
        date: "16/02/2026",
        title: "Versión 3.9.3 - Actualización Catálogo España (50 Ptas) 🇪🇸",
        description: "Actualización de precios para la serie de 50 Pesetas de Juan Carlos I.",
        changes: [
            "📈 50 Pesetas: Implementados los precios específicos para todas las variantes de la serie 'Flor' (1990-2000).",
            "🛠️ Estabilidad: Pequeños ajustes en el motor de sugerencias automático."
        ]
    },
    {
        id: -108,
        version: "3.9.2",
        date: "16/02/2026",
        title: "Versión 3.9.2 - Actualización Catálogo España 🇪🇸",
        description: "Actualización de precios para la serie de 10 Pesetas de Juan Carlos I.",
        changes: [
            "📈 10 Pesetas: Implementados los precios específicos para las series de 1983, 1984, 1985 y toda la serie de 'Personajes' (1992-2000).",
            "🔧 Sugerencias: Refinada la aparición de precios sugeridos al seleccionar variantes de diseño en el formulario."
        ]
    },
    {
        id: -107,
        version: "3.9.1",
        date: "15/02/2026",
        title: "Versión 3.9.1 - Bug Fix: Tasación España 🛠️",
        description: "Corrección crítica en el motor de valoraciones para las series de España y optimización de sugerencias de precio.",
        changes: [
            "🇪🇸 Catálogo España: Integrado el sistema de búsqueda para monedas de Peseta, Franco y República.",
            "⚖️ Fix Doble Factor: Corregido el error que aplicaba dos veces la reducción por estado de conservación.",
            "💎 Variantes: Mejora en la detección de precios específicos para variantes de estrellas y emisiones locales.",
            "📝 Sugerencias en Formulario: El formulario de añadir moneda ahora utiliza el motor centralizado para sugerir precios más precisos.",
            "🚀 Estabilidad: Corregidos errores de carga en la vista de valoraciones globales."
        ]
    },
    {
        id: -106,
        version: "3.9.0",
        date: "15/02/2026",
        title: "Versión 3.9.0 - Tasación de Mercado y Lógica de Calidad 💎",
        description: "Actualización masiva de precios según mercado actual y transparencia en el sistema de valoración por estado de conservación.",
        changes: [
            "📈 Mercado Actual: Precios sincronizados para piezas clave de Mónaco, Vaticano, España (Olot, República) y Chequia.",
            "⚖️ Algoritmo de Calidad: Implementado sistema de multiplicadores según el estado (Proof, UNC, EBC, MBC, BC, RC).",
            "🛡️ Suelo de Valor: Garantía de que ninguna estimación sea inferior al valor facial de la moneda.",
            "🌍 República Checa: Revalorización de la moneda de 50 Korun (2005) por su baja tirada.",
            "🏛️ Ajuste Premium: Normalización de valores para piezas de alta gama como las 2000 Ptas de plata y emisiones de Franco."
        ]
    },
    {
        id: -105,
        version: "3.8.1",
        date: "14/02/2026",
        title: "Versión 3.8.1 - Refinado Pesetas (Juan Carlos I) 🏗️",
        description: "Actualización masiva de precios y variantes para las series de 100, 200, 500 y 2000 Pesetas.",
        changes: [
            "👑 100 Pesetas: Precios actualizados para la Serie 1982 y conmemorativas de Bronce (1992-2001).",
            "🏺 200 Pesetas: Integradas variantes de 1992 (Equitación/Oso) y refinado de precios 1986-2000.",
            "📜 500 Pesetas: Revisión completa de precios Modelo 1 (87-90) y Modelo 2 (93-01).",
            "🥈 2000 Pesetas: Sincronización de valores para todas las emisiones de plata (1994-2001).",
            "📅 Rigor Histórico: Ajustado el fin de periodo de Juan Carlos I a 2001."
        ]
    },
    {
        id: -104,
        version: "3.8.0",
        date: "13/02/2026",
        title: "Versión 3.8.0 - Gran Integración Era Franco 🇪🇸",
        description: "Incorporación completa de la serie del Estado Español (Franco) desde 5 cts hasta 100 ptas, con sistemas de variantes de alta resolución.",
        changes: [
            "🦅 Serie Completa Franco: Añadidas todas las denominaciones (5c, 10c, 50c, 1pta, 2.50ptas, 5ptas, 25ptas, 50ptas, 100ptas) con sus variantes de estrellas.",
            "💎 Joyas Numismáticas: Integración de piezas ultra-raras como las 5 Pesetas de 1949 (*51, *52) y variantes 'Palo Recto / Canto'.",
            "✨ Resaltado Amarilla (Set-only): Nuevo sistema visual de celdas en amarillo para variantes emitidas exclusivamente en carteras o pruebas.",
            "📐 Desglose de Modelos: La moneda de 1 Peseta y 5 Pesetas ahora se dividen en diferentes tarjetas según su diseño histórico (1944, 1947, 1948, 1949, 1957).",
            "📈 Tasación Profesional: Actualizados más de 100 precios de variantes según mercado actual para estados MBC/EBC."
        ]
    },
    {
        id: -103,
        version: "3.7.2",
        date: "13/02/2026",
        title: "Versión 3.7.2 - Diseño Unificado Guerra Civil 🛡️",
        description: "Extensión del diseño centrado y uniforme a las sub-secciones de la Guerra Civil.",
        changes: [
            "🏛️ Consistencia Local: Las 15 secciones de emisiones locales (Asturias, Euzkadi, etc.) ahora usan el mismo diseño de tarjetas centradas.",
            "📐 Grid Profesional: Ajuste del espaciado y cuadrícula en las vistas de sub-periodos para una navegación más limpia.",
            "📲 UI Coherente: Marcado, contadores y títulos ahora siguen un patrón visual único en toda la sección de España."
        ]
    },
    {
        id: -102,
        version: "3.7.1",
        date: "13/02/2026",
        title: "Versión 3.7.1 - Refinado Visual Móvil 📱",
        description: "Ajustes de diseño para una experiencia perfecta en dispositivos móviles.",
        changes: [
            "🎯 Centrado Inteligente: Las tarjetas de periodos (España) ahora presentan el texto y años perfectamente centrados.",
            "📐 Tamaño Uniforme: Estabilizadas las dimensiones de las tarjetas en vistas de cuadrícula para evitar desalineaciones.",
            "📱 Optimización Mobile: Ajuste de fuentes y espaciados para pantallas pequeñas (360px-480px)."
        ]
    },
    {
        id: -101,
        version: "3.7.0",
        date: "13/02/2026",
        title: "Versión 3.7.0 - Variantes Consolidadas (Matrix) 💎",
        description: "Mejora masiva en la visualización de variantes dentro de las tablas Euro y Mundo.",
        changes: [
            "🧩 Consolidación de Grecia 2002: Reducción a una sola fila en la tabla Euro con sub-celdas por ceca (Atenas vs Extranjeras S,F,E).",
            "🏛️ Excepción del Vaticano: Mantenimiento de filas separadas para Sede Vacante 2005 por su relevancia histórica.",
            "📏 Fix de Alineación: Corregido el desplazamiento de columnas en la matriz de Mundo al mostrar variantes.",
            "🧠 Lógica de Marcado Global: Mejora en el sistema de detección de duplicados y variantes en todas las tablas.",
            "💄 UI Unificada: Estilo visual de variantes (sub-celdas) sincronizado entre todas las vistas de matriz."
        ]
    },
    {
        id: -100,
        version: "3.6.0",
        date: "12/02/2026",
        title: "Versión 3.6.0 - Gran Integración Local 🇪🇸",
        description: "Incorporación masiva de 15 consejos locales de la Guerra Civil con fotos reales y precios actualizados.",
        changes: [
            "🏛️ 15 Consejos Integrados: Asturias, Euzkadi, Santander, Menorca, Nulles, Olot, Arenys, Ibi, Segarra, L'Ametlla, Arahal, Lora, Marchena, Cazalla y Puebla.",
            "📸 Fotos Reales: Vinculadas más de 40 imágenes reales de piezas locales de alta calidad.",
            "💎 Variantes y Errores: Añadidas variantes de leyenda (L'Ametlla), mapa (Ibi), material (Segarra) y errores de acuñación (Marchena).",
            "📈 Tasación Actualizada: Precios de mercado ajustados para todos los consejos según estado de conservación.",
            "🧮 Lógica de Periodos: Soporte ampliado para emisiones locales desde 1936 hasta 1939."
        ]
    },
    {
        id: -99,
        version: "3.5.8",
        date: "12/02/2026",
        title: "Versión 3.5.8 - Refinado Precios Variantes II República 📈",
        description: "Revisión profunda y actualización de la tabla de precios para las variantes de 50 céntimos.",
        changes: [
            "🎯 Tasación Exacta: Aplicados los valores UNC (35, 25, 46, 18, 50, 70) para las 6 variantes de 50c de 1937.",
            "⚖️ Consistencia de Grados: Ajustados los precios MBC y EBC para mantener la coherencia con los nuevos valores Sin Circular."
        ]
    },
    {
        id: -98,
        version: "3.5.7",
        date: "12/02/2026",
        title: "Versión 3.5.7 - Fix de Contadores II República 🧮",
        description: "Corrección de la lógica de conteo para diseños con el mismo valor facial.",
        changes: [
            "🎯 Precisión en Contadores: Corregido el error que sumaba monedas de diferentes diseños (ej. 25c 1934 y 1938) en el mismo contador.",
            "Guardado Inteligente: El sistema ahora identifica y guarda el diseño específico de cada moneda automáticamente al añadirla al catálogo."
        ]
    },
    {
        id: -97,
        version: "3.5.6",
        date: "12/02/2026",
        title: "Versión 3.5.6 - Variantes 50 Céntimos 💎",
        description: "Ajuste de precisión para las variantes de la moneda de 50 céntimos de 1937.",
        changes: [
            "📈 Precios UNC: Sincronizados los valores de las 6 variantes de 50c según el estado Sin Circular (UNC).",
            "Sincronización Total: El valor sugerido en la cuadrícula ahora refleja el precio estándar de la pieza en estado nuevo."
        ]
    },
    {
        id: -96,
        version: "3.5.5",
        date: "12/02/2026",
        title: "Versión 3.5.5 - Tasación Personalizada 💰",
        description: "Actualización de los valores de mercado de la II República según los criterios del usuario.",
        changes: [
            "💎 Valores Específicos: Ajustados los precios de todas las denominaciones de la II República.",
            "🚀 Despliegue Rápido: Cambios aplicados y sincronizados con la base de datos local."
        ]
    },
    {
        id: -95,
        version: "3.5.4",
        date: "12/02/2026",
        title: "Versión 3.5.4 - Fix de Navegación y Diseño 🎨",
        description: "Corrección de errores en la navegación de la sección Mundo y mejora visual de periodos.",
        changes: [
            "🔄 Navegación Fluida: Corregido el error al retroceder desde las vistas de periodo de España.",
            "📑 Diseño de Tarjetas: Refactorizadas las tarjetas de periodos para una visualización perfecta en todos los dispositivos.",
            "💄 Sincronización de Estilos: Asegurada la carga de temas visuales al navegar entre secciones del mundo."
        ]
    },
    {
        id: -94,
        version: "3.5.3",
        date: "12/02/2026",
        title: "Versión 3.5.3 - Valores de Mercado II República 💶",
        description: "Integración de precios orientativos para ayudar al coleccionista a valorar sus piezas.",
        changes: [
            "📈 Precios Actualizados: Añadidos valores estimados (EBC) para todas las monedas de la II República.",
            "💡 Guía de Compra: La vista de monedas ahora muestra un precio sugerido (~XX.XX €) incluso si aún no tienes la pieza.",
            "✅ Auto-completado: Al añadir una nueva moneda, el sistema sugiere automáticamente el valor de catálogo."
        ]
    },
    {
        id: -93,
        version: "3.5.2",
        date: "12/02/2026",
        title: "Versión 3.5.2 - Fix de Fotos y Contadores 🛠️",
        description: "Corrección de errores visuales y lógicos detectados tras el desglose de diseños.",
        changes: [
            "🖼️ Restauración de Imágenes: Corregido el error que mostraba caras de Euro en lugar de las monedas de la República (5c, 10c, 50c, 1pta).",
            "🧮 Precisión en Contadores: Los contadores de la cuadrícula ahora discriminan correctamente por diseño (ID), reflejando el progreso real de cada tipo.",
            "🧹 Limpieza de Código: Eliminadas dependencias obsoletas en la vista de monedas para mayor rendimiento."
        ]
    },
    {
        id: -92,
        version: "3.5.1",
        date: "12/02/2026",
        title: "Versión 3.5.1 - Refinado de Emisiones 🎯",
        description: "Ajuste fino en el catálogo de la II República según especificaciones del usuario.",
        changes: [
            "✂️ Eliminación de Emisión: Se ha retirado la moneda de 25 céntimos de 1937 del catálogo oficial.",
            "🏷️ Etiquetas Actualizadas: Ajustada la nomenclatura de la serie de 1938 para mayor claridad."
        ]
    },
    {
        id: -91,
        version: "3.5.0",
        date: "12/02/2026",
        title: "Versión 3.5.0 - Gran Desglose de Diseños (KM#) 🏛️",
        description: "Mejora masiva en la visualización de la II República: cada diseño mayor ahora tiene su propio espacio e imagen independiente.",
        changes: [
            "🧩 Desglose por Diseño: Separadas las monedas de 25 cts y 1 pta según el diseño (Agujero vs Cobre, Plata vs Latón).",
            "🖼️ Visibilidad Total: Corregido el error que ocultaba imágenes en la cuadrícula al navegar por periodos antiguos.",
            "📊 Catálogo Inteligente: El sistema de recuento ahora distingue correctamente entre KM# distintos, evitando duplicar años en la matriz.",
            "🔗 Vinculación Precisa: El formulario de edición ahora arrastra el ID del diseño seleccionado para una previsualización perfecta."
        ]
    },
    {
        id: -90,
        version: "3.4.0",
        date: "12/02/2026",
        title: "Versión 3.4.0 - Diseños Inteligentes por Año 🎨",
        description: "La aplicación ahora reconoce automáticamente los diferentes diseños (KM#) de una misma denominación según el año de emisión.",
        changes: [
            "🧠 Lógica de Diseño Dynamica: Cambio automático de foto al seleccionar años con diseños distintos (ej. 25 cts 1934 vs 1938).",
            "🛡️ Prioridad de Variantes: Las fotos proporcionadas por el usuario ahora se integran como el diseño estándar para sus años correspondientes.",
            "📑 Base de Datos Refinada: Añadidas entradas específicas para los años clave de la II República (1933, 1934, 1937, 1938)."
        ]
    },
    {
        id: -89,
        version: "3.2.1",
        date: "12/02/2026",
        title: "Versión 3.2.1 - Integración de Fotos Propias 📸",
        description: "Migración exitosa a almacenamiento local para las fotos de la II República, garantizando visibilidad total.",
        changes: [
            "📁 Fotos Locales: La aplicación ahora usa las imágenes proporcionadas por el usuario cargadas en el servidor.",
            "🛠️ Mapeo de Archivos: Actualizada la base de datos para reconocer los nombres específicos de las fotos subidas.",
            "🚀 Despliegue Crítico: Actualización en la nube para servir los nuevos recursos estáticos."
        ]
    },
    {
        id: -88,
        version: "3.2.0",
        date: "12/02/2026",
        title: "Versión 3.2.0 - Sistema Anti-Bloqueo de Fotos 📸",
        description: "Solución definitiva a la carga de imágenes mediante proxy inteligente y políticas de referer para evitar bloqueos de servidores externos.",
        changes: [
            "🛡️ Nuevo Proxy Universal (Weserv): Todas las imágenes externas se cargan vía proxy para saltar bloqueos de 'hotlinking'.",
            "🕵️ Referrer Policy: Implementada política de 'no-referrer' en toda la app para asegurar la compatibilidad con Wikimedia y otros portales.",
            "🇪🇸 Corrección España (Periodos): Lógica mejorada para diferenciar correctamente entre Pesetas de Juan Carlos I y la II República.",
            "⚡ Optimización de Memoria: Refactorización dinámica de URLs para evitar redundancia en los datos."
        ]
    },
    {
        id: -87,
        version: "3.1.0",
        date: "11/02/2026",
        title: "Versión 3.1.0 - Mejoras en Mundo (Afganistán) 🌍",
        description: "Revisión completa de la sección de Afganistán con gestión de periodos históricos, imágenes reales y valores estimados.",
        changes: [
            "🇦🇫 Nuevo sistema de Periodos Históricos para países del Mundo (empezando por Afganistán).",
            "🖼️ Imágenes reales y valores estimados para monedas de Afganistán (2004-2005).",
            "📊 Nueva vista de 'Tabla' disponible para secciones del Mundo.",
            "md Correciones en la visualización de divisas (Afgani)."
        ]
    },
    {
        id: -86,
        version: "3.0.0",
        date: "11/02/2026",
        title: "Versión 3.0.0 - Galería 3D, Ficha Técnica y Temas Dinámicos 🚀",
        description: "Gran actualización con nuevas formas de interactuar con tu colección: Galería 3D, fichas técnicas detalladas, temas dinámicos, perfil público y valoración inteligente.",
        changes: [
            "🏆 Nueva Galería 3D: Visualiza tus monedas destacadas con todo lujo de detalles.",
            "📊 Ficha Técnica Ampliada: Peso, diámetro y composición para todas las monedas Euro.",
            "🌍 Temas Dinámicos: El fondo de la app cambia sutilmente según el país que visitas.",
            "☁️ Cloud & Social: Indicador de autoguardado y la opción de compartir tu colección públicamente.",
            "💰 Valoración Inteligente: El precio estimado ahora se ajusta automáticamente según la conservación (SC, EBC, MBC...)."
        ]
    },
    {
        id: -85,
        version: "2.5.4",
        date: "11/02/2026",
        title: "Versión 2.5.4 - Mejoras en República Checa y UX 🇨🇿",
        description: "Catálogo completo de República Checa con precios estimados, previsualización de imágenes al añadir monedas y correcciones en divisas mixtas.",
        changes: [
            "🇨🇿 Catálogo completo de República Checa con precios estimados.",
            "🖼️ Previsualización de imágenes en el formulario de añadir moneda.",
            "🔧 Correcciones en la visualización de divisas mixtas (EUR/Kč)."
        ]
    },
    {
        id: -84,
        version: '2.5.3',
        date: '11/02/2026',
        title: 'Versión 2.5.3 - República Checa y Mejoras UX 🇨🇿',
        description: 'Nueva visualización de monedas al añadir, campos fijos para evitar errores y catálogo de precios para República Checa (Kč).'
    },
    {
        id: -83,
        version: '2.5.2',
        date: '11/02/2026',
        title: 'Versión 2.5.2 - Bulgaria 🇧🇬 y Bélgica 🇧🇪',
        description: 'Implementación de renders oficiales para Bulgaria 2026 y corrección de series para Bélgica (Series I, III, IV).'
    },
    {
        id: -82,
        version: '2.5.1',
        date: '11/02/2026',
        title: 'Versión 2.5.1 - Corrección Imágenes 🇦🇩 🇦🇹',
        description: 'Actualización de imágenes para Andorra y Austria con fotografías reales de alta calidad.'
    },
    {
        id: -81,
        version: '2.5.0',
        date: '10/02/2026',
        title: 'Versión 2.5.0 - Imágenes Reales Euro 📸',
        description: 'Implementación masiva de imágenes reales para todas las monedas de Euro (Caras Nacionales). Soporte para diferentes series (Monarcas/Mapas).',
        changes: [
            'Implementación masiva de imágenes reales para monedas de Euro (Caras Nacionales).',
            'Soporte para visualización de diferentes series por país.',
            'Mejoras en la cuadrícula de visualización.'
        ]
    },
    {
        id: -80,
        date: '10/02/2026',
        title: 'Versión 2.4.2 - Optimización Extrema ⚡',
        description: 'Implementación de Lazy Loading para carga ultrarrápida, limpieza profunda del repositorio y optimización de componentes internos.'
    },
    {
        id: -79,
        date: '10/02/2026',
        title: 'Versión 2.4.1 - Modo Claro Premium 🎨',
        description: 'Refinamiento total del Modo Claro con estética premium, contrastes optimizados y sistema dinámico de variables CSS en toda la app.'
    },
    {
        id: -78,
        date: '10/02/2026',
        title: 'Versión 2.4.0 - Temas y Ajustes PRO ⚙️',
        description: 'Nuevo sistema de Temas (Claro/Oscuro) y rediseño integral del menú de Ajustes por categorías (Apariencia, Datos, Catálogo).'
    },
    {
        id: -77,
        date: '10/02/2026',
        title: 'Versión 2.3.2 - Lista de Deseos (Wishlist) ❤️',
        description: 'Implementada la sección de Deseadas. Gestiona lo que te falta y cópialo al portapapeles para compartir.'
    },
    {
        id: -76,
        date: '10/02/2026',
        title: 'Versión 2.3.0 - Valoración y Gestión 💰',
        description: 'Añadidos campos de Precio de Compra y Estado (Colección/Repetida). Nuevas estadísticas de Inversión y Revalorización.'
    },
    {
        id: -75.1,
        date: '10/02/2026',
        title: 'Versión 2.2.1 - Mantenimiento y Reset 🧹',
        description: 'Añadida la opción de "Resetear Colección" en Ajustes. Ideal para limpiar datos o empezar de cero de forma segura.'
    },
    {
        id: -75,
        date: '10/02/2026',
        title: 'Versión 2.2.0 - Imágenes y Diseño Total 🚀',
        description: 'Solución definitiva a las imágenes (Numista + Fallback). Rediseño ultra-compacto para móviles y actualización de series de Bélgica y España.'
    },
    {
        id: -74,
        date: '09/02/2026',
        title: 'Versión 2.1.2 - Hotfix Total 🛠️',
        description: 'Corrección de múltiples errores de referencia (Modal, PlusCircle) que causaban fallos de carga en el Dashboard y formularios.'
    },
    {
        id: -73,
        date: '09/02/2026',
        title: 'Versión 2.1.0 - República Checa y Valor Estimado 💎',
        description: 'Añadido catálogo completo de monedas y billetes de la República Checa (1993-Presente). Nueva función de "Valor Estimado" en toda la colección y estadísticas de valor total.'
    },
    {
        id: -72,
        date: '09/02/2026',
        title: 'Versión 2.0.0 - Billetes y Mapas 🌍',
        description: '¡Gran actualización! Nueva sección de Billetes con mapa interactivo y gestión por países. Mejoras visuales en todas las secciones de mapas y corrección de estilos en tarjetas.'
    },
    {
        id: -71,
        date: '03/02/2026',
        title: 'Versión 1.9.8 - Catálogo 2008 (Derechos Humanos) 🏛️',
        description: 'Añadidos datos completos y fotos disponibles para las monedas de 2008. Incluye el tema "Derechos Humanos" (Bélgica, Finlandia, Italia, Portugal) y otras emisiones nacionales.'
    },
    {
        id: -70,
        date: '03/02/2026',
        title: 'Versión 1.9.7 - Imágenes Extra 2007 📸',
        description: 'Conseguida la imagen de Mónaco 2007 (Grace Kelly) y Alemania 2007 (Tratado de Roma). El resto de imágenes faltantes se han catalogado para futura adquisición.'
    },
    {
        id: -69,
        date: '03/02/2026',
        title: 'Versión 1.9.6 - Datos 2007 Completos 📝',
        description: 'Se han completado los metadatos (descripción, tirada, grabador) de todas las monedas conmemorativas de 2007. También se han separado visualmente las emisiones conjuntas (Tratado de Roma) y corregido el centrado de los modales en móviles.'
    },
    {
        id: -68,
        date: '03/02/2026',
        title: 'Versión 1.9.5 - Correcciones 2006 ✅',
        description: 'Corregidos los textos de variantes de Luxemburgo 2006.'
    },
    {
        id: -25, // Renumbered to avoid conflict
        date: '02/02/2026',
        title: 'Versión 1.9.2 - Imágenes 2005 y 2006 (ECB) 📸',
        description: 'Actualización completa de imágenes para monedas conmemorativas de 2005 (ECB Oficial) y mejora en la visibilidad de 2006.'
    },
    {
        id: -26, // Renumbered
        date: '02/02/2026',
        title: 'Actualización Bélgica 🇧🇪',
        description: 'Definición de moneda circulante (Verde) vs Sets (Amarillo) según listas confirmadas.'
    },
    {
        id: -24,
        date: "30/01/2026",
        title: "Versión 1.3.2 - Mundo y Mejoras 🌏",
        description: "Nuevos países en Mundo (EEUU, UK, Japón, México), mejoras visuales y corrección de botones de Ajustes."
    },
    {
        id: -19,
        date: '30/01/2026',
        title: 'Versión 1.1.1 - Widget Mejorado ✨',
        description: 'Mejora en "Última Adquisición" con historial de las 5 últimas monedas y etiqueta NEW animada.'
    },
    {
        id: -18,
        date: '30/01/2026',
        title: 'Versión 1.1 - Layout Mejorado 🚀',
        description: 'Nuevo diseño del Menú Euro con Mapa Interactivo integrado y controles de zoom optimizados.'
    },
    {
        id: -17,
        date: '30/01/2026',
        title: 'Mapa Interactivo 🌍',
        description: 'El mapa ahora tiene su propia sección dedicada. Accede desde el botón "Mapa" en el menú Euro.'
    },
    {
        id: -22,
        date: "30/01/2025",
        title: "Versión 1.3.1 - Estadísticas Favorito 📊",
        description: "Estadísticas dinámicas: Ahora se muestran los datos de tu país Favorito seleccionado. Reordenación de pestañas (Mundo antes de Favorito)."
    },
    {
        id: -21,
        date: "30/01/2025",
        title: "Versión 1.3 - Favoritos Avanzados ⭐",
        description: "Nuevo sistema de favoritos independiente para Euro y Mundo. Incluye confirmación de seguridad y correcciones visuales."
    },
    {
        id: -12,
        date: '29/01/2026',
        title: 'Filtro por Años 📅',
        description: 'Nueva vista para consultar y añadir Commemorativas organizadas por Año (2004-2026).'
    },
    {
        id: -15,
        date: '29/01/2026',
        title: 'Mapa Euro Ajustado 🌍',
        description: 'Hemos calibrado la proyección del mapa para que se visualice más arriba y perfectamente integrado con los iconos.'
    },
    {
        id: -14,
        date: '29/01/2026',
        title: 'Mapa de Calor (Vectorial) 🔥',
        description: 'Nuevo mapa interactivo: ahora los países se colorean completamente según tu progeso. ¡Haz clic para explorar!'
    },
    {
        id: -13,
        date: '29/01/2026',
        title: 'Mejora Visual Conmemorativas 🎨',
        description: 'Nuevas monedas realistas (bimetálicas) generadas por CSS con indicador de Año y País.'
    },
    {
        id: -11,
        date: '29/01/2026',
        title: 'Actualización San Marino 🇸🇲',
        description: 'Definición de monedas en Circulación (Verde) y Sets (Amarillo).'
    },
    {
        id: -10,
        date: '29/01/2026',
        title: 'Actualización Portugal 🇵🇹',
        description: 'Lógica de emisión: Sets (Amarillo) y Circulación (Verde) actualizada.'
    },
    {
        id: -9,
        date: '29/01/2026',
        title: 'Estadísticas Corregidas 🛠️',
        description: 'Solucionado error en gráficos y carga de datos.'
    },
    {
        id: -90,
        date: '28/01/2026',
        title: 'Estadísticas Completas 📊',
        description: 'Gráficas de Países, Años y Ranking detallado con Top 3 destacado.'
    },
    {
        id: -8,
        date: '28/01/2026',
        title: 'Actualización Finlandia 🇫🇮',
        description: 'Lógica 2019-2024: Sets recientes (Amarillo) y No Emitidas (Rojo) en 2019.'
    },
    {
        id: -7,
        date: '28/01/2026',
        title: 'Actualización Estonia 🇪🇪',
        description: 'Datos de emisión: Circulación (Verde), Sets (Amarillo) y No Emitidas (Rojo).'
    },
    {
        id: -6,
        date: '28/01/2026',
        title: 'Mejoras en Estadísticas y Datos 📈',
        description: 'Filtros por pestañas (Euro, España...), corrección de gráficos y datos de emisión para Eslovaquia y Eslovenia.'
    },
    {
        id: -5,
        date: '28/01/2026',
        title: 'Nuevas Estadísticas 📊',
        description: 'Página de análisis con Valor Facial, Ránking por Países y Gráficos.'
    },
    {
        id: -4,
        date: '28/01/2026',
        title: 'Actualización Croacia 🇭🇷',
        description: 'Sets 2025 para 50c, 1€ y 2€ (Amarillo).'
    },
    {
        id: -3,
        date: '28/01/2026',
        title: 'Actualización Vaticano 🇻🇦',
        description: 'Lógica Sets (Amarillo) y adición de Variante 2005 Sede Vacante (SV).'
    },
    {
        id: -2,
        date: '28/01/2026',
        title: 'Corrección Bélgica 🇧🇪',
        description: 'Ajuste en años 2000/2001 para 1c y 10c (Circulación vs Sets).'
    },
    {
        id: 0,
        date: '28/01/2026',
        title: 'Actualización Austria 🇦🇹',
        description: 'Lógica de emisión ajustada: Sets (Amarillos) y No Emitidas (Rojas) según normativa oficial.'
    },
    {
        id: 1,
        date: '28/01/2026',
        title: 'Actualización Andorra 🇦🇩',
        description: 'Añadida lógica de emisión y sets (Amarillo) para Andorra (2014-2025).'
    },
    {
        id: 2,
        date: '27/01/2026',
        title: 'Mejoras de Tabla 📊',
        description: 'Cabecera fija (Sticky) y corrección de contadores para Alemania.'
    },
    {
        id: 3,
        date: '26/01/2026',
        title: 'Nuevos Países 🇪🇺',
        description: 'Ampliación de catálogo para Francia, Malta y Luxemburgo.'
    }
];

export const getLatestUpdate = () => {
    return APP_UPDATES[0]; // Assuming top is newest
};
