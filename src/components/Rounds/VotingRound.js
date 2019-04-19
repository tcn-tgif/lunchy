import React, { useState, useContext } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useCollection } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../Firebase';

const VotingRound = () => {
  const [choices, setChoices] = useState([]);
  const firebase = useContext(FirebaseContext);
  const { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('restaurants')
  );

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
    <FormControl>
      <FormLabel>Vote for up to two</FormLabel>
      <FormGroup>
        { displayRestaurants() }
      </FormGroup>
    </FormControl>
  );
}

export default VotingRound;
