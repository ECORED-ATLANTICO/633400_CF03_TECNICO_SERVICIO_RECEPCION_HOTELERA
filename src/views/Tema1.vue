<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Usuarios de servicios turísticos
  
    .container(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5.bg-color-1
        .col-lg-7.p-4
          p.mb-0   Los usuarios de servicios turísticos son las personas que hacen uso de los establecimientos, instalaciones y recursos del sector, así como de los bienes y servicios ofrecidos por empresas y profesionales de la actividad turística. Su participación constituye un elemento central en la dinámica del sistema turístico, ya que orienta la prestación del servicio y condiciona la oferta en función de sus necesidades, expectativas y comportamientos de consumo.
        .col-lg-5.p-0
          img(src="@/assets/curso/tema1/img01.png")


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8.order-2.order-lg-1
        img(src="@/assets/curso/tema1/img02.png")
      .col-lg-9.col-md-12.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 En este sentido, los usuarios no solo interactúan con los servicios, sino que también se encuentran amparados por un marco normativo que regula sus derechos y deberes. Estos aspectos garantizan condiciones adecuadas de calidad, seguridad y transparencia en la prestación del servicio, al tiempo que promueven una relación equilibrada entre el cliente y los prestadores turísticos. Comprender el rol del usuario resulta fundamental para diseñar experiencias de servicio pertinentes y orientadas a la satisfacción del cliente.
        p.mb-0 En el contexto de la prestación de servicios turísticos, resulta fundamental reconocer que la relación entre el usuario y el prestador se encuentra regulada por un marco normativo que establece derechos y deberes para ambas partes. Este conjunto de disposiciones busca garantizar condiciones de calidad, seguridad, información veraz y protección al consumidor, al tiempo que promueve prácticas responsables por parte del usuario. En consecuencia, el conocimiento de este marco legal permite fortalecer una prestación del servicio más equitativa, transparente y orientada al cumplimiento de estándares en el sector turístico.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-11.col-md-12
        p.mb-0 Los usuarios de servicios turísticos pueden clasificarse de acuerdo con sus motivaciones, comportamientos y formas de interacción con la experiencia de viaje. Entre los principales tipos se encuentran los clientes, turistas, viajeros y pasajeros, cada uno con características particulares que inciden en la forma en que demandan y utilizan los servicios.
        
        
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cliente")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-md-12.mb-4.mb-lg-0
                p.mb-0 Es toda persona que presenta una necesidad, ya sea latente o manifiesta, y busca satisfacerla mediante la adquisición de un producto o servicio turístico. Desde una perspectiva económica, se entiende como quien accede de manera frecuente u ocasional a la oferta de una empresa o prestador, evaluando aspectos como calidad, precio y condiciones del servicio.
              .col-lg-5.col-md-8
                img(src="@/assets/curso/tema1/img03.png")

          .tarjeta.color-acento-botones--borde.p-4(titulo="Turista")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-md-12.mb-4.mb-lg-0
                p.mb-0 Se caracteriza por planificar su viaje con anticipación, definiendo itinerarios, reservas y actividades antes de su desplazamiento. Generalmente, busca seguridad, organización y comodidad, manteniendo cierta cercanía con sus hábitos cotidianos. Aunque presenta altas expectativas frente a la experiencia, su nivel de interacción con la comunidad local suele ser limitado, privilegiando entornos controlados y previamente estructurados.
              .col-lg-5.col-md-8
                img(src="@/assets/curso/tema1/img04.png")

          .tarjeta.color-acento-botones--borde.p-4(titulo="Viajero")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-md-12.mb-4.mb-lg-0
                p.mb-0 Asume el desplazamiento con mayor sensibilidad y apertura a la aventura. Aunque pueda realizar una planificación básica, tiende a adaptar sus recorridos en las circunstancias del entorno. Se interesa por lo desconocido, lo cultural y auténtico, mostrando un mayor nivel de involucramiento con la comunidad local y una disposición a salir de su zona de #[i confort] para enriquecer su experiencia.
              .col-lg-5.col-md-8
                img(src="@/assets/curso/tema1/img05.png")

          .tarjeta.color-acento-botones--borde.p-4(titulo="Pasajero")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-md-12.mb-4.mb-lg-0
                p.mb-0 Es la persona que se traslada de un lugar a otro mediante un medio de transporte, sin ser parte de la tripulación. En el contexto turístico, este rol suele ser asumido por los usuarios durante los desplazamientos hacia y desde el destino. En la industria, es común el uso del término #[i pax] para referirse a este tipo de usuario.
              .col-lg-5.col-md-8
                img(src="@/assets/curso/tema1/img06.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-11.col-md-12
        p.mb-0 En síntesis, una misma persona puede asumir distintos roles según el contexto y el momento del viaje, lo que evidencia la importancia de comprender estos perfiles para adaptar la prestación del servicio a sus necesidades y expectativas.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.col-md-12
        p.mb-0 En Colombia existe un marco normativo que regula a los usuarios de servicios turísticos. La siguiente tabla resume dicho marco normativo, destaca aspectos relevantes y describe la relación con dichos usuarios: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 1.
          span Marco normativo colombiano para usuarios de servicios turísticos
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Norma
                th Nombre
                th Aspectos relevantes
                th Relación con el usuario turístico
            tbody
              tr
                td Ley 300 de 1996
                td Ley General de Turismo
                td Regula la actividad turística en Colombia y establece principios para su desarrollo.
                td Define derechos y deberes de los actores del sector, incluyendo la protección al usuario.
              tr
                td Ley 1101 de 2006
                td Modificación de la Ley General de Turismo
                td Fortalece el financiamiento y promoción del turismo.
                td Mejora la calidad del servicio turístico, beneficiando al usuario final.
              tr
                td Ley 1558 de 2012
                td Reforma a la Ley de Turismo
                td Impulsa la competitividad, sostenibilidad y calidad del turismo.
                td Garantiza mejores condiciones de servicio, seguridad y formalidad para el usuario.
              tr
                td Ley 1480 de 2011
                td Estatuto del Consumidor
                td Regula la protección de los consumidores en Colombia.
                td Establece derechos como información veraz, calidad del servicio y protección frente a publicidad engañosa.
              tr
                td Decreto 1074 de 2015
                td Decreto Único Reglamentario del Sector Comercio, Industria y Turismo
                td Compila la normativa del sector comercio y turismo.
                td Regula aspectos operativos que impactan la prestación del servicio al usuario.
              tr
                td NTS (Normas Técnicas Sectoriales)
                td Normas de calidad turística
                td Establecen estándares de calidad para prestadores turísticos.
                td Garantizan condiciones de calidad, seguridad y servicio para el usuario.
              tr
                td Registro Nacional de Turismo (RNT)
                td Requisito obligatorio para prestadores
                td Obliga a los prestadores a estar registrados formalmente.
                td Protege al usuario al asegurar que el servicio proviene de empresas legalmente constituidas.

        

    .row.justify-content-center.mb-0
      .col-12.col-lg-10.mb-0.col-md-12.bg-color-1-degrade.p-4.br-15
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img07.svg", class="img-fluid", style="max-width: 100px").mx-auto
          .col-lg-10

            .row.justify-content-center.mb-4
              .col-12.col-lg-9.mb-4.mb-lg-0
                p.mb-0 Para ampliar sus conocimientos sobre la diferencia entre turista y viajero, lo invitamos a leer el siguiente artículo:
              .col-lg-3.col-md-5.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.entornoturistico.com/diferencias-entre-un-turista-y-un-viajero/" target="_blank")
                  span Abrir enlace
                  i.fas.fa-link

            .row.justify-content-center.align-items-center
              .col-12.col-lg-9.mb-4.mb-lg-0
                p.mb-0 Asimismo, para profundizar su conocimiento sobre los tipos de turismo, lo invitamos a consultar la página web de la experta Mabel Cajal:
              .col-lg-3.col-md-5.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.mabelcajal.com/tipos-de-turismo/" target="_blank")
                  span Abrir enlace
                  i.fas.fa-link


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Características


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img08.png",).mx-auto

      .col-lg-9
        .bg-fondo-1.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0.ms-lg-5.ms-0 Los usuarios de servicios turísticos presentan características particulares que influyen en su comportamiento y en la forma en que interactúan con la oferta del sector. En términos generales, una gran parte de los viajeros proviene de entornos urbanos y busca, durante sus periodos de descanso, alejarse de la rutina cotidiana. Este desplazamiento responde a diversas motivaciones, entre las que se destacan el interés cultural, el cuidado de la salud, el deseo de cambio, las compras, el descanso, la práctica de actividades recreativas o deportivas y la búsqueda de experiencias significativas.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-27.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Durante el viaje, el usuario suele experimentar una modificación en su conducta habitual, sin que ello implique un cambio en su personalidad. La experiencia turística despierta la curiosidad, incrementa la sensibilidad y amplía la disposición para interactuar con nuevos entornos, culturas y formas de vida. Esta apertura favorece una mayor receptividad frente a las experiencias ofrecidas, lo que incide directamente en la percepción del servicio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p.mb-3 En este contexto, la diversidad de motivaciones y expectativas hace necesario que la oferta turística sea flexible y variada. La promoción de los servicios resulta más efectiva cuando presenta alternativas que responden a diferentes intereses dentro de una misma experiencia de viaje, permitiendo al usuario elegir opciones acordes con sus preferencias y necesidades.
        p.mb-0 Las características habituales de los usuarios turísticos más comunes son:



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img11.png",).mx-auto
      
      .col-lg-9.col-md-12(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img13.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Motivación diversa:] viajan por descanso, cultura, salud, ocio, compras o deporte. Su expectativa de servicio es alta diferenciación según su interés.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img14.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Búsqueda de cambio:] desean salir de la rutina y vivir experiencias distintas. Por ello, el servicio que esperan recibir debe generarles experiencias memorables y novedosas.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img15.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Alta expectativa:] esperan recibir calidad, cumplimiento y satisfacción en el servicio. Por lo que, para el establecimiento de turismo, cumplir lo prometido y gestionar sus expectativas es clave.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img16.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Conducta flexible:] modifican hábitos durante el viaje tales como horarios, consumo, y actividades. Por ello se requiere adaptabilidad en la prestación del servicio.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img17.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Curiosidad y apertura:] muestran interés por conocer nuevas culturas y entornos. Las experiencias culturales y locales suelen ser sus actividades preferidas.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img18.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Sensibilidad al servicio:] perciben con mayor intensidad la atención recibida, por lo que el trato y el servicio al cliente impacta directamente en su satisfacción.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img19.svg' alt='', style="width: 100px;").mx-auto
            p.text-center #[b Capacidad de elección:] comparan opciones antes de tomar cualquier decisión. Por ello, es importante ofrecer variedad y claridad en la información al momento de presentar los servicios turísticos.

          
    .bg-full-width.bg-fondo-3.px-5.py-4.mb-3
      .container(data-aos="fade-right")
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Ejemplo aplicado de transformación del comportamiento durante la experiencia turística
            p.mb-3 Carlos es un profesional que vive en Medellín y trabaja bajo una rutina estricta: se levanta temprano, sigue horarios definidos, consume alimentos rápidos y limita su interacción social al entorno laboral. Durante sus vacaciones decide viajar a un destino rural en el Eje Cafetero.
            p.mb-3 Una vez en el destino, su comportamiento habitual comienza a cambiar. Se levanta más temprano, no por obligación laboral, sino para disfrutar del paisaje y participar en actividades como caminatas ecológicas. Modifica sus hábitos alimenticios al consumir productos locales y preparaciones tradicionales que no forman parte de su dieta cotidiana. Además, muestra mayor disposición a interactuar con personas desconocidas, como guías turísticos y habitantes de la región, interesándose por sus costumbres y formas de vida.

            .row.align-items-center
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema1/img21.svg").mx-auto
              .col-lg
                p.mb-0 Carlos también reduce el uso de dispositivos tecnológicos, priorizando la experiencia directa con el entorno. Se muestra más relajado, flexible con los horarios y abierto a actividades no planificadas, como participar en una recolección de café o asistir a eventos culturales locales.
          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema1/img22.png", alt="").img-fluid

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Teoría de las necesidades


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0
        p.mb-3 La teoría de las necesidades, propuesta por Abraham H. Maslow (1943), plantea que el comportamiento humano está motivado por la búsqueda constante de satisfacción de necesidades de carácter fisiológico, psicológico y social. Este autor organizó dichas necesidades en una estructura jerárquica, en la cual las de nivel inferior deben satisfacerse antes de que emerjan las de nivel superior. En este sentido, a medida que una necesidad es cubierta, pierde fuerza motivacional y da paso a nuevas necesidades más complejas.
        p.mb-0 Esta jerarquía se representa comúnmente a través de una pirámide que clasifica las necesidades en cinco niveles.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema1/img23.png", alt="").img-fluid
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-12.order-2.order-lg-1
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 1.
          span Pirámide de Maslow
        img.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema1/img24.svg", alt="Se detalla en la figura los 5 niveles de necesidades de la pirámide de Maslow: Autorrealización, Estima y reconocimiento, Sociales, Seguridad, Fisiológicas.")
        img.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img25.svg", alt="Se detalla en la figura los 5 niveles de necesidades de la pirámide de Maslow: Autorrealización, Estima y reconocimiento, Sociales, Seguridad, Fisiológicas.")
        figcaption Nota. SENA, (2026).
      
      .col-lg-6.col-md-12.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-3 En la base se encuentran las necesidades fisiológicas, esenciales para la supervivencia, como la alimentación, el descanso y la salud. Le siguen las necesidades de seguridad, relacionadas con la estabilidad física, económica y emocional. En un nivel superior se ubican las necesidades sociales, que incluyen la pertenencia, el afecto y las relaciones interpersonales.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img26.svg").mx-auto
          .col-lg
            p.mb-0 Posteriormente, se encuentran las necesidades de estima o reconocimiento, vinculadas con la autoestima, la confianza, la independencia y el logro personal. En la cima de la pirámide están las necesidades de autorrealización, que hacen referencia al desarrollo pleno del potencial humano y a la búsqueda de metas personales significativas.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img27.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Desde la perspectiva del #[i marketing] turístico, esta teoría permite comprender qué motiva a los usuarios a adquirir un servicio. En este contexto, Philip Kotler (1983) define las necesidades como una sensación de carencia, ya sea de tipo fisiológico o psicológico. A partir de ellas surgen los deseos, que representan la forma en que una persona decide satisfacer una necesidad, influenciados por factores culturales, sociales y personales. Cuando estos deseos se respaldan con capacidad adquisitiva, se convierten en demanda.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-2.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img28.png",).mx-auto
      .col-lg-10
        .bg-fondo-1.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0.ms-lg-5.ms-0 La demanda turística se entiende como el conjunto de bienes y servicios que los usuarios están dispuestos a adquirir en un destino determinado. Esta no solo incluye el consumo de servicios, sino también la vivencia de experiencias. Factores como el ingreso económico, el tiempo disponible, la accesibilidad, la oferta de transporte y la diversidad de productos turísticos influyen directamente en su comportamiento. En consecuencia, comprender la relación entre necesidad, deseo y demanda resulta fundamental para diseñar servicios que respondan de manera efectiva a las expectativas del usuario turístico.


    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12(data-aos="fade-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a consultar el siguiente video para ampliar sus conocimientos sobre la demanda turística.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=gT5_r8rQqFU" target="_blank")
                  span Ver enlace
                  i.fas.fa-play-circle

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Requerimiento de solicitudes especiales

    
    .bg-full-width.bg-fondo-4.px-5.py-4
      img(src="@/assets/curso/tema1/img32.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text En la prestación de servicios de alojamiento, es frecuente que los usuarios presenten requerimientos o solicitudes especiales que responden a sus necesidades particulares, expectativas o condiciones específicas de viaje. En este contexto, el personal del establecimiento cumple un papel fundamental, ya que su capacidad de respuesta y toma de decisiones incide directamente en la satisfacción del huésped y en la calidad del servicio ofrecido.


    .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
      .col-lg-2.col-md-6.mb-4.mb-lg-0
        img(src="@/assets/curso/tema1/img33.png",).img-fluid
      .col-lg-10
        p.mb-3 Entre los requerimientos más comunes se encuentran la flexibilidad en los horarios de ingreso y salida, la ubicación estratégica del establecimiento y la facilidad en los procesos de reserva, la disponibilidad de espacios para reuniones de negocios, el acceso a conectividad inalámbrica (#[i wifi]) y la atención personalizada. Estas solicitudes reflejan la diversidad de perfiles de los usuarios y la necesidad de adaptar el servicio a diferentes contextos, como el turismo de ocio o de negocios.

        .row.justify-content-center.align-items-center
          .col-lg
            p.mb-3 Si bien los establecimientos procuran atender estas solicitudes, su cumplimiento debe enmarcarse dentro de las políticas internas, la disponibilidad de recursos y las condiciones operativas. Esto permite equilibrar la satisfacción del cliente con la sostenibilidad del servicio, evitando generar costos o compromisos que excedan la capacidad del establecimiento. En consecuencia, la gestión adecuada de los requerimientos especiales se convierte en un elemento clave para ofrecer un servicio eficiente, flexible y orientado al cliente.
            p.mb-0 En la siguiente tabla se muestran algunos requerimientos comunes en los servicios de alojamiento:

          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img34.svg", class="img-fluid")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 2.
          span Requerimientos comunes en servicios de alojamiento
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Tipo de requerimiento
                th Descripción
                th Área involucrada
                th Consideración operativa
            tbody
              tr
                td Flexibilidad de horarios
                td Solicitud de #[i check-in] temprano o #[i check-out] tardío.
                td Recepción
                td Sujeto a disponibilidad de habitaciones.
              tr
                td Conectividad
                td Acceso a #[i wifi] estable y de alta velocidad.
                td Sistemas / Recepción
                td Garantizar cobertura y soporte técnico.
              tr
                td Espacios de trabajo
                td Salas de juntas o áreas para reuniones.
                td Administración / Eventos
                td Requiere reserva previa.
              tr
                td Ubicación y transporte
                td Cercanía a puntos de interés o traslado.
                td Recepción / #[i Concierge]
                td Coordinación con proveedores externos.
              tr
                td Atención personalizada
                td Preferencias del huésped (alimentación, habitación, trato).
                td Todo el personal
                td Registro previo de preferencias.
              tr
                td Servicios adicionales
                td Alimentación, lavandería, turismo, <i>tours</i>.
                td Alimentos y bebidas / Turismo
                td Puede implicar costos adicionales.
              tr
                td Accesibilidad
                td Adaptaciones para personas con movilidad reducida.
                td Operaciones
                td Cumplimiento de normativas.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img07.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a consultar el siguiente enlace para profundizar en el tema de calidad y atención al cliente en empresas turísticas:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7o0CLxirA9g" target="_blank")
                  span Ver enlace
                  i.fas.fa-play-circle

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Motivaciones de compra

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-12
        p.mb-3 Las decisiones de compra en el ámbito turístico están influenciadas por múltiples factores personales, sociales y económicos que orientan la elección de un destino o servicio. Los usuarios no solo buscan satisfacer una necesidad básica de desplazamiento, sino que responden a motivaciones más amplias relacionadas con el descanso, el placer, los negocios, el desarrollo personal o la búsqueda de nuevas experiencias. En este sentido, el comportamiento del consumidor turístico se configura a partir de sus valores, estilo de vida, nivel socioeconómico y disponibilidad de tiempo y recursos (Kotler & Keller, 2016).
        p.mb-0 Algunos factores que influyen en la decisión de la compra turística son los siguientes:


    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Motivaciones personales")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.order-2.order-lg-1
                p.mb-0 Son los intereses, deseos o razones individuales para viajar.<br><br><b>Ejemplo en turismo:</b> viajar por descanso, aventura o cultura.
              .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img35.svg", style="max-width: 100px !important").mx-auto
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Nivel socioeconómico")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.order-2.order-lg-1
                p.mb-0 Es la capacidad económica que condiciona el tipo de servicio elegido.<br><br><b>Ejemplo en turismo:</b> elección entre hotel económico o de lujo.
              .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img36.svg", style="max-width: 100px !important").mx-auto
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Tiempo disponible")
            .row.justify-content-center.align-items-center  
              .col-lg-8.col-md-12.order-2.order-lg-1
                p.mb-0 Es la cantidad de tiempo libre que tiene el turista para realizar el viaje.<br><br><b>Ejemplo el turismo:</b> viajes cortos de fin de semana versus vacaciones largas.
              .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img37.svg", style="max-width: 100px !important").mx-auto
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Influencia cultural y social")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.order-2.order-lg-1
                p.mb-0 Son las costumbres, entorno social y recomendaciones que influyen directamente en la decisión del cliente.<br><br><b>Ejemplo en turismo:</b> viajar a destinos populares entre amigos o viajar a donde la familia.
              .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img38.svg", style="max-width: 100px !important").mx-auto
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Acceso a la información")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.order-2.order-lg-1
                p.mb-0 Se resume en el uso de Internet, redes sociales y plataformas digitales para validar o confirmar la decisión de compra.<br><br><b>Ejemplo en turismo:</b> consultar reseñas en páginas como Booking o TripAdvisor.
              .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img39.svg", style="max-width: 100px !important").mx-auto

      .col-lg-4.col-md-8
        img(src="@/assets/curso/tema1/img40.png")



    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12.col-md-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img41.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Percepción de calidad] 
            p.mb-3.text-center Valoración del servicio por parte del cliente antes y después de la compra.
            p.mb-0.text-center Ejemplo en turismo: elegir un hotel con buenas calificaciones.
          
          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img42.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Experiencias previas] 
            p.mb-3.text-center Vivencias anteriores que influyen en las decisiones futuras de compra.
            p.mb-0.text-center Ejemplo en turismo: volver a un destino ya visitado.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img43.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Promoción y #[i marketing]] 
            p.mb-3.text-center Publicidad como ofertas y estrategias comerciales consultadas o que impactan al cliente.
            p.mb-0.text-center Ejemplo en turismo: descuentos obtenidos en paquetes turísticos.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img44.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Accesibilidad y transporte] 
            p.mb-3.text-center Facilidad para llegar al destino escogido.
            p.mb-0.text-center Ejemplo en turismo: disponibilidad de vuelos directos.

          .tarjeta.bg-fondo-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img45.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Tecnología] 
            p.mb-3.text-center Herramientas digitales para buscar, comparar y comprar.
            p.mb-0.text-center Ejemplo en turismo: reservas en línea y #[i apps] de viaje.


    .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
      .col-lg-3.col-md-6.order-2.order-lg-1
        img(src="@/assets/curso/tema1/img46.png",).img-fluid
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 Asimismo, elementos como el acceso a la tecnología, la información disponible y las condiciones del entorno influyen en la forma en que el usuario evalúa las opciones y toma decisiones. La experiencia turística se concibe como un espacio de satisfacción de necesidades y expectativas, donde el usuario anticipa beneficios concretos antes de realizar la compra. De acuerdo con Ford (2001), los turistas construyen expectativas sobre lo que el servicio puede ofrecerles, las cuales serán determinantes en su nivel de satisfacción.
        .row.justify-content-center.align-items-center
          .col-lg
            p.mb-0 Por otra parte, la percepción juega un papel clave en la evaluación del servicio, ya que el usuario no solo valora lo que recibe, sino la manera en que lo experimenta. En este sentido, la calidad percibida, la atención recibida y la coherencia entre lo ofrecido y lo entregado influyen directamente en la decisión de compra y en la posibilidad de recompra. Tal como señalan autores como Middleton y Clarke (2001), la motivación turística se encuentra estrechamente vinculada a factores emocionales y experienciales que van más allá del producto en sí.

          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img47.svg", class="img-fluid")

    .row.justify-content-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c3.p-4
          p.mb-0 En consecuencia, comprender las motivaciones de compra permite a los prestadores de servicios turísticos diseñar ofertas más ajustadas a las necesidades del cliente, generando propuestas de valor diferenciadas que favorezcan la elección del destino y la satisfacción del usuario.


    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Hábitos y tendencias de consumo
    
    .container(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5.bg-color-9
        .col-lg-7.p-4.order-2.order-lg-1
          p.mb-0 En la industria hotelera, comprender los hábitos y tendencias de consumo de los usuarios turísticos es fundamental para ofrecer servicios pertinentes y competitivos. El objetivo principal de los establecimientos de alojamiento es identificar las expectativas y necesidades de los clientes, no solo para satisfacerlas, sino también para superarlas. Sin embargo, estas expectativas no son estáticas, sino que evolucionan constantemente, lo que obliga a las empresas a analizar de manera continua el comportamiento del consumidor.
        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema1/img48.png")


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        img(src="@/assets/curso/tema1/img49.png")
      .col-lg-9
        p.mb-3 Este análisis debe abordarse desde la perspectiva del cliente como consumidor, lo que permite identificar patrones de comportamiento, preferencias y tendencias que influyen en sus decisiones de compra. A partir de este conocimiento, los establecimientos pueden diseñar productos y experiencias más ajustadas al perfil del usuario, facilitando no solo la satisfacción del cliente, sino también el incremento del consumo y su fidelización.

        .bg-fondo-5.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-3
          p.mb-0 En este contexto, cuanto mayor sea el conocimiento del cliente, más fácil será anticipar sus necesidades, ofrecer servicios personalizados y fortalecer la relación con la empresa. Este enfoque permite generar valor agregado y construir experiencias significativas que impactan positivamente la percepción del servicio.

        p.mb-0 Actualmente, la industria hotelera se ve influenciada por diversas tendencias que orientan la forma en que los usuarios consumen los servicios. Entre las más relevantes se destacan:
    


    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 3.
          span Tendencias actuales en la industria hotelera
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Tendencia
                th Descripción
            tbody
              tr
                td Experiencia ágil y sencilla
                td Los clientes valoran procesos rápidos, cómodos y eficientes en áreas como reservas, recepción y atención durante la estadía.
              tr
                td Personalización del servicio
                td Se busca generar conexiones emocionales con el cliente mediante un trato cercano y adaptado a sus preferencias.
              tr
                td Uso de tecnología
                td La digitalización facilita el acceso a información, reservas en línea, comparación de precios y comunicación inmediata.
              tr
                td Geolocalización y comunicación en tiempo real
                td Permite ofrecer servicios, promociones o información relevante según la ubicación del cliente.
              tr
                td Estrategias de valor agregado
                td Más allá del precio, se prioriza ofrecer beneficios adicionales que enriquezcan la experiencia del usuario.
              tr
                td Enfoque en deseos y motivaciones
                td Los servicios se diseñan según intereses y experiencias buscadas, más que por características demográficas del cliente.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a consultar el siguiente video, para profundizar sobre la importancia de las encuestas de satisfacción al cliente en agencias de viajes:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7TK6GtIvw8U" target="_blank")
                  span Ver enlace
                  i.fas.fa-play-circle


    separador
    
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 Incidencia de la cultura en el comportamiento 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3 La cultura constituye uno de los factores más influyentes en el comportamiento del usuario turístico, ya que condiciona la forma en que las personas perciben, interpretan y toman decisiones frente a los servicios. Se entiende como el conjunto de valores, normas, creencias y conductas compartidas por un grupo social, las cuales orientan las expectativas y preferencias de consumo. En este sentido, la cultura no solo define qué se considera deseable o adecuado, sino también cómo se experimenta el servicio turístico.
        p.mb-0 En el proceso de toma de decisiones, los individuos suelen guiarse por grupos de referencia, es decir, por personas o colectivos con los que se identifican y cuyos valores y opiniones influyen en sus elecciones. Estos grupos pueden estar conformados por familiares, amigos o comunidades con intereses similares, y desempeñan un papel clave en la selección de destinos, servicios y experiencias.

      .col-lg-3.col-md-8
        img(src="@/assets/curso/tema1/img51.png")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-fondo-5.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-right")
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img52.svg")
            .col-lg
              p.mb-0 Adicionalmente, factores personales como la edad, el género y el nivel de formación académica inciden en la percepción de lo que constituye una experiencia turística satisfactoria. A esto se suman elementos como la clase social, la composición familiar, los valores individuales, la personalidad y el estilo de vida, los cuales influyen directamente en las decisiones de consumo y en la forma de interactuar con los servicios de alojamiento.

    .row.justify-content-center.mb-5
      .col-lg-12
        p.mb-0 En consecuencia, comprender la incidencia de la cultura en el comportamiento del usuario permite a los prestadores de servicios turísticos diseñar ofertas más pertinentes, respetuosas de la diversidad y ajustadas a las expectativas de diferentes perfiles de clientes, fortaleciendo así la calidad del servicio y la satisfacción del usuario.


    .bg-full-width.bg-fondo-3.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta(data-aos="fade-right")
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-9.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Caso práctico: influencia cultural en la experiencia del servicio
              p.mb-3 Un hotel en Cartagena recibe a dos huéspedes internacionales: Anna, proveniente de Alemania, y Carlos, de México. Ambos llegan al mismo establecimiento con fines turísticos, pero sus expectativas y comportamientos durante la estadía son diferentes.
              
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema1/img54.svg")
                .col-lg
                  p.mb-0 Anna valora la puntualidad, la organización y la información detallada. Desde su llegada, espera procesos ágiles, claridad en los servicios y cumplimiento estricto de los horarios establecidos. Prefiere espacios tranquilos, consume alimentos ligeros y planifica con anticipación sus actividades turísticas.

            .col-md-8.col-lg-3
              figure
                img(src="@/assets/curso/tema1/img55.png", alt="",).mx-auto.w-75

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-9.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-3 Por su parte, Carlos muestra un comportamiento más flexible y social. Disfruta interactuar con el personal y otros huéspedes, se interesa por la música, la gastronomía local y las actividades culturales espontáneas. No le preocupa tanto la rigidez de los horarios y valora un trato cercano y personalizado.
              p.mb-3 El hotel, al reconocer estas diferencias culturales, adapta su atención: brinda a Anna información estructurada, itinerarios claros y cumplimiento riguroso del servicio, mientras que a Carlos le ofrece recomendaciones culturales, actividades locales y una atención más cercana y conversacional.

            .col-md-8.col-lg-3
              figure
                img(src="@/assets/curso/tema1/img56.png", alt="",).mx-auto.w-75
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
