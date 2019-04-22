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

const ViewCorrespondence = React.lazy(() =>
  import("./views/Correspondence/ExternalCorrespondence/Inbox/Components/Client/Content/components/ViewCorrespondence/ViewCorrespondence")
);

const EditCorrespondence = React.lazy(() =>
  import("./views/Correspondence/ExternalCorrespondence/Inbox/Components/Client/Content/components/EditCorrespondence/EditCorrespondence")
);

const InboxInternal = React.lazy(() =>
  import("./views/Correspondence/InternalCorrespondence/Inbox/InboxCorrespondeceInternal")
);

const OutboxIntenal = React.lazy(() =>
  import("./views/Correspondence/InternalCorrespondence/OutBox/OutboxCorrespondenceInternal")
);

const NewRadicationInternal = React.lazy(() =>
  import("./views/Correspondence/InternalCorrespondence/NewInternalRadication/NewRadication")
);

const RelatedUsersCorrespondence = React.lazy(() =>
  import("./views/Correspondence/ExternalCorrespondence/Inbox/Components/Client/Content/components/OtherOption/RelatedUsersCorrespondence")
);

const HistorialCorrespondence = React.lazy(() =>
  import("./views/Correspondence/ExternalCorrespondence/Inbox/Components/Client/Content/components/OtherOption/HistorialCorrespondence")
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
    path: "/correspondence/external/view/:id",
    component: ViewCorrespondence
  },
  {
    path: "/correspondence/external/edit/:id",
    component: EditCorrespondence
  },
  {
    path: "/correspondence/internal/entrantes",
    name: "Interna entrantes",
    component: InboxInternal
  },
  {
    path: "/correspondence/internal/salientes",
    name: "Interna salientes",
    component: OutboxIntenal
  },
  {
    path: "/correspondence/internal/nueva",
    name: "Nueva correspondencia interna",
    component: NewRadicationInternal
  },
  {
    path: "/correspondence/external/relatedusers/:id",
    component: RelatedUsersCorrespondence
  },
  {
    path: "/correspondence/external/historial/:id",
    component: HistorialCorrespondence
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil
  }
];

export default routes;

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
