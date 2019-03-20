export default {
  items: [
    {
      name: "Inicio",
      url: "/inicio",
      icon: "icon-home"
    },
    {
      name: "Correspondencia",
      url: "/correspondence",
      icon: "cui-envelope-closed",
      children: [
        {
          name: "Recibida",
          url: "/correspondence/external",
          icon: "cui-inbox"
        },
        {
          name: "Despachada",
          url: "/correspondencia/externa/despachada",
          icon: "cui-share"
        },
        {
          name: "Interna",
          url: "/correspondence/internal",
          icon: "icon-drawer",
          children: [
            {
              name: "Entrantes",
              url: "/correspondencia/interna/entrada",
              icon: "cui-inbox"
            },
            {
              name: "Salientes",
              url: "/correspondencia/interna/salida",
              icon: "cui-share"
            },
            {
              name: "Crear nueva",
              url: "/correspondencia/interna/nueva",
              icon: "icon-pencil"
            }
          ]
        }
      ]
    }
    // {
    //   name: "Radicación",
    //   url: "/radication",
    //   icon: "cui-envelope-letter",
    //   children: [
    //     {
    //       name: "radicación simple",
    //       url: "/radication/simple",
    //       icon: "cui-info"
    //     },
    //     {
    //       name: "radicación de tramite",
    //       url: "/radication/procedure",
    //       icon: "icon-list"
    //     }
    //   ]
    // },
    // {
    //   name: "Generar Edok",
    //   url: "/edok",
    //   icon: "cui-file"
    // },
    // {
    //   name: "Remitente",
    //   url: "/senders",
    //   icon: "cui-people"
    // }
  ]
};
