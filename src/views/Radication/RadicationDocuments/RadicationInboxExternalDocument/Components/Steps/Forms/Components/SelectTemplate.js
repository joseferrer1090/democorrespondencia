import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";
import { obtenerDataTemplate } from "../../../../../../../../actions/step1SelectTemplateaActions";

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

  // useEffect(() => {
  //   console.log(dataTemplate);
  // }, [dataTemplate]);

  // const valueTemplate = () => {
  //   let value = this.props.value;
  //   if (this.props.valueTemplateByTypeDocumentary !== undefined) {
  //     value = this.props.valueTemplateByTypeDocumentary.id;
  //   }
  //   return value;
  // };
  // onChange={(e) => {
  //   setFieldValue(
  //     "correspondence_template",
  //     e.target.value
  //   );
  //   changeInValueTemplate(
  //     values.correspondence_template,
  //     e.target.value
  //   );
  // }}
  // onBlur={() =>
  //   setFieldTouched("correspondence_template", true)
  // }
  // value={values.correspondence_template}
  // className={`form-control form-control-sm ${
  //   errors.correspondence_template &&
  //   touched.correspondence_template &&
  //   "is-invalid"
  // }`}
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

  return (
    <div>
      <select
        onChange={(e) => {
          setFieldValue("correspondence_template", e.target.value);
          setValueTemplate(e.target.value);
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
