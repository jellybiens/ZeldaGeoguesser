import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid } from '@material-ui/core';
import { MapMarker } from '@ui-kit';
import { Icons } from '../../src/images';

const title = 'MapMarker';

const Story = () => {
  const renderMapMarkers = () => {
    const mapMarkers: React.ReactNode[] = [];

    for (let i = 0; i < 10; i++) {
      mapMarkers.push(
        <Grid item xs={3} key={i} style={{ paddingTop: 130 }}>
          <MapMarker indexNo={i} />
        </Grid>,
      );
    }
    return mapMarkers;
  };

  return (
    <Container title={title}>
      <Grid container spacing={3} style={{ backgroundColor: 'black' }}>
        {renderMapMarkers()}
        <img src={Icons[10]} />
      </Grid>
    </Container>
  );
};

storiesOf('Core/Atoms', module).add(title, Story);
