import React from "react";
import PropTypes from "prop-types";
import { MESSENGER_STATUS } from "../../../../../../../../services/EndPoints";

class SelectMessenger extends React.Component {
  state = {
    dataMessenger: [],
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
    fetch(`${MESSENGER_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataMessenger: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("correspondence_messenger", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_messenger", true);
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
          {this.state.dataMessenger.map((aux, id) => {
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

SelectMessenger.propTypes = {
  //   t: PropTypes.any,
  //   authorization: PropTypes.string.isRequired,
};
export default SelectMessenger;
