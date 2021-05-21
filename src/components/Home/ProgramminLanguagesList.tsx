import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Swift } from '../../assets/images/swift.svg';
import { ReactComponent as TypeScript } from '../../assets/images/typescript.svg';
import { ReactComponent as Python } from '../../assets/images/python.svg';
import { ReactComponent as Php } from '../../assets/images/php.svg';
import { ReactComponent as Ruby } from '../../assets/images/ruby.svg';
import { ReactComponent as CSS } from '../../assets/images/css.svg';
import { ReactComponent as GO } from '../../assets/images/go.svg';
import { ReactComponent as R } from '../../assets/images/r.svg';
import { ReactComponent as CSHARP } from '../../assets/images/csharp.svg';
import { ReactComponent as C } from '../../assets/images/cpp.svg';
import { ReactComponent as Haskell } from '../../assets/images/haskell.svg';
import { ReactComponent as Kottlin } from '../../assets/images/kotlin.svg';
import { ReactComponent as Lua } from '../../assets/images/lua.svg';
import { ReactComponent as Java } from '../../assets/images/java.svg';
import { ReactComponent as JavaScript } from '../../assets/images/javascript.svg';
import { ReactComponent as HTML } from '../../assets/images/html.svg';

const ProgramminLanguagesList = () => {
  const classes = useStyles();
  return (
    <div>
      <Swift className={classes.icon} />
      <HTML className={classes.icon} />
      <Lua className={classes.icon} />
      <Haskell className={classes.icon} />
      <Kottlin className={classes.icon} />
      <CSS className={classes.icon} />
      <GO className={classes.icon} />
      <R className={classes.icon} />
      <C className={classes.icon} />
      <CSHARP className={classes.icon} />
      <TypeScript className={classes.icon} />
      <Java className={classes.icon} />
      <JavaScript className={classes.icon} />
      <Python className={classes.icon} />
      <Php className={classes.icon} />
      <Ruby className={classes.icon} />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  icon: {
    padding: '10px',
    height: '50px',
    width: '50px',
  },
}));

export default ProgramminLanguagesList;
