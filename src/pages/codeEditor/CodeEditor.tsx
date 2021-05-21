import React from 'react';
import { makeStyles } from '@material-ui/core';
import FileViewer from '../../components/codeEditor/FileViewer/FileViewer';
import EditorContainer from '../../components/codeEditor/EditorContainer/EditorContainer';

const CodeEditor = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.fileViewer}>
        <FileViewer />
      </div>
      <div className={classes.codeEditorContainer}>
        <EditorContainer />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  fileViewer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    borderRight: '1px dashed black',
    maxWidth: '300px',
    overflow: 'auto',
  },
  codeEditorContainer: {
    flex: 3,
    height: '100%',
  },
}));

export default CodeEditor;
