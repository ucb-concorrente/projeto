import "./styles.scss";
import Logo from "../../assets/logo.svg";

export function HomeHeader(props) {
  const { title } = props;

  return (
    <div className="container">
      <h1>{title}</h1>
      <img src={Logo} alt="Tickets Logo" />
    </div>
  );
}
