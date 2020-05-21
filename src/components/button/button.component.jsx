import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";

const Button = ({ buttonText, tenant, disabled, onClick, inverted }) => {
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      type="button"
      className={`${tenant} ${inverted ? "inverted" : ""}`}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  tenant: PropTypes.string,
};

Button.defaultProps = {
  tenant: "",
  inverted: false,
  disabled: false,
  onClick: () => null,
};

export default Button;
