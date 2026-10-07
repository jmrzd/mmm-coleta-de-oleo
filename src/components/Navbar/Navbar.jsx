import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a className="navbar__brand" href="#inicio" aria-label="MMM Coleta de Óleo">
          <span className="navbar__mark">MMM</span>
          <span className="navbar__name">Coleta de Óleo</span>
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#coleta">O que coletamos</a>
          <a href="#processo">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="navbar__cta" href="#contato">
          Solicitar coleta
        </a>
      </div>
    </header>
  )
}

export default Navbar
