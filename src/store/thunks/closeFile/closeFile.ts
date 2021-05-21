import { Dispatch } from 'redux';
import { removeActiveFile, setEditorActiveFile } from '../../reducers/files/reducer';
import { RootState } from '../../store';

const getNewActiveFiles = (activeFilesIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemoveIndex = activeFilesIds.indexOf(fileId);

  if (fileToBeRemoveIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemoveIndex - 1];
  }
  return activeFilesIds[fileToBeRemoveIndex + 1];
};

const closeFile = (fileId: string) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState();
  const { activeFiles, editorActiveFile } = state.files;
  const activeFilesLength = activeFiles.length;

  if (activeFilesLength >= 2) {
    const newActiveFileId = getNewActiveFiles(activeFiles, activeFilesLength, fileId);
    if (editorActiveFile === fileId || editorActiveFile === newActiveFileId) {
      dispatch(setEditorActiveFile(newActiveFileId));
    }
  } else {
    dispatch(setEditorActiveFile(null));
  }
  dispatch(removeActiveFile(fileId));
};
export default closeFile;
