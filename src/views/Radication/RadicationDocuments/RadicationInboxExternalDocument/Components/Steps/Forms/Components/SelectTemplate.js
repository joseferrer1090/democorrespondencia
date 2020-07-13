import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { obtenerMetadatos } from "../../../../../../../../actions/step1ActionsPreviewTemplate";

const SelectTemplate = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [valueTemplate, setValueTemplate] = useState(
    values.correspondence_template
  );
  const dataTemplate = useSelector(
    (state) => state.step1ReducerDataTemplate.dataTemplate
  );
  const idTemplateByTypeDocumentary = useSelector(
    (state) => state.step1ReducerInfoTypeDocumentary.infoAdditional.template
  );

  useEffect(() => {
    validateValues();
  }, [idTemplateByTypeDocumentary]);

  const validateValues = () => {
    if (idTemplateByTypeDocumentary !== undefined) {
      setValueTemplate(idTemplateByTypeDocumentary.id);
    } else {
      setValueTemplate(values.correspondence_issue);
    }
    return valueTemplate;
  };
  const dispatch = useDispatch();

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
