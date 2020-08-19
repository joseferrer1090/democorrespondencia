import { OBTENER_DATA_EXTERNA_CORRESPONDENCE } from "./../types/index";
import { loadCorrespondenceExternal } from "./../utils/helpers/loadCorrespondenceExternal";

// Funcion principal
export const dataCorrespondence = () => {
  return async (dispatch, getState) => {
    await dispatch(startLoadDataCorrespondence());
  };
};

const startLoadDataCorrespondence = () => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE,
});
