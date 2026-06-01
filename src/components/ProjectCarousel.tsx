import { useRef } from "react";
import "./ProjectCarousel.scss";

export type Project = {
  title: string;
  image: string;
  description: string;
  link: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 360;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="project-section">
      <div className="project-header">
        <h2>Projects</h2>

        <div className="project-controls">
          <button onClick={() => scrollCarousel("left")}>←</button>
          <button onClick={() => scrollCarousel("right")}>→</button>
        </div>
      </div>

      <div className="project-carousel" ref={carouselRef}>
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href={project.link} target="_blank" rel="noreferrer">
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectCarousel;