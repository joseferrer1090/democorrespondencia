export default {
  items: [
    {
      name: "Inicio",
      url: "/inicio",
      icon: "icon-home",
    },
    {
      name: "Correspondencia",
      icon: "cui-envelope-closed",
      children: [
        {
          name: "Recibida",
          url: "/correspondence/external/recibida",
          icon: "cui-inbox",
        },
        {
          name: "Despachada",
          url: "/correspondence/external/despachada",
          icon: "cui-share",
        },
      ],
    },
    {
      name: "Ventanilla única",
      url: "/correspondence/one-stop shop",
      icon: "fa fa-window-maximize",
      children: [
        {
          name: "Radicación vía email",
          url: "/correspondence/one-stop-shop/email",
          icon: "fa fa-at",
        },
        {
          name: "Radicación vía web",
          url: "/correspondence/one-stop-shop/web",
          icon: "fa fa-globe",
        },
        {
          name: "Radicar documento",
          url: "/correspondence/one-stop-shop/document",
          icon: "fa fa-file",
        },
      ],
    },
    {
      name: "Interna",
      url: "/correspondence/internal",
      icon: "icon-drawer",
      children: [
        {
          name: "Entrantes",
          url: "/correspondence/internal/entrantes",
          icon: "cui-inbox",
        },
        {
          name: "Salientes",
          url: "/correspondence/internal/salientes",
          icon: "cui-share",
        },
        {
          name: "Crear nueva",
          url: "/correspondence/internal/nueva",
          icon: "icon-pencil",
        },
      ],
    },
    {
      name: "Sticker",
      icon: "cui-cog",
      children: [
        {
          name: "Configuracion sticker",
          exact: true,
          url: "/correspondence/configuration/sticker",
          icon: "icon-plus",
        },
        {
          name: "Editar sticker",
          url: "/correspondence/configuration/sticker/edit/:id",
          exact: true,
          icon: "icon-pencil",
        },
      ],
    },
  ],
};
