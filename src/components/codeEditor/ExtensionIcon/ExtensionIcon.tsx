import React from 'react';
import { makeStyles } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { ReactComponent as Swift } from '../../../assets/images/swift.svg';
import { ReactComponent as TypeScript } from '../../../assets/images/typescript.svg';
import { ReactComponent as Python } from '../../../assets/images/python.svg';
import { ReactComponent as Php } from '../../../assets/images/php.svg';
import { ReactComponent as Ruby } from '../../../assets/images/ruby.svg';
import { ReactComponent as CSS } from '../../../assets/images/css.svg';
import { ReactComponent as GO } from '../../../assets/images/go.svg';
import { ReactComponent as R } from '../../../assets/images/r.svg';
import { ReactComponent as CSHARP } from '../../../assets/images/csharp.svg';
import { ReactComponent as C } from '../../../assets/images/cpp.svg';
import { ReactComponent as Haskell } from '../../../assets/images/haskell.svg';
import { ReactComponent as Kottlin } from '../../../assets/images/kotlin.svg';
import { ReactComponent as Lua } from '../../../assets/images/lua.svg';
import { ReactComponent as Java } from '../../../assets/images/java.svg';
import { ReactComponent as JavaScript } from '../../../assets/images/javascript.svg';
import { ReactComponent as HTML } from '../../../assets/images/html.svg';
import { ReactComponent as REACT } from '../../../assets/images/react-js.svg';
import { ReactComponent as Default } from '../../../assets/images/text-file.svg';

interface Props {
  extension?: string;
}

const ExtensionIcon = (props: Props) => {
  const classes = useStyles();
  switch (props.extension) {
    case 'jsx':
    case 'tsx':
      return <REACT className={classes.icon} />;
    case 'html':
      return <HTML className={classes.icon} />;
    case 'swift':
      return <Swift className={classes.icon} />;
    case 'lua':
      return <Lua className={classes.icon} />;
    case 'haskall':
      return <Haskell className={classes.icon} />;
    case 'kottlin':
      return <Kottlin className={classes.icon} />;
    case 'css':
      return <CSS className={classes.icon} />;
    case 'go':
      return <GO className={classes.icon} />;
    case 'r':
      return <R className={classes.icon} />;
    case 'h':
    case 'c':
      return <C className={classes.icon} />;
    case 'cs':
      return <CSHARP className={classes.icon} />;
    case 'ts':
      return <TypeScript className={classes.icon} />;
    case 'java':
      return <Java className={classes.icon} />;
    case 'js':
      return <JavaScript className={classes.icon} />;
    case 'py':
      return <Python className={classes.icon} />;
    case 'php':
      return <Php className={classes.icon} />;
    case 'rb':
      return <Ruby className={classes.icon} />;

    default:
      return <InsertDriveFileIcon className={classes.icon} />;
  }
};
const useStyles = makeStyles(() => ({
  icon: {
    height: '15px',
    width: '15px',
  },
}));

export default ExtensionIcon;
