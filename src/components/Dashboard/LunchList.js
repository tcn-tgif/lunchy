import React from 'react';
import { Typography, Divider, CircularProgress } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LunchItem from './LunchItem';


const LunchList = (props) => {
   const showLunches = (lunches, title) => lunches.docs.length > 0
    ? lunches.docs.map(lunch => {
      const data = lunch.data();
      return data.createdAt
        ? <LunchItem lunch={lunch.data()} id={lunch.id} key={lunch.id} />
        : null;
    })
    : <Typography variant="subtitle2">There are no {title}!</Typography>;


  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5">{props.title}</Typography>
      <Divider />
      <Box mt={2}>
        {props.lunches
          ? showLunches(props.lunches, props.title)
          : <CircularProgress size={18} style={{ marginTop: '8px' }} />
        }
      </Box>
    </React.Fragment>
  )
}

export default LunchList;
