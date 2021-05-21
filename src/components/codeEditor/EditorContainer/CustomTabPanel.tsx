import { makeStyles } from '@material-ui/core';
import React from 'react';
import UserFile from '../../../types/UserFile';
import CustonMonacoEditor from './CustonMonacoEditor';

interface Props {
  activeFile: UserFile;
  editorActiveFile: string | null;
}

const CustomTabPanel = (props: Props) => {
  const classes = useStyles();
  const { activeFile, editorActiveFile } = props;
  const { id: activeFileId } = activeFile;
  return (
    <div className={classes.root} role="tabpanel" hidden={editorActiveFile !== activeFileId}>
      <CustonMonacoEditor activeFile={activeFile} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
}));

export default CustomTabPanel;
