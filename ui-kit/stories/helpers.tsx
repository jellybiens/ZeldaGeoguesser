import * as React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

export const Container: React.FC<{ title: string }> = ({ title, children }) => (
  <Box clone style={{ backgroundColor: '#ffe57f' }}>
    <Grid container>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  </Box>
);
