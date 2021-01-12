import { Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles(() => {
  return {
    root: {},
  };
});

type PinsProps = {
  example?: string;
};

export const Pins: React.FC<PinsProps> = (props) => {
  const cs = useStyles();
  const { example = 'this is the pins' } = props;

  return (
    <Grid container className={cs.root}>
      <Grid item xs={12}>
        {example}
      </Grid>
    </Grid>
  );
};
