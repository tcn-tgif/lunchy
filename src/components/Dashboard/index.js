import React from 'react';
import { Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  author: {
    textAlign: "right",
    marginBotton: 12,
  },
  pos: {
    marginBottom: 30,
  },
  buttonSpread: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    justifyContent: "space-around",
  },
  blockquote: {
    borderLeft: "5px solid grey",
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "italics",
    marginBottom: 10,
  }
});

const Dashboard = (props) => {
  const classes = useStyles();
  console.log(props.match.params);
  // TODO: check lunchid
  return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card elevation={2}>
            <CardContent className={classes.card}>
              <Typography variant="h5" component="h2">
                Lunchy
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Join the club
              </Typography>
              <Typography className={classes.blockquote}>
                "All members of the development class must seize the means of producing lunch. I believe that all people should be polled according to their taste and that lunch and snacks should be distributed according to consensus. Once I thought these ends could be used in accord with free individual initiative. After earnest observation I now believe that private decision and ordering may lead to lunch disaster."
              </Typography>
              <Typography className={classes.author} color="textSecondary">
                roughly paraphrased from biography of W.E.B. DuBois, 1968
              </Typography>
            </CardContent>
            <Paper className={classes.buttonSpread}>
              <Button variant="contained" color="primary">Create</Button>
              <Button variant="contained" color="secondary">Join</Button>
            </Paper>
          </Card>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
