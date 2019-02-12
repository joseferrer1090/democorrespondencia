export default {
  items: [
    {
      name: "Inicio",
      url: "/home",
      icon: "icon-home"
    },
    {
      name: "Correspondencia",
      url: "/correspondence",
      icon: "cui-envelope-closed",
      children: [
        {
          name: " Externa",
          url: "/correspondence/external",
          icon: "icon-cloud-upload"
        },
        {
          name: "Interna",
          url: "/correspondence/internal",
          icon: "icon-cloud-download"
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
      name: "Remitente",
      url: "/senders",
      icon: "cui-people"
    }
  ]
};
