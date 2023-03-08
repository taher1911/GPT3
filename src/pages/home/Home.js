import React from "react";

import Container from "../../components/Container";
import Header from "../../components/home/header/Header";
import Brand from "../../ui/brand/Brand";
import WhatGPT from "../../components/home/whatGPT/WhatGPT";
import OpenAI from "../../components/home/openAI/OpenAI";
import Posibilities from "../../components/home/possibilities/Posibilities";
import GetStarted from "../../ui/start/GetStarted";
import Blogs from "../../components/home/blogs/Blogs";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Brand />
        <WhatGPT />
        <OpenAI />
        <Posibilities />
        <GetStarted />
        <Blogs />
      </Container>
    </React.Fragment>
  );
};

export default Home;
