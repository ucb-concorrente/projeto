import { useContext } from "react";
import { Context } from "../Context/AuthContext";
import { Grid } from "@mui/material";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { LoginInformation } from "../components/LoginInformation/LoginInformation";
import { Redirect } from "react-router-dom";

export function Login() {
  const { authenticated } = useContext(Context);

  return (
    <>
      {authenticated === true ? (
        <Redirect to="/" />
      ) : (
        <>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <LoginInformation />
            </Grid>
            <Grid item xs={8}>
              <LoginForm />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
