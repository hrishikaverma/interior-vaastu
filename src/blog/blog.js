import "./blog.css";
import latestNews from "../images/articles/blogLatest.jpg";
import article1 from "../images/articles/article1.jpg";
import article2 from "../images/articles/article2.jpg";
import article3 from "../images/articles/article3.jpg";
import article4 from "../images/articles/article4.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Blog() {
  const articles = [
    { id: 1, img: article1, title: "Building Construction Work", date: "3 March 2023" },
    { id: 2, img: article2, title: "Modern Interior Design Trends", date: "10 April 2023" },
    { id: 3, img: article3, title: "Minimalist Home Decor Ideas", date: "18 May 2023" },
    { id: 4, img: article4, title: "Sustainable Architecture Insights", date: "25 June 2023" }
  ];

  const handleChange = (e) => {
    const activeArticle = document.querySelector(".blog-art.taken");
    if (activeArticle) activeArticle.classList.remove("taken");
    e.currentTarget.classList.add("taken");
  };

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>
          Articles & News<p>Home / Blog</p>
        </h1>
      </div>

      <div className="latestNews">
        <h1>Latest Post</h1>
        <div className="lNews">
          <div className="ln-img">
            <img src={latestNews} alt="news" />
          </div>
          <div className="ln-text">
            <div className="ln-subtext">
              <h1>Low Cost Latest Invented Interior Designing Ideas</h1>
              <p>
              Transform your space with stylish yet budget-friendly interior design ideas. Discover creative ways to enhance your home with smart décor choices, DIY solutions, and space-saving techniques.

Contrary to popular belief, stunning interior design doesn’t require a hefty budget. With the right materials, thoughtful color schemes, and multifunctional furniture, you can achieve a modern and elegant look without overspending.
                <br /><br />
              </p>
            </div>
            <div className="ln-detail">
              <p className="ac-date">20 March 2025</p>
              <Link to="/blog-details">
                <button><IoIosArrowForward /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogArticles">
        <h1>Articles & News</h1>
        <div className="blog-art-list">
          {articles.map((article) => (
            <div key={article.id} className="blog-art notaken" onClick={handleChange}>
              <div className="blog-art-header">
                <img src={article.img} alt="article" />
              </div>
              <div className="blog-art-content">
                <p>{article.title}</p>
                <div className="ba-detail">
                  <p className="ba-date">{article.date}</p>
                  <Link to={`/blog-details`}>
                    <button><IoIosArrowForward /></button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
