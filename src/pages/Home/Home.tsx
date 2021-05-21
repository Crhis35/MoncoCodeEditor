import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProgramminLanguagesList from '../../components/Home/ProgramminLanguagesList';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.welcome}>Welcome to the Code Editor App</div>
      <ProgramminLanguagesList />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  welcome: {
    padding: '15px',
    fontSize: '30px',
    color: theme.font,
  },
}));
export default Home;
