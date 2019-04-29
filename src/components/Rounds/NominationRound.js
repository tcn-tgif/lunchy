import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
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

const NominationRound = (props) => {
  const firebase = useContext(FirebaseContext);
  let { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('restaurants')
  );
  const classes = useStyles();
  const [choices, setChoices] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const updateFirebase = () => {
    firebase.firestore.collection('lunches').doc(props.lunchId).collection('rounds').doc('1').set({
      [firebase.auth.currentUser.email]: checkAll ? value.docs.map(doc => doc.id) : choices
    })
  };


  const checkBoxOnClick = (location) => {
    if (checkAll) {
      setCheckAll(false);
    }
    if (choices.includes(location)) {
      setChoices(choices.filter(w => w !== location));
    } else {
      setChoices(choices.concat(location));
    }
  }

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
                checked={checkAll || choices.includes(loc) ? true : false}
                onChange={() => checkBoxOnClick(loc)}
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
          <FormLabel>Nominate as many as you like</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={checkAll}
                  onChange={() => setCheckAll(!checkAll) }
                />
              }
              label="Luncheon Roulette"
            />
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

export default NominationRound;
