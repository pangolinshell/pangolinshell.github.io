import "./AboutMe.scss";

const languages = ["C", "C++", "Rust", "Go", "TypeScript", "JavaScript", "Python"];

const web = ["React", "Vite", "HTML", "CSS"];

const systems = ["Linux", "MacOs", "Docker"];

const concepts = [
  "OOP",
  "Data Structures",
  "Algorithms",
  "Client / Server Architecture",
  "Network Basics",
  "Cybersecurity Basics",
];

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>About me</h2>
      </div>

      <div className="about-content">
        <div className="about-left">
          <div className="about-box">
            <h3>Profile</h3>

            <p>
              I am a junior developer focused on cybersecurity, systems programming,
              Linux and networking.
            </p>
              
            <p>
              I build projects from scratch to understand how things really work, from
              low-level code to networked applications and security-oriented tools.
            </p>
          </div>

          <div className="current-project-box">
            <h3>Current project</h3>

            <p>
              I am currently preparing to join a cybersecurity school, with the
              goal of building a stronger technical profile in systems,
              networks, offensive security and low-level development.
            </p>

            <p>
              My current focus is to improve through concrete projects involving
              C, Rust, Linux, network programming, client/server architecture
              and security-oriented tools.
            </p>
          </div>
        </div>

        <div className="about-right">
          <h3>Stack</h3>

          <div className="tech-block">
            <h4>Languages</h4>

            <div className="tag-list">
              {languages.map((item) => (
                <span className="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-block">
            <h4>Web</h4>

            <div className="tag-list">
              {web.map((item) => (
                <span className="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-block">
            <h4>Systems</h4>

            <div className="tag-list">
              {systems.map((item) => (
                <span className="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-block">
            <h4>Concepts</h4>

            <div className="tag-list">
              {concepts.map((item) => (
                <span className="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;