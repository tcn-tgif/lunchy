import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import { locations } from './locations';

const NominationRound = () => {
  const [choices, setChoices] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

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
    locations.forEach((loc) => {
      result.push(
        <FormControlLabel
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
    return result;
  };

  return (
    <FormControl>
      <FormLabel component="legend">Nominations</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checkAll}
              onChange={() => setCheckAll(!checkAll)}
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
