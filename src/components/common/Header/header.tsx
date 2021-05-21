import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import DarkModeIcon from '@material-ui/icons/Brightness2';
import React from 'react';
import { toogleDarkMode } from '../../../store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import AuthenticatedButtons from './AuthenticatedButtons';
import UnAuthenticatedButtons from './UnAuthenticatedButtons';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const darkMode = useAppSelector((state) => state.darkMode);

  const dispatch = useAppDispatch();
  const onChangeDarkMode = () => {
    dispatch(toogleDarkMode());
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnAuthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

export default Header;
