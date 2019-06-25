import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", name, cehcked = false, onChange }) => (
  <input type={type} name={name} checked={false} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
