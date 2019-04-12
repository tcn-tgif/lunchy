import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import theme from './theme';

import NominationRound from './NominationRound';
import VotingRound from './VotingRound';
import FinalRound from './FinalRound';

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <NominationRound />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <VotingRound />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <FinalRound />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
