<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cotización

  
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cotización constituye un proceso fundamental en la gestión comercial de los servicios turísticos, ya que representa el primer acercamiento formal entre el cliente y la oferta del establecimiento. A través de ella, se presenta una propuesta que integra información clara sobre precios, condiciones y características del servicio, permitiendo al cliente evaluar alternativas y tomar decisiones informadas. En este sentido, la cotización no solo cumple una función informativa, sino también estratégica, al influir en la percepción de calidad, confianza y profesionalismo del servicio ofrecido.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Definición

    .row.mb-5.justify-content-center
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-3 La cotización es el proceso mediante el cual se presenta al cliente una propuesta formal de servicios, especificando condiciones, características y costos asociados. En el contexto turístico, constituye una herramienta clave para orientar la decisión de compra, ya que permite al cliente conocer las opciones disponibles y evaluar su conveniencia según sus necesidades y presupuesto.
        .cajon.bg-color-c3.p-4
          p.mb-0 Una cotización bien elaborada no solo informa precios, sino que comunica valor, claridad y profesionalismo, influyendo directamente en la percepción del servicio y en la probabilidad de cierre de la venta.

      .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img02.png", alt="")


    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos


    .row.mb-5
      .col-lg-5(data-aos="fade-right")
        p.mb-0 Las cotizaciones pueden variar según el tipo de servicio, el cliente y el canal de atención. Entre las más comunes se encuentran:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-8.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img03.png")
      .col-lg-9
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12")
          .tarjeta.bg-fondo-2.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center.mb-3 Cotización básica
            p.text-center.mb-0 Incluye información general del servicio, tarifas y condiciones principales. Se utiliza en consultas rápidas o servicios estándar.

          .tarjeta.bg-fondo-2.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img07.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center.mb-3 Cotización detallada
            p.text-center.mb-0 Presenta información completa del servicio, incluyendo desglose de costos, características, condiciones y políticas. Es común en paquetes turísticos o servicios corporativos.

          .tarjeta.bg-fondo-2.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img08.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center.mb-3 Cotización personalizada
            p.text-center.mb-0 Se ajusta a necesidades específicas del cliente, considerando preferencias, fechas, número de personas y requerimientos especiales.

          .tarjeta.bg-fondo-2.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img09.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center.mb-3 Cotización digital
            p.text-center.mb-0 Se envía a través de medios electrónicos como correo o plataformas digitales, facilitando la interacción y el seguimiento.


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Procedimiento

    .row.mb-5.justify-content-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        p.mb-3 El procedimiento de cotización corresponde al conjunto de pasos que se siguen para elaborar y presentar una propuesta de servicios ajustada a las necesidades del cliente. Su correcta ejecución es fundamental, ya que de ella depende la claridad de la información, la percepción del servicio y la posibilidad de concretar la venta.
        p.mb-0 El proceso de cotización debe seguir una estructura clara para garantizar efectividad:

      .col-lg-8(data-aos="fade-right")
        .bg-fondo-14.px-lg-5.py-lg-4.px-4.py-3.br-15
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema5/img21.svg")
            .col-lg
              ul.lista-ul.lista--vineta
                li 
                  i.lista-ul__vineta 
                  | Identificar las necesidades del cliente.
                li 
                  i.lista-ul__vineta 
                  | Recopilar información relevante (fechas, número de personas, tipo de servicio).
                li 
                  i.lista-ul__vineta 
                  | Seleccionar las opciones disponibles.
                li 
                  i.lista-ul__vineta 
                  | Elaborar la propuesta con claridad y precisión.
                li 
                  i.lista-ul__vineta 
                  | Comunicar la cotización de manera oportuna.
                li 
                  i.lista-ul__vineta 
                  | Realizar seguimiento para resolver dudas o ajustar la propuesta.

    .bg-full-width.bg-fondo-7.px-5.py-4.mb-5(data-aos="fade-right")
      .container
        .tarjeta.row.justify-content-center.align-items-center.mb-0.p-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.mb-4.mb-lg-0
              img(src='@/assets/curso/tema5/img12.png', alt='')
            .col-lg-9.col-md-12
              p.mb-3 Ciclo de una cotización
              SlyderF(columnas="col-lg-6 col-xl-4 col-md-12 col-sm-12")
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img13.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 1.
                  p.text-center Solicitud inicial por parte del cliente.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img14.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 2.
                  p.text-center Recepción y registro formal de la solicitud (#[i Request for proposal] - RFP).

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img15.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 3.
                  p.text-center Respuesta profesional al cliente.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img16.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 4.
                  p.text-center Confirmación por parte del cliente y pago o depósito inicial para reservar.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img17.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 5.
                  p.text-center Gestión de grupos (#[i Rooming list]) para detallar ocupantes y distribuir habitaciones.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img18.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 6.
                  p.text-center Emisión de factura proforma.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img19.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 7.
                  p.text-center Transferencia de saldo pendiente según condiciones pactadas.

                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/img20.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center.text-bold Paso 8.
                  p.text-center Liquidación final, conciliación de pagos y cierre administrativo.
    

</template>

<script>
export default {
  name: 'Tema5',
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
