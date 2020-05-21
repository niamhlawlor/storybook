import React from "react";
import PropTypes from "prop-types";

import Button from "../button/button.component";

import "./footer.css";

const Footer = ({ loading, tenant }) => {
  const classList = tenant ? `footer ${tenant}` : "footer";
  return (
    <div className={classList}>
      <Button
        inverted
        disabled={loading}
        tenant={tenant}
        buttonText={`Cancel`}
      />
      <Button
        disabled={loading}
        tenant={tenant}
        buttonText={loading ? "Submitting..." : `Submit`}
      />
    </div>
  );
};

Footer.propTypes = {
  loading: PropTypes.bool,
  tenant: PropTypes.string,
};

Footer.defaultProps = {
  loading: false,
  tenant: null,
};

export default Footer;
