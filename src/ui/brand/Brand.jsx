import React from "react";

import Google from "../../assets/google (1).png";
import Slack from "../../assets/slack.png";
import Atlassian from "../../assets/atlassian.png";
import Dropbox from "../../assets/dropbox.png";
import Shopify from "../../assets/shopify.png";

import classes from "./Brand.module.scss";

const Brand = () => {
  return (
    <div className={classes.brand}>
      <img src={Google} alt="google" />
      <img src={Slack} alt="Slack" />
      <img src={Atlassian} alt="Atlassian" />
      <img src={Dropbox} alt="Dropbox" />
      <img src={Shopify} alt="Shopify" />
    </div>
  );
};

export default Brand;
