# Propuesta de Sistema de Logros (Gamificación)

Este documento detalla los 25+ logros propuestos para implementar en la aplicación.

## 📊 Categoría: Volumen de Colección

Son logros progresivos basados en el número total de monedas únicas.

1. **🌱 Primeros Pasos**: Consigue tus primeras **10** monedas.
2. **💼 Coleccionista Amateur**: Alcanza las **50** monedas.
3. **📚 Coleccionista Experto**: Alcanza las **100** monedas.
4. **🏦 Bóveda Personal**: Alcanza las **250** monedas.
5. **👑 Leyenda Numismática**: Alcanza las **500** monedas.

## 🌍 Categoría: Exploración Geográfica

Basados en la variedad de países.

1. **🎒 Mochilero**: Ten monedas de al menos **5** países diferentes.
2. **✈️ Trotamundos**: Ten monedas de al menos **10** países diferentes.
3. **🇪🇺 Ciudadano Europeo**: Ten al menos una moneda de **20** países de la Eurozona (todos los principales).
4. **💎 Cazador de Joyas**: Consigue una moneda de cualquier **Micro-estado** (Andorra, Mónaco, San Marino, Vaticano).
5. **🏰 El Gran Duque**: Consigue al menos 5 monedas de **Luxemburgo**.

## 🏆 Categoría: Maestría (Series Completas)

Basados en completar años o países en la vista Euro estándar.

1. **🥉 Bronce Puro**: Completa la fila de los céntimos de bronce (1, 2, 5 cts) de cualquier país.
2. **🥇 Oro Nórdico**: Completa la fila de los céntimos dorados (10, 20, 50 cts) de cualquier país.
3. **⬜ Bimetálico**: Completa la fila de 1€ y 2€ de cualquier país.
4. **🏁 Euro Maestro**: Completa **1 país** entero (las 8 monedas estándar de un año/diseño).
5. **🗺️ Conquistador**: Completa las series estándar de **5 países** diferentes.

## ⭐ Categoría: Conmemorativas

Específicos para el apartado de 2€ Conmemorativos.

1. **🎨 Fan de los 2€**: Consigue **10** monedas conmemorativas distintas.
2. **🖼️ Galería de Arte**: Consigue **50** monedas conmemorativas distintas.
3. **🇩🇪 Precisión Alemana**: Consigue las 5 cecas (A, D, F, G, J) de una misma moneda conmemorativa alemana.
4. **🤝 Tratado de Roma**: Consigue la moneda común del "Tratado de Roma" de al menos 3 países diferentes.
5. **💶 10 Años de Euro**: Consigue la moneda común "10 Años del Euro" de al menos 3 países diferentes.

## 📈 Categoría: Mercado y Rarezas

Basados en duplicados, años y condiciones.

1. **🐉 La Horda Dorada**: Acumula **50** monedas repetidas en total (para intercambiar).
2. **⚖️ El Mercader**: Acumula **200** monedas repetidas.
3. **📰 Última Hora**: Encuentra una moneda emitida en el **año actual** (ej. 2026).
4. **🕰️ Viajero del Tiempo**: Encuentra una moneda de los años inaugurales (**1999, 2000, 2001 o 2002**).
5. **✨ Brillante y Nuevo**: Marca una moneda con calidad **S/C (Sin Circular)** o **Proof**.
6. **📜 Notafilia**: (Extra) Colecciona tus primeros **5 billetes** (si se activa módulo de billetes).

## 🛠️ Detalles Técnicos de Implementación

* **Almacenamiento**: Los logros desbloqueados se guardarán en `localStorage` o Firebase bajo el perfil del usuario.
* **Comprobación**: Se ejecutará la función `checkAchievements()` cada vez que se añada o edite una moneda.
* **Notificación**: Mostrar un pequeño "Toast" (aviso emergente) cuando se desbloquea un logro nuevo.
