import React, { useContext } from 'react';
import { Card, CardContent, Grid, CircularProgress, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import NominationRound from './NominationRound';
import VotingRound from './VotingRound';
import FinalRound from './FinalRound';

import { useAuthState } from 'react-firebase-hooks/auth';
import { FirebaseContext } from './Firebase';
import Topbar from './Topbar';

import patrick from './assets/food.gif';

const useStyles = makeStyles(theme => ({
  appWrapper: {
    minHeight: '100vh',
  },
  contentWrapper: {
    paddingTop: theme.spacing(2),
  },
  loginMessage: {
    backgroundImage: `url(${patrick})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    paddingRight: theme.spacing(7),
    paddingTop: theme.spacing(2),
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  }
}));

const App = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);
  const {initialising, user} = useAuthState(firebase.auth);

  if (initialising) return <CircularProgress className={classes.spinner} />;

  return (
      <Grid container spacing={0} direction="column" className={classes.appWrapper}>
        <Grid item>
          <Topbar user={user} login={firebase.login} logout={firebase.logout} />
        </Grid>
        {user
          ? (<Grid item xs>
              <Container maxWidth="lg" className={classes.contentWrapper}>
                <Grid container spacing={2} alignItems="stretch">
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
              </Container>
            </Grid>
          )
          : (
            <Grid item xs className={classes.loginMessage}>
              <Typography variant="h3" color="textPrimary" align="right">YOU MUST LOGIN TO PARTICIPATE! ⤴</Typography>
            </Grid>
          )
        }
      </Grid>
  );
};

export default App;
