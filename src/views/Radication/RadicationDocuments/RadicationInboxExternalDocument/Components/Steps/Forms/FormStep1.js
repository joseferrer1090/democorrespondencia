import React, { useEffect, useState, useRef } from "react";
import ModalView from "../../ModalViewCorresponcenceSendOutStep1";
import ModalAdd from "../../ModalAddCorrespondenSendOutStep1";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";
import CardRemitente from "../../AuxiliaryComponents/Cardinformation";
import { withFormik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { EXTERNAL_CORRESPONDENCE_RECEIVED_POST } from "../../../../../../../services/EndPoints";
import SelectConglomerado from "./Components/SelectConglomerado";
import FieldCompany from "./Components/SelectCompany";
import FieldHeadquarter from "./Components/SelectHeadquarter";
import SelectTypeDocumentary from "./Components/SelectTypeDocumentary";
import SelectCountry from "./Components/SelectCountry";
import FieldDepartment from "./Components/SelectDepartment";
import FieldCity from "./Components/SelectCity";
import SelectTypeShipmentArrival from "./Components/SelectTypeShiptmentArrival";
import SelectMessenger from "./Components/SelectMessenger";
import SelectTemplate from "./Components/SelectTemplate";
import moment from "moment";
import ReceiverSelectConglomerado from "./Components/ReceiverSelectConglomerate";
import ReceiverFieldCompany from "./Components/ReceiverSelectCompany";
import ReceiverFieldHeadquarter from "./Components/ReceiverSelectHeadquarter";
import ReceiverFieldDependence from "./Components/ReceiverSelectDependence";
import UserList from "./Components/UserList";
import UserListEnabled from "./Components/UserListEnabled";
import { useSelector } from "react-redux";
import MySelect from "./Components/SelectTercero";

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

  const userData = useSelector((state) => state.step1Reducer);

  const modalViewRef = useRef("mv");
  const ModalAddRef = useRef("ma");

  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [oldValueConglomerate, setOldValueConglomerate] = useState();
  const [newValueConglomerate, setNewValueConglomerate] = useState();
  const [oldValueTypeDocumentary, setOldValueTypeDocumentary] = useState();
  const [newValueTypeDocumentary, setNewValueTypeDocumentary] = useState();
  const [oldValueCountry, setOldValueCountry] = useState();
  const [newValueCountry, setNewValueCountry] = useState();
  const [
    oldValueTypeShipmentArrival,
    setOldValueTypeShipmentArrival,
  ] = useState();
  const [
    newValueTypeShipmnetArrival,
    setNewValueTypeShipmentArrival,
  ] = useState();
  const [oldValueMessenger, setOldValueMessenger] = useState();
  const [newValueMessenger, setNewValueMessenger] = useState();
  const [oldValueTemplate, setOldValueTemplate] = useState();
  const [newValueTemplate, setNewValueTemplate] = useState();
  const [
    oldValueConglomerateReceiver,
    setOldValueConglomerateReceiver,
  ] = useState();
  const [
    newValueConglomerateReceiver,
    setNewValueConglomerateReceiver,
  ] = useState();
  const [StateChangeAlert, setAux] = useState("");

  const changeInValueConglomerate = (Old, New) => {
    setOldValueConglomerate(Old);
    setNewValueConglomerate(New);
  };

  const changeInValueConglomerateReceiver = (Old, New) => {
    setOldValueConglomerateReceiver(Old);
    setNewValueConglomerateReceiver(New);
  };

  const changeInValueTypeDocumentary = (Old, New) => {
    setOldValueTypeDocumentary(Old);
    setNewValueTypeDocumentary(New);
  };

  const changeInValueCountry = (Old, New) => {
    setOldValueCountry(Old);
    setNewValueCountry(New);
  };

  const changeInValueTypShipmentArrival = (Old, New) => {
    setOldValueTypeShipmentArrival(Old);
    setNewValueTypeShipmentArrival(New);
  };
  const changeInValueMessenger = (Old, New) => {
    setOldValueMessenger(Old);
    setNewValueMessenger(New);
  };
  const changeInValueTemplate = (Old, New) => {
    setOldValueTemplate(Old);
    setNewValueTemplate(New);
  };
  const toggle = () => {
    setCollapse(!collapse);
  };

  const toggle2 = () => {
    setCollapse2(!collapse2);
  };

  const openModalView = () => {
    modalViewRef.current.toggle();
  };

  const openModalAdd = () => {
    ModalAddRef.current.toggle();
  };
  const today = new Date();
  const DateFiling = () => {
    return moment(today).format("DD-MM-YYYY");
  };
  const TimeFiling = () => {
    return moment(today).format("LT");
  };

  return (
    <div className="animated fadeIn">
      <div className="">
        <p />
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
                      <div className="col-md-2 offset-1">
                        <div className="form-group text-center">
                          <label className="">
                            <strong> Fecha de radicación</strong>{" "}
                          </label>
                          <dd className="">{DateFiling()}</dd>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group text-center">
                          <label>
                            {" "}
                            <strong>Hora de radicación</strong>{" "}
                          </label>
                          <dd> {TimeFiling()} </dd>
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
                            <strong>Vigencia</strong>{" "}
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
                          <dd> Carmen Rojas </dd>
                        </div>
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
                        <label> Conglomerado</label>
                        <SelectConglomerado
                          // authorization={props.authorization}
                          // t={props.t}
                          name={"correspondence_conglomerate"}
                          onChange={(e) => {
                            setFieldValue(
                              "correspondence_conglomerate",
                              e.target.value
                            );
                            changeInValueConglomerate(
                              values.correspondence_conglomerate,
                              e.target.value
                            );
                          }}
                          onBlur={() =>
                            setFieldTouched("correspondence_conglomerate", true)
                          }
                          value={values.correspondence_conglomerate}
                          className={`form-control form-control-sm ${
                            errors.correspondence_conglomerate &&
                            touched.correspondence_conglomerate &&
                            "is-invalid"
                          }`}
                        />

                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_conglomerate &&
                          touched.correspondence_conglomerate ? (
                            <i class="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_conglomerate" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label> Empresa </label>
                        <Field
                          // authorization={props.authorization}
                          // t={props.t}
                          name="correspondence_company"
                          component={FieldCompany}
                          oldValueConglomerateId={oldValueConglomerate}
                          newValueConglomerateId={newValueConglomerate}
                          conglomerateId={values.correspondence_conglomerate}
                        ></Field>
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_company &&
                          touched.correspondence_company ? (
                            <i class="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_company" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Sede</label>
                        <Field
                          //   authorization={props.authorization}
                          //   t={props.t}
                          name="correspondence_headquarter"
                          component={FieldHeadquarter}
                          companyId={values.correspondence_company}
                          conglomerateId={values.correspondence_conglomerate}
                        ></Field>
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_headquarter &&
                          touched.correspondence_headquarter ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_headquarter" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Tipo de documento{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <SelectTypeDocumentary
                          // authorization={props.authorization}
                          // t={props.t}
                          name={"correspondence_typeDocumentary"}
                          onChange={(e) => {
                            setFieldValue(
                              "correspondence_typeDocumentary",
                              e.target.value
                            );
                            changeInValueTypeDocumentary(
                              values.correspondence_typeDocumentary,
                              e.target.value
                            );
                          }}
                          onBlur={() =>
                            setFieldTouched(
                              "correspondence_typeDocumentary",
                              true
                            )
                          }
                          value={values.correspondence_typeDocumentary}
                          className={`form-control form-control-sm ${
                            errors.correspondence_typeDocumentary &&
                            touched.correspondence_typeDocumentary &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_typeDocumentary &&
                          touched.correspondence_typeDocumentary ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_typeDocumentary" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Fecha del documento{" "}
                          <span className="text-danger">*</span>
                        </label>

                        <input
                          name={"correspondence_documentDate"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.correspondence_documentDate}
                          type="date"
                          className={`form-control form-control-sm ${
                            errors.correspondence_documentDate &&
                            touched.correspondence_documentDate &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_documentDate &&
                          touched.correspondence_documentDate ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_documentDate" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Nro. del documento{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          name={"correspondence_documentNum"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.correspondence_documentNum}
                          type="text"
                          className={`form-control form-control-sm ${
                            errors.correspondence_documentNum &&
                            touched.correspondence_documentNum &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_documentNum &&
                          touched.correspondence_documentNum ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_documentNum" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>País</label>
                        <SelectCountry
                          // authorization={props.authorization}
                          // t={props.t}
                          name={"correspondence_country"}
                          onChange={(e) => {
                            setFieldValue(
                              "correspondence_country",
                              e.target.value
                            );
                            changeInValueCountry(
                              values.correspondence_country,
                              e.target.value
                            );
                          }}
                          onBlur={() => {
                            setFieldTouched("correspondence_country", true);
                          }}
                          value={values.correspondence_country}
                          className={`form-control form-control-sm ${
                            errors.correspondence_country &&
                            touched.correspondence_country &&
                            "is-invalid"
                          }`}
                        />

                        {touched ? (
                          <div style={{ color: "#D54B4B" }}>
                            {errors.correspondence_country &&
                            touched.correspondence_country ? (
                              <i class="fa fa-exclamation-triangle" />
                            ) : null}
                            <ErrorMessage name="correspondence_country" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Departamento</label>
                        <Field
                          // authorization={props.authorization}
                          // t={props.t}
                          name="correspondence_department"
                          component={FieldDepartment}
                          oldValueCountryId={oldValueCountry}
                          newValueCountryId={newValueCountry}
                          countryId={values.correspondence_country}
                        ></Field>
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_department &&
                          touched.correspondence_department ? (
                            <i class="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_department" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Ciudad <span className="text-danger">*</span>
                        </label>
                        <Field
                          // authorization={props.authorization}
                          // t={props.t}
                          name="correspondence_city"
                          component={FieldCity}
                          departmentId={values.correspondence_department}
                          oldValueCountryId={oldValueCountry}
                          newValueCountryId={newValueCountry}
                        ></Field>
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_city &&
                          touched.correspondence_city ? (
                            <i class="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_city" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Tipo de llegada <span className="text-danger">*</span>
                        </label>
                        <SelectTypeShipmentArrival
                          // authorization={props.authorization}
                          // t={props.t}
                          name={"correspondence_typeArrival"}
                          onChange={(e) => {
                            setFieldValue(
                              "correspondence_typeArrival",
                              e.target.value
                            );
                            changeInValueTypShipmentArrival(
                              values.correspondence_typeArrival,
                              e.target.value
                            );
                          }}
                          onBlur={() =>
                            setFieldTouched("correspondence_typeArrival", true)
                          }
                          value={values.correspondence_typeArrival}
                          className={`form-control form-control-sm ${
                            errors.correspondence_typeArrival &&
                            touched.correspondence_typeArrival &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_typeArrival &&
                          touched.correspondence_typeArrival ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_typeArrival" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Guía <span className="text-danger">*</span>
                        </label>
                        <input
                          name={"correspondence_guide"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.correspondence_guide}
                          type="text"
                          className={`form-control form-control-sm ${
                            errors.correspondence_guide &&
                            touched.correspondence_guide &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_guide &&
                          touched.correspondence_guide ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_guide" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Folios <span className="text-danger">*</span>
                        </label>
                        <input
                          name={"correspondence_folios"}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.correspondence_folios}
                          type="text"
                          className={`form-control form-control-sm ${
                            errors.correspondence_folios &&
                            touched.correspondence_folios &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_folios &&
                          touched.correspondence_folios ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_folios" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          Asunto <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name={"correspondence_issue"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.correspondence_issue}
                          className={`form-control form-control-sm ${
                            errors.correspondence_issue &&
                            touched.correspondence_issue &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_issue &&
                          touched.correspondence_issue ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_issue" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Mensajero <span className="text-danger">*</span>
                        </label>
                        <SelectMessenger
                          // authorization={props.authorization}
                          // t={props.t}
                          name={"correspondence_messenger"}
                          onChange={(e) => {
                            setFieldValue(
                              "correspondence_messenger",
                              e.target.value
                            );
                            changeInValueMessenger(
                              values.correspondence_messenger,
                              e.target.value
                            );
                          }}
                          onBlur={() =>
                            setFieldTouched("correspondence_messenger", true)
                          }
                          value={values.correspondence_messenger}
                          className={`form-control form-control-sm ${
                            errors.correspondence_messenger &&
                            touched.correspondence_messenger &&
                            "is-invalid"
                          }`}
                        />
                        <div style={{ color: "#D54B4B" }}>
                          {errors.correspondence_messenger &&
                          touched.correspondence_messenger ? (
                            <i className="fa fa-exclamation-triangle" />
                          ) : null}
                          <ErrorMessage name="correspondence_messenger" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">
                Respuesta a correspondencia despachada
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Conglomerado</label>
                      <SelectConglomerado
                        // authorization={props.authorization}
                        // t={props.t}
                        name={"correspondence_conglomerate"}
                        onChange={(e) => {
                          setFieldValue(
                            "correspondence_conglomerate",
                            e.target.value
                          );
                          changeInValueConglomerate(
                            values.correspondence_conglomerate,
                            e.target.value
                          );
                        }}
                        onBlur={() =>
                          setFieldTouched("correspondence_conglomerate", true)
                        }
                        value={values.correspondence_conglomerate}
                        className={`form-control form-control-sm ${
                          errors.correspondence_conglomerate &&
                          touched.correspondence_conglomerate &&
                          "is-invalid"
                        }`}
                      />

                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_conglomerate &&
                        touched.correspondence_conglomerate ? (
                          <i class="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_conglomerate" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Empresa</label>
                      <Field
                        // authorization={props.authorization}
                        // t={props.t}
                        name="correspondence_company"
                        component={FieldCompany}
                        oldValueConglomerateId={oldValueConglomerate}
                        newValueConglomerateId={newValueConglomerate}
                        conglomerateId={values.correspondence_conglomerate}
                      ></Field>
                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_company &&
                        touched.correspondence_company ? (
                          <i class="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_company" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Sede</label>
                      <Field
                        //   authorization={props.authorization}
                        //   t={props.t}
                        name="correspondence_headquarter"
                        component={FieldHeadquarter}
                        companyId={values.correspondence_company}
                        conglomerateId={values.correspondence_conglomerate}
                      ></Field>
                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_headquarter &&
                        touched.correspondence_headquarter ? (
                          <i className="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_headquarter" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label> Vigencia </label>
                      <select className="form-control  form-control-sm">
                        <option>-- Seleccione --</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label> Consecutivo</label>
                      <div className="input-group input-group-sm mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            id="button-addon2"
                            // onClick={(() => toggle(), console.log("toggl1"))}
                            onClick={() => toggle()}
                          >
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <Collapse isOpen={collapse}>
                      <div className="card">
                        <div className="p-2 mb-1 bg-secondary text-dark">
                          Correspondencia despachada
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <label>Criterio</label>
                                <select className="form-control form-control-sm">
                                  <option>-- Seleccione --</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="form-group">
                                <label> Consecutivo</label>
                                <div className="input-group input-group-sm mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-secondary"
                                      type="button"
                                      id="button-addon2"
                                      onClick={() => toggle2()}
                                    >
                                      <i className="fa fa-search" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <Collapse isOpen={collapse2}>
                                <table className="table table-sm border table-hover">
                                  <thead>
                                    <tr className="text-center">
                                      <th>Sede</th>
                                      <th>Vigencia</th>
                                      <th>Consecutivo</th>
                                      <th>Asunto</th>
                                      <th>Acciones</th>
                                    </tr>
                                  </thead>
                                  <tbody className="text-center">
                                    <tr>
                                      <td>Bogota centro de logistica</td>
                                      <td>2020</td>
                                      <td>223</td>
                                      <td>31919</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          onClick={() => openModalView()}
                                        >
                                          <i className="fa fa-eye" />
                                        </button>
                                        &nbsp;
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          onClick={() => openModalAdd()}
                                        >
                                          <i className="fa fa-plus" />
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Bogota principal</td>
                                      <td>2019</td>
                                      <td>339</td>
                                      <td>8820047687</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          onClick={() => openModalView()}
                                        >
                                          <i className="fa fa-eye" />
                                        </button>
                                        &nbsp;
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          onClick={() => openModalAdd()}
                                        >
                                          <i className="fa fa-plus" />
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Bogota principal</td>
                                      <td>2019</td>
                                      <td>216</td>
                                      <td>BLA-4700001056</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          onClick={() => openModalView()}
                                        >
                                          <i className="fa fa-eye" />
                                        </button>
                                        &nbsp;
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          onClick={() => openModalAdd()}
                                        >
                                          <i className="fa fa-plus" />
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </Collapse>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">Tercero</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group">
                      <label>
                        Buscar remitente <span className="text-danger">*</span>
                      </label>
                      <div className="input-group input-group-sm mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={() => toggle2()}
                          >
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                      {/* <MySelect
                        name={"correspondence_sender"}
                        value={values.correspondence_sender}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.correspondence_sender}
                        touched={touched.correspondence_sender}
                      />{" "}
                      {touched ? (
                        <div style={{ color: "red" }}>
                          {" "}
                          <div style={{ color: "#D54B4B" }}>
                            {errors.correspondence_sender &&
                            touched.correspondence_sender ? (
                              <i className="fa fa-exclamation-triangle" />
                            ) : null}
                            <ErrorMessage name={"correspondence_sender"} />
                          </div>
                        </div>
                      ) : null} */}
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/* <CardRemitente
                  selectedItem={this.state.selectRemitente}
                /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">
                Busqueda de destinatarios
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Conglomerado</label>
                      <ReceiverSelectConglomerado
                        // authorization={props.authorization}
                        // t={props.t}
                        name={"correspondence_conglomerate_receiver"}
                        onChange={(e) => {
                          setFieldValue(
                            "correspondence_conglomerate_receiver",
                            e.target.value
                          );
                          changeInValueConglomerateReceiver(
                            values.correspondence_conglomerate_receiver,
                            e.target.value
                          );
                        }}
                        onBlur={() =>
                          setFieldTouched(
                            "correspondence_conglomerate_receiver",
                            true
                          )
                        }
                        value={values.correspondence_conglomerate_receiver}
                        className={`form-control form-control-sm ${
                          errors.correspondence_conglomerate_receiver &&
                          touched.correspondence_conglomerate_receiver &&
                          "is-invalid"
                        }`}
                      />

                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_conglomerate_receiver &&
                        touched.correspondence_conglomerate_receiver ? (
                          <i class="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_conglomerate_receiver" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Empresa</label>
                      <Field
                        // authorization={props.authorization}
                        // t={props.t}
                        name="correspondence_company_receiver"
                        component={ReceiverFieldCompany}
                        oldValueConglomerateId={oldValueConglomerateReceiver}
                        newValueConglomerateId={newValueConglomerateReceiver}
                        conglomerateId={
                          values.correspondence_conglomerate_receiver
                        }
                      ></Field>
                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_company_receiver &&
                        touched.correspondence_company_receiver ? (
                          <i class="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_company_receiver" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Sede</label>
                      <Field
                        //   authorization={props.authorization}
                        //   t={props.t}
                        name="correspondence_headquarter_receiver"
                        component={ReceiverFieldHeadquarter}
                        companyId={values.correspondence_company_receiver}
                        conglomerateId={
                          values.correspondence_conglomerate_receiver
                        }
                      ></Field>
                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_headquarter_receiver &&
                        touched.correspondence_headquarter_receiver ? (
                          <i className="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_headquarter_receiver" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Dependencia</label>
                      <Field
                        // authorization={props.authorization}
                        // t={props.t}
                        name="correspondence_dependence_receiver"
                        component={ReceiverFieldDependence}
                        sedeId={values.correspondence_headquarter_receiver}
                        companyId={values.correspondence_company_receiver}
                        conglomerateId={
                          values.correspondence_conglomerate_receiver
                        }
                      ></Field>
                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_dependence_receiver &&
                        touched.correspondence_dependence_receiver ? (
                          <i className="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_dependence_receiver" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4">
                    <div className="form-group">
                      <label>Grupo</label>
                      <select className="form-control form-control-sm">
                        <option>-- Seleccione --</option>
                      </select>
                    </div>
                  </div> */}
                  {/* <div className="col-md-4">
                    <div className="form-group">
                      <label>Buscar destinatario</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Destinatarios disponibles</label>
                      <UserList
                        id={values.correspondence_dependence_receiver}
                      />
                    </div>
                    <div className="form-check">
                      {/* <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Original
                      </label> */}
                      {/* <button className="btn btn-secondary btn-sm float-right">
                        Todos <i className="fa fa-angle-double-right" />{" "}
                      </button> */}
                    </div>
                  </div>

                  <UserListEnabled data={userData} aux={StateChangeAlert} />

                  {/* <button className="btn btn-secondary btn-sm float-right">
                    <i className="fa fa-angle-double-left" /> Todos{" "}
                  </button> */}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-dark">
                Campo adicionales
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <label>Plantilla</label>
                      <SelectTemplate
                        // authorization={props.authorization}
                        // t={props.t}
                        name={"correspondence_template"}
                        onChange={(e) => {
                          setFieldValue(
                            "correspondence_template",
                            e.target.value
                          );
                          changeInValueTemplate(
                            values.correspondence_template,
                            e.target.value
                          );
                        }}
                        onBlur={() =>
                          setFieldTouched("correspondence_template", true)
                        }
                        value={values.correspondence_template}
                        className={`form-control form-control-sm ${
                          errors.correspondence_template &&
                          touched.correspondence_template &&
                          "is-invalid"
                        }`}
                      />

                      <div style={{ color: "#D54B4B" }}>
                        {errors.correspondence_template &&
                        touched.correspondence_template ? (
                          <i class="fa fa-exclamation-triangle" />
                        ) : null}
                        <ErrorMessage name="correspondence_template" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ModalView
        modalviewstate={modalView}
        // ref={(mv) => (modalViewRef = mv)}
        ref={modalViewRef}
      />
      <ModalAdd
        modaladdstate={modalAdd}
        // ref={(ma) => (ModalAddRef = ma)}
        ref={ModalAddRef}
      />
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    correspondence_conglomerate: props.firstStep.correspondence_conglomerate,
    correspondence_company: props.firstStep.correspondence_company,
    correspondence_headquarter: props.firstStep.correspondence_headquarter,
    correspondence_typeDocumentary:
      props.firstStep.correspondence_typeDocumentary,
    correspondence_documentDate: props.firstStep.correspondence_documentDate,
    correspondence_documentNum: props.firstStep.correspondence_documentNum,
    correspondence_country: props.firstStep.correspondence_country,
    correspondence_department: props.firstStep.correspondence_department,
    correspondence_city: props.firstStep.correspondence_city,
    correspondence_typeArrival: props.firstStep.correspondence_typeArrival,
    correspondence_guide: props.firstStep.correspondence_guide,
    correspondence_folios: props.firstStep.correspondence_folios,
    correspondence_issue: props.firstStep.correspondence_issue,
    correspondence_messenger: props.firstStep.correspondence_messenger,
    correspondence_template: props.firstStep.correspondence_template,
    correspondence_conglomerate_receiver:
      props.firstStep.correspondence_conglomerate_receiver,
    correspondence_company_receiver:
      props.firstStep.correspondence_company_receiver,
    correspondence_headquarter_receiver:
      props.firstStep.correspondence_headquarter_receiver,
    correspondence_sender: props.firstStep.correspondence_sender,
  }),
  validationSchema: Yup.object().shape({
    correspondence_conglomerate: Yup.string()
      .required(" Por favor seleccione un conglomerado.")
      .ensure(),
    correspondence_company: Yup.string()
      .required(" Por favor seleccione una empresa.")
      .ensure(),
    correspondence_headquarter: Yup.string()
      .required(" Por favor seleccione una sede.")
      .ensure(),
    correspondence_typeDocumentary: Yup.string()
      .required(" Por favor seleccione un tipo de documento.")
      .ensure(),
    correspondence_documentDate: Yup.date().required(
      " Por favor introduzca la fecha del documento."
    ),
    correspondence_documentNum: Yup.string().required(
      " Por favor intruduzca el número del documento."
    ),
    correspondence_country: Yup.string()
      .required(" Por favor seleccione un país.")
      .ensure(),
    correspondence_department: Yup.string()
      .required(" Por favor seleccione un departamento. ")
      .ensure(),
    correspondence_city: Yup.string()
      .required(" Por favor seleccione una ciudad.")
      .ensure(),
    correspondence_typeArrival: Yup.string()
      .required(" Por favor introduzca un tipo de llegada.")
      .ensure(),
    correspondence_guide: Yup.string().required(
      " Por favor introduzca la guía."
    ),
    correspondence_folios: Yup.string().required(
      " Por favor intruduzca los folios."
    ),
    correspondence_issue: Yup.string().required(
      " Por favor introduzca el asunto."
    ),
    correspondence_messenger: Yup.string()
      .required(" Por favor seleccione un mensajero.")
      .ensure(),
    correspondence_template: Yup.string()
      .required(" Por favor seleccione una plantilla")
      .ensure(),
    correspondence_conglomerate_receiver: Yup.string().nullable().ensure(),
    correspondence_company_receiver: Yup.string().nullable().ensure(),
    correspondence_headquarter_receiver: Yup.string().nullable().ensure(),
    correspondence_sender: Yup.array().of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  }),
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
