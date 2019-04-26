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

const VotingRound = (props) => {
  const classes = useStyles();
  const [choices, setChoices] = useState([]);
  const firebase = useContext(FirebaseContext);
  const { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('restaurants')
  );

  const updateFirebase = () => {
    firebase.firestore.collection('lunches').doc(props.lunchId).collection('rounds').doc('2').set({
      [firebase.auth.currentUser.email]: choices
    })
  };

  const checkBoxOnClick = (location) => {
    if (choices.includes(location)) {
      setChoices(choices.filter(w => w !== location));
    } else {
      setChoices(choices.concat(location));
    }
  }

  const displayRestaurants = () => {
    const result = [];
    if (value) {
      value.docs.map(doc => doc.id).forEach((loc) => {
        result.push(
          <FormControlLabel
            key={loc}
            control={
              <Checkbox
                key={loc}
                checked={choices.includes(loc) ? true : false}
                onChange={() => checkBoxOnClick(loc)}
                disabled={!choices.includes(loc) && choices.length === 2}
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
          <FormLabel>Vote for up to two</FormLabel>
          <FormGroup>
            { displayRestaurants() }
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

export default VotingRound;
