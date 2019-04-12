import React, { useContext } from 'react';
import { CircularProgress, Typography, Button } from '@material-ui/core';

import Rounds from './Rounds';

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

  return (
    <Rounds />
  );
};

export default App;
