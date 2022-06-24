import { useContext, useState } from "react";
import InputMask from "react-input-mask";
import { Button, TextField, Box } from "@mui/material";
import "./styles.scss";
import { Redirect } from "react-router-dom";

import { Context } from "../../Context/AuthContext";

export function LoginForm() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    cpf,
    password,
  };

  function click() {
    const result = handleClick(user);

    console.log("result", result);

    if (result) {
      console.log("entrou", result);

      window.location.href = "/";
    }
  }

  const { handleClick, authenticated } = useContext(Context);
  console.log(authenticated);
  return (
    <div className="loginForm-container">
      <h2>Login</h2>
      <Box component="div" className="input-box">
        <InputMask
          mask="999.999.999-99"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          disabled={false}
          maskChar=" "
        >
          {() => <TextField variant="filled" label="CPF" type="text" />}
        </InputMask>

        <TextField
          onChange={(event) => setPassword(event.target.value)}
          variant="filled"
          value={password}
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button onClick={click} size="large" variant="contained">
          Login
        </Button>
      </Box>
    </div>
  );
}
