import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { obtenerMetadatos } from "../../../../../../../../../../actions/editCorrespondenceExternalPreviewTemplate";

import { obtenerMetadatosByTypeDocumentary } from "../../../../../../../../../../actions/editCorrespondenceExternalTypeDocumentary";

const SelectTemplate = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const dispatch = useDispatch();
  const [valueTemplate, setValueTemplate] = useState("");

  const dataTemplate = useSelector(
    (state) => state.editCorrespondenceExternalSelectTemplate.dataTemplate
  );

  const idTemplateByTypeDocumentary = useSelector(
    (state) =>
      state.editCorrespondenceExternalTypeDocumentary.dataTypeDocumentary
        .template
  );

  const idTypeDocumentary = useSelector(
    (state) =>
      state.editCorrespondenceExternalTypeDocumentary.dataTypeDocumentary.id
  );

  useEffect(() => {
    validateValues();
  }, [
    idTemplateByTypeDocumentary,
    idTypeDocumentary,
    values.correspondence_template,
  ]);

  const validateValues = () => {
    console.log(values.correspondence_template);
    // if (values.correspondence_template !== "") {
    //   dispatch(obtenerMetadatos(values.correspondence_template));
    // }
    if (idTemplateByTypeDocumentary !== undefined) {
      if (idTemplateByTypeDocumentary !== null) {
        values.correspondence_template = idTemplateByTypeDocumentary.id;
      }

      setTimeout(() => {
        setValueTemplate(values.correspondence_template);
        dispatch(obtenerMetadatos(values.correspondence_template));
        dispatch(obtenerMetadatosByTypeDocumentary(idTypeDocumentary));
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
        // value={valueTemplate}
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
