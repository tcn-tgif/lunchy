import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckCircle';

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

  return (
    <Card className={classes.card}>
      <Grid container spacing={2}>
        <Grid item xs>
          <div className={classes.details}>
            <Typography component="h5" variant="h5" className={classes.title}>
              <CheckIcon className={classes.icon} /> {props.winner}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Won With 22 of 33 Votes.
            </Typography>
          </div>
        </Grid>

        <Grid item xs>
          <CardMedia
            className={classes.cover}
            image="https://cdn0.wideopeneats.com/wp-content/uploads/2017/08/arbys-bourbon-menu-items.png"
            title="Arbys"
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default LunchItem;