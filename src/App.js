// 1: Import
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";
import { Socialicons } from "./components/social_icons";

function App() {
  // Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  //Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <div className="App" style={{ fontFamily: selectedTheme.font }}>
      <Router>
        {themeLoaded && (
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Header />
            <AppRoutes />
            <Socialicons />
          </ThemeProvider>
        )}
      </Router>
    </div>
  );
}

export default App;
