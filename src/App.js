import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import NominationRound from './NominationRound';
import VotingRound from './VotingRound';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     height: "100vh",
//     backgroundColor: "grey",
//   },
//   paper: {
//     minHeight: "100px",
//     width: "25vw",
//   },
// })


const App = () => {
  // const classes = useStyles();

  const card = (
    <Card elevation={2}>
      <CardContent>
        <Typography>Column</Typography>
      </CardContent>
    </Card>
  );

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
          {card}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
