import mascot from '../assets/mascot/mmm-mascot.svg'
import { WHATSAPP_URL } from '../data/content'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-pattern" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="kicker">Um novo caminho para o seu óleo</span>

          <h1>
            Óleo usado.
            <span>Valor renovado.</span>
          </h1>

          <p className="hero__lead">
            O que sobra na sua cozinha pode ganhar um novo destino. Comece pela separação e
            conte com a MMM para conversar sobre sua coleta.
          </p>

          <p className="hero__note">
            Na sua casa ou no seu negócio: separe, armazene e fale com a gente.
          </p>

          <div className="hero__actions">
            <a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com a MMM no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#como-funciona">
              Entenda como funciona <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero__micro">
            <span>♻</span>
            <p>Uma atitude simples. Um cuidado que faz diferença.</p>
          </div>
        </div>

        <div className="hero__visual">
          <span className="hero__ring hero__ring--one" aria-hidden="true" />
          <span className="hero__ring hero__ring--two" aria-hidden="true" />

          <div className="hero__stamp">
            <small>Cada gota</small>
            <strong>tem valor</strong>
          </div>

          <img
            src={mascot}
            alt="Personagem da MMM Mario com uniforme preto e dourado fazendo sinal de positivo"
          />

          <div className="hero__caption">
            <span>O descarte muda.</span>
            <strong>O futuro agradece.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
