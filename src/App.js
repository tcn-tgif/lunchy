import React, { useContext } from 'react';
import { Card, CardContent, Grid, CircularProgress, Typography, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import NominationRound from './NominationRound';
import VotingRound from './VotingRound';
import FinalRound from './FinalRound';

import { useAuthState } from 'react-firebase-hooks/auth';
import { FirebaseContext } from './Firebase';

const App = () => {
  const firebase = useContext(FirebaseContext);
  console.log('firebase', firebase);
  const {initialising, user} = useAuthState(firebase.auth);


  if (initialising) return <CircularProgress />;
  if (!user) return (
    <Typography>
      You Must <Button variant="contained" color="primary" onClick={firebase.login}>Login</Button>
    </Typography>
  );

  return <Button onClick={firebase.logout}>Logout</Button>;

  // return (
  //   <ThemeProvider theme={theme}>
  //     <Grid container spacing={2}>
  //       <Grid item xs={12} sm={4}>
  //         <Card elevation={2}>
  //           <CardContent>
  //             <NominationRound />
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //       <Grid item xs={12} sm={4}>
  //         <Card elevation={2}>
  //           <CardContent>
  //             <VotingRound />
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //       <Grid item xs={12} sm={4}>
  //         <Card elevation={2}>
  //           <CardContent>
  //             <FinalRound />
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //     </Grid>
  //   </ThemeProvider>
  // );
};

export default App;
