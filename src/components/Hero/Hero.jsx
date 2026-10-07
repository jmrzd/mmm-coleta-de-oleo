import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__eyebrow">♻️ Coleta responsável de óleo usado</span>

          <h1>
            Óleo usado é
            <span> dinheiro de volta.</span>
          </h1>

          <p>
            A MMM transforma descarte em oportunidade, com uma coleta simples,
            profissional e comprometida com a destinação responsável.
          </p>

          <div className="hero__actions">
            <a className="hero__primary" href="#contato">
              Solicitar coleta
            </a>
            <a className="hero__secondary" href="#processo">
              Como funciona
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Espaço reservado para o mascote da MMM">
          <div className="hero__glow" />
          <div className="hero__placeholder">
            <strong>Mascote MMM</strong>
            <span>asset será adicionado aqui</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
