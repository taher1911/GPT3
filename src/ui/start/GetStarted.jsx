import React from "react";

import classes from "./GetStarted.module.scss";

const GetStarted = () => {
  return (
    <section className={classes.get__started}>
      <div className={classes.content}>
        <span>Request Early Access to Get Started</span>
        <h2>Register today & start exploring the endless possiblities.</h2>
      </div>
      <a href="/">Get Started</a>
    </section>
  );
};
export default GetStarted;
