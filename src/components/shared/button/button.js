import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './button.css';

/**
 * A static display component that provides padding and a slight shadow.
 */
const Button = ({ children, disabled, palette, onClick, type, ...props }) => (
  <Styled.Container
    disabled={disabled}
    palette={palette}
    onClick={onClick}
    type={type}
    {...props}
  >
    {children}
  </Styled.Container>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  palette: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
};

Button.Wrapper = Styled.ButtonWrapper;

export default Button;
