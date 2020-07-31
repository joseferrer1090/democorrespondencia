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

//-------------------------- DEPENDENCIA -----------------------------------------//
/* GET  param => idHeadquarter */
export const DEPENDENCIES_BY_HEADQUARTER = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/dependencies/headquarter/`;

//-------------------------- USUARIOS -----------------------------------------//
/* GET */
export const USER = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/users`;

/* GET by => username */
export const SEARCH_BY_USERNAME = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/users/search/username`;

/* GET params => idDependence */
export const USERS_BY_DEPENDENCE = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/users/dependence/`;

//-------------------------- TIPO DOCUMENTAL -----------------------------------------//
export const TYPE_DOCUMENTARIES_STATUS = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/type/documentaries/active`;
export const TYPE_DOCUMENTARIES_BY_ID = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/type/documentaries/find/id/`;
export const GET_METADATA_FOR_TYPE_DOCUMENTARY = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/type/documentary/metadata/bag/get/type/documentary/`;

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

/* GET  params => idtemplate */
export const GET_METADATA_FOR_TEMPLATE = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/template/metadata/bag/get/template/`;

//-------------------------- TERCERO -----------------------------------------//
export const THIRDPARTIES_BY_IDENTIFICATION = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/third/parties/find/identification/`;

//-------------------------------- CONFIGURACION DEL STICKER -----------------------------------------//

/* GET */
export const STICKER_ALL = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/stickers`;

/* GET => params idSticker */
export const STICKER_VIEW = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/stickers/`;

/* PUT */
export const STICKER_PUT = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/stickers`;

/* GET paramas => page, size */
export const STCIKER_PAGINATION = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/stickers/pagination`;

//-------------------------------- CONFIGURACION DEL STICKER DETALLES -----------------------------------------//

/* GET params => idSticker */
export const STICKER_FIND_BY_STICKER_ID = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/stickers/detail/sticker/`;

/* PUT */
export const STICKER_PUT_DETAIL = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/stickers/detail`;

//-------------------------------- STICKER CORRESPONDENCIA RECIBIDA -----------------------------------------//
/* GET params => idRadication */
export const GENERATE_STICKER = `${config.IP}:${config.PORT}/api/sgdea/service/external/correspondence/received/generate/sticker/`;
