import React from "react";
import PropTypes from "prop-types";
import { TEMPLATE_STATUS } from "../../../../../../../../services/EndPoints";

class SelectTemplate extends React.Component {
  state = {
    dataTemplate: [],
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
    fetch(`${TEMPLATE_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataTemplate: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("correspondence_template", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_template", true);
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
          {this.state.dataTemplate.map((aux, id) => {
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
export default SelectTemplate;
