import React from "react";
import PropTypes from "prop-types";
import { TYPE_SHIPMENT_ARRIVAL_STATUS } from "../../../../../../../../services/EndPoints";

class SelectTypeShipmentArrival extends React.Component {
  state = {
    dataTypeShipmentArrival: [],
    t: this.props.t,
    auth: this.props.authorization,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.authorization !== state.auth) {
      return {
        auth: props.authorization,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.authorization !== prevProps.authorization) {
      this.setState(
        {
          auth: this.props.authorization,
        },
        this.getData()
      );
    }
  }

  getData = () => {
    fetch(`${TYPE_SHIPMENT_ARRIVAL_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataTypeShipmentArrival: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("correspondence_typeArrival", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_typeArrival", true);
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
          {this.state.dataTypeShipmentArrival.map((aux, id) => {
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

SelectTypeShipmentArrival.propTypes = {
  authorization: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default SelectTypeShipmentArrival;
