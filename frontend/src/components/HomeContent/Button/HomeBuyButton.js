import { useState } from "react";
import {
  Modal as MaterialModal,
  Box,
  TextField,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import InputMask from "react-input-mask";
import { sendEmail } from "../../../Utils/EmailSender";
import "./styles.scss";

export function HomeBuyButton(props) {
  const { eventName, eventPicture } = props;

  const user = {
    name: "Arthur",
    email: "arthur.carneirontk@gmail.com",
    eventName,
  };

  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick() {
    const creditCardInformation = {
      card,
      ownerName,
      cvv,
      expirationDate,
    };

    if (
      !(
        creditCardInformation.card &&
        creditCardInformation.cvv &&
        creditCardInformation.expirationDate &&
        creditCardInformation.ownerName
      )
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    if (
      isValid &&
      creditCardInformation.card &&
      creditCardInformation.cvv &&
      creditCardInformation.expirationDate &&
      creditCardInformation.ownerName
    ) {
      setIsLoading(true);
      sendEmail(user);
      setTimeout(() => {
        setIsLoading(false);
        setShowToast(false);
      }, 2000);
    }
    setShowToast(true);
  }

  function handleCloseToast() {
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }

  return (
    <>
      <button onClick={handleOpen} type="button" className="subscribeButton">
        Comprar Ingresso
      </button>
      {showToast ? (
        <Snackbar
          style={{
            backgroundColor: "red",
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          width={400}
          open={showToast}
          autoHideDuration={2000}
          onClose={handleCloseToast}
        >
          <Alert
            onClose={handleCloseToast}
            sx={{
              width: 500,
              backgroundColor: "#333",
              color: "#fff",
              textAlign: "center",
              paddingLeft: "9rem",
            }}
          >
            Ingresso enviado para o email!
          </Alert>
        </Snackbar>
      ) : null}
      <MaterialModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <img
            width={250}
            height={250}
            className="eventPicture"
            src={eventPicture}
            alt="Event"
          />
          <h1>{eventName}</h1>
          <InputMask
            mask="9999 9999 9999 9999"
            value={card}
            onChange={(event) => setCard(event.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                variant="filled"
                label="Numero Cartao de Credito"
                type="text"
              />
            )}
          </InputMask>
          <TextField
            variant="filled"
            label="Nome Dono do Cartao de Credito"
            value={ownerName}
            style={{ marginTop: "2rem" }}
            onChange={(event) => setOwnerName(event.target.value)}
            type="text"
          />
          <InputMask
            mask="99/99"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                style={{ marginTop: "2rem" }}
                variant="filled"
                label="Data Expiracao"
                type="text"
              />
            )}
          </InputMask>
          <InputMask
            mask="999"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                style={{ marginTop: "2rem" }}
                variant="filled"
                label="CVV"
                type="text"
              />
            )}
          </InputMask>
          {!isLoading ? (
            <button
              style={{ marginTop: "4rem" }}
              onClick={handleClick}
              type="button"
              className="subscribeButton"
            >
              Comprar Ingresso
            </button>
          ) : (
            <>
              <CircularProgress
                style={{ marginTop: "4rem" }}
                color="secondary"
              />
            </>
          )}
        </Box>
      </MaterialModal>
    </>
  );
}
