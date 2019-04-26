import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import { useCollection } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../Firebase';

const useStyles = makeStyles({
  form: {
    width: '100%',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    maxWidth: '80%',
  }
});

const FinalRound = (props) => {
  const classes = useStyles();
  const [choice, setChoice] = useState('');
  const firebase = useContext(FirebaseContext);
  const { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('restaurants')
  );

  const updateFirebase = () => {
    firebase.firestore.collection('lunches').doc(props.lunchId).collection('rounds').doc('3').set({
      [firebase.auth.currentUser.email]: choice
    })
  };

  const displayLocations = () => {
    const result = [];
    if (value) {
      value.docs.map(doc => doc.id).forEach((loc) => {
        result.push(
          <FormControlLabel
            key={loc}
            control={
              <Checkbox
                key={loc}
                checked={choice === loc ? true : false}
                onChange={() => setChoice(loc)}
              />
            }
            label={loc}
          />
        );
      });
    }
    return result;
  };

  return (
    <Grid>
      <Grid item>
        <FormControl className={classes.form}>
          <FormLabel>Vote for your winner</FormLabel>
          <FormGroup>
            { displayLocations() }
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid className={classes.buttonContainer} item>
        <br />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={updateFirebase}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default FinalRound;
