function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="brand brand--footer">
          <span className="brand__mark">MMM</span>
          <span className="brand__copy">
            <strong>Mario</strong>
            <small>Coleta de Óleo</small>
          </span>
        </div>

        <p>Cada gota tem valor. Cada atitude também.</p>

        <a href="#inicio">Voltar ao topo ↑</a>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 MMM Mario Coleta de Óleo</span>

        <a href="https://www.instagram.com/jmrzd_/" target="_blank" rel="noreferrer">
          Desenvolvido por João Miguel Silva de Rezende · @jmrzd_ ↗
        </a>
      </div>
    </footer>
  )
}

export default Footer
