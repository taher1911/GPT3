import React from "react";

import image1 from "../../../assets/Rectangle 22.png";
import image2 from "../../../assets/Rectangle 22 (1).png";
import image3 from "../../../assets/Rectangle 22 (2).png";
import image4 from "../../../assets/Rectangle 22 (3).png";
import image5 from "../../../assets/Rectangle 22 (4).png";

import Card from "./Card";
import classes from "./Blogs.module.scss";
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: image1,
    },
    {
      id: 2,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: image2,
    },
    {
      id: 3,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: image3,
    },
    {
      id: 4,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: image4,
    },
    {
      id: 5,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      image: image5,
    },
  ];
  return (
    <section className={classes.blogs}>
      <h2>
        A lot is happening, <br />
        We are blogging about it.
      </h2>
      <div className={classes.cards__container}>
        {blogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
