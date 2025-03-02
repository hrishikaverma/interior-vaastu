import "./projectCard.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export function ProjectCard({ project }) {
  return (
    <div className="op-project">
      <div className="op-pro-img">
        <img src={project.image} alt={project.project_name} />
      </div>
      <div className="op-pro-detail">
        <div className="op-pro-info">
          <p className="op-prj-title">{project.project_name}</p>
          <p className="op-prj-path">Decor / Architecture</p>
        </div>
        <div className="op-pro-btn">
          <Link to={`/project-details`}>
            <button>
              <IoIosArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
