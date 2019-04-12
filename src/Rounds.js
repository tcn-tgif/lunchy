import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import NominationRound from './NominationRound';
import VotingRound from './VotingRound';
import FinalRound from './FinalRound';

const Rounds = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent>
              <NominationRound />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent>
              <VotingRound />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent>
              <FinalRound />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Rounds;
