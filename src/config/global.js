export default {
  global: {
    Name: 'Servicio, habilidades de comunicación y técnicas de ventas',
    Description:
      'El componente formativo Servicio, habilidades de comunicación y técnicas de ventas orienta al aprendiz al logro y desarrollo de competencias para identificar las necesidades del cliente y brindar un servicio de calidad en el contexto hotelero. A través del uso de técnicas de comunicación efectiva y estrategias de ventas, se fortalece la interacción con el usuario, favoreciendo la satisfacción del cliente y el cumplimiento de los objetivos del servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Usuarios de servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Teoría de las necesidades',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Requerimiento de solicitudes especiales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Motivaciones de compra',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Hábitos y tendencias de consumo',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Incidencia de la cultura en el comportamiento',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estándares de servicio',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de comunicación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de comunicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comunicación efectiva',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Canales de atención',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Habilidades comunicativas',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etapas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cotización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Definición',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimiento',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Definición',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Políticas',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'Conducta en la comunicación que consiste en mantener el propio punto de vista sin agresividad ni sometimiento al criterio del interlocutor.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'Medio a través del cual se transmite un mensaje entre emisor y receptor.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona que adquiere o utiliza un servicio para satisfacer una necesidad.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso de intercambio de información, ideas o sentimientos entre dos o más personas.',
    },
    {
      termino: 'Contexto',
      significado: 'Situación concreta en que se transmite el mensaje.',
    },
    {
      termino: 'Cotización',
      significado:
        'Propuesta formal de servicios que incluye condiciones, características y precios.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'Conjunto de bienes y servicios que los turistas están dispuestos a adquirir en un destino.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad que tenemos los humanos para ponernos en el lugar del otro.',
    },
    {
      termino: 'Enfatizar',
      significado:
        'Recalcar o hacer hincapié en la comunicación o información de un mensaje.',
    },
    {
      termino: 'Estándar de servicio',
      significado:
        'Modelo o criterio que define los requisitos mínimos para garantizar calidad en la atención.',
    },
    {
      termino: 'Interlocutor',
      significado: 'Cada una de las personas que forman parte de un diálogo.',
    },
    {
      termino: 'Mensaje',
      significado:
        'Información que se transmite en un proceso de comunicación.',
    },
    {
      termino: 'Negociación',
      significado:
        'Proceso mediante el cual dos o más partes buscan llegar a un acuerdo.',
    },
    {
      termino: 'Necesidad',
      significado:
        'Sensación de carencia de algo que motiva el comportamiento humano.',
    },
    {
      termino: 'Objeción',
      significado:
        'Razón o argumento que alguien opone a una idea o propuesta para rechazarla o impedir su realización.',
    },
    {
      termino: 'Parafrasear',
      significado:
        'Repetir un mensaje con otras palabras para asegurar su comprensión.',
    },
    {
      termino: 'Persuasión',
      significado:
        'Capacidad de inducir a alguien a creer o hacer algo mediante razones o argumentos.',
    },
    {
      termino: 'Receptor',
      significado: 'Persona que recibe e interpreta el mensaje.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Respuesta del receptor que indica si el mensaje fue comprendido.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'Conjunto de acciones orientadas a satisfacer las necesidades y expectativas del cliente.',
    },
    {
      termino: 'Sintonía',
      significado:
        'Coincidencia entre interlocutores en el sentido o comprensión de un mensaje.',
    },
    {
      termino: 'Técnicas de venta',
      significado:
        'Estrategias utilizadas para influir en la decisión de compra del cliente.',
    },
    {
      termino: 'Turista',
      significado:
        'Persona que se desplaza fuera de su entorno habitual por más de 24 horas con fines de ocio u otros motivos.',
    },
    {
      termino: 'Usuario turístico',
      significado: 'Persona que utiliza servicios y recursos turísticos.',
    },
    {
      termino: 'Venta',
      significado:
        'Proceso mediante el cual se ofrece un servicio o producto a cambio de un valor económico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Diario del exportador. (2020/10). <em>Los diez Componentes básicos del buen servicio</em>.',
      link:
        'https://www.diariodelexportador.com/2018/04/los-10-componentes-basicos-del-buen.html',
    },
    {
      referencia:
        'Dinámicas grupales (2020/10) <em>Dinámicas bloqueos en la comunicación</em>.',
      link:
        'https://dinamicasgrupales.com.ar/dinamicas/comunicacion/dinamica-bloqueos-la-comunicacion/',
    },
    {
      referencia:
        'Hosteltur. (julio 2016). <em>Seis mega tendencias de la industria hotelera según Sabre</em>.',
      link:
        'https://www.hosteltur.com/116944_seis-megatendencias-industria-hotelera-sabre.html',
    },
    {
      referencia:
        'Hoyer- Macinnis- Pieters (2014) <em>Comportamiento del consumidor</em> 7ma edición.',
    },
    {
      referencia:
        'Kotler, P., Bowen, J. T., y Makens, J. C. (2011). <em>Marketing turístico</em> (5.ª ed.). Pearson Educación.',
      link:
        'https://www.entornoturistico.com/wp-content/uploads/2017/04/Marketing-Tur%C3%ADstico-de-Philip-Kotler.pdf',
    },
    {
      referencia:
        'Lifeder (2020/10) <em>Ciclo del servicio al cliente: en empresa, hotel y salud</em>.',
      link: 'https://www.lifeder.com/ciclo-servicio-cliente/',
    },
    {
      referencia:
        'Novas, N. C. (2006). <em>Promoción y Venta de Servicios Turísticos</em> (1a. Edición ed.). La Habana, Cuba: Ideas propias, Editorial Vigo.',
    },
    {
      referencia:
        'Raúl Villanueva López (2017) <em>Comunicación y atención al cliente en hostelería y turismo</em>.',
    },
    {
      referencia:
        'Schnarch Kirberg, Alejandro. (2017) <em>Marketing de Fidelización</em>.',
    },
    {
      referencia: 'Scribd. (2020/11). <em>Atención al cliente</em>.',
      link: 'https://es.scribd.com/document/363401050/Atencion-Al-Cliente',
    },
    {
      referencia:
        'Uribe Macías, Mario Enrique.(2014) <em>Gerencia del servicio. Alternativa para la competitividad</em>.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Isabel Suarez Delgado',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
