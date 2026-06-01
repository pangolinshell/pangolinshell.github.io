import BrutalistHeader from "./components/Header";
import ProjectCarousel from "./components/ProjectCarousel";
import type { Project } from "./components/ProjectCarousel";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

const projects: Project[] = [
  {
    title: "Multiplayer fps",
    image: "https://raw.githubusercontent.com/pangolinshell/raycasting-fps/master/preview.png",
    description: "A small multiplayer game made in rust and an homemade raycasting engine",
    link: "",
  },
  {
    title: "Smart-Road",
    image: "https://raw.githubusercontent.com/pangolinshell/smart-road/master/preview.png",
    description: "Smart Road is a project designed to simulate an intelligent traffic management system. The aim is to optimise traffic flow by efficiently managing traffic lights and vehicle priority in line with traffic conditions.",
    link: "https://github.com/pangolinshell/smart-road",
  },
  {
    title: "Weather App",
    image: "/projects/weather-app.png",
    description: "A weather dashboard using an external API and responsive UI.",
    link: "https://example.com",
  },
  {
    title: "Linux Monitor",
    image: "/projects/linux-monitor.png",
    description: "A low-level Linux process monitoring tool written in C.",
    link: "https://example.com",
  },
];

function App() {
  return (
    <>
      <BrutalistHeader />
      <section id="about_me"><AboutMe /></section>
      <section id="projects">
        <ProjectCarousel projects={projects} />
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </>
  );
}

export default App;