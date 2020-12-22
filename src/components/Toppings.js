import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setToppings } from "../actions";

const Toppings = (props) => {
  const [state, setState] = useState({
    toppings: [
      { type: "Paneer", price: "50", img: "paneer.jpeg" },
      { type: "Corn", price: "20", img: "corn2.jpg" },
      { type: "Capsicum", price: "30", img: "capsicum.webp" }
    ]
  });
  const { toppings } = state;

  const handleToppings = (item) => {
    props.action("crusts");
    props.setToppings(item);
  };

  return (
    <Fragment>
      <div
        class="cartsy-products-block cartsy-block-spacing-wrapper toppinggrid"
        id="cartsy-product-block"
      >
        <div class="cartsy-product-search-results grid-cols-xxl-6 grid-cols-xl-5 grid-cols-md-4 grid-cols-sm-3 grid-cols-2 gap-10">
          {toppings.map((item) => (
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
                  onClick={() => handleToppings(item)}
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
    setToppings: (article) => dispatch(setToppings(article))
  };
}
export default connect(null, mapDispatchToProps)(Toppings);
