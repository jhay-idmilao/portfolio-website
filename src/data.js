export const profile = {
  name: 'John Javier Idmilao',
  role: 'Fullstack Software Developer',
  current: 'Software Engineer II · Camaya Coast',
  location: 'Isabela, Cagayan Valley, Philippines',
  summary:
    'Backend-leaning fullstack developer building the systems that move money — payments, billing, and reconciliation in Laravel, Vue & React. I make sure each transaction is processed exactly once.',
  email: 'johnjavieridmilao12@gmail.com',
  phone: '0975 014 8734',
  phoneHref: '+639750148734',
  linkedin: 'https://www.linkedin.com/in/john-javier-idmilao-92b881206/',
  linkedinLabel: 'in/john-javier-idmilao',
  portfolio: 'https://jhay-idmilao.github.io/portfolio-website/',
  portfolioLabel: 'jhay-idmilao.github.io/portfolio-website',
  education: 'BS Information Technology · Isabela State University',
  resume: 'John-Javier-Idmilao-Resume.pdf',
}

export const metrics = [
  { value: 7, suffix: '+', label: 'Years building software' },
  { value: 6, suffix: '', label: 'Companies shipped for' },
  { value: 5, suffix: '+', label: 'Payment & SMS integrations' },
  { value: 2, suffix: '\u00d7', label: 'Malasakit Awards' },
]

export const experience = [
  {
    org: 'Camaya Coast',
    role: 'Software Engineer II',
    period: 'Jun 2023 — Present',
    status: 'Current',
    live: true,
    detail:
      'Full-stack web apps in Laravel, Vue & React. Payment gateways, billing workflows, SMS/OTP, and Dockerized deployments on DigitalOcean.',
  },
  {
    org: 'Biopharma Medical Solutions',
    role: 'Web Developer',
    period: 'Aug — Oct 2025',
    status: 'Contract',
    live: false,
    detail:
      'Laravel, Inertia.js & React builds with database design, performance work, and cPanel deployment.',
  },
  {
    org: 'Dygen Food Ventures Inc.',
    role: 'Web Developer',
    period: 'Jan — Mar 2025',
    status: 'Contract',
    live: false,
    detail:
      'Full-stack Laravel + Inertia + React: API development, schema design, and secure, maintainable delivery.',
  },
  {
    org: 'Ropali Corporation',
    role: 'IT Programmer I · 2× Malasakit Award',
    period: 'Apr 2021 — Jun 2023',
    status: 'Full-time',
    live: false,
    detail:
      'Vue/jQuery front-ends on CodeIgniter & Laravel back-ends, RESTful APIs, MySQL/MSSQL, and Acumatica ERP integration.',
  },
  {
    org: 'R.P. Alingog Development Corp.',
    role: 'IT Programmer / Analyst',
    period: 'Oct 2019 — Apr 2021',
    status: 'Full-time',
    live: false,
    detail:
      'Front and back-end with PHP, jQuery, and MSSQL/MySQL. Production releases, maintenance, and bug fixing.',
  },
]

export const work = [
  {
    icon: 'payments',
    title: 'Payment gateway integration',
    desc:
      'End-to-end Maya (PayMaya) and Dragonpay flows — checkout, callbacks, and webhooks — built to process each transaction once, even on retries.',
    tags: ['Maya', 'Dragonpay', 'Webhooks'],
  },
  {
    icon: 'receipt_long',
    title: 'Billing & statements',
    desc:
      'Server-side billing logic and document generation for a real-estate and association platform — recurring charges through to PDF and Excel exports.',
    tags: ['Laravel', 'MySQL', 'Exports'],
  },
  {
    icon: 'sms',
    title: 'OTP & notifications',
    desc:
      'SMS gateway integrations with ITEXTMO and Semaphore powering one-time-password verification, transactional alerts, and customer notifications.',
    tags: ['ITEXTMO', 'Semaphore', 'OTP'],
  },
  {
    icon: 'deployed_code',
    title: 'Delivery & infrastructure',
    desc:
      'Containerized apps with Docker for consistent environments, deployed to DigitalOcean and shipped with Git-based collaboration.',
    tags: ['Docker', 'DigitalOcean', 'Git'],
  },
]

export const skills = [
  { group: 'Backend', items: ['PHP', 'Laravel', 'CodeIgniter 4', 'Inertia.js', 'RESTful APIs'] },
  { group: 'Frontend', items: ['Vue.js', 'React', 'JavaScript', 'jQuery', 'Flutter'] },
  { group: 'Data', items: ['MySQL', 'MSSQL', 'Schema & migrations', 'Query optimization'] },
  { group: 'Integrations', items: ['Maya (PayMaya)', 'Dragonpay', 'ITEXTMO', 'Semaphore', 'Acumatica ERP'] },
  { group: 'Platform', items: ['Docker', 'DigitalOcean', 'Git', 'cPanel'] },
  { group: 'Practice', items: ['Auth & RBAC', 'Legacy refactoring', 'UI/UX to code', 'Cross-functional teams'] },
]
