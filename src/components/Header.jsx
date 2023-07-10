import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ text, text2 }) => (
  <header className="row">
    <div className="col-10 mx-auto col-md-8 mt-4 text-body-tertiary">
      <h1>{text}</h1>
      <p>{text2}</p>
    </div>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Header;
