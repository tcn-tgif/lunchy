import React, { useState, useContext, useEffect } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/styles';

import { useCollection } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../Firebase';


const useStyles = makeStyles({
  form: {
    // minWidth: "80%",
  },
});

const NominationRound = (props) => {
  const firebase = useContext(FirebaseContext);
  let { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('restaurants')
  );
  const classes = useStyles();
  const [choices, setChoices] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    if (checkAll) {
      firebase.firestore.collection('users').doc(firebase.auth.currentUser.email).set({
        [props.lunchId]: {
          round1: value.docs.map(doc => doc.id)
        }
      });
    } else if (choices.length) {
      firebase.firestore.collection('users').doc(firebase.auth.currentUser.email).set({
        [props.lunchId]: {
          round1: choices
        }
      });
    }
  }, [choices, checkAll]);

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
  );
}

export default NominationRound;
