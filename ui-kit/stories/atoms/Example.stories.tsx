import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '@material-ui/core';
import { Example } from '@ui-kit';

const title = 'Example';


const Story = () => {
  return (
    <Container title={title}>
      <Example />
    </Container>
  );
};

storiesOf('Core/Atoms', module).add(title, Story);
