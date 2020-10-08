import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { obtenerMetadatos } from "../../../../../../../../actions/step1ActionsPreviewTemplate";
import { obtenerMetadatosByTypeDocumentary } from "../../../../../../../../actions/step1ActionsInfoTypeDocumentary";

const SelectTemplate = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const dispatch = useDispatch();

  const dataTemplate = useSelector(
    (state) => state.step1ReducerDataTemplate.dataTemplate
  );

  const idTemplateByTypeDocumentary = useSelector(
    (state) => state.step1ReducerInfoTypeDocumentary.infoAdditional.template
  );

  const idTypeDocumentary = useSelector(
    (state) => state.step1ReducerInfoTypeDocumentary.infoAdditional.id
  );

  useEffect(() => {
    validateValues();
  }, [idTemplateByTypeDocumentary, idTypeDocumentary]);

  const validateValues = () => {
    if (idTemplateByTypeDocumentary !== undefined) {
      if (idTemplateByTypeDocumentary !== null) {
        values.correspondence_template = idTemplateByTypeDocumentary.id;
      }
      setTimeout(() => {
        dispatch(obtenerMetadatos(values.correspondence_template));
        dispatch(obtenerMetadatosByTypeDocumentary(idTypeDocumentary));
      }, 100);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setFieldValue("correspondence_template", e.target.value);
          dispatch(obtenerMetadatos(e.target.value));
        }}
        onBlur={(e) => setFieldTouched("correspondence_template", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_template &&
          touched.correspondence_template &&
          "is-invalid"
        }`}
        value={values.correspondence_template}
      >
        <option value={""}>-- Seleccione --</option>
        {dataTemplate !== undefined
          ? dataTemplate.map((aux, id) => {
              return (
                <option key={id} value={aux.id}>
                  {aux.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

SelectTemplate.propTypes = {};

export default SelectTemplate;
