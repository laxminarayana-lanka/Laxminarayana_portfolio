import React, { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, Phone, Menu, X,
  ArrowUpRight, Download, Code2, GraduationCap,
  Briefcase, Target, Sun, Moon, MapPin
} from "lucide-react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [role, setRole] = useState(0);

  const roles = [
    "Aspiring Software Developer",
    "MCA Student",
    "Web Developer",
    "Java & Python Learner"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRole(prev => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const education = [
    {
      degree: "Master of Computer Applications",
      college: "Aditya Degree College, Gopalapatnam",
      year: "2025 – 2027"
    },
    {
      degree: "Bachelor's Degree",
      college: "Sri Venkateswara Degree College, Kotturu",
      year: "2020 – 2024",
      score: "6.57 CGPA"
    },
    {
      degree: "Intermediate",
      college: "Government Junior College, Kotturu",
      year: "2018 – 2020",
      score: "6.71 CGPA"
    },
    {
      degree: "SSC",
      college: "ZPH School, Mathala",
      year: "2017 – 2018",
      score: "9.0 CGPA"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "Java", "Python"
  ];

  const certifications = [
    { name: "AI Certification", organization: "IBM" },
    { name: "Python Certification", organization: "Coursera" },
    { name: "Full Stack Development", organization: "Coursera" }
  ];

  const navLinks = [
    "Home", "About", "Skills", "Education",
    "Projects", "Certifications", "Contact"
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={light ? "app light" : "app"}>
      <nav className="navbar">
        <a href="#home" className="logo">LL<span>.</span></a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={closeMenu}>
              {item}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn"
            onClick={() => setLight(!light)}
            aria-label="Toggle color theme">
            {light ? <Moon /> : <Sun />}
          </button>

          <button className="icon-btn menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero section" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hello, I'm <span>Lanka Laxminarayana</span></h1>
          <h2>{roles[role]}</h2>

          <p className="hero-description">
            Hello! I'm Laxminarayana, an MCA student passionate
            about programming and web development. I enjoy
            learning new technologies and building useful
            applications. My goal is to become a skilled
            software developer and contribute to innovative projects.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn primary">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/laxminarayana-lanka-342588240"
              target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="https://github.com/"
              target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow">
            <img src="/profile.jpg" alt="Lanka Laxminarayana"
              onError={e => {
                e.currentTarget.style.display = "none";
              }} />
            <div className="image-placeholder">
              <Code2 size={70} />
              <span>Developer</span>
            </div>
          </div>
          <div className="floating-card">MCA Student</div>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <p className="section-description">
          I am currently pursuing my Master of Computer Applications
          (MCA) at Aditya Degree College, Gopalapatnam. I have a
          foundation in programming and web development, with
          knowledge of HTML, CSS, JavaScript, Java, and Python.
          I enjoy developing projects, solving programming problems,
          and exploring new technologies. I am continuously improving
          my technical skills and looking for opportunities to grow
          in the IT industry.
        </p>

        <div className="info-grid">
          <Info icon={<GraduationCap />} title="Education" value="MCA" />
          <Info icon={<Code2 />} title="Interest" value="Software Development" />
          <Info icon={<Briefcase />} title="Languages" value="Java, Python, JavaScript" />
          <Info icon={<Target />} title="Career Goal" value="Software Developer" />
        </div>
      </section>

      <section className="section" id="skills">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>

        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card" key={skill}>
              <Code2 />
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <p className="eyebrow">MY ACADEMIC JOURNEY</p>
        <h2 className="section-title">My <span>Education</span></h2>

        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="year">{item.year}</span>
                <h3>{item.degree}</h3>
                <p>{item.college}</p>
                {item.score && <strong>{item.score}</strong>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">MY WORK</p>
        <h2 className="section-title">Featured <span>Project</span></h2>

        <div className="project-card">
          <div className="project-visual">
            <div className="project-icon">
              <Code2 size={65} />
            </div>
            <span>SMART INDIA HACKATHON 2026</span>
          </div>

          <div className="project-content">
            <span className="project-label">SIH 2026 PROJECT</span>
            <h3>Velocity X</h3>
            <h4>Smart Adaptive Speed Governance System</h4>
            <p>
              A smart vehicle speed governance concept that uses
              GPS and geofencing to identify different road zones
              and adapt vehicle speed limits accordingly. The
              proposed prototype includes ESP32, NEO-6M GPS,
              OLED display and a DC motor, with conceptual
              ECU/CAN integration.
            </p>

            <div className="tech-tags">
              {["ESP32", "GPS", "Geofencing", "IoT", "Embedded Systems"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <p className="project-note">
              Project demonstration and repository links will be added.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <p className="eyebrow">MY LEARNING</p>
        <h2 className="section-title">My <span>Certifications</span></h2>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <GraduationCap size={35} />
              <h3>{cert.name}</h3>
              <p>{cert.organization}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2 className="section-title">Let's <span>Connect</span></h2>
        <p className="section-description">
          I'm interested in learning, collaborating and exploring
          opportunities in software development.
        </p>

        <div className="contact-grid">
          <a href="mailto:laxminarayana0287@gmail.com" className="contact-card">
            <Mail />
            <div>
              <h3>Email</h3>
              <p>laxminarayana0287@gmail.com</p>
            </div>
          </a>

          <a href="tel:8096704773" className="contact-card">
            <Phone />
            <div>
              <h3>Phone</h3>
              <p>8096704773</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/laxminarayana-lanka-342588240"
            target="_blank" rel="noreferrer" className="contact-card">
            <Linkedin />
            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">LL<span>.</span></a>
        <p>Lanka Laxminarayana | Aspiring Software Developer</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <a href="#home" className="top-link">Back to top ↑</a>
      </footer>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="info-card">
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default App;
