import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "reactstrap";
import Inputs from "./Inputs";
import { useSelector } from "react-redux";

const PreviewTemplateByTypeDocumentary = ({ field, ...props }) => {
  const [values, setValues] = useState({});
  const [valueMetadata, setValueMetadata] = useState();
  const template = useSelector(
    (state) => state.step1ReducerInfoTypeDocumentary.template
  );

  useEffect(() => {}, [props.id, template]);

  return (
    <Fragment>
      <Card>
        <CardHeader>
          {" "}
          <i className="fa fa-wpforms" /> Vista previa de la platilla
        </CardHeader>
        <CardBody>
          <Card body>
            <div className="row">
              {template.length ? (
                template.map((aux, id) => (
                  // setValueMetadata(aux.defaultValue),
                  <Inputs
                    key={id}
                    id={aux.id}
                    defaultValue={aux.defaultValue}
                    value={null}
                    label={aux.metadata.elementConfig.labeltext}
                    formType={aux.metadata.elementConfig.type}
                    elementConfig={aux.metadata.elementConfig}
                    onChange={(e) => {
                      //   aux.defaultValue = e.target.value;
                      setValues(
                        {
                          ...values,
                          [id]: {
                            id: aux.id,
                            defaultValue: e.target.value,
                          },
                        },
                        props.onDataOnChange(values)
                      );
                    }}
                  />
                ))
              ) : (
                <p className="text-center">
                  {" "}
                  <strong>
                    {" "}
                    No hay datos para la vista previa. Por favor verifique o
                    seleccione otra plantilla.
                  </strong>
                </p>
              )}
            </div>
          </Card>
        </CardBody>
      </Card>
    </Fragment>
  );
};

PreviewTemplateByTypeDocumentary.propTypes = {};

export default PreviewTemplateByTypeDocumentary;
