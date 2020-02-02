import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    width: '100%'
  }
};

const LoginView = props => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.container}>
        <h1>
          This is the loginView, here you can build the
          login window.
        </h1>
      </div>
      <div>
        <form>
          <TextField
            autoFocus
            required
            // error={!!errors.email}
            // helperText={errors.email}
            label="Username"
            variant={'filled'}
          />
          <TextField
            required
            // error={!!errors.email}
            // helperText={errors.email}
            label="password"
            variant={'filled'}
          />
          <Button variant="outlined" type="submit">
            True login
          </Button>
        </form>
      </div>
      <div>
        <Link to="/MainPage">
          <Button onClick={() => {}}>Temp Login</Button>
        </Link>
        <Link to="/Register">
          <Button onClick={() => {}}>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(LoginView);
