import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.png";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Akshay Kapoor</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>23.02.2024</td>
              </tr>
              <tr>
                <td>Link</td>
                <td>example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Minimal Look Bedrooms</h2>
          <p>
          A minimalistic bedroom design embraces simplicity, functionality, and elegance, creating a serene and clutter-free space. Our approach focuses on clean lines, neutral color palettes, and carefully selected furnishings to enhance both comfort and style.

A well-balanced combination of space optimization and refined aesthetics ensures a peaceful and relaxing environment. We prioritize natural lighting, high-quality materials, and smart storage solutions to maintain an open and airy feel. Each element is thoughtfully curated to achieve a harmonious blend of modern sophistication and cozy warmth, making your bedroom a true sanctuary of tranquility.
            <br />
            <br />
            Benefits of a Minimal Look Bedroom:
✨ Encourages Relaxation – A clean and simple space reduces stress and promotes better sleep.
✨ Enhances Functionality – Every item serves a purpose, making the room practical and efficient.
✨ Timeless Elegance – A minimalist design never goes out of style, ensuring your space looks modern and sophisticated for years to come.
✨ Easy to Maintain – Less clutter means less cleaning, allowing you to focus on enjoying your space.

By incorporating these elements, a minimal look bedroom becomes a perfect retreat, offering a harmonious balance of comfort and sophistication. Whether you prefer a contemporary aesthetic or a warm and cozy feel, minimalism allows for endless creativity while maintaining a sense of calm and order.
          </p>
        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={photo} />
      </div>
    </div>
  );
}
