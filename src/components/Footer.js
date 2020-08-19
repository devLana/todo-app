import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer id="footer">
      <Button className="all__btn">All</Button>
      <Button className="completed__btn">Completed</Button>
      <Button className="active__btn">Active</Button>
      <Button className="important__btn">Important</Button>
    </footer>
  )
}

export default Footer;
