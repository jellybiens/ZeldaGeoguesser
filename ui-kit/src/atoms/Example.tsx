import { Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';


const useStyles = makeStyles(() => {
  return {
    root: {
    },
  };
});

type ExampleProps = {
  example?: string
}

export const Example: React.FC<ExampleProps> = (props) => {
  const cs = useStyles();
  const {
      example = 'blah blah blah',
    } = props;

  return (
    <Grid container className={cs.root} >
      <Grid item xs={12}>{example}</Grid>
    </Grid>
  );
};
