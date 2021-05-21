import { Dispatch } from 'redux';
import supportedExtensions from '../../../constants/supportedExtensions';
import FileViewerEstructure from '../../../types/FileViewerStructure';
import { addActiveFile, setEditorActiveFile } from '../../reducers/files/reducer';
import { RootState } from '../../store';

const openFile = (node: FileViewerEstructure) => (dispatch: Dispatch, getState: () => RootState) => {
  const { extension: fileExtension = '', id: fileId, children } = node;
  if (children || !supportedExtensions[fileExtension]) {
    return;
  }
  const state = getState();
  const activeFile = state.files.activeFiles;
  if (!activeFile.includes(fileId)) {
    dispatch(addActiveFile(fileId));
  }
  dispatch(setEditorActiveFile(fileId));
};
export default openFile;
