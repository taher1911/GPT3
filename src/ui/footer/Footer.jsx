import React from "react";

import Container from "../../components/Container";

import classes from "./Footer.module.scss";

import logo from "../../assets/GPT-3.png";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <Container>
        <div className={classes.footer__top}>
          <h3>
            Do you want to step in to the <br />
            future before others
          </h3>
          <a href="/">Request Early Access</a>
        </div>
        <div className={classes.footer__bottom}>
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>

            <li>
              Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
            </li>
          </ul>
          <ul>
            <li>Links</li>
            <li>
              <a href="/">Overons</a>
            </li>
            <li>
              <a href="/">Social Media</a>
            </li>
            <li>
              <a href="/">Counters</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul>
            <li>Company</li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul>
            <li>Get in touch</li>
            <li>
              <a href="/">
                Crechterwoord K12 <br /> 182 DK Alknjkcb
              </a>
            </li>
            <li>
              <a href="/">+2010-26877608</a>
            </li>
            <li>
              <a href="/">taherabozeid91@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className={classes.copy__right}>
          © 2023 GPT-3 Taher Abozeid. All rights reserved.
        </div>
      </Container>
    </section>
  );
};

export default Footer;
