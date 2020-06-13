import config from "./configRequest/config";
//-------------------------- INBOX EXTERNAL CORRESPONDENCE --------------------//
/* GET */
export const EXTERNAL_CORRESPONDENCE_RECEIVED = `${config.IP}:${config.PORT}/api/sgdea/service/external/correspondence/received`;
//-------------------------- USUARIOS ----------------------------------------//
/* GET */
export const USER = `${config.IP}:${config.PORT}/api/sgdea/service/configuration/users`;
