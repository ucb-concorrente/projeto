import { useState } from "react";
import InputMask from "react-input-mask";
import { Button, TextField, Box } from "@mui/material";
import "./styles.scss";

export function LoginForm() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    const user = {
      cpf,
      password,
    };

    console.log("user", user);
  }
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
        <Button onClick={handleClick} size="large" variant="contained">
          Login
        </Button>
      </Box>
    </div>
  );
}
