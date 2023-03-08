import React, { useState } from "react";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../../assets/GPT-3.png";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuHandler = () => {
    setShow((prevValue) => !prevValue);
  };
  const links = (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">What is GPT?</a>
      </li>
      <li>
        <a href="/">Open AI</a>
      </li>
      <li>
        <a href="/">Case Studies</a>
      </li>
      <li>
        <a href="/">Library</a>
      </li>
    </ul>
  );

  return (
    <nav className={[`${classes.navbar}`]}>
      <div className={classes.links__container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={classes.pc__version}>{links}</div>
      </div>
      <div className={classes.actions__container}>
        <div className={classes.actions}>
          <a href="/" className={classes.sign__in}>
            Sign in
          </a>
          <a href="/" className={classes.sign__up}>
            Sign up
          </a>
        </div>
        <button
          onClick={menuHandler}
          className={[`${show && classes.clicked}`]}
        >
          {show ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      <div className={[`${classes.mobile__version} ${show && classes.show}`]}>
        {links}
        <div className={classes.mobile__version__actions}>
          {" "}
          <div className={[`${classes.actions} ${classes.mobile}`]}>
            <a href="/" className={classes.sign__in}>
              Sign in
            </a>
            <a href="/" className={classes.sign__up}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
