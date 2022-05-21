import React from "react";
import PropTypes from "prop-types";

const Footer = ({year, label}) => {
  return (
    <footer className="main-footer">
      <div className="footer-left">
        Copyright © {year} <div className="bullet" />
        <a href="#">{label}</a>
      </div>
      <div className="footer-right"></div>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default Footer;
