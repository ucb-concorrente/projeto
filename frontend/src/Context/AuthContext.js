// import history from "../utils/history";
import React, { useState, useEffect } from "react";
import api from "../services/api";
const Context = React.createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem("isAuthenticated");
    console.log("result localStorage", result);
    if (Boolean(result)) {
      setIsAuthenticated(Boolean(result));
    }
  }, []);

  function handleClick(user) {
    const { cpf } = user;

    api
      .post(`users/auth/${cpf}`, user)
      .then((response) => {
        console.log(response);
        if (response.data) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", true);
        } else {
          localStorage.setItem("isAuthenticated", false);
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
