import { profile, metrics } from '../data'
import { ripple, useInView, useCountUp } from '../hooks'
import Reveal from './Reveal'

function Metric({ value, suffix, label, active }) {
  const n = useCountUp(value, active)
  return (
    <div className="metric">
      <div className="metric-n">
        {n}
        {suffix}
      </div>
      <div className="metric-l">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const resumeUrl = import.meta.env.BASE_URL + profile.resume

  return (
    <section id="top" className="hero">
      <Reveal className="hero-card">
        <span className="hero-blob" aria-hidden="true" />

        <div className="hero-inner">
          <span className="status-chip">
            <span className="chip-dot" />
            Open to opportunities
          </span>

          <h1 className="hero-name">{profile.name}</h1>

          <p className="hero-role">
            {profile.role} <span className="sep">·</span> {profile.current}
          </p>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="m3-btn filled state" href={resumeUrl} download onClick={ripple}>
              <span className="msym">download</span>
              Download résumé
            </a>
            <a className="m3-btn tonal state" href="#contact" onClick={ripple}>
              Get in touch
              <span className="msym">arrow_forward</span>
            </a>
          </div>
        </div>
      </Reveal>

      <div className="metrics" ref={ref}>
        {metrics.map((m, i) => (
          <Reveal className="metric-wrap" delay={i * 80} key={m.label}>
            <Metric {...m} active={inView} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
