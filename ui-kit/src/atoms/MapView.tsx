import { Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles(() => {
  return {
    root: {},
  };
});

type MapViewProps = {
  example?: string;
};

export const MapView: React.FC<MapViewProps> = (props) => {
  const cs = useStyles();
  const { example = 'this is the map view' } = props;

  return (
    <Grid container className={cs.root}>
      <Grid item xs={12}>
        {example}
      </Grid>
    </Grid>
  );
};
