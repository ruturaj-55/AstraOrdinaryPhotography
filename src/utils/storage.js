/*
ABOUT FILE:
This file manages the local storage and is used for managing themes.
The themes are stored in the local storage within the browser    

The themes are stored in schemea in themes folder in json format
*/

//Function to set value to local storage
export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

//Function to get value from local storage
export const getFromLS = (key) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
};
