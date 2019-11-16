import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './inviteform.css';
import Button from '../button';

/**
 * Invite form for Slack
 */
const InviteForm = () => {
  const handleSubmit = () => {};
  return (
    <Styled.Container>
      <Styled.Input placeholder="you@email.com" required type="email" />
      <Button click={handleSubmit}>Get Invite</Button>
    </Styled.Container>
  );
};

InviteForm.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  palette: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default InviteForm;
