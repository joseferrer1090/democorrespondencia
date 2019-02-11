export default {
  items: [
    {
      name: "Inicio",
      url: "/dashboard",
      icon: "icon-home"
    },
    // {
    //   title: true,
    //   name: "Theme",
    //   wrapper: {
    //     // optional wrapper object
    //     element: "", // required valid HTML5 element tag
    //     attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: "" // optional class names space delimited list for title item ex: "text-center"
    // },

    {
      name: "Bandeja de entrada",
      url: "/base",
      icon: "icon-drawer"
      // children: [
      //   {
      //     name: "Interna",
      //     url: "/base/breadcrumbs",
      //     icon: "icon-envelope"
      //   },
      //   {
      //     name: "Externa",
      //     url: "/base/cards",
      //     icon: "icon-envelope"
      //   }
      // ]
    },
    {
      name: "Bandeja interna",
      url: "/icons",
      icon: "icon-star"
      // children: [
      //   {
      //     name: "Entrada",
      //     url: "/icons/coreui-icons",
      //     icon: "icon-star"
      //   },
      //   {
      //     name: "Salida",
      //     url: "/icons/flags",
      //     icon: "icon-star"
      //   }
      // ]
    },
    {
      name: "Radicación",
      url: "/buttons",
      icon: "cui-envelope-open",
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
      name: "Edok",
      url: "/charts",
      icon: "icon-layers"
    },
    // {
    //   name: "Notifications",
    //   url: "/notifications",
    //   icon: "icon-bell",
    //   children: [
    //     {
    //       name: "Alerts",
    //       url: "/notifications/alerts",
    //       icon: "icon-bell"
    //     },
    //     {
    //       name: "Badges",
    //       url: "/notifications/badges",
    //       icon: "icon-bell"
    //     },
    //     {
    //       name: "Modals",
    //       url: "/notifications/modals",
    //       icon: "icon-bell"
    //     }
    //   ]
    // }
    {
      name: "Remitente",
      url: "/remitente",
      icon: "icon-user"
    }
  ]
};
