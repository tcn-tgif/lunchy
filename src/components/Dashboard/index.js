import React from 'react';
import { Button, Card, CardContent, Grid, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LunchList from './LunchList';

const useStyles = makeStyles(theme => ({
  pos: {
    marginBottom: theme.spacing(4),
  },
  buttonSpread: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    justifyContent: "space-around",
  },
  blockquote: {
    borderLeft: "5px solid grey",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  author: {
    fontStyle: 'italic',
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();
  console.log(props.match.params);
  // TODO: check lunchid
  return (
      <Grid container spacing={6} direction="column">
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <Typography variant="h5" component="h2">
                Lunchy
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Join the club
              </Typography>
              <Typography gutterBottom className={classes.blockquote}>
                "All members of the development class must seize the means of producing lunch. I believe that all people should be polled according to their taste and that lunch and snacks should be distributed according to consensus. Once I thought these ends could be used in accord with free individual initiative. After earnest observation I now believe that private decision and ordering may lead to lunch disaster."
              </Typography>
              <Typography variant="subtitle2" gutterBottom color="textSecondary">
                roughly paraphrased from biography of W.E.B. DuBois, 1968
              </Typography>
            </CardContent>
            <Toolbar className={classes.buttonSpread}>
              <Button variant="contained" color="primary">Create</Button>
              <Button variant="contained" color="secondary">Join</Button>
            </Toolbar>
          </Card>
        </Grid>

        <Grid item container spacing={6}>
          <Grid item sm={6}>
            <LunchList title="Active Lunches" />
          </Grid>
          <Grid item sm={6}>
            <LunchList title="Past Lunches" />
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
