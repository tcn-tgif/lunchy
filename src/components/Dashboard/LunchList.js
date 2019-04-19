import React from 'react';
// import { FirebaseContext } from './Firebase';
// import { useCollection } from 'react-firebase-hooks/firestore';
import { Typography, Divider } from '@material-ui/core';
import LunchItem from './LunchItem';

/*
  1. List lunches
  2. Start new Lunch
  3. Post to Slack
*/

const LunchList = (props) => {
  // const firebase = useContext(FirebaseContext);
  // const { /*error, loading,*/ value } = useCollection(
  //   firebase.firestore.collection('lunches')
  // );
  //   console.log('value: ', value);
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5">{props.title}</Typography>
      <Divider />
      <LunchItem winner="Arbys" />
    </React.Fragment>
  )
  // return (
  // <div>
  //   <Typography variant="h4">Dashboard</Typography>
  //   <Grid container spacing={3}>
  //     <Grid item sm={6}>
  //       {value && value.docs.map(doc => (
  //         <Card><pre>{JSON.stringify(doc.data(), null, 2)}</pre></Card>
  //       ))}
  //     </Grid>
  //   </Grid>
  // </div>
  // )
}

export default LunchList;
