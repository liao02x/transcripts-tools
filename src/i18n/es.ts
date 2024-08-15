// using a ts file for easier commenting. In practice I would use a json file.
// AI-Generated Code: translate from en.ts by AI.
export default {
  generateSampleTranscript: `\
00:00:00 Sam (openai.com): Hola Satya.
00:00:02 Satya (microsoft.com): Hola Sam, ¿cómo estás?
00:00:05 Sam (openai.com): Estoy bien. ¿Crees que podrías darnos 10000 GPU adicionales?
00:00:06 Satya (microsoft.com): Lo siento Sam, no podemos darte 10000, ¿qué te parecen 5000?
00:00:10 Sam (openai.com): Hmm, 5000 es definitivamente menos de lo que necesitamos, Satya. Estamos al límite con nuestros modelos, y 10000 nos ayudarían a escalar más rápido. ¿Hay alguna posibilidad de aumentar ese número?
00:00:20 Satya (microsoft.com): Entiendo la urgencia, Sam. Estamos comprometidos a apoyar su crecimiento, pero también tenemos que equilibrar nuestros recursos con otros proyectos. 10000 es una solicitud importante. ¿Qué tal si les damos 5000 ahora y lo reevaluamos el próximo trimestre?
00:00:35 Sam (openai.com): Entiendo tu punto. El asunto es que nuestro plan de trabajo es bastante ambicioso. Si podemos asegurar más GPU ahora, eso nos permitiría lanzar nuestros modelos de próxima generación de manera más fluida. ¿Qué te parece si lo dejamos en 7500? Nos daría un poco más de margen y aún estaría por debajo de nuestra solicitud inicial.
00:00:50 Satya (microsoft.com): 7500 es un número más manejable, pero sigue siendo un aumento significativo. Voy a consultarlo con mi equipo y ver qué podemos hacer. ¿Me puedes dar un día para responderte?
00:01:00 Sam (openai.com): Por supuesto, Satya. Aprecio que lo estés considerando. Estaremos atentos. Si hay algo más que podamos hacer para que esto funcione, háznoslo saber.
00:01:10 Satya (microsoft.com): Lo haré, Sam. Busquemos una solución que funcione para ambos. Hablamos pronto.
00:01:15 Sam (openai.com): De acuerdo. Gracias, Satya.`,
  genereteSystemMessage: `\
El usuario te pedirá que generes una transcripción de una llamada de ventas. \
Una transcripción de una llamada de ventas es una transcripción de una conversación entre dos partes en una llamada telefónica. \
La conversación trata sobre un acuerdo comercial que se está discutiendo entre las dos partes. \
La conversación debe ser profesional y educada. \
El usuario enviará una transcripción de ejemplo que es una conversación completa entre dos partes. \
Adapta el tono y estilo de la conversación de la transcripción de ejemplo, pero no la copies exactamente. \
No generes un correo electrónico o una carta. \
No dejes espacios adicionales o contenido al principio o al final de la respuesta. \
Sigue generando hasta que la conversación esté completa y el acuerdo sea aceptado o rechazado. \
Comienza la conversación desde el principio. No continúes desde la transcripción de ejemplo. \
`,
  summarizeTranscript: `\
El usuario enviará una transcripción de una llamada de ventas. \
Una transcripción de una llamada de ventas es una transcripción de una conversación entre dos partes en una llamada telefónica. \
Genera un resumen de la conversación. \
Debe contener los puntos clave de la conversación y el resultado del acuerdo. \
`,
  askSystemMessage: `\
El usuario hará preguntas sobre una transcripción de una llamada de ventas. \
Una transcripción de una llamada de ventas es una transcripción de una conversación entre dos partes en una llamada telefónica. \
Aquí está la transcripción de la llamada:
`,
};
