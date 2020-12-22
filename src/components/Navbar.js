import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const NavBar = (props) => {
  let url = window.location.href;
  return (
    <Fragment>
      <header id="masthead" class="site-header header-default">
        <div class="cartsy-menu-area">
          <div class="site-branding ">
            <div class="cartsy-header-logo-wrapper">
              <h2 class="site-title">
                <span class="custom-logo-link">
                  <h2 style={{ color: "#cd1931" }}>Pizza eCom</h2>
                </span>
              </h2>
            </div>
          </div>
          <div class="cartsy-menu-right-col">
            <div class="cartsy-mini-cart-on-desktop">
              <div class="cartsy-mini-cart-widget">
                <div class="cartsy-mini-cart-overlay"></div>
                <ul id="site-header-cart" class="site-header-cart menu">
                  <li class="cartsy-mini-cart-dropdown-btn">
                    {url.includes("checkout") ? null : (
                      <div
                        class="menu-cart-area header-cart-counter"
                        onClick={() => props.history.push("/checkout")}
                      >
                        <div class="cart-item-badge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              id="shopping-bag"
                              d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
                              transform="translate(-2 -2)"
                              fill="currentColor"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="count">
                            {props.cutomization_pizza.length}
                          </span>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cutomization_pizza: state.cutomization_pizza
  };
};

const Navbar = connect(mapStateToProps, null)(NavBar);
export default withRouter(Navbar);
