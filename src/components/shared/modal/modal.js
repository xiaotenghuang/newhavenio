import React, { useCallback, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { Dialog } from '@reach/dialog';

import '@reach/dialog/styles.css';

// @reach/dialog imports react-remove-scroll-bar which incorrectly computes
// screen width for very small screens, adding an extra margin-right when the
// mobile nav is opened. This removes it.
const FixReactRemoveScrollGlobalStyle = createGlobalStyle`
  html body {
    margin-right: 0 !important;
  }
`;

const Modal = ({ open, hideModal, children, ...props }) => {
  const handleKeyDown = useCallback(
    ({ key }) => key === 'Escape' && open && hideModal(),
    [open]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {open && <FixReactRemoveScrollGlobalStyle />}
      <Dialog isOpen={open} {...props}>
        {children}
      </Dialog>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
