# Estrategias de Monetización para App de Numismática

Dado que tu aplicación es de nicho (coleccionistas) y tiene un diseño "Premium", la monetización no debería ser intrusiva (como banners de juegos baratos). Aquí tienes opciones viables:

## 1. Modelo Freemium (El más recomendado)

La app es gratuita para uso básico, pero ciertas funciones avanzadas requieren un pago único o suscripción (ej. 4,99€/año o 15€ vitalicio).

* **Versión Free:**
  * Límite de monedas (ej. hasta 100).
  * Listas básicas (Euro y España).
* **Versión PRO (Unlock):**
  * **Monedas Ilimitadas.**
  * **Catálogos Completos:** Acceso a Billetes, Monedas Mundiales avanzadas.
  * **Valoraciones de Mercado:** Ver los precios estimados (cuando implementemos esa función).
  * **Copia de Seguridad en Nube:** Sincronización entre dispositivos (si usas Firebase Auth).
  * **Exportación PDF:** Generar informes para seguros o inventario.

## 2. Marketing de Afiliados (Ingresos Pasivos)

Aprovecha que los usuarios buscan monedas que *no tienen*.

* **Enlaces Contextuales:** En la vista de una moneda que falta (marcada en gris), poner un botón sutil: *"Buscar en eBay"* o *"Ver en Amazon"*.
* **Cómo funciona:** Te registras en eBay Partner Network. Si el usuario hace clic y compra esa moneda (o cualquier cosa) en 24h, te llevas una comisión (1-4%).
* **Ventaja:** Es útil para el usuario, no molesta.

## 3. Informes de Valoración (Micro-pagos)

Si no quieres cobrar por la app entera, cobra por servicios específicos.

* **"Generar Informe de Patrimonio":** Un PDF profesional con el desglose de valor de toda la colección, certificado con fecha. Útil para herencias o seguros. Precio: 1.99€ por informe.

## 4. Patrocinios de Tiendas Numismáticas

* Contactar con tiendas reales de numismática.
* **Banner "Patrocinado por [Tienda X]":** En la pantalla de inicio o en el menú.
* **Ventaja:** Publicidad 100% relevante. A las tiendas les interesa llegar, coleccionistas serios.

## 5. Donaciones (Comunidad)

* Botón **"Invítame a un café"** (BuyMeACoffee / PayPal).
* Funciona bien en comunidades de hobby si la app es realmente útil y el desarrollador conecta con los usuarios.

## Recomendación para tu App

Empezar con **Afiliados de eBay** (es fácil de integrar en los botones de "falta") y considerar un **Modelo Freemium** si añades la funcionalidad de "Precios de Mercado", ya que esa información tiene mucho valor financiero para el usuario.
