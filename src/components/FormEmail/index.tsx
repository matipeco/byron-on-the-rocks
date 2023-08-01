import { useRef } from "react";
import "./styled.scss";
import emailjs from "@emailjs/browser";

export const FormEmail = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      // Aquí usaremos el método sendForm directamente de emailjs
      emailjs
        .sendForm(
          "service_vn2hdpq",
          "template_6fb029n",
          form.current,
          "F9NYcVQECJnkEiKcH"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={(e) => sendEmail(e)} className="form__container">
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" />

      <input type="submit" value="Send" />
    </form>
  );
};
