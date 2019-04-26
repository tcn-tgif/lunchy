import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
// import CheckIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 1px',
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
  cover: {
    height: '100%',
    width: 'auto',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: 'green',
    marginRight: theme.spacing(1) / 2,
  }
}));


const LunchItem = props => {
  const classes = useStyles();
  const createdAt = props.lunch.createdAt.seconds * 1000;

  const { roundOneDuration } = props.lunch;
  const roundTwoDuration = roundOneDuration / 2;
  const roundThreeDuration = roundTwoDuration / 2;
  const endTime = createdAt + roundOneDuration + roundTwoDuration + roundThreeDuration;

  return (
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs>
            <div className={classes.details}>
              <Typography component="div" variant="subtitle1" className={classes.title}>
                {/* <CheckIcon className={classes.icon} /> {props.winner} */}
                <Link to={props.id}>Lunch: {props.id}</Link> <br />
              </Typography>
                <Typography variant="body2" color="textSecondary">
                  Created At: {(new Date(createdAt)).toLocaleString()}<br />
                  Time Left: <Countdown date={new Date(endTime)} />
                </Typography>
            </div>
          </Grid>

          {/* <Grid item xs>
            <CardMedia
              className={classes.cover}
              image="https://cdn0.wideopeneats.com/wp-content/uploads/2017/08/arbys-bourbon-menu-items.png"
              title="Arbys"
            />
          </Grid> */}
        </Grid>
      </Card>
  );
}

export default LunchItem;
