import { useContext, useEffect } from "react";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { Context } from "../Context/AuthContext";
import { Redirect } from "react-router-dom";
import api from "../services/api";

export function Home() {
  const { authenticated, user } = useContext(Context);
  if (user && !Object.values(user).every((x) => x !== null && x !== "")) {
    localStorage.setItem("user", JSON.stringify(user.cpf));
  }

  const localStorageRes = localStorage.getItem("isAuthenticated");

  return (
    <>
      {authenticated === true || Boolean(localStorageRes) === true ? (
        <>
          {(user.cpf && user.cpf.includes("074.435.981-30")) ||
          (localStorage.getItem("user") &&
            localStorage.getItem("user").includes("074.435.981-30")) ? (
            <HomeHeader admin title="A melhor plataforma de ingresso de MPB" />
          ) : (
            <HomeHeader
              admin={false}
              title="A melhor plataforma de ingresso de MPB"
            />
          )}
          <HomeContent />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
