/*
ABOUT FILE:
This file is used for setting up theme within the browser. This file uses custom react hooks and draws the themes from
local storage.
*/

import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils/storage";
import _ from "lodash";

//Gets theme from browser local storage

//Use theme function for using a particular theme
export const useTheme = () => {
  //Sets the theme with react hook
  const themes = getFromLS("Themes");
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const temp = getFromLS("Themes");
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(temp.data.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
