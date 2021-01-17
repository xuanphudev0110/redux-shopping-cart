import React from "react";
import { connect } from "react-redux";
import { getNumbers } from "../redux/actions/getAction";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Navbar(props) {
  console.log(props);

  return (
    <header className="header-navbar">
      <nav className="navbar-menu">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa fa-bars"></i>
        </label>
        <label className="logo">
          <Link to="/">Avatar</Link>
        </label>
        <ul>
          <li className="cart">
            <Link to="/cart">
              <i className="fa fa-cart-plus"></i>Cart
              <span>{props.basketProps.basketNumbers}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
