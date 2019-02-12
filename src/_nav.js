export default {
  items: [
    {
      name: "Inicio",
      url: "/home",
      icon: "icon-home"
    },
    {
      name: "Bandeja Externa",
      url: "",
      icon: "icon-envelope",
      children: [
        {
          name: "Bandeja de entrada",
          url: "/correspondence/externa/inbox",
          icon: "cui-arrow-left"
        },
        {
          name: "Bandeja de salida",
          url: "/correspondence/externa/outbox",
          icon: "cui-arrow-right"
        }
      ]
    },
    {
      name: "Radicación",
      url: "/radication",
      icon: "cui-envelope-letter",
      children: [
        {
          name: "radicación simple",
          url: "/radication/simple",
          icon: "cui-info"
        },
        {
          name: "radicación de tramite",
          url: "/radication/procedure",
          icon: "icon-list"
        }
      ]
    },
    {
      name: "Generar Edok",
      url: "/edok",
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
      url: "/senders",
      icon: "cui-people"
    }
  ]
};
