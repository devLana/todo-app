import React from "react";
import { connect } from "react-redux";
import { setActiveFilter } from "../redux/actions";
import { navLinks } from "../utils";
import Button from "./Button";

const Footer = ({ filter, setActiveFilter }) => {
  return (
    <footer id="footer">
      {navLinks.map(navLink => (
        <Button
          key={navLink.name}
          className={
            navLink.filter === filter ? "footer__btn active" : "footer__btn"
          }
          value={navLink.name}
          onClick={() => setActiveFilter(navLink.filter)}
        />
      ))}
    </footer>
  );
};

const mapStateToProps = state => ({
  filter: state.activeFilter,
});

export default connect(mapStateToProps, { setActiveFilter })(Footer);
