import "./styles.scss";
import Logo from "../../assets/logo.svg";

export function HomeHeader(props) {
  const { title } = props;

  return (
    <div className="container">
      <div className="content">
        <img src={Logo} alt="Tickets Logo" />
        <h1>{title}</h1>
      </div>
    </div>
  );
}
