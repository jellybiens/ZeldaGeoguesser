import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '@material-ui/core';
import { Pins } from '@ui-kit';

const title = 'Pins';

const Story = () => {
  return (
    <Container title={title}>
      <Pins />
    </Container>
  );
};

storiesOf('Core/Atoms', module).add(title, Story);
