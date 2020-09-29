import React from "react";
import PropTypes from "prop-types";
import { TYPE_DOCUMENTARIES_STATUS } from "../../../../../../../../../../services/EndPoints";


class SelectTypeDocumentary extends React.Component {
  state = {
    dataTypeDocumentary: [],
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
          dataTypeDocumentary: data,
        });
      });
  };

  handleChange = (value) => {
    this.props.onChange("correspondence_typeDocumentary", value);
  };

  handleBlur = () => {
    this.props.onBlur("correspondence_typeDocumentary", true);
  };

  render() {
    return (
      <div>
        <select
          name={this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          value={this.props.value}
          className={this.props.className}
        >
          <option disabled value={""}>
            -- Seleccione --
          </option>
          {this.state.dataTypeDocumentary.map((aux, id) => {
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

SelectTypeDocumentary.propTypes = {
  authorization: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default SelectTypeDocumentary;
