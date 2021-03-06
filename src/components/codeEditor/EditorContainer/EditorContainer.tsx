import { AppBar, makeStyles, Tabs, Tab } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setEditorActiveFile } from '../../../store/reducers/files/reducer';
import selectActiveFile from '../../../store/selectors/selectActiveFiles/selectActiveFile';
import CustomTabPanel from './CustomTabPanel';
import CustomTapLabel from './CustomTapLabel';

const EditorContainer = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFile);
  const editorActiveFile = useAppSelector((state) => state.files.editorActiveFile);
  const activeFilesIds = useAppSelector((state) => state.files.activeFiles);

  if (!activeFiles.length) {
    return <div className={classes.emptyMessage}>Select a File</div>;
  }
  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    const activeFileId = activeFilesIds[tabPosition];
    if (activeFileId !== editorActiveFile) {
      dispatch(setEditorActiveFile(activeFileId));
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0}
          onChange={onTabClick}
        >
          {activeFiles.map((activeFile) => (
            <Tab key={activeFile.id} label={<CustomTapLabel activeFile={activeFile} />} />
          ))}
        </Tabs>
      </AppBar>
      {activeFiles.map((activeFile) => (
        <CustomTabPanel key={activeFile.id} activeFile={activeFile} editorActiveFile={editorActiveFile} />
      ))}
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: '100%',
    overflow: 'hidden',
  },
  emptyMessage: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.font,
  },
}));

export default EditorContainer;
