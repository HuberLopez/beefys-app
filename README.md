# Beefy's — App de pedidos

App de pedidos de Beefy's (delivery + pickup) con su sistema de marca.

## Las 3 pantallas

| Pantalla | Archivo | Quién la usa |
|---|---|---|
| **Cliente** (pedidos) | `index.html` | Tus clientes — **este es el link principal** |
| **Backend** (dueño) | `panel-admin.html` | Tú / gerente |
| **Cocina** (operador) | `panel-operador.html` | El operador |

> El link principal (la página de inicio) abre **solo la pantalla del cliente**.
> Backend y Cocina son links aparte, con clave, para que el público no los vea.

## Accesos (cámbialos en Backend → Usuarios)

- **Backend** → usuario `jesus` · clave `beefy2026`
- **Cocina** → usuario `operador` · clave `cocina2026`

Para entrar: agrega `/panel-admin.html` o `/panel-operador.html` al final de tu link.
Ej: `https://tusitio.netlify.app/panel-admin.html`

## Cómo funciona

- El **cliente** arma su pedido y al final se abre **WhatsApp** con todo escrito, listo para enviar a tu número oficial. Si paga por Pago Móvil, ve los datos para transferir y adjunta la captura.
- En el **Backend** editas menú, fotos, precios, tiempos, tasa, datos de Pago Móvil y usuarios. Todo con botón **Guardar / Cancelar** e **Historial** de cambios.
- La **tasa del dólar** se toma sola del BCV (o la pones manual en el Backend).

## Importante (versión 1)

Los cambios del Backend se guardan **en el navegador de ese dispositivo**. Para que el menú se vea igual en todos los teléfonos y para recibir órdenes automáticamente en Cocina, hace falta el backend en la nube (la siguiente fase). Hoy: editas desde tu teléfono y los pedidos llegan por WhatsApp.

## Hosting

Sitio estático (HTML/CSS/JS), sin compilación. Entry point: `index.html` en la raíz.
Los iconos de marca (Slussen Mono) y logos van en `assets/`.

*Más carne, menos drama · @comebeefys*
