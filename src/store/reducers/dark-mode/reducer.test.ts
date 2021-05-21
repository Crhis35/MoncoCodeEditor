import { PayloadAction } from '@reduxjs/toolkit';
import darkModeReducer, { initialState, toogleDarkMode } from './reducer';
describe('dark mode reducer', () => {
  test('Should return the initial state if no know action is provided', () => {
    expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  test('Should enable dark mode if it disabled', () => {
    expect(darkModeReducer(false, toogleDarkMode)).toEqual(true);
  });
  test('Should disabled dark mode if it enabled', () => {
    expect(darkModeReducer(true, toogleDarkMode)).toEqual(false);
  });
});
