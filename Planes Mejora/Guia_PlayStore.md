# Guía para Publicar en Google Play Store

## 1. Costes

* **Cuota de Registro:** Existe un pago único de **$25 USD** (unos 23-25€) para crear la cuenta de desarrollador de Google Play. Se paga una sola vez y sirve para publicar tantas apps como quieras.
* **No hay mensualidades** (a diferencia de Apple, que cobra 99€/año).

## 2. Requisitos Previos (Cuenta Personal)

Desde finales de 2023, Google exige a las nuevas cuentas personales:

* **20 Testers:** Debes reclutar a 20 personas (amigos, familia, foros) que instalen tu app en modo "Prueba Cerrada".
* **14 Días:** Esos 20 testers deben tener la app instalada y usarla durante al menos 14 días consecutivos antes de que Google te deje publicarla en abierto ("Producción").

## 3. Pasos Técnicos: De Web a App Android

Tu proyecto actual es una web (React + Vite). Para subirla a la Play Store necesitas convertirla en un archivo `.apk` o `.aab`.

### Opción A: Capacitor (Recomendada)

Usar **Capacitor** es la forma más moderna de "envolver" tu web de React en una app nativa.

1. Instalar Capacitor en tu proyecto: `npm install @capacitor/core @capacitor/cli`
2. Inicializar: `npx cap init`
3. Añadir plataforma Android: `npm install @capacitor/android` && `npx cap add android`
4. Generar la app: `npm run build` && `npx cap sync`
5. Abrir en Android Studio (necesitas instalarlo) para firmar y generar el archivo subible.

### Opción B: Trusted Web Activity (TWA)

Si ya tienes la web publicada (ej. en Vercel) y funciona perfecta en móvil, puedes usar "Bubblewrap" para crear una app que simplemente abre tu web en pantalla completa. Es más ligero, pero requiere que la web esté online.

## 4. Material Necesario para la Ficha

Antes de publicar, necesitarás preparar:

* **Icono de la App:** 512x512 px (PNG).
* **Gráfico de Funciones:** 1024x500 px (Banner para la tienda).
* **Capturas de Pantalla:** Mínimo 2 del móvil.
* **Política de Privacidad:** Una URL con un texto legal (puedes generarlo gratis online) explicando que no robas datos.

## Resumen del Plan

1. Terminar el desarrollo y las funcionalidades clave.
2. Configurar **Capacitor** para convertirla en App Android.
3. Pagar los **$25** de la cuenta de Google Play Console.
4. Reclutar a **20 amigos/testers** para la prueba de 14 días.
5. ¡Publicar!
