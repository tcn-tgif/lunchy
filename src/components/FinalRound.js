import React, { useState, useContext, useEffect } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useCollection } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from './Firebase';

const FinalRound = (props) => {
  const [choice, setChoice] = useState('');
  const firebase = useContext(FirebaseContext);
  const { /*error, loading,*/ value } = useCollection(
    firebase.firestore.collection('restaurants')
  );

  useEffect(() => {
    updateFirebase();
  }, [choice]);

  const updateFirebase = async () => {
    const userRef = await firebase.firestore.collection('users').doc(firebase.auth.currentUser.email);
    userRef.get().then(doc => {
      if (doc) {
        firebase.firestore.collection('users').doc(firebase.auth.currentUser.email).set({
          [props.lunchId]: {
            round3: choice,
            ...doc.data()[props.lunchId],
          }
        });
      }
    }).catch((err) => console.error('oops', err));
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
    <FormControl>
      <FormLabel>Vote for your winner</FormLabel>
      <FormGroup>
        { displayLocations() }
      </FormGroup>
    </FormControl>
  );
}

export default FinalRound;
