import React from "react";
import "./Services.css";
import { BsCheck2Circle } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5 className="services__h5">What I offer</h5>
      <h2 className="services__h2">Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-end web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end of front-end */}

        <article className="service">
          <div className="service__head">
            <h3>Back-end web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end of back-end */}
      </div>
    </section>
  );
};

export default Services;
