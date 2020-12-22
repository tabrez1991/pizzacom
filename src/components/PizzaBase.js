import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setBase } from "../actions";

const PizzaBase = (props) => {
  const [state, setState] = useState({
    base: [
      { type: "PAN base", price: "20", img: "panbase.webp" },
      { type: "Classic", price: "30", img: "classic.jpeg" }
    ],
    hide: false
  });

  const { base, hide } = state;

  const handleBase = (item) => {
    props.setBase(item);
    setState({ ...state, hide: true });
  };

  return (
    <Fragment>
      <div
        class="cartsy-products-block cartsy-block-spacing-wrapper toppinggrid"
        id="cartsy-product-block"
      >
        <div class="cartsy-product-search-results grid-cols-xxl-6 grid-cols-xl-5 grid-cols-md-4 grid-cols-sm-3 grid-cols-2 gap-10">
          {base.map((item) => (
            <div class="cartsy-helium-product-card product cartsy-product-97 type-product">
              <div class="cartsy-helium-product-card-thumb">
                <img
                  class="cartsy-lazy-image lazyloaded"
                  src={require("../assets/images/" + item.img)}
                  alt="Safeway Kitchens Sliced Peaches 425ml"
                />
              </div>

              <div class=" cartsy-helium-product-card-description">
                <div class="cartsy-helium-product-card-price">
                  <span class="price">
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">INR </span>
                      {item.price}
                    </span>
                  </span>
                </div>

                <span class="cartsy-helium-product-card-title">
                  {item.type}
                </span>
                {hide ? null : (
                  <div
                    class="cartsy-helium-product-card-cart"
                    onClick={() => handleBase(item)}
                  >
                    <span class="product_type_simple add_to_cart_button cartsy_ajax_add_to_cart cartsy-update-qty cartsy-add-to-cart-97">
                      <span class="cartsy-helium-product-card-cart-button">
                        <span class="label">Add to cart</span>
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {hide ? (
          <div className="buttonsdd">
            <button
              className="jrNAVtCust"
              onClick={() => props.action("topping")}
            >
              Continue to customize
            </button>
            <button
              className="jrNAVtCusts"
              onClick={() => props.history.push("/checkout")}
            >
              Continue to checkout
            </button>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setBase: (article) => dispatch(setBase(article))
  };
}

const Base = connect(null, mapDispatchToProps)(PizzaBase);
export default withRouter(Base);
