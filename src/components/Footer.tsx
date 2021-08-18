import React from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// import { setActiveFilter } from "../redux/actions";
import { useAppSelector } from "../hooks";
import { setActiveFilter } from "../redux/actions/filters";
import { filters } from "../utils";
import Button from "./Button";

// const Footer = ({ filter, setActiveFilter }) => {
const Footer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const filter = useAppSelector(state => state.activeFilter);

  const handleFilter = (type: string) => {
    dispatch(setActiveFilter(type));
  };

  return (
    <footer id="footer">
      {filters.map(({ name, type }) => (
        <Button
          key={name}
          className={type === filter ? "footer__btn active" : "footer__btn"}
          value={name}
          onClick={() => handleFilter(type)}
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
