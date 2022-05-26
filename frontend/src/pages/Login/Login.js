import { useState } from "react";
import { Grid, Box, Button, TextField } from "@mui/material";
import Logo from "../../assets/tktz-logo.png";
import InputMask from "react-input-mask";
import "./styles.scss";

export function Login() {
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
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Box height="100vh" component="div">
            <div className="container">
              <img src={Logo} alt="Tickets Logo" />
              <Box height={357} component="div" className="information-box">
                <p
                  style={{
                    fontSize: "3.125rem",
                    color: "#fff",
                    marginBottom: "4rem",
                    textAlign: "center",
                  }}
                >
                  <b> A melhor plataforma de ingressos de MPB</b>
                </p>
              </Box>

              <Box height={357} component="div">
                <div className="signUp-container">
                  <p>Ainda não possui um cadastro?</p>
                  <Button size="large" variant="contained">
                    <a href="/cadastro">SignUp</a>
                  </Button>
                </div>
              </Box>
            </div>
          </Box>
        </Grid>
        <Grid item xs={8}>
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
        </Grid>
      </Grid>
    </>
  );
}
