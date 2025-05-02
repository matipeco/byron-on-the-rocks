import { useRef, useState } from "react";
import "./styled.scss";
import emailjs from "@emailjs/browser";

export const FormEmail = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && buttonRef.current) {
      buttonRef.current.value = "Sending...";
      setStatus("idle");

      try {
        await emailjs.sendForm(
          "service_0gt83p6", // Tu Service ID
          "template_g8ugirl", // Tu Template ID
          form.current,
          "zn_5F1k1DpHGehVBo" // Tu Public Key
        );

        buttonRef.current.value = "Send";
        setStatus("success");
        form.current.reset();
        alert("✅ Message sent successfully!");
      } catch (error) {
        buttonRef.current.value = "Send";
        setStatus("error");
        console.error("Error sending email:", error);
        alert("❌ There was an error sending your message.");
      }
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form__container">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="from_name"
        id="name"
        placeholder="Name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email_id"
        id="email"
        placeholder="Email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" placeholder="Message" required />

      <input type="submit" ref={buttonRef} value="Send" id="btnForm" />
    </form>
  );
};
