import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
  );
};

export default App;
