import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from './actions/authActions';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: '150px',
    width: '350px'
  },
  inputs: {
    margin: '10px',
    display: 'flex'
  },
  button: {
    display: 'flex',
    marginTop: '20px',
    margin: 'auto'
  }
};

const RegisterView = props => {
  const {
    classes,
    auth,
    errors,
    registerUser,
    history
  } = props;

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleChange = (handleWhat, input) => {
    switch (handleWhat) {
      case 'email':
        setEmail(input);
        break;
      case 'username':
        setUsername(input);
        break;
      case 'password':
        setPassword(input);
        break;
      case 'password2':
        setPassword2(input);
        break;
      default:
        console.log(
          'defaultcaset tuli',
          email,
          username,
          password,
          password2
        );
    }
  };

  const handleRegisterClick = (
    e,
    email,
    username,
    password,
    password2
  ) => {
    e.preventDefault();
    registerUser(
      {
        email,
        username,
        password,
        password2
      },
      history
    );
  };

  return (
    <div className={classes.container}>
      <div>
        <h2>
          This is the RegisterView, here you can build the
          register window
        </h2>
      </div>
      <form
        onSubmit={e =>
          handleRegisterClick(
            e,
            email,
            username,
            password,
            password2
          )
        }
        id={'detailInputs'}
        className={classes.inputContainer}>
        <TextField
          autoFocus
          required
          error={!!errors.email}
          helperText={errors.email}
          className={classes.inputs}
          label="Email"
          variant={'filled'}
          onChange={e =>
            handleChange('email', e.target.value)
          }
        />
        <TextField
          required
          className={classes.inputs}
          label="Username"
          error={!!errors.username}
          helperText={errors.username}
          variant={'filled'}
          onChange={e =>
            handleChange('username', e.target.value)
          }
        />
        <TextField
          required
          className={classes.inputs}
          label="Password"
          variant={'filled'}
          error={!!errors.password}
          helperText={errors.password}
          type="password"
          onChange={e =>
            handleChange('password', e.target.value)
          }
        />
        <TextField
          required
          className={classes.inputs}
          label="Password again"
          variant={'filled'}
          error={!!errors.password2}
          helperText={errors.password2}
          type="password"
          onChange={e =>
            handleChange('password2', e.target.value)
          }
        />
        <Button
          className={classes.button}
          variant="outlined"
          type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

RegisterView.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(
  withStyles(styles)(withRouter(RegisterView))
);
