import { useContext } from "react";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { Context } from "../Context/AuthContext";
import { Redirect } from "react-router-dom";

export function Home() {
  const { authenticated } = useContext(Context);

  console.log("authenticated home", authenticated);
  const localStorageRes = localStorage.getItem("isAuthenticated");

  return (
    <>
      {authenticated === true || Boolean(localStorageRes) === true ? (
        <>
          <HomeHeader title="A melhor plataforma de ingresso de MPB" />
          <HomeContent />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
