import { WHATSAPP_URL } from '../data/content'

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact__top">
          <span className="section-index section-index--gold">Vamos dar o próximo passo?</span>
          <h2>Seu óleo tem um novo caminho.</h2>
          <p>
            Fale diretamente com a MMM pelo WhatsApp. Informe o tipo de óleo, a quantidade e
            sua localização.
          </p>
          <small>
            Disponibilidade, região e valores são combinados diretamente com a MMM.
          </small>
        </div>

        <div className="contact-card">
          <div>
            <span>Contato direto com a MMM</span>
            <h3>Vamos conversar sobre sua coleta?</h3>
            <p>
              Tire suas dúvidas e consulte a disponibilidade para sua casa ou seu negócio.
            </p>
          </div>

          <div className="contact-card__action">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="phone">
              +55 21 98562-8467
            </a>

            <a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Conversar no WhatsApp <span aria-hidden="true">↗</span>
            </a>

            <small>
              Ao abrir o WhatsApp, envie sua mensagem para combinar os detalhes com a MMM.
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
