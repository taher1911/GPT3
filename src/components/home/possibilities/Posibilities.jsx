import React from "react";

import image from "../../../assets/Feature Image.png";
import classes from "./Posibilites.module.scss";
const Posibilities = () => {
  return (
    <section className={classes.posibilities}>
      <div className={classes.image}>
        <img src={image} alt="posibilities" />
      </div>
      <div className={classes.content}>
        <span>Request Early Access to Get Started</span>
        <h2>The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className={classes.request}>Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default Posibilities;
