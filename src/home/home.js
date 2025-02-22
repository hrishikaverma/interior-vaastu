import "./home.css";
import "./homeResponsive.css";
import photoBg from "../images/backgroung/homeBg.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import services from "../servicesPage/services.json";
import peopleData from "./peopleThoughts.json";
import CountUp from "react-countup";

import home1 from "../images/home/home1.jpg";
import hPoject1 from "../images/home/hProject1.jpg";
import hhProject2 from "../images/home/hProject2.jpg";
import hhProject3 from "../images/home/hProject3.jpg";
import hhProject4 from "../images/home/hProject4.jpg";
import hArticle1 from "../images/home/hArticle1.jpg";
import hArticle2 from "../images/home/hArticle2.jpg";
import hArticle3 from "../images/home/hArticle3.jpg";
import brand1 from "../images/brand1.svg";
import brand2 from "../images/brand2.svg";
import brand3 from "../images/brand3.svg";
import brand4 from "../images/brand4.svg";
import brand5 from "../images/brand5.svg";
import customer1 from "../images/home/customer.jpg";
import customer2 from "../images/home/customer2.jpg";
import customer3 from "../images/home/customer3.jpg";


export function Home() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log(e.target);
    if (e.target.className === "article nochosen") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "article nochosen";
      }
      e.target.classList.remove("nochosen");
      e.target.classList.add("chosen");
    } else if (e.target.className === "article chosen") {
      e.target.className = "article nochosen";
    }
  };

  const imageMap = {
    "customer.jpg": customer1,
    "customer2.jpg": customer2,
    "customer3.jpg": customer3,
  };
  
  return (
    <div className="home">
      <div className="homeNews" style={{ backgroundImage: `url(${photoBg})` }}>
        <h1>Let Your Home Be Unique</h1>
        <p>
          Discover the essence of elegant and harmonious living with <strong>Interior Vaastu</strong>.
          We blend creativity with Vaastu principles to craft spaces that reflect beauty, balance, and comfort.
        </p>
        <Link to="">
          <button>
            Get Started
            <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
          </button>
        </Link>
      </div>
      <div className="homeOther">
        <div className="homePlans">
          {services.services
            .filter((services, index) => index < 3)
            .map((s, ind) => {
              return (
                <div className="homePlan" key={ind}>
                  <h2>{s.service_name}</h2>
                  <p>{s.service_content}</p>
                  <Link to={`/project-details`}>
                    <button>
                      Read More
                      <BsArrowRight
                        style={{ marginLeft: "4%", color: "#CDA274" }}
                      />
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="homeAboutUs">
          <div className="hp-subtext">
            <h1>We Create The Art Of Stylish Living Stylishly</h1>
            <p>
              At Interior Vaastu, we blend creativity with functionality to craft spaces that reflect elegance, comfort, and modern aesthetics. Our approach to interior design goes beyond just décor – we create harmonious living environments that enhance your lifestyle.

              Every space tells a story, and we ensure that each design element aligns with your vision. From sophisticated layouts to thoughtfully curated furnishings, our expertise transforms ordinary spaces into timeless masterpieces. Whether it’s a luxurious home, a cozy apartment, or a professional workspace, our designs embody style, balance, and personalization.

              With a focus on quality craftsmanship and innovative concepts, we bring to life interiors that are not just visually stunning but also highly functional. Your dream space deserves the perfect blend of aesthetics and practicality, and we make it happen with style! ✨
            </p>
            <div className="callUs">
              <div className="phoneNum">
                <p className="h-icon">
                  <BsTelephone />
                </p>
                <a href="tel: +994 (070) 883-37-38">
                  <p>
                    +91 (070) 883-37-38
                    <br />
                    <span>Call Us Anytime</span>
                  </p>
                </a>
                <br />
              </div>

              <Link to={`/contact`}>
                <button>
                  Get Free Estimate
                  <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
                </button>
              </Link>
            </div>
          </div>
          <div className="hp-img">
            <img src={home1} alt="concept"></img>
          </div>
        </div>

        <div className="people-thoughts">
          <h1>What People Think About Us</h1>
          <div className="people">
            {peopleData.people.map((req, ind) => (
              <div className="person" key={ind}>
                <div className="person-title">
                  <div>
                    <img src={imageMap[req.image]} alt="customer" />
                  </div>

                  <p>
                    {req.fullname}
                    <br />
                    <span>{req.country}</span>
                  </p>
                </div>
                <p className="thought">{req.thoughts}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-brands">
          <ul>
            <ol>
              <img src={brand1} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand2} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand3} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand4} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand5} alt="brand"></img>
            </ol>
          </ul>
        </div>
        <div className="homeProjects">
          <h1>Follow Our Projects</h1>
          <p>
            Discover our exceptional work, where creativity meets functionality. Our projects are designed with precision, ensuring a seamless blend of aesthetics and innovation. Stay updated and get inspired by our latest designs and developments.
          </p>
          <div className="hp-list">
            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hPoject1} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                  <p>
                    A perfect blend of aesthetics and efficiency, our modern kitchen designs redefine elegance with smart storage solutions, sleek finishes, and high-end appliances. Experience a seamless balance of style and functionality, tailored to complement your home’s interior.

                  </p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject2} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Living Room</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                  <p>
                    A perfect fusion of elegance and comfort, our modern living room designs create a warm and inviting atmosphere. With sleek furniture, ambient lighting, and thoughtfully curated décor, we craft spaces that reflect contemporary aesthetics while ensuring maximum functionality.


                  </p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject3} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Balcony</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                  <p>Transform your modern balcony into a serene retreat with elegant seating, lush greenery, and ambient lighting. Whether it’s a cozy coffee corner or a stylish outdoor lounge, our designs maximize space, comfort, and aesthetics, creating the perfect spot to unwind.

                  </p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject4} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Corrido</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                  <p>
                    A modern corridor is more than just a passage—it’s an integral part of your home’s aesthetic. With sleek lighting, stylish wall textures, and functional layouts, our designs enhance connectivity while adding a touch of sophistication to your interiors.
                  </p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-experience">
        <div className="h-years">
          <CountUp className="h-year num" duration={4} end={12} />
          <p>Years Of Experience</p>
        </div>
        <div className="h-s-project">
          <CountUp duration={4} className="h-sp num" end={85} />
          <p>Success Project</p>
        </div>
        <div className="h-a-project">
          <CountUp duration={4} className="h-ap num" end={15} />
          <p>Active Project</p>
        </div>
        <div className="h-customers">
          <CountUp duration={4} className="h-cust num" end={95} />
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="articleNews">
        <h1>Articles & News</h1>
        <p>
          Stay informed with the latest trends, insights, and updates in the world of design and architecture. Explore expert opinions, industry news, and innovative ideas that inspire modern living.
        </p>
        <div className="articles">
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle1} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">27 June 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle2} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">30 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle3} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 January 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-interno">
        <h1>Wanna join the iVaastu?</h1>
        <p>It is a long established fact will be distracted.</p>
        <Link to={`/contact`}>
          <button>
            Contact With Us
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#292F36"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
