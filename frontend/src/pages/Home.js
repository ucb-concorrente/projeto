import { useContext } from "react";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { Context } from "../Context/AuthContext";

export function Home() {
  const { authenticated } = useContext(Context);

  console.log("authenticated home", authenticated);

  return (
    <>
      {authenticated ? (
        <>
          <HomeHeader title="A melhor plataforma de ingresso de MPB" />
          <HomeContent />
        </>
      ) : (
        window.location.href("/")
      )}
    </>
  );
}
