import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";
import ModalView from "../../ModalViewCorresponcenceSendOutStep1";
import ModalAdd from "../../ModalAddCorrespondenSendOutStep1";
import { EXTERNAL_CORRESPONDENCE_RECEIVED_POST } from "../../../../../../../services/EndPoints";
import {
  obtenerDataTipoDocumental,
  resetFormStep1TypeDocumentary,
} from "./../../../../../../../actions/step1ActionsInfoTypeDocumentary";
import { obtenerDataTemplate } from "../../../../../../../actions/step1SelectTemplateaActions";
import { resetFormStep1PreviewTemplate } from "../../../../../../../actions/step1ActionsPreviewTemplate";
import { resetFormStep1Receiver } from "../../../../../../../actions/step1ActionsReceiver";
import { resetFormStep1ThirdParty } from "../../../../../../../actions/step1ActionsThirdParty";
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
import ReceiverSelectConglomerado from "./Components/ReceiverSelectConglomerate";
import ReceiverFieldCompany from "./Components/ReceiverSelectCompany";
import ReceiverFieldHeadquarter from "./Components/ReceiverSelectHeadquarter";
import ReceiverFieldDependence from "./Components/ReceiverSelectDependence";
import UserList from "./Components/UserList";
import UserListEnabled from "./Components/UserListEnabled";
import ThirdParty from "./Components/SelectTercero";
import FieldIssue from "./Components/FieldIssue";
import PreviewTemplate from "./Components/PreviewTemplate";
import PreviewTemplateByTypeDocumentary from "./Components/PreviewTemplateByTypeDocumentary";

