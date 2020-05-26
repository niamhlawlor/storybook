import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";
import Slide from "react-reveal/Slide";

const Button = ({
  buttonText,
  tenant,
  disabled,
  onClick,
  inverted,
  size,
  slide,
}) => {
  const buttonSize = size || "medium";

  if (slide) {
    return (
      <Slide left>
        <button
          onClick={() => onClick()}
          disabled={disabled}
          type="button"
          className={`${tenant} ${buttonSize} ${inverted ? "inverted" : ""}`}
        >
          {buttonText}
        </button>
      </Slide>
    );
  }
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      type="button"
      className={`${tenant} ${buttonSize} ${inverted ? "inverted" : ""}`}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  slide: PropTypes.bool,
  onClick: PropTypes.func,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  tenant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  tenant: "",
  size: "medium",
  inverted: false,
  disabled: false,
  slide: false,
  onClick: () => null,
};

export default Button;
