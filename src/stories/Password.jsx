import React from 'react';
import PropTypes from 'prop-types';
import './password.css';

/**
 * Primary UI component for user interaction
 */
export const Password = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-password--primary' : 'storybook-password--secondary';
  return (
    // <button
    //   type="button"
    //   className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //   style={backgroundColor && { backgroundColor }}
    //   {...props}
    // >
    //   {label}
    // </button>
    <input type="password" 
        minLength={8}
        className={['storybook-password', `storybook-password--${size}`, mode].join(' ')}
    />
  );
};

Password.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the password be?
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * Password contents
   */
  label: PropTypes.string.isRequired,
};

Password.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'large',
};
