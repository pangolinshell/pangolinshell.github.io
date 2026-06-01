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
      <div className="about-left">
        <div className="about-box">
          <h2>About me</h2>

          <p>
            I am a junior developer interested in  cybersecurity, low-level programming,
            Linux systems and networking.
          </p>

          <p>
            I like building projects from scratch, understanding how things work
            under the hood, and creating tools that are simple, fast and useful.
          </p>
        </div>

        <div className="current-project-box">
          <h2>Current project</h2>

          <p>
            I am currently preparing to join a cybersecurity school, with the
            goal of building a stronger technical profile in systems, networks,
            offensive security and low-level development.
          </p>

          <p>
            My current focus is to improve through concrete projects involving
            C, Rust, Linux, network programming, client/server architecture and
            security-oriented tools.
          </p>
        </div>
      </div>

      <div className="about-right">
        <h2>Stack</h2>

        <div className="tech-block">
          <h3>Languages</h3>

          <div className="tag-list">
            {languages.map((item) => (
              <span className="tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-block">
          <h3>Web</h3>

          <div className="tag-list">
            {web.map((item) => (
              <span className="tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-block">
          <h3>Systems</h3>

          <div className="tag-list">
            {systems.map((item) => (
              <span className="tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-block">
          <h3>Concepts</h3>

          <div className="tag-list">
            {concepts.map((item) => (
              <span className="tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;