function Impact() {
  return (
    <section className="section impact">
      <div className="container impact__grid">
        <div>
          <span className="section-index section-index--gold">O destino certo começa com você</span>
          <h2>Na pia, um problema. Na reciclagem, uma possibilidade.</h2>
        </div>

        <div className="impact__copy">
          <p>
            O descarte de óleo na rede de esgoto favorece entupimentos. Quando encaminhado
            à reciclagem, o óleo de cozinha pode voltar à cadeia produtiva como matéria-prima.
          </p>

          <div className="impact__stat">
            <strong>25 mil L</strong>
            <span>
              A Sabesp informa que 1 litro de óleo pode poluir até 25 mil litros de água.
            </span>
          </div>

          <a
            className="text-link text-link--gold"
            href="https://www.sabesp.com.br/assets/images/folhetos/sabesp-agua-oleo-nao-se-misturam.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Leia as orientações da Sabesp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Impact
