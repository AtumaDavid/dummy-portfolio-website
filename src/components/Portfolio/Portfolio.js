import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/pexels-fauxels-3183198.jpg";
import IMG2 from "../../assets/pexels-james-wheeler-1519088.jpg";
import IMG3 from "../../assets/pexels-philippe-donn-1114690.jpg";
import IMG4 from "../../assets/pexels-pixabay-60597.jpg";
import IMG5 from "../../assets/54150.jpg";
import IMG6 from "../../assets/275120.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio__section">
      <h5 className="portfolio__h5">My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* PORTFOLIO ONE */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https:github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* PORTFOLIO TWO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https:github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* PORTFOLIO THREE */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https:github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* PORTFOLIO FOUR */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https:github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* PORTFOLIO FIVE */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https:github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* PORTFOLIO SIX */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https:github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
