<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-9.mb-4.mb-lg-0
        p El componente formativo Servicio, habilidades de comunicación y técnicas de ventas se reconoce como un eje fundamental en la industria hotelera y turística, en tanto la calidad del servicio influye directamente en la satisfacción del cliente, su fidelización y la competitividad del establecimiento. En este contexto, comprender al cliente como usuario de servicios turísticos implica analizar sus características, necesidades, motivaciones de compra y hábitos de consumo, así como reconocer la influencia de la cultura en su comportamiento. A partir de ello, se abordan los principios, tipos y estándares del servicio al cliente, orientados a una atención pertinente y de calidad.

        .row.align-items-center.mb-0
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/intro/img01.svg").mx-auto
          .col-lg
            p.mb-0 De igual forma, el componente promueve el desarrollo de habilidades en comunicación, negociación y ventas, esenciales para una interacción efectiva con el cliente y para la comercialización de servicios. A lo largo de los contenidos, se estudian los tipos de comunicación, las habilidades comunicativas, los canales de atención y las técnicas de negociación, cotización y venta, favoreciendo una comprensión integral de los procesos de atención y asesoría. Así, se fortalecen capacidades para identificar necesidades, formular propuestas de valor y gestionar relaciones con el cliente, aportando al logro de los objetivos organizacionales en el sector de servicios de alojamiento.
      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/intro/img02.png" alt="")

      

</template>

<script>
export default {
  name: 'Introduccion',
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
