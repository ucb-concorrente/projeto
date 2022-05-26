import { Box, Button } from "@mui/material";
import Logo from "../../assets/tktz-logo.png";
import "./styles.scss";

export function LoginInformation() {
  return (
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
  );
}
