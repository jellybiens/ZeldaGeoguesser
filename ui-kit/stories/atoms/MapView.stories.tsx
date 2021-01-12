import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '@material-ui/core';
import { MapView } from '@ui-kit';

const title = 'MapView';

const Story = () => {
  return (
    <Container title={title}>
      <MapView />
    </Container>
  );
};

storiesOf('Core/Atoms', module).add(title, Story);
