import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer id="footer">
      <Button className="footer__btn">All</Button>
      <Button className="footer__btn">Completed</Button>
      <Button className="footer__btn">Active</Button>
      <Button className="footer__btn">Important</Button>
    </footer>
  )
}

export default Footer;
