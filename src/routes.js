import React from "react";
import DefaultLayout from "./containers/DefaultLayout";
const Dashboard = React.lazy(() => import("./views/Dashboard"));

// Views
const GenerateEdok = React.lazy(() => import("./views/GenerateEdok/index"));
const Remitente = React.lazy(() => import("./views/Sender"));
const RadicacionSimple = React.lazy(() => import("./views/Radication/index"));
const RadicacionTramite = React.lazy(() => import("./views/Radication/index"));
const CorrespondenceExternalInbox = React.lazy(() =>
  import("./views/ExternalCorrespondence/index")
);
const CorrespondenceExternalOutbox = React.lazy(() =>
  import("./views/ExternalCorrespondence/index")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Inicio", component: DefaultLayout },
  { path: "/home", name: "", component: Dashboard },
  { path: "/edok", name: "Generate Edok", component: GenerateEdok },
  { path: "/senders", name: "Remitentes", component: Remitente },

  // URL for Radication
  {
    path: "/radication",
    exact: true,
    component: RadicacionSimple,
    name: "Radicacion"
  },
  {
    path: "/radication/simple",
    name: "Radicacion simple",
    component: RadicacionSimple
  },
  {
    path: "/radication/procedure",
    name: "Radicacion Tramite",
    component: RadicacionTramite
  }
];

export default routes;
