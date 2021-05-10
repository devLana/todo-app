import React from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
// import { setActiveFilter } from "../redux/actions";
import { setActiveFilter } from "../redux/actions/filters";
import { filters } from "../utils";
import Button from "./Button";

// const Footer = ({ filter, setActiveFilter }) => {
  const Footer = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.activeFilter);

  return (
    <footer id="footer">
      {filters.map(({ name, type }) => (
        <Button
          key={name}
          className={type === filter ? "footer__btn active" : "footer__btn"}
          value={name}
          onClick={dispatch(setActiveFilter(type))}
          // onClick={() => setActiveFilter(type)}
        />
      ))}
    </footer>
  );
};

export default Footer;

// const mapStateToProps = state => ({
//   filter: state.activeFilter,
// });

// export default connect(mapStateToProps, { setActiveFilter })(Footer);
