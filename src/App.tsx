import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Global, ThemeProvider } from "@emotion/react";

import { lightTheme, darkTheme } from "styles/themes";
import globalCss from "styles/globalCss";

import Coins from "pages/Coins";
import Coin from "pages/Coin";
import Navbar from "organisms/Navbar";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  return (
    <>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <Global styles={globalCss} />
        <Navbar isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/:coinId" element={<Coin />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
