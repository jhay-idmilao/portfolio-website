import { skills } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">Skills &amp; stack</h2>
        </div>
        <p className="section-note">Backend-leaning fullstack, with a long tail of integrations.</p>
      </Reveal>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal className="skill-group" delay={i * 60} key={s.group}>
            <h4>{s.group}</h4>
            <div className="chip-row">
              {s.items.map((item) => (
                <span className="chip assist" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
