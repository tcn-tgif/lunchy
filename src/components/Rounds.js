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

const App = (props) => {
  const classes = useStyles();
  console.log(props.match.params);
  // TODO: check lunchid
  return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <NominationRound lunchId={props.match.params.lunchId} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <VotingRound lunchId={props.match.params.lunchId} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <FinalRound lunchId={props.match.params.lunchId} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
};

export default App;
