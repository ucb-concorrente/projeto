import { useState } from "react";
import InputMask from "react-input-mask";
import { toast, ToastContainer } from "react-toastify";
import "./styles.scss";
import Spinner from "../../assets/spinner.svg";
import Violao from "../../assets/violao.png";

export function Form() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    endereco: "",
    cpf: "",
    numero: "",
    data_nasc: "",
  });

  const [loading, setLoading] = useState(false);

  function onFormChange(event) {
    const { value, name } = event.target;
    setForm((f) => ({
      ...f,
      [name]: value,
    }));
  }

  function validForm() {
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return (
      form.nome &&
      form.cpf.length === 14 &&
      form.data_nasc.length === 10 &&
      Boolean(form.email.match(validEmailRegex)) &&
      form.numero.length === 16 &&
      form.endereco
    );
  }

  function handleCadastre() {
    setLoading(true);
    if (!validForm()) {
      toast.error("Verifique os campos digitados!");
      setLoading(false);
    } else {
      setTimeout(() => {
        toast.success("Cadastro realizado com sucesso!");
        setLoading(false);
      }, 5000);
    }
  }

  return (
    <div className="container-signup">
      <form className="form">
        <input
          placeholder="Nome"
          name="nome"
          value={form.nome}
          onChange={onFormChange}
        />

        <input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onFormChange}
        />

        <input
          placeholder="Endereco"
          name="endereco"
          value={form.endereco}
          onChange={onFormChange}
        />

        <InputMask
          mask={"999.999.999-99"}
          value={form.cpf}
          onChange={onFormChange}
        >
          {() => <input placeholder="CPF" name="cpf" />}
        </InputMask>

        <InputMask
          mask={"(99) 9 9999-9999"}
          value={form.numero}
          onChange={onFormChange}
        >
          {() => <input placeholder="numero" name="numero" />}
        </InputMask>

        <InputMask
          mask={"99/99/9999"}
          value={form.data_nasc}
          onChange={onFormChange}
        >
          {() => <input placeholder="Data de Nascimento" name="data_nasc" />}
        </InputMask>
        <img alt="violao" id="violao" src={Violao} />
      </form>
      <div style={{ margin: "80px 0 59px 120px" }}>
        <button
          onClick={handleCadastre}
          disabled={loading}
          style={{ cursor: loading ? "default" : "pointer" }}
          className="cadastre-btn"
        >
          {loading ? <img alt="Loading spinner" src={Spinner} /> : "Cadastrar"}
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </div>

      <footer className="footer"></footer>
    </div>
  );
}
