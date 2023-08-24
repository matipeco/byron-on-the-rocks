import { useRef, useState } from "react";
import "./styled.scss";
import emailjs from "@emailjs/browser";

export const FormEmail = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setSending(true);
      try {
        await emailjs.sendForm(
          "service_vn2hdpq",
          "template_6fb029n",
          form.current,
          "F9NYcVQECJnkEiKcH"
        );
        setSending(false);
        alert("Message sent successfully!");
        form.current.reset();
      } catch (error) {
        console.log(error);
        alert(JSON.stringify(error));
      }
    }
  };

  return (
    <form ref={form} onSubmit={(e) => sendEmail(e)} className="form__container">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="user_name"
        id="name"
        placeholder="Name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="user_email"
        id="email"
        placeholder="Email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" placeholder="Message" required />

      <input
        type="submit"
        value={sending ? "Sending..." : "Send"}
        id="btnForm"
      />
    </form>
  );
};
