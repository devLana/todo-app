import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer id="footer">
      <Button className="footer__btn" value="All" />
      <Button className="footer__btn" value="Completed" />
      <Button className="footer__btn" value="Active" />
      <Button className="footer__btn" value="Important" />
    </footer>
  )
}

export default Footer;
