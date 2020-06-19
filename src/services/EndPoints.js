import config from "./configRequest/config";

//-------------------------- INBOX EXTERNAL CORRESPONDENCE --------------------//
/* GET */
export const EXTERNAL_CORRESPONDENCE_RECEIVED = `${config.IP}:${config.PORT}/api/sgdea/service/external/correspondence/received`;
/* POST */
export const EXTERNAL_CORRESPONDENCE_RECEIVED_POST = `${config.IP}:${config.PORT}/api/sgdea/service/external/correspondence/received/filing`;

//-------------------------- CONGLOMERADO -----------------------------------------//
/* GET */
export const CONGLOMERATES_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/conglomerates/active`;

//-------------------------- EMPRESA -----------------------------------------//
/* GET param => idConglomerate */
export const COMPANY_BY_CONGLOMERATE = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/companies/conglomerate/`;

//-------------------------- SEDE -----------------------------------------//
/* GET param idCompany */
export const HEADQUARTER_BY_COMPANY = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/headquarters/company/`;

//-------------------------- USUARIOS -----------------------------------------//
/* GET */
export const USER = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/users`;

//-------------------------- TIPO DOCUMENTAL -----------------------------------------//
export const TYPE_DOCUMENTARIES_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/type/documentaries/active`;

//-------------------------- TIPO DE ENVÍO LLEGADA -----------------------------------------//
export const TYPE_SHIPMENT_ARRIVAL_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/type/shipments/arrivals/active`;

//-------------------------- PAÍS -----------------------------------------//
/* GET */
export const CONTRIES_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/countries/active`;

//-------------------------- DEPARTAMENTO -----------------------------------------//
/* GET */
export const DEPARTMENTS_BY_COUNTRY = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/departments/country/`;

//-------------------------- CIUDAD -----------------------------------------//
export const CITIES_BY_DEPARTMENT = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/cities/department/`;

//-------------------------- MENSAJERO -----------------------------------------//
export const MESSENGER_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/messengers/active`;

//-------------------------- PLANTILLA -----------------------------------------//
export const TEMPLATE_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/templates/active`;
