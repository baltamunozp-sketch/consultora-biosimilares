# BioDecisiones — sitio demostrativo

Sitio estático en español para una consultoría independiente que apoya a hospitales y clínicas en la evaluación e incorporación de biosimilares.

## Archivos
- `index.html`: contenido y secciones.
- `styles.css`: diseño adaptable a móviles y escritorio.
- `script.js`: panel económico interactivo y formulario de correo.

## Publicar en Vercel
1. Descomprime `consultora-biosimilares.zip`.
2. Crea un repositorio en GitHub y sube los tres archivos (`index.html`, `styles.css`, `script.js`) a la raíz.
3. Entra a https://vercel.com/ e inicia sesión.
4. Pulsa **Add New → Project**, importa el repositorio y deja la configuración por defecto. No necesitas framework ni comando de build.
5. Pulsa **Deploy**. Vercel generará una URL pública terminada en `.vercel.app` que podrás compartir.

También puedes desplegarlo con la CLI de Vercel desde la carpeta, si ya tienes Node.js y la CLI instalados.

## Antes de usarlo públicamente
- “BioDecisiones” es un nombre de demostración; confirma disponibilidad y derechos antes de usarlo como marca.
- Los valores económicos son ficticios e ilustrativos.
- Las referencias científicas y sus metadatos deben verificarse antes de presentar el sitio como material profesional.
- El formulario usa `mailto:`: abre el programa de correo del visitante, pero no envía ni almacena información por sí solo. Para recibir solicitudes en línea, integra un servicio de formularios y configura un destinatario.
- No introducir datos de pacientes.
