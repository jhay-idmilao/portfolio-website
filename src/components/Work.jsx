import { work } from '../data'
import { ripple } from '../hooks'
import Reveal from './Reveal'

export default function Work() {
  return (
    <section id="work" className="section">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">What I build</h2>
        </div>
        <p className="section-note">Money, messages, and the infrastructure underneath.</p>
      </Reveal>

      <div className="work-grid">
        {work.map((item, i) => (
          <Reveal className="work-card state" delay={i * 80} key={item.title} onMouseDown={ripple}>
            <span className="work-icon">
              <span className="msym">{item.icon}</span>
            </span>
            <h3 className="work-title">{item.title}</h3>
            <p className="work-desc">{item.desc}</p>
            <div className="chip-row">
              {item.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
