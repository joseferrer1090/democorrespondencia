import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { obtenerDataTemplate } from "../../../../../../../../actions/step1SelectTemplateaActions";

class SelectTemplate extends React.Component {
  state = {
    t: this.props.t,
    idTemplate: "",
  };

  componentDidMount() {
    this.getDataTemplate();
  }

  getDataTemplate = () => {
    this.props.getData();
  };
  handleChange = (value) => {
    this.props.onChange("correspondence_template", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_template", true);
  };

  valueTemplate = () => {
    let value = this.props.value;
    if (this.props.valueTemplateByTypeDocumentary !== undefined) {
      value = this.props.valueTemplateByTypeDocumentary.id;
    }
    return value;
  };
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
  render() {
    const { t } = this.props;
    const dataTemplate = this.props.dataTemplate;
    const valueTemplateByTypeDocumentary = this.props
      .valueTemplateByTypeDocumentary;
    const { idTemplate } = this.state;

    return (
      <div>
        <select
          name={this.props.name}
          onChange={(e) => {
            this.handleChange();
            this.setState({});
          }}
          onBlur={this.props.onBlur}
          value={this.valueTemplate()}
          className={this.props.className}
        >
          <option value={""}>-- Seleccione --</option>
          {dataTemplate.map((aux, id) => {
            return (
              <option key={id} value={aux.id}>
                {aux.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

SelectTemplate.propTypes = {
  //   t: PropTypes.any,
  //   authorization: PropTypes.string.isRequired,
};
function mapState(state) {
  return {
    dataTemplate: state.step1ReducerDataTemplate.dataTemplate,
    valueTemplateByTypeDocumentary:
      state.step1ReducerInfoTypeDocumentary.infoAdditional.template,
  };
}
function mapDispatch(dispatch) {
  return {
    getData: () => {
      dispatch(obtenerDataTemplate());
    },
  };
}
export default connect(mapState, mapDispatch)(SelectTemplate);
