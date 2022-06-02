import emailjs from "@emailjs/browser";

export function sendEmail(user) {
  const { email, name, eventName } = user;
  emailjs
    .send(
      "service_3f9mwye",
      "template_38v8kvb",
      {
        to_email: email,
        to_name: name,
        from_name: "Ticketz",
        to_event: eventName,
      },
      "c3wTxaShkxNOFrU2b"
    )
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
