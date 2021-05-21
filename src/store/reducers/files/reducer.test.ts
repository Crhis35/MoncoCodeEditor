import { PayloadAction } from '@reduxjs/toolkit';
import filesReducer, {
  addActiveFile,
  initialState,
  removeActiveFile,
  setEditorActiveFile,
  setFiles,
  updateFileCode,
} from './reducer';

describe('files reducer', () => {
  test('Should return the initial state if no know action is provided', () => {
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  test('Should set user files when actions is setFiles', () => {
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        relativePath: 'test/index.js',
        code: 'console.log("Hello world")',
        extension: '.js',
      },
    ];
    const expectectedState = {
      ...initialState,
      activeFiles: [],
      userFiles,
    };
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectectedState);
  });
  test('Should add a new file id when action is addActiveFile', () => {
    const fileId = '1';
    const expectectedState = {
      ...initialState,
      activeFiles: [fileId],
    };
    expect(filesReducer(initialState, addActiveFile(fileId))).toEqual(expectectedState);
  });
  test('Should remove file id when action is removeActiveFile', () => {
    const fileId = '1';
    const modifiedInitialSte = {
      ...initialState,
      activeFiles: [fileId],
    };
    const expectectedState = {
      ...initialState,
      activeFiles: [],
    };
    expect(filesReducer(modifiedInitialSte, removeActiveFile(fileId))).toEqual(expectectedState);
  });
  test('Should update the code of a file when action is updateFileCode', () => {
    const payload = {
      fileId: '1',
      newCode: 'print("Hello World")',
    };

    const modifiedInitialSte = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'index.js',
          relativePath: 'test/index.js',
          code: 'console.log("Hello world")',
          extension: '.js',
        },
      ],
    };
    const expectectedState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'index.js',
          relativePath: 'test/index.js',
          code: 'print("Hello World")',
          extension: '.js',
        },
      ],
    };
    expect(filesReducer(modifiedInitialSte, updateFileCode(payload))).toEqual(expectectedState);
  });
  test('Should not update the state when action updateFileCode reducer does not find a file', () => {
    const payload = {
      fileId: '2',
      newCode: 'print("Hello World")',
    };

    const modifiedInitialSte = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'index.js',
          relativePath: 'test/index.js',
          code: 'console.log("Hello world")',
          extension: '.js',
        },
      ],
    };
    const expectectedState = modifiedInitialSte;
    expect(filesReducer(modifiedInitialSte, updateFileCode(payload))).toEqual(expectectedState);
  });
  test("Should set the editor's active file when action is setEditorFile", () => {
    const fileId = '1';

    const expectectedState = {
      ...initialState,
      editorActiveFile: fileId,
    };
    expect(filesReducer(initialState, setEditorActiveFile(fileId))).toEqual(expectectedState);
  });
});
