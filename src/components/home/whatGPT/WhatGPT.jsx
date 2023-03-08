import React from "react";

import UpperLine from "../../../ui/upperLine/UpperLine";
import classes from "./WhatGPT.module.scss";
const WhatGPT = () => {
  return (
    <section className={classes.WhatGPT} id="wGPT">
      <div className={classes.top__shadow}></div>
      <div className={classes.bottom__shadow}></div>
      <div className={classes.WhatGPT__section1}>
        <UpperLine />
        <div className={classes.content}>
          <h2 data-aos="fade-up">What is GPT-3</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className={classes.WhatGPT__section2}>
        <h2>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
      </div>

      <div className={classes.WhatGPT__section3}>
        <div>
          {" "}
          <UpperLine />
          <h2>Chatbots</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div>
          {" "}
          <UpperLine />
          <h2>Knowledgebase</h2>
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div>
          {" "}
          <UpperLine />
          <h2>Education</h2>
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatGPT;
