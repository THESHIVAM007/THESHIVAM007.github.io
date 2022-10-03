import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project1 from "../assets/img/projects/Fragnance-Outlet.jpeg";
import Project2 from "../assets/img/projects/KFC-Project.jpeg";
import Project3 from "../assets/img/projects/Portfolio-project.jpeg";
import Project4 from "../assets/img/projects/IndieGoGo.jpeg";

import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([
    {
      name: "Fragnance Outlet Clone",
      img: Project1,
      feature:
        "Fragrance Outlet is one of the nation's largest retailers with over 100 Stores of genuine designer fragrances including Calvin Klein, Dior, Gucci, and more. Tech-stack : [HTML,CSS,ReactJS,JavaScript] ",
      Link: "https://fragrance-outlet-mastered.netlify.app/",
      Github: "https://github.com/Pranjal7777/Fragranceoutlet",
    },
    {
      name: "KFC-Clone",
      img: Project2,
      feature: "KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain after McDonald's. Tech-stack : [HTML,CSS,JavaScript] ",
      Link: "https://kfc-project-anands-88.vercel.app/",
      Github: "https://github.com/Anands-88/Kfc-Project",
    },
    {
      name: "Portfolio",
      img: Project3,
      feature:
        "Portfolio website where user can see my projects and skills. Tech-stack : [ReactJS,JavaScript] ",
      Link: "",
      Github: "https://github.com/THESHIVAM007/THESHIVAM007.github.io",
    },
    {
      name: "Indiegogo Clone",
      img: Project4,
      feature:
        "Indiegogo is an American crowdfunding website founded in 2008 by Danae Ringelmann, Slava Rubin, and Eric Schell. Tech-stack : [CSS,JavaScript,ReactJS,Redux,ChakraUI]",
      Link: "https://indiegogoteamspootyafterthought.netlify.app/",
      Github:
        "https://github.com/anjanak05/spotty-afterthought-4601",
    },
  ]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      // setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      // setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
