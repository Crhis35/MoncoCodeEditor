import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from '@material-ui/core';
import ProtectedRoutes from '../auth/ProtectedRoutes';
import Header from '../components/common/Header/header';
import Loading from '../components/common/loading/loading';
import routes from './mainRoutes';
import CodeEditor from '../pages/codeEditor/CodeEditor';
import Home from '../pages/Home/Home';

const Routes = () => {
  const classes = useStyles();

  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoutes path={routes.codeEditor}>{CodeEditor}</ProtectedRoutes>
          <Route exact path={routes.home}>
            {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <Home />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routes;
