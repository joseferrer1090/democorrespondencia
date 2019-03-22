export default {
  items: [
    {
      name: "Inicio",
      url: "/inicio",
      icon: "icon-home"
    },
    {
      name: "Correspondencia",
      url: "/inicio",
      icon: "cui-envelope-closed",
      children: [
        {
          name: "Recibida",
          url: "/correspondence/external/recibida",
          icon: "cui-inbox"
        },
        {
          name: "Despachada",
          url: "/correspondence/external/despachada",
          icon: "cui-share"
        },
        {
          name: "Interna",
          url: "/correspondence/internal",
          icon: "icon-drawer",
          children: [
            {
              name: "Entrantes",
              url: "/correspondence/internal/entrantes",
              icon: "cui-inbox"
            },
            {
              name: "Salientes",
              url: "/correspondence/internal/salientes",
              icon: "cui-share"
            },
            {
              name: "Crear nueva",
              url: "/correspondence/internal/nueva",
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
