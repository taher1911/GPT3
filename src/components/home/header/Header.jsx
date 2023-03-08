import React from "react";

import Tilt from "react-vanilla-tilt";

import headerImage from "../../../assets/Header Illustration.png";
import people from "../../../assets/Group 81.png";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.blur}></div>

        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form className={classes.get__started}>
          <input type="email" name="email" placeholder="Your Email Address" />
          <button type="submit">Get Started</button>
        </form>
        <div className={classes.peoples}>
          <img src={people} alt="visited people" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>

      <div className={classes.header__img}>
        <Tilt>
          <img src={headerImage} alt="header image" />
        </Tilt>
      </div>
    </section>
  );
};

export default Header;
