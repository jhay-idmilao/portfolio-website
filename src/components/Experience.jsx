import { experience } from '../data'
import { ripple } from '../hooks'
import Reveal from './Reveal'

const tones = ['tone-a', 'tone-b', 'tone-c', 'tone-d', 'tone-e']

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I&rsquo;ve worked</h2>
        </div>
        <p className="section-note">Most recent first.</p>
      </Reveal>

      <Reveal className="exp-card" delay={80}>
        {experience.map((job, i) => (
          <div key={job.org}>
            <div className="exp-item state" onMouseDown={ripple}>
              <span className={`exp-avatar ${tones[i % tones.length]}`}>{job.org.charAt(0)}</span>
              <div className="exp-main">
                <p className="exp-org">{job.org}</p>
                <p className="exp-role">{job.role}</p>
                <p className="exp-detail">{job.detail}</p>
              </div>
              <div className="exp-meta">
                <span className="exp-date">{job.period}</span>
                <span className={`exp-status ${job.live ? 'live' : ''}`}>
                  {job.live && <span className="chip-dot" />}
                  {job.status}
                </span>
              </div>
            </div>
            {i < experience.length - 1 && <div className="exp-divider" />}
          </div>
        ))}
      </Reveal>
    </section>
  )
}
