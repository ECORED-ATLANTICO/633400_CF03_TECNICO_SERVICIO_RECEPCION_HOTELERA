<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio al cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        img(src='@/assets/curso/tema2/img01.png', alt='')
      .col-lg-9.col-md-12(data-aos="fade-right")
        p.mb-0 El servicio al cliente en el sector turístico constituye un elemento fundamental para la calidad, competitividad y sostenibilidad de los establecimientos de alojamiento. Más allá de la simple prestación de un servicio, implica la capacidad de comprender las necesidades, expectativas y percepciones del usuario para ofrecer experiencias satisfactorias y memorables. En un entorno caracterizado por la diversidad cultural y la alta exigencia del cliente, el servicio se convierte en un factor diferenciador que influye directamente en la fidelización, la reputación y el posicionamiento de las empresas turísticas. En este sentido, su gestión requiere no solo conocimiento técnico, sino también habilidades comunicativas, actitud de servicio y enfoque centrado en el cliente.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-21.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El servicio al cliente se entiende como el conjunto de acciones, procesos y actividades que una organización desarrolla para satisfacer las necesidades, deseos y expectativas del usuario, más allá del producto básico ofrecido. Este concepto integra tanto los elementos tangibles como intangibles del servicio, los cuales están directamente relacionados con el valor percibido por el cliente en función del precio y la imagen del establecimiento. En este sentido, el objetivo institucional no se limita a la venta de un servicio, sino que se orienta a generar experiencias positivas que permitan ganar y mantener clientes satisfechos.

      
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Los elementos tangibles del servicio al cliente son:


    .bg-full-width.bg-fondo-7.px-5.py-4.mb-5
      .container
        .tarjeta.row.justify-content-center.align-items-center.mb-0.p-2(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.mb-4.mb-lg-0
              img(src='@/assets/curso/tema2/img04.png', alt='')
            .col-lg-9.col-md-12
              SlyderF(columnas="col-lg-6 col-xl-4 col-md-12 col-sm-12")
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img05.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Son los aspectos físicos y visibles del servicio.
                  p.text-center Ejemplo: infraestructura del hotel, habitaciones, mobiliario.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Elementos materiales que el cliente puede percibir directamente.
                  p.text-center Ejemplo: cama, lencería, decoración.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img07.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Recursos utilizados en la prestación del servicio.
                  p.text-center Ejemplo: presentación de alimentos y bebidas.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img08.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Documentos o soportes visibles del servicio.
                  p.text-center Ejemplo: factura, reservas, comprobantes.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img09.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Apariencia del personal.
                  p.text-center Ejemplo: uniforme, presentación personal.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.bg-color-c3.p-4
          p.mb-0 Por otro lado, los elementos intangibles del servicio los constituyen los aspectos no físicos relacionados con la experiencia que el cliente vive dentro del establecimiento de turismo. Esto se incluyen aspectos como la comunicación, la eficiencia, la relación y el trato con el cliente y la valoración subjetiva que el turista hace del servicio recibido.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-3 Es importante diferenciar entre atención al cliente y servicio al cliente. La atención al cliente se refiere al trato directo durante la interacción, el cual debe caracterizarse por la cortesía, rapidez, confiabilidad, empatía y capacidad de respuesta. Por su parte, el servicio al cliente implica una visión más amplia, que integra de manera sistemática y coherente todos los procesos de la organización para garantizar una experiencia satisfactoria. En consecuencia, el servicio no se reduce a la amabilidad, sino que requiere una disposición real para servir con efectividad.
    
        .bg-fondo-8.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0.ms-lg-5.ms-0 En este contexto, la calidad del servicio depende en gran medida del talento humano, ya que el personal es el encargado de materializar los procesos y generar valor en cada interacción. Como señala Lisa Ford (2013), “si no se cuida lo básico, de nada servirán los detalles y los extras”, lo que resalta la importancia de garantizar estándares fundamentales en la prestación del servicio. Por ello, es esencial que quienes hacen parte de la organización comprendan los objetivos del servicio y su rol en la satisfacción del cliente, contribuyendo de manera consciente al cumplimiento de estos propósitos.

      .col-lg-3.col-md-6
        img(src='@/assets/curso/tema2/img11.png', alt='')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Características

    .bg-full-width.bg-fondo-4.px-5.py-4
      img(src="@/assets/curso/tema2/img13.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Los servicios presentan una serie de características que los diferencian de los bienes materiales y que resultan fundamentales para comprender su naturaleza, especialmente en el sector turístico. Estas características influyen directamente en la forma en que se prestan, se perciben y se evalúan por parte del cliente. <br><br> En la siguiente tabla se destacan las características fundamentales del servicio al cliente en el sector turístico:
    
    
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 4.
          span Características del servicio al cliente en el sector turístico
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Característica
                th Definición conceptual
                th Implicación en la gestión del servicio
                th Ejemplo aplicado en turismo
            tbody
              tr
                td Intangibilidad
                td El servicio no puede ser percibido físicamente antes de su consumo; no se puede ver, tocar ni almacenar.
                td Se debe generar confianza a través de la imagen, reputación y evidencias físicas del servicio.
                td Un huésped no puede evaluar completamente la experiencia antes de alojarse en un hotel.
              tr
                td Inseparabilidad
                td La producción y el consumo del servicio ocurren de manera simultánea, implicando interacción directa entre cliente y prestador.
                td El talento humano es clave en la calidad del servicio, ya que la experiencia se genera en el momento de la atención.
                td La atención en recepción ocurre al mismo tiempo que el cliente la recibe.
              tr
                td Heterogeneidad
                td El servicio es variable y depende de quién lo presta, cuándo y cómo se presta.
                td Se requieren estándares, protocolos y capacitación para asegurar uniformidad en la prestación.
                td Diferencias en la atención entre colaboradores o turnos.
              tr
                td Perecibilidad (caducidad)
                td El servicio no puede almacenarse ni recuperarse si no se consume en el momento.
                td Es necesario gestionar la capacidad y la demanda de manera eficiente.
                td Una habitación no ocupada en una noche representa una pérdida irrecuperable.


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img14.svg").mx-auto
      .col-lg(data-aos="fade-right")
        p.mb-3 Además de las características generales que diferencian los servicios de los bienes, existen una serie de componentes esenciales que determinan la calidad del servicio y su adecuada prestación en el sector turístico. Estos elementos orientan la forma en que el cliente percibe la atención recibida y permiten evaluar el nivel de cumplimiento de sus expectativas.
        p.mb-0 Los componentes básicos del buen servicio son:


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-9.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-23")
          div(titulo="Seguridad")
            p.ms-5 Garantiza que el servicio se preste sin riesgos, peligros o incertidumbre para el cliente.
            p.ms-5 #[b Aplicaciones:] protocolos claros, información confiable y entornos seguros para el huésped.
          div(titulo="Credibilidad")
            p.ms-5 Implica actuar con honestidad, veracidad y coherencia entre lo que se ofrece y lo que se cumple.
            p.ms-5 #[b Aplicaciones:] evitar promesas falsas y brindar información transparente sobre servicios.
          div(titulo="Comunicación")
            p.ms-5 Consiste en transmitir información clara, oportuna y comprensible al cliente.
            p.ms-5 #[b Aplicaciones:] explicar servicios, tarifas y procesos de manera sencilla.
          div(titulo="Comprensión del cliente")
            p.ms-5 Capacidad de identificar y entender las necesidades, expectativas y preferencias del usuario.
            p.ms-5 #[b Aplicaciones:] personalizar el servicio según lo que el cliente desea y requiere.
          div(titulo="Accesibilidad")
            p.ms-5 Facilidad de contacto entre el cliente y la empresa a través de diversos canales.
            p.ms-5 #[b Aplicaciones:] líneas de atención, canales digitales y puntos físicos de información.
          div(titulo="Cortesía")
            p.ms-5 Trato amable, respetuoso y empático hacia el cliente.
            p.ms-5 #[b Aplicaciones:] atención cordial en recepción, restaurante y demás áreas.
          
      .col-md-6.col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema2/img16.png")

    .row.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img18.svg' alt='', style="width: 100px;").mx-auto
          p.mb-1.text-center #[b Profesionalismo:] dominio de conocimientos y habilidades necesarias para prestar el servicio.
          p.mb-0.text-center Aplicaciones: personal capacitado en procesos, protocolos y atención al cliente.

      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img19.svg' alt='', style="width: 100px;").mx-auto
          p.mb-1.text-center #[b Capacidad de respuesta:] disposición para atender solicitudes y resolver problemas de manera oportuna.
          p.mb-0.text-center Aplicaciones: responder rápidamente a quejas, solicitudes o inconvenientes.

      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img19.svg' alt='', style="width: 100px;").mx-auto
          p.mb-1.text-center #[b Fiabilidad:] capacidad de cumplir el servicio de manera consistente y sin errores.
          p.mb-0.text-center Aplicaciones: cumplimiento de reservas, horarios y condiciones ofrecidas.

      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .tarjeta.bg-fondo-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img20.svg' alt='', style="width: 100px;").mx-auto
          p.mb-1.text-center #[b Elementos tangibles:] condiciones físicas que respaldan el servicio (instalaciones, equipos, presentación).
          p.mb-0.text-center Aplicaciones: infraestructura adecuada, limpieza, uniformes y material informativo.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Tipos

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        p.mb-0 En el contexto del servicio turístico, es importante reconocer que cada cliente es único y posee características, necesidades y expectativas particulares. Por esta razón, la atención debe ser individualizada y orientada a brindar experiencias personalizadas. No obstante, existen rasgos comunes que permiten agrupar a los clientes en diferentes categorías, lo que facilita su comprensión y la adaptación del servicio.
             
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 2.
          span Criterios de clasificación de los tipos de clientes
        img.d-none.d-lg-flex(data-aos="fade-down", src="@/assets/curso/tema2/img22.svg", alt="La figura 2 describe la clasificación de los tipos de clientes a partir de diversos criterios: origen, nacionalidad, idioma, edad, género y actividad económica.").mx-auto
        img.d-lg-none(data-aos="fade-down", src="@/assets/curso/tema2/img22-m.svg", alt="La figura 2 describe la clasificación de los tipos de clientes a partir de diversos criterios: origen, nacionalidad, idioma, edad, género y actividad económica.").mx-auto
        figcaption Nota.  SENA, (2026).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-8.order-2.order-lg-1
        img(data-aos="fade-down", src="@/assets/curso/tema2/img23.png", alt="")
      .col-lg-10.col-md-12.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 Adicionalmente, es posible establecer tipologías basadas en aspectos más específicos como la personalidad, las actitudes frente al servicio o el colectivo al que pertenecen. Por ejemplo, algunos clientes pueden ser más exigentes, otros más flexibles o más orientados a la interacción social. Este tipo de clasificación resulta útil para anticipar comportamientos y definir estrategias de atención más efectivas.
        p.mb-0 En consecuencia, comprender los distintos tipos de clientes permite a los prestadores de servicios turísticos mejorar la calidad de la atención, diversificar la oferta y fortalecer la satisfacción del usuario, contribuyendo a una experiencia más coherente con sus necesidades y expectativas.


    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Estándares de servicio

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1
        .col-lg-7.p-4.order-2.order-lg-1(data-aos="fade-right")
          p.mb-0 Los estándares de servicio se definen como el conjunto de normas, lineamientos o criterios que establecen los requisitos mínimos para la correcta ejecución de un proceso, con el propósito de garantizar la calidad en la prestación del servicio. Estos estándares orientan de manera precisa el comportamiento esperado del personal y funcionan como referencia para evaluar el desempeño, asegurando coherencia y uniformidad en la atención al cliente.
        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema2/img24.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img25.png", alt="")
      .col-lg-9.col-md-12
        p.mb-3 En el sector turístico, los estándares permiten organizar y controlar los procesos, facilitando la identificación de posibles desviaciones en su ejecución. De esta manera, contribuyen al mejoramiento continuo del servicio, ya que posibilitan la aplicación oportuna de acciones correctivas frente a fallas o inconsistencias. Su implementación favorece la eficiencia operativa, la satisfacción del cliente y el cumplimiento de los objetivos organizacionales.

        .bg-fondo-9.px-lg-5.py-lg-4.px-4.py-3.br-15
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema2/img27.svg")
            .col-lg
              p.mb-0 Para su adecuada gestión, los establecimientos de alojamiento suelen apoyarse en herramientas como los manuales de funciones y procedimientos, así como en formatos y protocolos que estandarizan las actividades del servicio. Estos instrumentos permiten definir claramente las responsabilidades del personal, los tiempos de respuesta y las condiciones bajo las cuales se debe prestar el servicio, asegurando una experiencia consistente y de calidad para el usuario.
 
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 5.
          span Ejemplos de estándares de servicio en hotelería
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Área
                th Estándar de servicio
                th Descripción
                th Indicador de cumplimiento
            tbody
              tr
                td Recepción
                td Tiempo de atención en #[i check-in]
                td El proceso de registro del huésped debe realizarse de manera ágil y organizada.
                td #[i Check-in] realizado en máximo 5 minutos.
              tr
                td Recepción
                td Presentación del personal
                td El personal debe mantener una imagen profesional acorde a la política del hotel.
                td Uniforme limpio, completo y buena presentación personal.
              tr
                td Habitaciones
                td Limpieza y acondicionamiento
                td Las habitaciones deben entregarse limpias, ordenadas y en óptimas condiciones.
                td Habitación disponible y lista antes del horario de ingreso.
              tr
                td Alimentos y bebidas
                td Tiempo de servicio
                td Los pedidos deben ser entregados en un tiempo adecuado.
                td Servicio en mesa en máximo 15 - 20 minutos.
              tr
                td Servicio al cliente
                td Atención al huésped
                td El trato debe ser amable, respetuoso y oportuno.
                td Saludo, contacto visual y disposición de ayuda en cada interacción.
              tr
                td Mantenimiento
                td Respuesta a fallas
                td Las solicitudes de mantenimiento deben ser atendidas oportunamente.
                td Solución de incidencias en menos de 30 minutos (según complejidad).
              tr
                td Tecnología
                td Conectividad
                td El servicio de internet debe ser estable y accesible.
                td Cobertura #[i wifi] en todas las áreas del hotel.
              tr
                td Reservas
                td Confirmación de reservas
                td Toda reserva debe ser confirmada y registrada correctamente.
                td Confirmación enviada al cliente en menos de 24 horas.
              tr
                td Seguridad
                td Protocolos de seguridad
                td El hotel debe garantizar condiciones seguras para huéspedes y personal.
                td Cumplimiento de protocolos y señalización visible.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 A continuación, lo invitamos a consultar el siguiente video para profundizar sus conocimientos sobre las técnicas de atención al cliente y recepción hotelera.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Q5QiDRxYVo0" target="_blank")
                  span Ver enlace
                  i.fas.fa-play-circle



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
