import { useState } from "react";
import api from "../../services/api";
import "./styles.scss";
import InputMask from "react-input-mask";

export function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEdereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [numero, setNumero] = useState("");
  const [dataNasci, setDataNasci] = useState("");

  function handleSubmit(c) {
    c.preventDefault();
    const cadastre = {
      name: nome,
      price: email,
      dataNasci,
      endereco,
      cpf,
      numero,
    };
    console.log(cadastre);
    api
      .post("cadastre/add/", cadastre)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  return (
    <div className="container-SingUp">
      <form onSubmit={(cadastre) => handleSubmit(cadastre)}>
        <div className="columns">
          <div className="column-1">
              <input
                placeholder="Nome" 
                type="text"
                name="nome"
                value={nome}
                onChange={(nome) => setNome(nome.target.value)}
              />
              <input
                placeholder="Endereço" 
                type="text"
                name="endereco"
                value={endereco}
                onChange={(endereco) => setEdereco(endereco.target.value)}
              />
               <InputMask
                mask="999.999.999-99"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                disabled={false}
                maskChar=" "
        >
          {() => <input placeholder="CPF" type="text" />}
        </InputMask>
          </div>
          <div className="colum-2">
              <input
                placeholder="email"                  
                type="text"
                name="email"
                value={email}
                onChange={(email) => setEmail(email.target.value)}
              />
            
              <InputMask mask="99-99-9999" defaultValue="30-06-2022"
              placeholder="data de nascimento" 
              type="text"
              name="dataNasci"
              value={dataNasci}
              onChange={(dataNasci) => setDataNasci(dataNasci.target.value)} />
             
              <InputMask mask="+55\ 99 99999-9999" maskChar={null}
              placeholder="Numero de telefone" 
              type="text"
              name="numero"
              value={numero}
              onChange={(numero) => setNumero(numero.target.value)} />
          </div>
        </div>
      </form>
        <button type="submit"><b>Cadastrar</b></button>
    </div>
  );
}