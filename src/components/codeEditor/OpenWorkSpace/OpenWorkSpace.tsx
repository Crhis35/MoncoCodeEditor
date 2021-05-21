import React, { useRef } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColors } from '../../../theme/colors';
import readFiles from '../../../store/thunks/readFiles/readFiles';
import { useAppDispatch } from '../../../store/hooks';

const OpenWorkSpace = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const directoryInputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    directoryInputRef.current?.click();
  };
  const onFileUpload = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList;
      await dispatch(readFiles(files));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button className={classes.button} onClick={onClick}>
        Open Workspace
      </Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFileUpload}
      />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
  input: {
    display: 'none',
  },
}));

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

export default OpenWorkSpace;
