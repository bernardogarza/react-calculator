import React from "react";
import PropTypes from "prop-types";

export const Button = ({ name }) => (
  <div>
    <button className="button">{name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired
};
