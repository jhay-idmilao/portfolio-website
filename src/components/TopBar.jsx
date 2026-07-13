import { ripple } from '../hooks'

export default function TopBar({ theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="#top" className="brand state" onClick={ripple}>
          <span className="brand-badge">JJ</span>
          <span className="brand-name">John Javier Idmilao</span>
        </a>

        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
        </nav>

        <div className="top-actions">
          <button
            className="icon-btn state"
            type="button"
            onClick={(e) => {
              ripple(e)
              onToggleTheme()
            }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="msym">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <a className="m3-btn filled state" href="#contact" onClick={ripple}>
            Hire me
          </a>
        </div>
      </div>
    </header>
  )
}
