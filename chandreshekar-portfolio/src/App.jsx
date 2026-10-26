import { useEffect, useLayoutEffect, useState } from 'react'
import {
  codingProfiles,
  education,
  learningInterests,
  navigation,
  profile,
  projects,
  skillGroups,
} from './data/portfolio'
import './App.css'
import './contact-theme.css'

const skillMarks = {
  Java: 'J',
  C: 'C',
  JavaScript: 'JS',
  SQL: 'SQL',
  HTML: '5',
  CSS: '#',
  React: 'R',
  'Node.js': 'N',
  'Express.js': 'Ex',
  'Spring Boot': 'Sp',
  MongoDB: 'M',
  MySQL: 'SQL',
  Git: 'G',
  GitHub: 'GH',
  'VS Code': 'VS',
  Maven: 'Mv',
  'Data Structures & Algorithms': 'DSA',
  'Machine Learning': 'ML',
  'Deep Learning': 'DL',
  'Generative AI': 'AI',
  LLMs: 'LLM',
  'Retrieval-Augmented Generation (RAG)': 'RAG',
  'Model Fine-tuning': 'FT',
  Docker: 'D',
  Kubernetes: 'K8',
  'CI/CD': 'CI',
  AWS: 'AWS',
}

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'github') {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 1.03 2.96.78.1-.72.4-1.21.72-1.49-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.25-5.09 5.53.4.34.76 1 .76 2.02v3.29c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (name === 'moon') {
    return (
      <svg {...common}>
        <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a8.5 8.5 0 1 0 12 12Z" />
      </svg>
    )
  }

  if (name === 'sun') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.46H4.98V9h2.95v9.46ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.01 10.75h-2.94v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.29V9h2.82v1.29h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.51v5.18Z" />
      </svg>
    )
  }

  if (name === 'whatsapp') {
    return (
      <svg {...common}>
        <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.3l1.3-4.9a8.4 8.4 0 1 1 16.2-3.7Z" />
        <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4 0 .6l-.6.8c-.2.2-.2.4-.1.6.4.8 1 1.4 1.7 1.9.3.2.7.4 1 .5.2.1.4 0 .6-.2l.8-1c.2-.2.4-.3.6-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.2-.7 1.6-.5.5-1.2.7-2 .6-.8-.1-1.8-.5-3-1.2-1.4-.8-2.6-2-3.4-3.4-.7-1.2-1-2.2-.9-3 .1-.6.5-1.2.8-1.4Z" />
      </svg>
    )
  }

  if (name === 'arrow') {
    return (
      <svg {...common}>
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    )
  }

  if (name === 'arrow-right') {
    return (
      <svg {...common}>
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    )
  }

  if (name === 'download') {
    return (
      <svg {...common}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3" />
      </svg>
    )
  }

  if (name === 'menu') {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M12 3v18m9-9H3" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description, index }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ExternalLink({ href, children, className = '', label }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
  } catch (error) {
    console.error('Unable to read the saved portfolio theme.', error)
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useLayoutEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0c1011' : '#fcfdfd',
    )

    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch (error) {
      console.error('Unable to save the portfolio theme preference.', error)
    }
  }, [theme])

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="Chandreshekar M. G. home">
            {profile.name}
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme((currentTheme) => (
              currentTheme === 'dark' ? 'light' : 'dark'
            ))}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name="menu" size={22} />
          </button>
          <nav
            className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-resume" href="#resume" onClick={closeMenu}>Resume</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="availability">
              <span className="availability-dot" />
              Actively seeking SDE Intern / Software Engineer roles
            </p>
            <h1 id="hero-title">Hi, I&apos;m <span>Chandreshekar MG</span></h1>
            <p className="hero-role">
              Aspiring Software Engineer <span aria-hidden="true">|</span> Java
              <span aria-hidden="true">|</span> Spring Boot
              <span aria-hidden="true">|</span> MERN Stack
              <span aria-hidden="true">|</span> DevOps
            </p>
            <p className="hero-description">
              I enjoy building practical, scalable software applications that
              solve real problems. I&apos;m growing my skills across full-stack
              development, AI engineering, and cloud-native tools.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Projects <Icon name="arrow-right" size={16} />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <ExternalLink
                href={profile.github}
                label="GitHub profile (opens in a new tab)"
                className="social-icon-link"
              >
                <Icon name="github" size={18} />
              </ExternalLink>
              <ExternalLink
                href={profile.linkedin}
                label="LinkedIn profile (opens in a new tab)"
                className="social-icon-link"
              >
                <Icon name="linkedin" size={18} />
              </ExternalLink>
              <span>{profile.location}</span>
            </div>
          </div>
          <aside className="hero-portrait" aria-label="Portrait of Chandreshekar M. G." data-reveal>
            <div className="profile-photo-frame">
              <img
                className="profile-photo"
                src="/images/profile.jpeg"
                alt="Portrait of Chandreshekar M. G."
              />
            </div>
          </aside>
        </section>

        <section className="section-shell section-pad about-section" id="about">
          <SectionHeading
            index="01"
            eyebrow="About me"
            title={<>A different starting point.<br /><span>A clear direction.</span></>}
            description="Mechanical engineering foundations, now applied to learning software engineering."
          />
          <div className="about-grid">
            <div className="about-main" data-reveal>
              <p className="about-lead">
                I&apos;m pursuing a BE in Computer Science and Engineering at
                PES College of Engineering, Mandya, after completing a
                Mechanical Engineering diploma.
              </p>
              <p>
                That transition has shaped my curiosity about how systems work,
                from physical mechanisms to software. I&apos;m building software
                engineering fundamentals through Java and full-stack projects,
                while exploring machine learning, Generative AI, DevOps, and
                cloud technologies.
              </p>
              <p>
                My goal is to grow as a software development engineer,
                contributing to full-stack products while building deeper
                capability in AI engineering and cloud-native delivery.
              </p>
            </div>
            <aside className="about-aside" data-reveal>
              <h3>Areas I&apos;m focused on</h3>
              {learningInterests.slice(0, 4).map((interest, index) => (
                <div className="focus-item" key={interest}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{interest}</p>
                  <Icon name="arrow" size={15} />
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="section-shell section-pad skills-section" id="skills">
          <SectionHeading
            index="02"
            eyebrow="Core skills"
            title={<>Tools I use and <span>am learning.</span></>}
            description="A practical overview—without proficiency scores or inflated claims."
          />
          <div className="skills-legend" data-reveal>
            <span><i className="legend-dot legend-used" /> Used in coursework or projects</span>
            <span><i className="legend-dot legend-learning" /> Currently learning / exploring</span>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.name} data-reveal>
                <div className="skill-card-top">
                  <span className="skill-number">{group.number}</span>
                  <span className="skill-count">
                    {String(group.skills.length).padStart(2, '0')} TOOLS
                  </span>
                </div>
                <h3>{group.name}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span
                      className={`skill-tag${skill.learning ? ' is-learning' : ''}`}
                      key={skill.name}
                      title={skill.learning ? 'Currently learning or exploring' : 'Used in coursework or projects'}
                    >
                      <span className="skill-mark" aria-hidden="true">
                        {skillMarks[skill.name]}
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-pad education-section" id="education">
          <SectionHeading
            index="03"
            eyebrow="Education"
            title={<>Foundations for <span>what comes next.</span></>}
            description="A path from mechanical engineering into computer science."
          />
          <div className="education-grid">
            {education.map((item, index) => (
              <article
                className={`education-card${item.current ? ' education-current' : ''}`}
                key={item.degree}
                data-reveal
              >
                <div className="education-card-top">
                  <span className="education-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="education-state">
                    {item.current ? 'CURRENT STUDIES' : 'COMPLETED'}
                  </span>
                </div>
                <h3>{item.degree}</h3>
                <p className="education-subject">{item.subject}</p>
                <p className="education-institution">{item.institution}</p>
                <p className="education-location">{item.location}</p>
                <p className="education-details">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-pad projects-section" id="projects">
          <SectionHeading
            index="04"
            eyebrow="Selected projects"
            title={<>Projects in <span>focus.</span></>}
            description="Problem statements and technologies are based on the details currently available. Implementation specifics will be added as they are confirmed."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number} data-reveal>
                <div className="project-card-top">
                  <span className="project-index">{project.number}</span>
                  <span className="project-status"><i />{project.status}</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <div className="project-detail">
                  <span>PROBLEM</span>
                  <p>{project.problem}</p>
                </div>
                <div className="project-detail">
                  <span>OVERVIEW</span>
                  <p>{project.description}</p>
                </div>
                <p className="project-contribution">
                  <strong>Contribution:</strong> {project.contribution}
                </p>
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.repository ? (
                    <ExternalLink
                      className="project-link"
                      href={project.repository}
                      label={`${project.name} repository (opens in a new tab)`}
                    >
                      GitHub <Icon name="arrow" size={14} />
                    </ExternalLink>
                  ) : (
                    <span className="project-link-unavailable">Repository link not provided</span>
                  )}
                  {project.demo ? (
                    <ExternalLink className="project-link" href={project.demo}>
                      Live demo <Icon name="arrow" size={14} />
                    </ExternalLink>
                  ) : (
                    <span className="project-link-unavailable">No live demo</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-pad profiles-section" id="profiles">
          <SectionHeading
            index="05"
            eyebrow="Coding profiles"
            title={<>Connect and <span>explore.</span></>}
            description="Public profile links for professional networking and coding practice."
          />
          <div className="profile-grid">
            {codingProfiles.map((item) => (
              <ExternalLink
                className="profile-link-card"
                href={item.href}
                key={item.name}
                label={`${item.name}: ${item.handle} (opens in a new tab)`}
              >
                <span className="profile-mark">{item.mark}</span>
                <span className="profile-content">
                  <span className="profile-name">{item.name}</span>
                  <span className="profile-handle">{item.handle}</span>
                  <span className="profile-description">{item.description}</span>
                </span>
                <Icon name="arrow" size={18} />
              </ExternalLink>
            ))}
          </div>
          <p className="profile-note" data-reveal>
            Profile links only. No coding statistics or ratings are claimed.
          </p>
        </section>

        <section className="section-shell section-pad resume-section" id="resume">
          <SectionHeading
            index="06"
            eyebrow="Resume"
            title={<>More detail, <span>in one place.</span></>}
            description="Download the current resume PDF."
          />
          <div className="resume-card" data-reveal>
            <div className="resume-preview">
              <iframe
                className="resume-embed"
                src={profile.resumePdf}
                title="Resume PDF preview"
              />
            </div>
            <div className="resume-content">
              <span className="note-label">CHANDRESHEKAR M. G.</span>
              <h3>A current snapshot<br />of my journey.</h3>
              <p>
                My resume includes additional details about my education,
                technical skills, and projects.
              </p>
              <a className="button button-primary" href={profile.resumePdf} download>
                <Icon name="download" size={16} /> Download resume
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell section-pad contact-section" id="contact">
          <SectionHeading
            index="07"
            eyebrow="Get in touch"
            title={<>Contact <span>Me</span></>}
            description="I’m interested in software engineering opportunities and thoughtful conversations."
          />
          <div className="contact-panel" data-reveal>
            <div className="contact-copy">
              <p>
                Send a message or find me on my professional and coding profiles.
              </p>
              <address className="contact-details" aria-label="Contact details">
                <a className="contact-detail" href={`mailto:${profile.email}`}>
                  <span className="contact-detail-icon">✉</span>
                  <div>
                    <strong>Email</strong>
                    <span>{profile.email}</span>
                  </div>
                </a>
                <ExternalLink href={profile.github} className="contact-detail">
                  <span className="contact-detail-icon"><Icon name="github" size={18} /></span>
                  <div>
                    <strong>GitHub</strong>
                    <span>CHANDRESHEKAR-MG</span>
                  </div>
                  <Icon name="arrow" size={15} />
                </ExternalLink>
                <ExternalLink href={profile.linkedin} className="contact-detail">
                  <span className="contact-detail-icon"><Icon name="linkedin" size={18} /></span>
                  <div>
                    <strong>LinkedIn</strong>
                    <span>Chandreshekar M. G.</span>
                  </div>
                  <Icon name="arrow" size={15} />
                </ExternalLink>
                <ExternalLink href={profile.whatsapp} className="contact-detail">
                  <span className="contact-detail-icon"><Icon name="whatsapp" size={18} /></span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>+91 {profile.whatsappNumber}</span>
                  </div>
                  <Icon name="arrow" size={15} />
                </ExternalLink>
              </address>
            </div>
            <div className="contact-side">
              <form
                className="contact-form"
                aria-describedby="contact-form-note"
                onSubmit={(event) => {
                  event.preventDefault()
                  const text = [
                    `Name: ${contactForm.name.trim()}`,
                    `Email: ${contactForm.email.trim()}`,
                    `Subject: ${contactForm.subject.trim()}`,
                    '',
                    contactForm.message.trim(),
                  ].join('\n')
                  const url = `${profile.whatsapp}?text=${encodeURIComponent(text)}`
                  window.open(url, '_blank', 'noopener,noreferrer')
                }}
              >
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  value={contactForm.name}
                  onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })}
                />
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  value={contactForm.email}
                  onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
                />
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                  value={contactForm.subject}
                  onChange={(event) => setContactForm({ ...contactForm, subject: event.target.value })}
                />
                <label htmlFor="whatsapp-message">Message</label>
                <textarea
                  id="whatsapp-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  value={contactForm.message}
                  onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
                />
                <button className="button button-primary message-submit" type="submit">
                  Continue in WhatsApp
                </button>
                <span className="contact-form-note" id="contact-form-note">
                  Opens WhatsApp with the details filled in. Review and send the message there.
                </span>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <a className="wordmark" href="#home">{profile.name}</a>
            <p>Aspiring Software Engineer specializing in Java and Full-Stack Development</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="footer-socials">
            <a href="#contact" aria-label="Go to contact details">
              <span aria-hidden="true">✉</span>
            </a>
            <ExternalLink href={profile.github} label="GitHub profile (opens in a new tab)">
              <Icon name="github" size={17} />
            </ExternalLink>
            <ExternalLink href={profile.linkedin} label="LinkedIn profile (opens in a new tab)">
              <Icon name="linkedin" size={17} />
            </ExternalLink>
            <a className="back-to-top" href="#home" aria-label="Back to top">
              ↑
            </a>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default App
