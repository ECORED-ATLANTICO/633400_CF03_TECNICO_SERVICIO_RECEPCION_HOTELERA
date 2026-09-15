<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Servicio, habilidades de comunicación y técnicas de ventas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión del aprendiz de los conceptos clave relacionados con usuarios turísticos, servicio al cliente, comunicación, negociación, cotización y venta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza al servicio al cliente en un establecimiento de alojamiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se limita únicamente al momento de la atención presencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprende todas las interacciones que contribuyen a la satisfacción del huésped antes, durante y después del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo corresponde al área de recepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se enfoca exclusivamente en resolver quejas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el propósito de una comunicación efectiva?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hablar la mayor cantidad de tiempo posible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Convencer siempre al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lograr que el mensaje sea comprendido correctamente por el receptor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar las preguntas del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es una característica frecuente del usuario turístico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Busca seguridad, información y una experiencia satisfactoria durante su estadía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Nunca planifica sus viajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo viaja por motivos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Siempre utiliza agencias de viajes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué significa actuar con empatía durante la atención al cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imponer el punto de vista del colaborador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar escuchar al usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener una conversación únicamente técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprender las necesidades y sentimientos del cliente para brindar una mejor atención.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es el propósito de los estándares de servicio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el tiempo de atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar calidad y uniformidad en la prestación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los protocolos de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza la negociación integradora?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Busca que una parte gane y la otra pierda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se enfoca únicamente en reducir precios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procura beneficios para ambas partes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evita el diálogo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué información debe contener una cotización de servicios hoteleros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Descripción de los servicios, tarifas, condiciones y vigencia de la oferta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el precio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente fotografías del hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo promociones vigentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Por qué es importante la comunicación verbal durante la atención al cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplaza el lenguaje corporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque elimina las objeciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque evita la escucha activa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque influye en la percepción del servicio y en la confianza del cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es una característica del cliente impulsivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analiza durante mucho tiempo cada decisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Toma decisiones rápidamente y requiere orientación clara.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Nunca realiza compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Siempre solicita descuentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cómo influye la cultura en el comportamiento del usuario turístico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Condiciona expectativas, comportamientos y formas de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No tiene ninguna influencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo afecta los medios de transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Influye únicamente en los hoteles internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué representa el manejo de objeciones durante una venta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El final de la negociación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una discusión con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una oportunidad para aclarar dudas y fortalecer la decisión del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una cancelación automática de la venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Con qué etapa finaliza la técnica AIDA?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interés.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Deseo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza la escucha activa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interrumpir constantemente al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escuchar con atención, comprender y responder de forma adecuada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar hacer preguntas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hablar más que el usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuáles son los principales canales de atención al cliente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presencial, telefónica y digital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo la atención presencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo correo electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué caracteriza la venta de servicios turísticos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se limita al intercambio económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo consiste en ofrecer descuentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Busca satisfacer necesidades y generar experiencias positivas para el cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Finaliza con la entrega de una factura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es una habilidad esencial para un asesor de reservas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Memorizar todas las tarifas sin utilizar herramientas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar resolver inquietudes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar el contacto con los huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comunicarse con claridad y brindar información precisa al cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué beneficio aporta una adecuada atención al cliente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar las reclamaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer la satisfacción, fidelización y recomendación del establecimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la ocupación hotelera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la comunicación interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué debe hacer un colaborador cuando un cliente expresa una inconformidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escuchar, comprender la situación y ofrecer alternativas de solución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorar la situación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Discutir con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Remitir siempre el caso sin atenderlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál es el propósito de identificar el tipo de cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificarlo por su nivel económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el tiempo de atención.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar siempre el mismo procedimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Adaptar la comunicación y la estrategia de atención según sus necesidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Por qué las habilidades de comunicación son importantes en el área de reservas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque sustituyen los sistemas tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque solo sirven para responder llamadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque facilitan la atención, fortalecen la relación con el cliente y favorecen el cierre de la venta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque eliminan la necesidad de capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
