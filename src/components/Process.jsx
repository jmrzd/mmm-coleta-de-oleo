import { steps } from '../data/content'

function Process() {
  return (
    <section className="section section--cream" id="como-funciona">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">Do seu recipiente ao próximo destino</span>
          <h2>Pequenos passos. Uma grande mudança.</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
