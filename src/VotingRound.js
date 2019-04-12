import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { locations } from './locations'; // TODO pull from firebase

const VotingRound = () => {
  const [choices, setChoices] = useState([]);

  const checkBoxOnClick = (location) => {
    if (choices.includes(location)) {
      setChoices(choices.filter(w => w !== location));
    } else {
      if (choices.length === 2) {
        setChoices(choices.slice(1).concat(location));
      } else {
        setChoices(choices.concat(location));
      }
    }
  }

  const displayLocations = () => {
    const result = [];
    locations.forEach((loc) => {
      result.push(
        <FormControlLabel
          key={loc}
          control={
            <Checkbox
              key={loc}
              checked={choices.includes(loc) ? true : false}
              onChange={() => checkBoxOnClick(loc)}
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
      <FormLabel>Vote for up to two</FormLabel>
      <FormGroup>
        { displayLocations() }
      </FormGroup>
    </FormControl>
  );
}

export default VotingRound;
