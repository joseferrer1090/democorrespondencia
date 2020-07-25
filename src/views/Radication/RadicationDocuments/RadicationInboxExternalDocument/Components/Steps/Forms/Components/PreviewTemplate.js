import React, { useEffect, useState, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "reactstrap";
import Inputs from "./Inputs";
import { useSelector } from "react-redux";

const PreviewTemplate = ({ field, ...props }) => {
  const dataInputsRef = useRef();

  const template = useSelector(
    (state) => state.step1ReducerPreviewTemplate.template
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
                  <Inputs
                    key={id}
                    id={aux.id}
                    defaultValue={aux.defaultValue}
                    ref={dataInputsRef}
                    label={aux.metadata.elementConfig.labeltext}
                    formType={aux.metadata.elementConfig.type}
                    elementConfig={aux.metadata.elementConfig}
                    onChange={(e) => {
                      props.infoMetadataPosition([id]);
                      props.infoMetadataId(aux.idMetadata);
                      props.infoMetadataValue(e.target.value);
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
