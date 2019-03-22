import React from "react";
import DefaultLayout from "./containers/DefaultLayout";
const Dashboard = React.lazy(() => import("./views/Dashboard"));

// Views
const GenerateEdok = React.lazy(() => import("./views/GenerateEdok/index"));
const Remitente = React.lazy(() => import("./views/Sender"));
const RadicacionSimple = React.lazy(() => import("./views/Radication/index"));
const RadicacionTramite = React.lazy(() => import("./views/Radication/index"));
const Correspondence = React.lazy(() => import("./views/Correspondence/index"));
const InboxExternal = React.lazy(() =>
  import("./views/Correspondence/ExternalCorrespondence/Inbox/InboxCorrespondenceExternal")
);
const OutboxExternal = React.lazy(() =>
  import("./views/Correspondence/ExternalCorrespondence/Outbox/OutboxCorrespondenceExternal")
);

const Perfil = React.lazy(() => import("./views/Pages/Profile/Profile"));

const routes = [
  { path: "/", exact: true, name: "Inicio", component: DefaultLayout },
  { path: "/inicio", name: "", component: Dashboard },
  { path: "/edok", name: "Generate Edok", component: GenerateEdok },
  { path: "/senders", name: "Remitentes", component: Remitente },
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
  },
  {
    path: "/correspondence",
    exact: true,
    name: "Correspondencia",
    component: Correspondence
  },
  {
    path: "/correspondence/external/recibida",
    name: "Externa recibida",
    component: InboxExternal
  },
  {
    path: "/correspondence/external/despachada",
    name: "Externa despachada",
    component: OutboxExternal
  },
  {
    path: "/correspondence/internal",
    name: " Interna "
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil
  }
];

export default routes;

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
