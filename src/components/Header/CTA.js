// Call to action

import React from "react";
// import CV from '../../assets/'

const CTA = () => {
  return (
    <div className="cta">
      <a href="#" className="btn">
        Download CV
      </a>
      {/* <a href={CV} download></a> */}
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
