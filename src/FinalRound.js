import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { locations } from './locations'; // TODO pull from firebase winners only

const FinalRound = () => {
  const [choice, setChoice] = useState('');

  const displayLocations = () => {
    const result = [];
    locations.forEach((loc) => {
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
