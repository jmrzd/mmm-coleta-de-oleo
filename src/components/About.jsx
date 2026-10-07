import artwork from '../assets/brand/mmm-brand.png'
import { WHATSAPP_URL } from '../data/content'

function About() {
  return (
    <section className="section section--light" id="mmm">
      <div className="container">
        <div className="marquee" aria-hidden="true">
          <span>Separar</span><b>✳</b>
          <span>Armazenar</span><b>✳</b>
          <span>Transformar</span><b>✳</b>
          <span>Cuidar</span><b>✳</b>
        </div>

        <div className="about-grid">
          <div>
            <span className="section-index">01 — O começo de um novo ciclo</span>
            <p className="eyebrow">MMM Mario Coleta de Óleo</p>

            <h2>Bom para sua rotina. Melhor para o amanhã.</h2>

            <p className="body-large">
              Dar valor ao óleo usado começa com uma escolha: separar em vez de descartar na
              pia. A MMM aproxima essa atitude do dia a dia da sua casa ou do seu negócio.
            </p>

            <p className="body-copy">
              Restaurantes, lanchonetes, cozinhas e residências podem preparar o material e
              consultar as condições de coleta.
            </p>

            <a className="button button--dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Vamos conversar sobre seu óleo <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="about-card">
            <img src={artwork} alt="Identidade visual MMM Coleta de Óleo" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About
