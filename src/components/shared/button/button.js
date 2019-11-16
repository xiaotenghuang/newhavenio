import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './button.css';

/**
 * A static display component that provides padding and a slight shadow.
 */
const Button = ({ children, disabled, palette, click = () => {} }) => (
  <Styled.Container disabled={disabled} palette={palette} onClick={click}>
    {children}
  </Styled.Container>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  click: PropTypes.func,
  palette: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Button.defaultProps = {
  palette: 'primary',
};

Button.Wrapper = Styled.ButtonWrapper;

export default Button;
