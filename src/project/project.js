import "./project.css";
import { ProjectCard } from "./projectCard";
import { useState } from "react";
import projects from "./projects.json";

export function Project() {
  const [data] = useState(projects.projects);
  const [currentPage] = useState(1);
  const [postPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    for (let i = 0; i < pClassList.childNodes.length; i++) {
      pClassList.childNodes[i].className = "p-ctg notakenCategory";
    }
    e.target.classList.add("takenCategory");
  };

  return (
    <div className="project">
      <div className="project-header">
        <h1>
          Our Projects<p>Home / Project</p>
        </h1>
      </div>
      <div className="project-categories">
        <ul>
          {["Bedroom", "Bathroom", "Kitchen", "Living Area"].map((category, index) => (
            <ol key={index} className="p-ctg notakenCategory" onClick={handleChange}>
              {category}
            </ol>
          ))}
        </ul>
      </div>
      <div className="our-projects">
        {currentPosts.map((pro, ind) => (
          <ProjectCard props={pro} key={ind} />
        ))}
      </div>
    </div>
  );
}
