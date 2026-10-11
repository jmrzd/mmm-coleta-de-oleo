import { oilTypes, WHATSAPP_URL } from '../data/content'
import cookingOil from '../assets/oils/oleo-cozinha.webp'
import foodFat from '../assets/oils/gorduras-alimentares.webp'
import lubricant from '../assets/oils/oleo-lubrificante.webp'

const oilImages = {
  '01': { src: cookingOil, alt: 'Óleo de cozinha usado em garrafa transparente fechada' },
  '02': { src: foodFat, alt: 'Gordura alimentar fria em pote fechado' },
  '03': { src: lubricant, alt: 'Recipiente de óleo lubrificante com tampa' },
}


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
              <img
                className="oil-card__image"
                src={oilImages[item.number].src}
                alt={oilImages[item.number].alt}
                width="800"
                height="800"
                loading="lazy"
                decoding="async"
              />
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
