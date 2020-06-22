import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withFormik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { EXTERNAL_CORRESPONDENCE_RECEIVED_POST } from "../../../../../../services/EndPoints";
import Cardinformation from "../../AuxiliaryComponents/Cardinformation";

const FormStep1 = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    setFieldTouched,
    t,
  } = props;

  return (
    <div className="animated fadeIn">
      <div className="">
        <div className="col-md-10 offset-1">
          <form className="form">
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">
                Información básica
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-2 offset-1 ">
                        <div className="form-group text-center">
                          <label className="">
                            <strong> Fecha de radicacion</strong>{" "}
                          </label>
                          <dd className="">04/10/2018</dd>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group text-center">
                          <label>
                            {" "}
                            <strong>Hora de radicacion</strong>{" "}
                          </label>
                          <dd> 09:57 AM </dd>
                        </div>
                      </div>
                      <div className="col-md-2 ">
                        <div className="form-group text-center">
                          <label>
                            {" "}
                            <strong>Sede</strong>{" "}
                          </label>
                          <dd> Sede 1 </dd>
                        </div>
                      </div>
                      <div className="col-md-2  ">
                        <div className="form-group text-center">
                          <label>
                            {" "}
                            <strong>Vigenica</strong>{" "}
                          </label>
                          <dd> 2018 </dd>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group text-center">
                          <label>
                            {" "}
                            <strong>Usuario radicador</strong>{" "}
                          </label>
                          <dd> Carmen Rojas</dd>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <hr />
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Tipo de documento{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                            <option>Cuenta de cobro</option>
                            <option>Cuenta de leasing</option>
                            <option>Factura administrativa</option>
                            <option>Factura de PME</option>
                            <option>Factura de cadena</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Fecha del documento{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            className="form-control form-control-sm"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Conglomerado <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Empresa <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Sede <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Tipo de envio <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Asunto <span className="text-danger">*</span>
                          </label>
                          <textarea className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Observaciones <span className="text-danger">*</span>
                          </label>
                          <textarea className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            {" "}
                            Folios <span className="text-danger">*</span>{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            {" "}
                            Folios <span className="text-danger">*</span>{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            {" "}
                            Folios <span className="text-danger">*</span>{" "}
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">Enviado por</div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Conglomerado</label>
                      <select className="form-control form-control-sm">
                        <option>Seleccione...</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Empresa</label>
                      <select className="form-control form-control-sm">
                        <option>Seleccione...</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Sede</label>
                      <select className="form-control form-control-sm">
                        <option>Seleccione...</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Dependencia</label>
                      <select className="form-control form-control-sm">
                        <option>Seleccione...</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Buscar remitente</label>
                      <select className="form-control form-control-sm">
                        <option>Seleccione...</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Remitente que firma</label>
                      <select className="form-control form-control-sm">
                        <option>Seleccione...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">
                Destinatarios externos
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>
                        {" "}
                        Buscar destinatario externo{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control form-contro-sm"
                        onChange={(e) => {
                          this.setState({
                            selectedDestinatario: e.target.value,
                          });
                        }}
                        value={this.state.selectedDestinatario}
                      >
                        <option value="0" defaultValue="0">
                          --Seleccione--
                        </option>
                      </select>
                      <br />
                      <p>Probnado apenas</p>
                      <Cardinformation
                        selectedItem={this.state.selectedDestinatario}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({}),
  validationSchema: Yup.object().shape({}),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    setTimeout(() => {
      const auth = "";
      fetch(EXTERNAL_CORRESPONDENCE_RECEIVED_POST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth,
        },
        body: JSON.stringify({
          validity: "2020",
          documentDate: "2020-06-10",
          documentNumber: "Doc 009",
          issue:
            "Avances de desarrollo aplicativo de gestión documental SEVENET 2020",
          guide: "10062020",
          headquarterId: "b9541757-c195-4a40-b92a-04f3e68d890f",
          typeDocumentaryId: "fc12e222-1ec9-48d6-b684-01610142caf8",
          userFilingId: "f1adb923-b4ff-46d7-9088-3164aa686917",
          cityId: "23ed762d-ae48-44af-a6cc-82b2430fc33b",
          typeShipmentArrivalId: "9b52ebe4-f638-4265-9271-ec61b95e8273",
          messengerId: "030f40e0-3b52-4193-9f08-44cb603c6b6b",
          thirdPartyId: "715ef6f4-385b-48a1-b80c-58e54ce4dc67",
          templateId: "ef41a67a-5acb-4d8a-8f7e-2d4709a02e7d",
          usersAddressees: [
            {
              id: "583b7af0-c480-4b30-9168-c66b731d3609",
            },
            {
              id: "cc4d069d-63c5-4397-ac2f-02c210d857ab",
            },
          ],
          metadata: [
            {
              id: "43b7880e-dd99-483c-bec6-f88a15b7c303",
              value: "A",
            },
            {
              id: "a10d011d-d86d-470d-a88a-61b21fe3399f",
              value: "B",
            },
          ],
        }),
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status === 201) {
              console.log("CREADO => 201");
            } else if (response.status === 400) {
              console.log("ERROR => 400");
            } else if (response.status === 500) {
              console.log("ERROE => 500");
            }
          })
        )
        .catch((error) => {
          console.log("", error);
        });
      setSubmitting(false);
      resetForm({});
    }, 1000);
  },
})(FormStep1);
