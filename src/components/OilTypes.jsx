import { oilTypes, WHATSAPP_URL } from '../data/content'

function OilTypes() {
  return (
    <section className="section section--dark" id="tipos">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-index section-index--gold">Separar é o primeiro passo</span>
            <h2>Nem todo óleo segue o mesmo caminho.</h2>
          </div>

          <p>
            Conheça as diferenças antes de armazenar. Não misture resíduos de origens
            diferentes.
          </p>
        </div>

        <div className="oil-grid">
          {oilTypes.map((item) => (
            <article className="oil-card" key={item.number}>
              <span className="oil-card__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Consultar <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="vegetable-card">
          <div>
            <span className="badge">MMM ♻ Óleo usado</span>
            <span className="vegetable-card__mini">Depois de esfriar, guarde.</span>

            <h3>Óleo vegetal usado</h3>
            <p className="vegetable-card__lead">Da sua cozinha para um novo ciclo.</p>

            <p>
              Óleos de soja, milho, girassol e canola utilizados no preparo de alimentos.
              Depois do uso, deixe esfriar e armazene em recipiente bem fechado.
            </p>
          </div>

          <ul className="check-list">
            <li>Guarde em garrafa PET ou recipiente adequado com tampa.</li>
            <li>Evite misturar com água, detergente ou produtos químicos.</li>
            <li>Informe o volume aproximado ao consultar a coleta.</li>
          </ul>

          <a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Consultar coleta no WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OilTypes
