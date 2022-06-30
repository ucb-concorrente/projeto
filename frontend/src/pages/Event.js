import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "../components/EventForm/Form";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { Context } from "../Context/AuthContext";

export function Event() {
  const { authenticated } = useContext(Context);
  const localStorageRes = localStorage.getItem("isAuthenticated");

  return (
    <>
      {authenticated === true || Boolean(localStorageRes) === true ? (
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
