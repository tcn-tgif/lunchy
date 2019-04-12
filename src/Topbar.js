import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const Topbar = ({ user, logout, login }) => {
  const classes = useStyles();
  return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Lunchy[club]
          </Typography>
          { !user
            ? <Button color="inherit" onCLick={login}>Login</Button>
            : <Button color="inherit" onClick={logout}>Logout</Button>
          }
        </Toolbar>
      </AppBar>
  );
}

export default Topbar;