const FormStep1 = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.step1ReducerReceiver);
  const idTemplate = useSelector(
    (state) => state.step1ReducerInfoTypeDocumentary.infoAdditional.template
  );
  const idThirdParty = useSelector(
    (state) => state.step1ReducerThirdParty.thirdParty
  );
  const idMetadata = useSelector(
    (state) => state.step1ReducerPreviewTemplate.idMetadata
  );
  const modalViewRef = useRef("mv");
  const ModalAddRef = useRef("ma");
  const [changeInValueMetadata, setChangeInValueMetadata] = useState(false);
  const [nameUserFiling, setNameUserFiling] = useState("");
  const [headquarterFiling, setHeadquarterFiling] = useState("");
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
  const [
    oldValueConglomerateReceiver,
    setOldValueConglomerateReceiver,
  ] = useState();
  const [
    newValueConglomerateReceiver,
    setNewValueConglomerateReceiver,
  ] = useState();
  const [StateChangeAlert, setAux] = useState("");
  const [valueIdentification, setValueIdentification] = useState(null);
  const [dataInputs, setDataInputs] = useState();

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

  const today = new Date();
  const DateFiling = () => {
    return moment(today).format("DD-MM-YYYY");
  };
  const TimeFiling = () => {
    return moment(today).format("LT");
  };
  const DateValidity = () => {
    return moment(today).format("YYYY");
  };

  // const newDataInputsConsole = (data) => {
  //   const newdata = data
  //     ? Object.keys(data).map(function (key, index) {
  //         console.log(`${key}`);
  //         return data[key];
  //       })
  //     : [];

  //   const ids = idMetadata;

  //   if (newdata.length === ids.length) {
  //     return newdata;
  //   } else if (newdata.length !== ids.length) {
  //     const idss = new Set(newdata.map((d) => d.id));
  //     const merged = [...newdata, ...idMetadata.filter((d) => !idss.has(d.id))];
  //     return merged;
  //   } else if (newdata === null) {
  //     return data;
  //   }
  //   return data;
  // };

  useEffect(() => {
    setNameUserFiling(props.nameUserFiling);
    setHeadquarterFiling(props.headquarterFiling);
    dispatch(obtenerDataTemplate());
    console.log(changeInValueMetadata);
  }, [
    props.nameUserFiling,
    props.setHeadquarterFiling,
    idTemplate,
    changeInValueMetadata,
    // dataInputs,
  ]);
  return (
    <Formik
      initialValues={{
        correspondence_dateFiling: "",
        correspondence_timeFiling: "",
        correspondence_headquarter: "" /* S */,
        correspondence_validity: "" /* S */,
        correspondence_userFiling: "",
        correspondence_conglomerate: "" /* S */,
        correspondence_company: "" /* S */,
        correspondence_dependence: "" /* S */,
        correspondence_country: "" /* S */,
        correspondence_department: "" /* S */,
        correspondence_folios: "",
        correspondence_consecutive: "",
        correspondence_criterion: "" /* S */,
        correspondence_thirdParty: "" /* S */,
        correspondence_group: "" /* S */,
        correspondence_typeDocumentary: "" /* S */,
        correspondence_documentDate: "",
        correspondence_documentNum: "",
        correspondence_city: "" /* S */,
        correspondence_typeArrival: "" /* S */,
        correspondence_guide: "",
        correspondence_issue: "",
        correspondence_messenger: "" /* S */,
        correspondence_template: "" /* S */,
        correspondence_conglomerate_receiver: "" /* S */,
        correspondence_company_receiver: "" /* S */,
        correspondence_headquarter_receiver: "" /* S */,
        correspondence_dependence_receiver: "" /* S */,
      }}
      validationSchema={Yup.object().shape({
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
        correspondence_thirdParty: Yup.string().required(
          " Por favor asigne un tercero."
        ),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const newDataInputs = (data) => {
          const newdata = data
            ? Object.keys(data).map(function (key, index) {
                return data[key];
              })
            : [];

          const ids = idMetadata;

          if (newdata.length === ids.length) {
            return newdata;
          } else if (newdata.length !== ids.length) {
            const idss = new Set(newdata.map((d) => d.id));
            const merged = [
              ...newdata,
              ...idMetadata.filter((d) => !idss.has(d.id)),
            ];
            return merged;
          } else if (newdata === null) {
            return data;
          }
          return data;
        };

        setTimeout(() => {
          const auth = props.authorization;
          fetch(EXTERNAL_CORRESPONDENCE_RECEIVED_POST, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth,
            },
            body: JSON.stringify({
              documentDate: values.correspondence_documentDate,
              documentNumber: values.correspondence_documentNum,
              issue: values.correspondence_issue,
              guide: values.correspondence_guide,
              numFolio: values.correspondence_folios,
              headquarterId: values.correspondence_headquarter,
              typeDocumentaryId: values.correspondence_typeDocumentary,
              cityId: values.correspondence_city,
              typeShipmentArrivalId: values.correspondence_typeArrival,
              messengerId: values.correspondence_messenger,
              thirdPartyId: idThirdParty,
              templateId: values.correspondence_template,
              usersAddressees: userData.users,
              // metadata: newDataInputs(dataInputs),
              metadata: dataInputs,
            }),
          })
            .then((response) =>
              response.json().then((data) => {
                if (response.status === 201) {
                  toast.success("Se registro la radicación con éxito.", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: css({
                      marginTop: "60px",
                    }),
                  });
                  dispatch(resetFormStep1TypeDocumentary());
                  dispatch(resetFormStep1PreviewTemplate());
                  dispatch(resetFormStep1Receiver());
                  dispatch(resetFormStep1ThirdParty());
                } else if (response.status === 400) {
                  toast.error(
                    "Error al registrar la radicación. Inténtelo nuevamente.",
                    {
                      position: toast.POSITION.TOP_RIGHT,
                      className: css({
                        marginTop: "60px",
                      }),
                    }
                  );
                } else if (response.status === 500) {
                  toast.error(
                    "Ocurrio un problema al registrar la radicación por favor inténtelo nuevamente.",
                    {
                      position: toast.POSITION.TOP_RIGHT,
                      className: css({
                        marginTop: "60px",
                      }),
                    }
                  );
                }
              })
            )
            .catch((error) => {
              toast.error(`Error ${error} `, {
                position: toast.POSITION.TOP_RIGHT,
                className: css({
                  marginTop: "60px",
                }),
              });
            });
          setSubmitting(false);
          resetForm({
            correspondence_dateFiling: "",
            correspondence_timeFiling: "",
            correspondence_headquarter: "" /* S */,
            correspondence_validity: "" /* S */,
            correspondence_userFiling: "",
            correspondence_conglomerate: "" /* S */,
            correspondence_company: "" /* S */,
            correspondence_dependence: "" /* S */,
            correspondence_country: "" /* S */,
            correspondence_department: "" /* S */,
            correspondence_folios: "",
            correspondence_consecutive: "",
            correspondence_criterion: "" /* S */,
            correspondence_thirdParty: "" /* S */,
            correspondence_group: "" /* S */,
            correspondence_typeDocumentary: "" /* S */,
            correspondence_documentDate: "",
            correspondence_documentNum: "",
            correspondence_city: "" /* S */,
            correspondence_typeArrival: "" /* S */,
            correspondence_guide: "",
            correspondence_issue: "",
            correspondence_messenger: "" /* S */,
            correspondence_template: "" /* S */,
            correspondence_conglomerate_receiver: "" /* S */,
            correspondence_company_receiver: "" /* S */,
            correspondence_headquarter_receiver: "" /* S */,
            correspondence_dependence_receiver: "" /* S */,
          });
        }, 1000);
      }}
      render={({
        values,
        touched,
        errors,
        handleChange,
        setFieldValue,
        handleBlur,
        setFieldTouched,
        t,
        isSubmitting,
        handleSubmit,
      }) => (
        <div className="animated fadeIn">
          <ToastContainer />
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
                              <dd> {headquarterFiling} </dd>
                            </div>
                          </div>
                          <div className="col-md-2  ">
                            <div className="form-group text-center">
                              <label>
                                {" "}
                                <strong>Vigencia</strong>{" "}
                              </label>
                              <dd> {DateValidity()} </dd>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="form-group text-center">
                              <label>
                                {" "}
                                <strong>Usuario radicador</strong>{" "}
                              </label>
                              <dd> {nameUserFiling} </dd>
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
                              authorization={props.authorization}
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
                                setFieldTouched(
                                  "correspondence_conglomerate",
                                  true
                                )
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
                              authorization={props.authorization}
                              // t={props.t}
                              name="correspondence_company"
                              component={FieldCompany}
                              oldValueConglomerateId={oldValueConglomerate}
                              newValueConglomerateId={newValueConglomerate}
                              conglomerateId={
                                values.correspondence_conglomerate
                              }
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
                              authorization={props.authorization}
                              //   t={props.t}
                              name="correspondence_headquarter"
                              component={FieldHeadquarter}
                              companyId={values.correspondence_company}
                              conglomerateId={
                                values.correspondence_conglomerate
                              }
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
                              authorization={props.authorization}
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
                                dispatch(
                                  obtenerDataTipoDocumental(e.target.value)
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
                              authorization={props.authorization}
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
                              authorization={props.authorization}
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
                              authorization={props.authorization}
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
                              Tipo de llegada{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <SelectTypeShipmentArrival
                              authorization={props.authorization}
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
                                setFieldTouched(
                                  "correspondence_typeArrival",
                                  true
                                )
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
                            <Field
                              name={"correspondence_issue"}
                              component={FieldIssue}
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
                              authorization={props.authorization}
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
                                setFieldTouched(
                                  "correspondence_messenger",
                                  true
                                )
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
                <div className="card">
                  <div className="p-2 mb-1 bg-secondary text-dark">
                    Asignar tercero
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label>
                            Buscar tercero:{" "}
                            <span className="text-danger">*</span>{" "}
                          </label>
                          <div>
                            <label>
                              • Por favor introduzca el número de documento:{" "}
                            </label>{" "}
                          </div>
                          <div className="input-group input-group-sm mb-3">
                            &nbsp;
                            <input
                              name={"correspondence_thirdParty"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.correspondence_thirdParty}
                              type="text"
                              className={`form-control form-control-sm ${
                                errors.correspondence_thirdParty &&
                                touched.correspondence_thirdParty &&
                                "is-invalid"
                              }`}
                            />
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-secondary"
                                type="button"
                                id="button-addon2"
                                onClick={() => {
                                  setValueIdentification(
                                    values.correspondence_thirdParty
                                  );
                                }}
                              >
                                <i className="fa fa-search" />
                              </button>
                            </div>
                            &nbsp;
                            <div style={{ color: "#D54B4B" }}>
                              {errors.correspondence_thirdParty &&
                              touched.correspondence_thirdParty ? (
                                <i className="fa fa-exclamation-triangle" />
                              ) : null}
                              <ErrorMessage name="correspondence_thirdParty" />
                            </div>
                          </div>

                          <ThirdParty
                            id={valueIdentification}
                            valueInput={values.correspondence_thirdParty}
                            authorization={props.authorization}
                          />
                        </div>
                      </div>
                      <div className="col-md-12"></div>
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
                            authorization={props.authorization}
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
                            authorization={props.authorization}
                            // t={props.t}
                            name="correspondence_company_receiver"
                            component={ReceiverFieldCompany}
                            oldValueConglomerateId={
                              oldValueConglomerateReceiver
                            }
                            newValueConglomerateId={
                              newValueConglomerateReceiver
                            }
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
                            authorization={props.authorization}
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
                            authorization={props.authorization}
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
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Destinatarios disponibles</label>
                          <UserList
                            authorization={props.authorization}
                            id={values.correspondence_dependence_receiver}
                          />
                        </div>
                      </div>
                      <UserListEnabled data={userData} aux={StateChangeAlert} />
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
                          <Field
                            authorization={props.authorization}
                            name={"correspondence_template"}
                            component={SelectTemplate}
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
                    <div className="row">
                      <div className="col-md-12">
                        <Field
                          authorization={props.authorization}
                          component={PreviewTemplate}
                          id={values.correspondence_template}
                          onDataOnChange={(datainputs) =>
                            setDataInputs(datainputs)
                          }
                          changeInMetadata={(changeInValueMetadata) =>
                            setChangeInValueMetadata(changeInValueMetadata)
                          }
                        />
                      </div>
                      <div className="col-md-12">
                        {/* <Field
                          component={PreviewTemplateByTypeDocumentary}
                          onDataOnChange={(datainputs) =>
                            setDataInputs(datainputs)
                          }
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-footer">
                    <div className="pull-right">
                      <button
                        type="submit"
                        className="btn btn-success btn-sm"
                        disabled={isSubmitting}
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        {isSubmitting ? (
                          <i className=" fa fa-spinner fa-spin" />
                        ) : (
                          <div>
                            <i className="fa fa-save" /> Radicar
                          </div>
                        )}
                      </button>
                      {/* &nbsp;
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                          console.log(newDataInputsConsole(dataInputs));
                        }}
                      >
                        METADATOS
                      </button> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ModalView modalviewstate={modalView} ref={modalViewRef} />
          <ModalAdd modaladdstate={modalAdd} ref={ModalAddRef} />
        </div>
      )}
    />
  );
};
export default FormStep1;
