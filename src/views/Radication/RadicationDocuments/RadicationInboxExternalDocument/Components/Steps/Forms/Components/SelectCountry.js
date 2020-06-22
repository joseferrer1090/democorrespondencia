import React from "react";
import PropTypes from "prop-types";
import { CONTRIES_STATUS } from "../../../../../../../../services/EndPoints";

class SelectCountry extends React.Component {
  state = {
    dataCountry: [],
    // t: this.props.t,
    auth:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTI2MjU5NTgsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6ImExMTZmMzcyLThjMGMtNDA3Ny05MDIyLWQwMTM0NzY0M2FmZSIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.EQy8M5cTIOVavoNuve5R0hNkRCQ1ihAaNP2YhPwgptgC9WMd1pSKAqk54fmvY3cMA2mwxOHi-X9uLahuIoQIS2g-IyrwbfMrQiRYKMxISUORMXKGhYoiU4CNE6murpRw0kb35PRaevJoh27eh4jH-WcHo4kmpdPRFP54LQ2ZopuCTuxZjF0IlKg5OwKxn4KnEXL5DPFDBIhI0ktpppMMcVlsVWwuSizP2uy24Rj4IqoTIq-M6ncleEwR4FAVmvKp0YkmThLwjmAXp5G49uTZPgEjgESmiQcV55Iz6_gxHg1IeK_QX_OCP644qaBlUBQ74Py9S_pCoxn69DzdguQVfA",
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(`${CONTRIES_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataCountry: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("correspondence_country", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_country", true);
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <select
          name={this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          value={this.props.value}
          className={this.props.className}
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
SelectCountry.propTypes = {
  //   t: PropTypes.any,
  //   authorization: PropTypes.string.isRequired
};

export default SelectCountry;
