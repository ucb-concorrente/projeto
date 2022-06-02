import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globalStyles.scss";

import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
  );
};

export default App;
