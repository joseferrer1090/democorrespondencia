import React from "react";
import PropTypes from "prop-types";
import { TYPE_DOCUMENTARIES_STATUS } from "../../../../../../../../../../services/EndPoints";

class SelectTypeDocumentaries extends React.Component {
  state = {
    dataTypeDocumentaries: [],
    // t: this.props.t,
    auth:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTIzNjU5NzQsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6IjBiMzlhZDZhLTU3MGYtNGZiZC1hZjQ4LTI4ZTUwY2FhMWMxZSIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.DTudaRDWfBiGAJxd7x_TR2CKqaSb1KzOePnS8e_aM6fi3doPnmdK3-YkvHPZ0QOo3fTEqzx6mKIl4o4MiqpHhU0ForGm1geUHZU3OZmGtm_LyaWe-aIPCsDXDEMNSVj_MT-n4Gveok8zHnJveFgNBNqke9dAlFyBCqDlPIx157X9SS_8FX5irKv6Ohkj5DqW_WRpdq1sGPxqZluLKz1NB-3W1ttIaRyFfs8UeSfGa8t5iJPKFU2IiQcW4WEvTWLHuvEt_tQHyjcc24ycwTqI401-JcJLUSGhrIZmLi5pgqkC-D13N_kEljjl5u0PhFU-4_UI1LL1wnBZkg9Sv_qXOA",
    statusValue: this.props.statusValue,
  };

  componentDidMount() {
    this.getData();
    setTimeout(() => {
      console.log(this.props.value);
    }, 1000);
  }

  getData = () => {
    fetch(`${TYPE_DOCUMENTARIES_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataTypeDocumentaries: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("", value);
  };

  handleBlur = () => {
    this.props.onBlur("", true);
  };

  render() {
    // const { t } = this.props;
    return (
      <div>
        <select
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          className={this.props.className}
          onBlur={this.props.onBlur}
        >
          <option value={""}>-- Seleccione --</option>
          {this.state.dataCountry.map((aux, id) => {
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
SelectTypeDocumentaries.propTypes = {
  //   t: PropTypes.any,
  //   authorization: PropTypes.string.isRequired
};
export default SelectTypeDocumentaries;
