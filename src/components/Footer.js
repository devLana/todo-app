import React from "react";
import { connect } from "react-redux";
import { setActiveFilter } from "../redux/actions";
import { filters } from "../utils";
import Button from "./Button";

const Footer = ({ filter, setActiveFilter }) => {
  return (
    <footer id="footer">
      {filters.map(({ name, type }) => (
        <Button
          key={name}
          className={type === filter ? "footer__btn active" : "footer__btn"}
          value={name}
          onClick={() => setActiveFilter(type)}
        />
      ))}
    </footer>
  );
};

const mapStateToProps = state => ({
  filter: state.activeFilter,
});

export default connect(mapStateToProps, { setActiveFilter })(Footer);
