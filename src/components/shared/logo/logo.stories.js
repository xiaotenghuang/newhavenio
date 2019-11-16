import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color } from '@storybook/addon-knobs';
import { Oranges } from '../../../constants/theme/colors';

import Logo from './logo';

storiesOf('Logo', module).add('default', () => {
  const knobs = {
    squareColor: color('Square Color', Oranges[100]),
    letterColor: color('Letter Color', 'transparent'),
  };

  return (
    <div style={{ height: '100px', width: '100px' }}>
      <Logo {...knobs} onClick={action('clicked')} />
    </div>
  );
});
