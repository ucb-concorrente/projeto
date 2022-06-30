import { useState } from 'react'
import InputMask from 'react-input-mask'
import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Logo from './assets/logo.png'
import Spinner from './assets/spinner.svg'
import Violao from './assets/violao.png'

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    endereco: '',
    cpf: '',
    numero: '',
    data_nasc: '',
  })
  const [loading, setLoading] = useState(false)

  function onFormChange(event) {
    const { value, name } = event.target
    setForm((f) => ({
      ...f,
      [name]: value,
    }))
  }

  function validForm() {
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return (
      form.nome &&
      form.cpf.length === 14 &&
      form.data_nasc.length === 10 &&
      Boolean(form.email.match(validEmailRegex)) &&
      form.numero.length === 16 &&
      form.endereco
    )
  }

  function handleCadastre() {
    setLoading(true)
    if (!validForm()) {
      toast.error('Verifique os campos digitados!')
      setLoading(false)
    } else {
      setTimeout(() => {
        toast.success('Cadastro realizado com sucesso!')
        setLoading(false)
      }, 5000)
    }
  }

  return (
    <div className='container'>
      <nav className='nav'>
        <img className='logo' src={Logo} alt='logo-cadastro' />
        <p className='title'>Cadastro</p>
      </nav>

      <main className='main'>
        <form className='form'>
          <section id='nome'>
            <label>Nome: </label>
            <input name='nome' value={form.nome} onChange={onFormChange} />
          </section>

          <section id='email'>
            <label>Email: </label>
            <input name='email' value={form.email} onChange={onFormChange} />
          </section>

          <section id='endereco'>
            <label>Endereço: </label>
            <input
              name='endereco'
              value={form.endereco}
              onChange={onFormChange}
            />
          </section>

          <InputMask
            mask={'999.999.999-99'}
            value={form.cpf}
            onChange={onFormChange}
          >
            {() => (
              <section id='cpf'>
                <label>CPF: </label>
                <input name='cpf' />
              </section>
            )}
          </InputMask>

          <InputMask
            mask={'(99) 9 9999-9999'}
            value={form.numero}
            onChange={onFormChange}
          >
            {() => (
              <section id='numero'>
                <label>Número: </label>
                <input name='numero' />
              </section>
            )}
          </InputMask>

          <InputMask
            mask={'99/99/9999'}
            value={form.data_nasc}
            onChange={onFormChange}
          >
            {() => (
              <section id='data_nasc'>
                <label>Data de Nascimento: </label>
                <input name='data_nasc' />
              </section>
            )}
          </InputMask>
          <img id='violao' src={Violao} />
        </form>
        <div style={{ margin: '80px 0 59px 120px' }}>
          <button
            onClick={handleCadastre}
            disabled={loading}
            style={{ cursor: loading ? 'default' : 'pointer' }}
            className='cadastre-btn'
          >
            {loading ? <img src={Spinner} /> : 'Cadastrar'}
          </button>
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
        </div>
      </main>

      <footer className='footer'></footer>
    </div>
  )
}

export default App
