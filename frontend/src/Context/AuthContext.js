// import history from "../utils/history";
import React, { useState } from "react";
import api from "../services/api";
const Context = React.createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function handleClick(user) {
    const { cpf } = user;

    api
      .post(`users/auth/${cpf}`, user)
      .then((response) => {
        console.log(response);
        if (response.data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        throw new Error(error);
      }, []);

    console.log("user", user);

    if (isAuthenticated) {
      return true;
    }
    return false;
  }
  return (
    <Context.Provider value={{ authenticated: isAuthenticated, handleClick }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
