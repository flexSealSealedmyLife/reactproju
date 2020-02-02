import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './MainPage';
import LoginView from './LoginView';
import RegisterView from './RegisterView';

const styles = {
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background:
      'linear-gradient(254deg, rgba(174,242,249,1) 0%, rgba(0,0,0,1) 91%)'
  }
};

function App(props) {
  const { classes } = props;

  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <div>
            <Link to="/MainPage"></Link>
            <Link to="/"></Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route
              exact
              path="/login"
              render={() => <LoginView />}></Route>
            <Route
              path="/mainPage"
              render={() => <MainPage />}></Route>
            <Route
              path="/register"
              render={() => <RegisterView />}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
