import React from "react";
import PropTypes from "prop-types";
import { TEMPLATE_STATUS } from "../../../../../../../../services/EndPoints";

class SelectTemplate extends React.Component {
  state = {
    dataTemplate: [],
    t: this.props.t,
    auth:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTI0Nzg5NDEsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6IjE5Mjg3MTBiLTFhNjYtNDY4OC05NTlhLWY0ZWI5MzYxZDk4MiIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.ZnVTgEi3ou9_TXkRVUZEjMBfarDvWYlAi52N5aV8nZTUxVwEkH5rWzqF7QFLxfRn2H1VxQxAwcrRqd5R2w9RFPhsx8hNqJUqPZOSnCY6Ut3CTzmdKYcZT29Y-Q8uPXDsPOA9r4UL5fT43OUI08_NYx624r-98JvmVQmMrneFF2vq_AyLGSuiuUn-8tnEzBOouDtGEKC86B3rCLEn6p9ulMZ6Q4qiPBpLien3eO3xQgNQ7l9XrRJ0Bnvg76XV_6ql3SrVDytGZWGqM03KBo8LPA8Nr4cO7oaOJ1x-azbG0vN752OABsTDVIObFslDPX1QsCrPYf87gpFnUfZQye1dlw",
  };

  componentDidMount() {
    this.getData();
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
