<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-12.mb-4
        p.mb-0 El componente formativo Servicio, habilidades de comunicación y técnicas de ventas aborda los elementos conceptuales y operativos necesarios para comprender la interacción con el cliente en el sector turístico. A partir del estudio de los usuarios de servicios turísticos, sus características, motivaciones, hábitos de consumo y la incidencia de la cultura en su comportamiento, se establece una base para identificar sus necesidades y relacionarlas con la oferta de servicios. Asimismo, se desarrollan los fundamentos del servicio al cliente, sus características, tipos y estándares, orientados a garantizar una atención de calidad.
        
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        img(src="@/assets/curso/intro/img03.png").mx-auto
      .col-lg-9.order-2
        .bg-fondo-6.px-lg-5.py-lg-4.px-4.py-3.br-15
          .col-12.col-md-12.p-lg-3.p-0
            p.mb-0 De igual forma, el componente integra la comunicación como eje central del servicio, abordando sus tipos, técnicas, canales y habilidades comunicativas. Finalmente, se articulan los procesos de negociación, cotización y venta, fortaleciendo competencias para gestionar relaciones con los clientes, apoyar la toma de decisiones y participar de manera efectiva en los procesos de atención y comercialización en el sector de alojamiento.
     

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Servicio, habilidades de comunicación y técnicas de ventas aborda los elementos conceptuales y operativos necesarios para comprender la interacción con el cliente en el sector turístico. A partir del estudio de los usuarios de servicios turísticos, sus características, motivaciones, hábitos de consumo y la incidencia de la cultura en su comportamiento, se establece una base para identificar sus necesidades y relacionarlas con la oferta de servicios. Asimismo, se desarrollan los fundamentos del servicio al cliente, sus características, tipos y estándares, orientados a garantizar una atención de calidad. De igual forma, el componente integra la comunicación como eje central del servicio, abordando sus tipos, técnicas, canales y habilidades comunicativas. Finalmente, se articulan los procesos de negociación, cotización y venta, fortaleciendo competencias para gestionar relaciones con los clientes, apoyar la toma de decisiones y participar de manera efectiva en los procesos de atención y comercialización en el sector de alojamiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
