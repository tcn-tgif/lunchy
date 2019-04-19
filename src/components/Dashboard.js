import React, { useContext } from 'react';
import { FirebaseContext } from './Firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Typography, Grid, Card } from '@material-ui/core';

/*
  1. List lunches
  2. Start new Lunch
  3. Post to Slack
*/

const Dashboard = () => {
  const firebase = useContext(FirebaseContext);
  const { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('lunches')
  );
    console.log('value: ', value);

  return (
  <div>
    <Typography variant="h4">Dashboard</Typography>
    <Grid container spacing={3}>
      <Grid item sm={6}>
        {value && value.docs.map(doc => (
          <Card><pre>{JSON.stringify(doc.data(), null, 2)}</pre></Card>
        ))}
      </Grid>
    </Grid>
  </div>
  )
}

export default Dashboard;
