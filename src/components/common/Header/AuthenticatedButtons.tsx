import { makeStyles } from '@material-ui/core';
import React from 'react';
import SignOut from '../../../auth/SignOut';
import OpenWorkSpace from '../../codeEditor/OpenWorkSpace/OpenWorkSpace';

const AuthenticatedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OpenWorkSpace />
      <SignOut />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default AuthenticatedButtons;
