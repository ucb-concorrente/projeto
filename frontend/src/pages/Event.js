import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "../components/EventForm/Form";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { Context } from "../Context/AuthContext";

export function Event() {
  const { authenticated } = useContext(Context);

  return (
    <>
      {authenticated === true ? (
        <>
          <HomeHeader title="Cadastro de eventos" />
          <Form />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
