import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { obtenerMetadatos } from "../../../../../../../../../../actions/editCorrespondenceExternalPreviewTemplate";
// import { obtenerMetadatosByTypeDocumentary } from "../../../../../../../../actions/step1ActionsInfoTypeDocumentary";

const SelectTemplate = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const dispatch = useDispatch();
  const [valueTemplate, setValueTemplate] = useState("");

  const dataTemplate = useSelector(
    (state) => state.editCorrespondeceExternalSelectTemplate.dataTemplate
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
      values.correspondence_template = idTemplateByTypeDocumentary.id;
      setTimeout(() => {
        setValueTemplate(values.correspondence_template);
        dispatch(obtenerMetadatos(values.correspondence_template));
        // dispatch(obtenerMetadatosByTypeDocumentary(idTypeDocumentary));
      }, 100);
    } else {
      setValueTemplate(values.correspondence_template);
    }
    return valueTemplate;
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setFieldValue("correspondence_template", e.target.value);
          setValueTemplate(e.target.value);
          dispatch(obtenerMetadatos(e.target.value));
        }}
        onBlur={(e) => setFieldTouched("correspondence_template", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_template &&
          touched.correspondence_template &&
          "is-invalid"
        }`}
        value={valueTemplate}
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
