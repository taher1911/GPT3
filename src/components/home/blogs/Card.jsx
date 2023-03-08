import React from "react";

import { motion } from "framer-motion";

import classes from "./Card.module.scss";
const Card = (props) => {
  const { date, title, image } = props.item;
  return (
    <motion.div
      className={classes.card}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    >
      <div className={classes.img}>
        <img src={image} alt="card image" />
      </div>
      <div className={classes.content}>
        <div>
          {" "}
          <span className={classes.date}>{date}</span>
          <h3>{title}</h3>
        </div>

        <a href="/">Read Full Article</a>
      </div>
    </motion.div>
  );
};

export default Card;
