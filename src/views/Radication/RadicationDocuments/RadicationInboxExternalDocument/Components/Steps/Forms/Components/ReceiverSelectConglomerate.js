import React from "react";
import PropTypes from "prop-types";
import { CONGLOMERATES_STATUS } from "../../../../../../../../services/EndPoints";

class ReceiverSelectConglomerado extends React.Component {
  state = {
    dataConglomerate: [],
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
    fetch(`${CONGLOMERATES_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataConglomerate: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("correspondence_conglomerate_receiver", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_conglomerate_receiver", true);
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
          {this.state.dataConglomerate.map((aux, id) => {
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

ReceiverSelectConglomerado.propTypes = {
  //   t: PropTypes.any,
  //   authorization: PropTypes.string.isRequired,
};
export default ReceiverSelectConglomerado;
