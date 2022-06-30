import "./styles.scss";
import Logo from "../../assets/tktz-logo.png";

export function HomeHeader(props) {
  const { title, admin } = props;

  return (
    <header className="container">
      <div className="content">
        <img src={Logo} alt="Tickets Logo" />
        <h1>{title}</h1>
        {admin ? <a href="/event">Criar novo evento</a> : null}
      </div>
    </header>
  );
}
