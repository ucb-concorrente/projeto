import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globalStyles.scss";
import { AuthProvider } from "./Context/AuthContext";

import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <GlobalStyles /> */}
        {/* <Header /> */}
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
