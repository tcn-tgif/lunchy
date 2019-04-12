import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { locations } from './locations'; // TODO pull from firebase

const VotingRound = () => {
  const [choices, setChoices] = useState([]);

  const checkBoxOnClick = (location) => {
    if (choices.includes(location)) {
      setChoices(choices.filter(w => w !== location));
    } else {
      setChoices(choices.concat(location));
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

  const isValid = () => {
    return choices.length > 2;
  }

  return (
    <FormControl error={isValid()}>
      <FormLabel>Vote for up to two</FormLabel>
      <FormGroup>
        { displayLocations() }
      </FormGroup>
      <FormHelperText>
        {isValid() ? 'select a maximum of two' : ''}
      </FormHelperText>
      <br />
      <Button
        color="primary"
        variant="contained"
        disabled={isValid() || choices.length === 0}
      >
        Submit
      </Button>
    </FormControl>
  );
}

export default VotingRound;
