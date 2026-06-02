import BrutalistHeader from "./components/Header";
import ProjectCarousel from "./components/ProjectCarousel";
import type { Project } from "./components/ProjectCarousel";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import './App.scss';

const projects: Project[] = [
  {
    title: "Social Network",
    image: "https://raw.githubusercontent.com/pangolinshell/pangolinshell.github.io/refs/heads/assets/thumbnails/socialnetwork.png",
    description: "404UM is a real-time forum built with Go, WebSockets, and SQLite. It allows users to register, log in, create posts, comment, exchange direct messages, and see who’s online—all updated live via WebSockets.",
    link: "https://github.com/LilGreyCat/404um",
  },
  {
    title: "Multiplayer fps",
    image: "https://raw.githubusercontent.com/pangolinshell/raycasting-fps/master/preview.png",
    description: "A retro multiplayer game made in rust and an homemade raycasting engine",
    link: "https://github.com/pangolinshell/raycasting-fps",
  },
  {
    title: "Smart-Road",
    image: "https://raw.githubusercontent.com/pangolinshell/smart-road/master/preview.png",
    description: "Smart Road is a project designed to simulate an intelligent traffic management system. The aim is to optimise traffic flow by efficiently managing traffic lights and vehicle priority in line with traffic conditions.",
    link: "https://github.com/pangolinshell/smart-road",
  },
  {
    title: "MyEasySqlite",
    image: "https://raw.githubusercontent.com/pangolinshell/pangolinshell.github.io/refs/heads/assets/thumbnails/myeasysql.png",
    description: "MyEasySQL is a student projet of Go package intended to simplify SQL querys and executions, initialy attended only for social network, i moved it into it's how project.",
    link: "https://github.com/pangolinshell/myeasysql",
  }
];

function App() {
  return (
    <div className="app">
      <BrutalistHeader />
      <section id="about_me"><AboutMe /></section>
      <section id="projects">
        <ProjectCarousel projects={projects} />
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;