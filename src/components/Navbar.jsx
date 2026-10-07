import { WHATSAPP_URL } from '../data/content'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#inicio" aria-label="MMM Mario Coleta de Óleo, início">
          <span className="brand__mark">MMM</span>
          <span className="brand__copy">
            <strong>Mario</strong>
            <small>Coleta de Óleo</small>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          <a href="#mmm">A MMM</a>
          <a href="#tipos">Tipos de óleo</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a className="button button--small" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Fale no WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
