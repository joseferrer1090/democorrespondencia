export default {
  items: [
    {
      name: "Inicio",
      url: "/inicio",
      icon: "icon-home"
    },
    {
      name: "Bandeja Externa",
      url: "/correxternam",
      icon: "icon-envelope",
      children: [
        {
          name: "Bandeja de entrada",
          url: "/correxterna/entrada",
          icon: "cui-arrow-left"
        },
        {
          name: "Bandeja de salida",
          url: "/correxterna/salida",
          icon: "cui-arrow-right"
        }
      ]
    },
    {
      name: "Radicación",
      url: "/buttons",
      icon: "cui-envelope-letter",
      children: [
        {
          name: "radicación simple",
          url: "/buttons/buttons",
          icon: "cui-info"
        },
        {
          name: "radicación de tramite",
          url: "/buttons/button-dropdowns",
          icon: "icon-list"
        }
      ]
    },
    {
      name: "Generar Edok",
      url: "/correspondencia",
      icon: "cui-file"
    },
    {
      name: "Bandeja Interna",
      url: "/corrinterna",
      icon: "icon-envelope",
      children: [
        {
          name: "Bandeja de entrada",
          url: "/corrinterna/entrada",
          icon: "cui-arrow-right"
        },
        {
          name: "Bandeja de salida",
          url: "/corrinterna/salida",
          icon: "cui-arrow-left"
        }
      ]
    },
    {
      name: "Remitente",
      url: "correspondencia",
      icon: "cui-people"
    }
  ]
};
