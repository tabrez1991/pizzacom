import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setCrusts } from "../actions";

const Crusts = (props) => {
  const [state, setState] = useState({
    crusts: [
      { type: "Hand-tossed", price: "80", img: "Handtossed.jpeg" },
      { type: "Normal", price: "70", img: "normal.jpeg" },
      { type: "Cheese burst", price: "100", img: "cheese.jpg" }
    ]
  });

  const handleCrusts = (item) => {
    props.action("base");
    props.setCrusts(item);
  };
  const { crusts } = state;
  return (
    <Fragment>
      <div
        class="cartsy-products-block cartsy-block-spacing-wrapper toppinggrid"
        id="cartsy-product-block"
      >
        <div class="cartsy-product-search-results grid-cols-xxl-6 grid-cols-xl-5 grid-cols-md-4 grid-cols-sm-3 grid-cols-2 gap-10">
          {crusts.map((item) => (
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
                <div
                  class="cartsy-helium-product-card-cart"
                  onClick={() => handleCrusts(item)}
                >
                  <span class="product_type_simple add_to_cart_button cartsy_ajax_add_to_cart cartsy-update-qty cartsy-add-to-cart-97">
                    <span class="cartsy-helium-product-card-cart-button">
                      <span class="label">ADD</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setCrusts: (article) => dispatch(setCrusts(article))
  };
}
export default connect(null, mapDispatchToProps)(Crusts);
