import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";
import Slide from "react-reveal/Slide";
/**
Main platform button component
**/
const Button = ({
  buttonText,
  tenant,
  disabled,
  onClick,
  inverted,
  size,
  slide,
  onHover,
}) => {
  const buttonSize = size || "medium";

  if (slide) {
    return (
      <Slide left>
        <button
          onClick={() => onClick()}
          onMouseOver={() => onHover()}
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
      onMouseOver={() => onHover()}
      disabled={disabled}
      type="button"
      className={`${tenant} ${buttonSize} ${inverted ? "inverted" : ""}`}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  tenant: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
    Render with slide animation on load
    */
  slide: PropTypes.bool,
};

Button.defaultProps = {
  tenant: "",
  size: "medium",
  inverted: false,
  disabled: false,
  slide: false,
  onClick: () => null,
  onHover: () => null,
};

export default Button;
