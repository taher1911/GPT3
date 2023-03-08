import React from "react";

import UpperLine from "../../../ui/upperLine/UpperLine";
import classes from "./OpenAI.module.scss";
const OpenAI = () => {
  const divContent = [
    {
      id: 1,
      title: "Improving end distrusts instantly ",
      description:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: 2,
      title: "Become the tended active",
      description:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: 3,
      title: "Message or am nothing",
      description:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: 4,
      title: "Really boy law county",
      description:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <section className={classes.openAi} id="OpenAI">
      <div className={classes.title}>
        <div className={classes.shadow}></div>
        <h2>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className={classes.content}>
        {divContent.map((item) => (
          <div key={item.id}>
            <div className={classes.content__title}>
              <UpperLine />
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenAI;
