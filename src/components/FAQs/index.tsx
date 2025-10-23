import { useState } from "react";
import "./style.scss";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We specialize in pop-up bar catering for weddings, private parties, corporate gatherings, and more. Our focus is on crafting beautiful cocktails and providing a warm, friendly, and professional team that’s always available for your guests — making sure your celebration feels effortless, joyful, and unforgettable.",
  },
  {
    question: "Do you help with planning the drinks menu and quantities?",
    answer:
      "Absolutely! We’ll work with you to create a customized drinks menu and advise on quantities based on your guest count, event duration, and style of drinks. This way, you can feel completely confident everything will flow smoothly.",
  },
  {
    question: "Do you offer non-alcoholic options, ice & garnishes?",
    answer:
      "Of course. From homemade lemonade to signature mocktails, we make sure everyone feels included at the bar. We can also provide ice & garnishes.",
  },
  {
    question:
      "Do you provide a glass washing station? What about rubbish removal?",
    answer:
      "Yes! We set up a glass washing station behind the bar so your guests always have fresh, clean glassware throughout the celebration. And we can also take care of rubbish removal at the end of the event.",
  },
  {
    question: "Do you travel outside of Byron Bay and the Northern Rivers?",
    answer:
      "Yes! We love bringing our bar to new places. Travel fees may apply depending on the distance, but we keep everything transparent and simple.",
  },
  {
    question: "How do I book Byron On The Rocks?",
    answer:
      "Booking is simple — just reach out through our contact form or by phone or email directly, and we’ll prepare a tailored quote. Once you’re ready, we secure your date with a deposit and start planning all the details together!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-div">
        <h2>
          FAQs —{" "}
          <span>
            Everything you need to know before booking Byron On The Rocks
          </span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
