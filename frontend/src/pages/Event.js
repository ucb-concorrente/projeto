import { Form } from "../components/EventForm/Form";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
export function Event() {
  return (
    <>
      <HomeHeader title="Cadastro de eventos" />
      <Form />
    </>
  );
}
