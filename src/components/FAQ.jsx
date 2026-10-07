import { faqs } from '../data/content'

function FAQ() {
  return (
    <section className="section section--light" id="duvidas">
      <div className="container faq-grid">
        <div className="section-heading">
          <span className="section-index">Sem complicação</span>
          <h2>Ficou alguma dúvida?</h2>
          <p>O que você precisa saber antes de separar seu óleo.</p>
        </div>

        <div className="accordion">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
