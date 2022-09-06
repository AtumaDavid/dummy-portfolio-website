import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import { BiAward } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5 className="about__h5">Get to know</h5>
      <h2 className="about__h2">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experience</h5>
              <small>less than a year</small>
            </article>

            <article className="about__card">
              <AiOutlineUsergroupAdd className="about__icon" />
              <h5>Clients</h5>
              <small>0</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Project</h5>
              <small>none</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit,
            unde dolorum atque ad placeat voluptate cum eius quos quisquam
            exercitationem neque earum assumenda, obcaecati asperiores
            voluptatibus impedit deleniti non.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
