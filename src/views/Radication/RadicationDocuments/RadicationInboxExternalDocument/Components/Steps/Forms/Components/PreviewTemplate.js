import React, { useEffect, useState, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "reactstrap";
import Inputs from "./Inputs";
import { useSelector } from "react-redux";

const PreviewTemplate = ({ field, ...props }) => {
  const [values, setValues] = useState({});

  const dataInputsRef = useRef();

  const template = useSelector(
    (state) => state.step1ReducerPreviewTemplate.template
  );

  const templateByTypeDocumentary = useSelector(
    (state) => state.step1ReducerInfoTypeDocumentary.template
  );

  useEffect(() => {
    console.log(template);
  }, [props.id, template, values]);

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
                    // value={""}
                    ref={dataInputsRef}
                    label={aux.metadata.elementConfig.labeltext}
                    formType={aux.metadata.elementConfig.type}
                    elementConfig={aux.metadata.elementConfig}
                    // onChange={(event) => {
                    //   setValues(
                    //     {
                    //       // ...values,
                    //       // id: aux.id,
                    //       // defaultValue: event.target.value,
                    //       [id]: {
                    //         id: aux.id,
                    //         defaultValue: event.target.value,
                    //       },
                    //     },

                    //     props.onDataOnChange(values)
                    //   );
                    // }}
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
