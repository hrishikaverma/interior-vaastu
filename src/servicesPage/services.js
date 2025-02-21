import "./services.css";
import services from "./services.json";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import photo1 from "../images/services1.jpg";
import icon1 from "../images/Icon1.svg";
import photo2 from "../images/services2.jpg";
import icon2 from "../images/Icon2.svg";
import photo3 from "../images/services3.jpg";
import icon3 from "../images/Icon3.svg";
import photo4 from "../images/services4.jpg";
import icon4 from "../images/Icon4.svg";

export function Services() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log("pClass1", pClass);
    if (e.target.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.classList.add("selected-type");
    } else if (e.target.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  const handleChangeTwo = (e) => {
    const pClass = e.target.parentElement.parentElement;
    console.log("pClass2", pClass);
    if (e.target.parentElement.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.parentElement.classList.add("selected-type");
    } else if (e.target.parentElement.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  return (
    <div className="services">
      <div className="services-header">
        <h1>
          Services<p>Home / Services</p>
        </h1>
      </div>
      <div className="service-types">
        {services.services.map((type, index) => {
          return (
            <div className="service-type" onClick={handleChange} key={index}>
              <h2 onClick={handleChangeTwo}>{type.service_name}</h2>
              <p onClick={handleChangeTwo}>{type.service_content}</p>
              <Link to={`/servicesingle`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="howWeWork">
        <div className="how-title">
          <h1>How We Work</h1>
          <p>
          At iVaastu , we follow a strategic and client-focused approach to bring your vision to life. Our process is designed to ensure seamless execution, attention to detail, and excellence at every step. From concept to completion, we prioritize innovation, functionality, and aesthetics, delivering spaces that are both inspiring and practical. With a commitment to quality craftsmanship and personalized service, we transform ideas into reality while keeping your needs at the center of our work.
          </p>
        </div>
        <div className="how-content">
            <div className="hc-img">
                <img src={photo1} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon1} alt="icon"></img>
                    <p>01</p>
                </div>
                <div className="hc-subtext">
                    <h2>Concept & Details</h2>
                    <p>Every great design begins with a strong concept. We meticulously craft each detail to ensure a perfect blend of functionality and aesthetics. Our approach involves deep research, innovative ideas, and a keen eye for precision, bringing your vision to life with elegance and purpose. </p>
                </div>
            </div>
        </div>
            
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon2} alt="icon"></img>
                    <p>02</p>
                </div>
                <div className="hc-subtext">
                    <h2>Idea for work</h2>
                    <p>Great designs start with a clear vision. We blend creativity with practicality to develop unique, functional, and visually appealing spaces. Our process is driven by research, innovation, and attention to detail, ensuring every project is both inspiring and purposeful. </p>
                </div>
            </div>
            <div className="hc-img">
                <img src={photo2} alt='concept'></img>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-img">
                <img src={photo3} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon3} alt="icon"></img>
                    <p>03</p>
                </div>
                <div className="hc-subtext">
                    <h2>Design</h2>
                    <p>Our design philosophy revolves around aesthetics, functionality, and harmony. We craft visually stunning spaces that reflect your personality while ensuring comfort and efficiency. Every element is thoughtfully curated to bring balance, elegance, and timeless appeal to your interiors. </p>
                </div>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon4} alt="icon"></img>
                    <p>04</p>
                </div>
                <div className="hc-subtext">
                    <h2>Perfection</h2>
                    <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                </div>
            </div>
            <div className="hc-img">
                <img src={photo4} alt='concept'></img>
            </div>
        </div>
      </div>

      <div className="interno">
        <h1>Wanna join the iVaastu?</h1>
        <p>It is a long established fact  will be distracted.</p>
        <Link><button>Contact With Us<AiOutlineArrowRight style={{ marginLeft: "5px"  }} color="#292F36" /></button></Link>
      </div>
    </div>
  );
}
