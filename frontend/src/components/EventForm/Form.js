import { useState } from "react";
import api from "../../services/api";
import "./styles.scss";

export function Form() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [qntTikets, setQntTikets] = useState("");
  const [artist, setArtist] = useState("");
  const [banner, setBanner] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const event = {
      name: nome,
      price: valor,
      artist,
      imgUrl: banner,
      startDate,
      endDate,
      qntTikets,
    };
    console.log(event);
    const eventHasEmptyValue = validate(event);
    console.log("event", eventHasEmptyValue);
    if (!eventHasEmptyValue) {
      api
        .post("events/add/", event)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
        console.log("Delayed for 2 second.");
      }, 3000);
    }
  }

  function validate(event) {
    const isEmpty = !Object.values(event).some((x) => x !== null && x !== "");
    return isEmpty;
  }
  return (
    <div className="container-event">
      {showErrorMessage ? (
        <p className="error">
          Por favor, preencha todo o formulario para cadastrar um evento
        </p>
      ) : null}
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="columns">
          <div className="column-1">
            <input
              placeholder="Nome do Evento"
              type="text"
              name="nome"
              value={nome}
              onChange={(nome) => setNome(nome.target.value)}
            />
            <input
              placeholder="Data de Inicio"
              type="text"
              name="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
            <input
              placeholder="Data de encerramento"
              type="text"
              name="endDate"
              value={endDate}
              onChange={(valor) => setEndDate(valor.target.value)}
            />
          </div>
          <div className="colum-2">
            <input
              placeholder="Preço"
              type="text"
              name="valor"
              value={valor}
              onChange={(valor) => setValor(valor.target.value)}
            />
            <input
              placeholder="Nome do artista"
              type="text"
              name="artist"
              value={artist}
              onChange={(valor) => setArtist(valor.target.value)}
            />
            <input
              placeholder="Quantidade Ingressos"
              type="text"
              name="qntTikets"
              value={qntTikets}
              onChange={(valor) => setQntTikets(valor.target.value)}
            />
          </div>
        </div>
        <input
          placeholder="link Imagem"
          className="banner"
          type="text"
          name="banner"
          value={banner}
          onChange={(valor) => setBanner(valor.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
