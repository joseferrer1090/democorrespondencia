import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "reactstrap";
import Inputs from "./Inputs";
import { useSelector } from "react-redux";

const PreviewTemplate = ({ field, ...props }) => {
  const [values, setValues] = useState({});
  useEffect(() => {
    console.log(props.id);
  }, [props.id]);
  const template = useSelector(
    (state) => state.step1ReducerPreviewTemplate.template
  );
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
                  <Inputs
                    key={id}
                    id={aux.id}
                    value={aux.value}
                    label={aux.metadata.elementConfig.labeltext}
                    formType={aux.metadata.elementConfig.type}
                    elementConfig={aux.metadata.elementConfig}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [id]: {
                          id: aux.idMetadata,
                          defaultValue: event.target.value,
                        },
                      });
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

PreviewTemplate.propTypes = {};

export default PreviewTemplate;