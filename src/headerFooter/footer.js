import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="f-info">
        <section className="f-social-medias">
          <div className="f-logo-text">
            <Link style={{ display: "flex" }} to="/">
              <div className="f-logo">
                <img src={logo} alt="logo"></img>
              </div>
              <div className="f-text">
                {/* <p>iVaastu</p> */}
              </div>
            </Link>
          </div>
          <div className="f-about-text">
            <p>
            Our logo represents innovation, elegance, and a commitment to excellence. Designed with precision, it embodies our vision and dedication to creating timeless and inspiring spaces.
            </p>
          </div>
          <div className="f-smedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="f-pages">
          <p>Pages</p>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/blog`}>Blogs</Link>
            </li>
            <li>
              <Link to={`/Projects`}>Projects</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </section>
        <section className="f-services">
          <p>Services</p>
          <ul>
            <li>
              <Link to={`/serviceSingle`}>Kitchen</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Living Area</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bathroom</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Dinning Hall</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bedroom</Link>
            </li>
          </ul>
        </section>
        <section className="f-contact">
          <p>Contact</p>
          <p>123 Freeganj Ujjain, MP, India 456001</p>
          <p>
            <a href="mailto: ivaastu@gmail.com">ivaastu@gmail.com</a>
          </p>
          <p>+91 98765 43210</p>
        </section>
      </div>
      <div className="terms">
        <ul>
          <ol>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </ol>
          <ol>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </ol>
          <ol>
            <Link to={`/cookies-policy`}>&bull; Cookies Policy</Link>
          </ol>
          <ol>
            <Link to={`/faq`}>&bull; FAQ</Link>
          </ol>
        </ul>
      </div>
      <div className="f-copyright">
        <p>Copyright © iVaastu | Designed by Jafarli</p>
      </div>
    </div>
  );
}
