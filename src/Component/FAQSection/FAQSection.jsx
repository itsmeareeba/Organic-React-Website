import "./FAQSection.css";
import Accordion from "react-bootstrap/Accordion";
const FAQSection = () => {
  const faqs=[
    {
      question:"ASK Any Qurstion",
      answer:"onlijN JIKJMJFOE  JEF  E JFEJFEP NE JP "
    },
    {
      question:"ASK Any Qurstion",
      answer:"onlijN JIKJMJFOE  JEF  E JFEJFEP NE JP "
    },
    {
      question:"ASK Any Qurstion",
      answer:"onlijN JIKJMJFOE  JEF  E JFEJFEP NE JP "
    },
    {
      question:"ASK Any Qurstion",
      answer:"onlijN JIKJMJFOE  JEF  E JFEJFEP NE JP "
    },
    {
      question:"ASK Any Qurstion",
      answer:"onlijN JIKJMJFOE  JEF  E JFEJFEP NE JP "
    }
  ]
  return (
    <>
      <section className="Faq-section">
        <div className="container-fluid">
          <div className="Faq-wrapper">
            <p className="Faq-heading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
              Have a question? We'll coach you through it.
            </p>
          </div>
          <div className="Faq-main">
            <Accordion >
              {
                faqs.map((item, index) => {
                  return (
                    <Accordion.Item key={index} eventKey={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
