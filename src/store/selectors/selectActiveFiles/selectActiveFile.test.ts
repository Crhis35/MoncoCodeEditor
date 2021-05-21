import { RootState } from '../../store';
import selectActiveFile from './selectActiveFile';

test('Should return only the actives files', () => {
  const userFiles = [
    {
      id: '1',
      name: 'index.js',
      relativePath: 'test/index.js',
      code: 'console.log("Hello world")',
      extension: '.js',
    },
    {
      id: '2',
      name: 'index2.js',
      relativePath: 'test/index2.js',
      code: 'console.log("Hello world")',
      extension: '.js',
    },
    {
      id: '3',
      name: 'index3.js',
      relativePath: 'test/index3.js',
      code: 'console.log("Hello world")',
      extension: '.js',
    },
  ];
  const activeFiles = ['1', '3'];
  const state = {
    files: {
      userFiles,
      activeFiles,
    },
  } as RootState;
  const expectedResult = [
    {
      id: '1',
      name: 'index.js',
      relativePath: 'test/index.js',
      code: 'console.log("Hello world")',
      extension: '.js',
    },
    {
      id: '3',
      name: 'index3.js',
      relativePath: 'test/index3.js',
      code: 'console.log("Hello world")',
      extension: '.js',
    },
  ];
  expect(selectActiveFile(state)).toEqual(expectedResult);
});
