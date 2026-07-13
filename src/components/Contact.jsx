import { profile } from '../data'
import { ripple } from '../hooks'
import Reveal from './Reveal'

export default function Contact() {
  const rows = [
    { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
    { k: 'Mobile', v: profile.phone, href: `tel:${profile.phoneHref}` },
    { k: 'LinkedIn', v: profile.linkedinLabel, href: profile.linkedin },
    { k: 'Portfolio', v: profile.portfolioLabel, href: profile.portfolio },
    { k: 'Education', v: profile.education, href: null },
    { k: 'Based', v: profile.location, href: null },
  ]

  return (
    <section id="contact" className="section">
      <Reveal className="contact-card">
        <div className="contact-head">
          <p className="eyebrow on-primary">Available now</p>
          <h2 className="contact-title">Let&rsquo;s build something reliable.</h2>
          <div className="contact-actions">
            <a className="m3-btn filled inverse state" href={`mailto:${profile.email}`} onClick={ripple}>
              <span className="msym">mail</span>
              Email me
            </a>
            <a
              className="m3-btn outlined on-primary state"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={ripple}
            >
              LinkedIn
              <span className="msym">arrow_outward</span>
            </a>
          </div>
        </div>

        <div className="contact-list">
          {rows.map((r) =>
            r.href ? (
              <a
                className="contact-row state"
                key={r.k}
                href={r.href}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onMouseDown={ripple}
              >
                <span className="contact-k">{r.k}</span>
                <span className="contact-v">{r.v}</span>
              </a>
            ) : (
              <div className="contact-row" key={r.k}>
                <span className="contact-k">{r.k}</span>
                <span className="contact-v">{r.v}</span>
              </div>
            )
          )}
        </div>
      </Reveal>

      <footer className="footer">
        <span>{profile.name}</span>
        <span>Built with React &amp; Material You · 2026</span>
      </footer>
    </section>
  )
}
