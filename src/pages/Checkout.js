import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deletionItem, deleteQuantity } from "../actions";

const Checkout = (props) => {
  const [state, setState] = useState({
    cutomized: [],
    qunatity: [],
    sum: 0
  });

  useEffect(() => {
    let mSum = 0;
    let mCustomize = [];
    let mQunatity = [];
    props.cutomization_pizza.forEach((element) => {
      element.forEach((ele) => {
        mSum += Number(ele.price);
      });
      mQunatity.push(1);
      mCustomize.push(element);
    });
    setState({
      ...state,
      sum: mSum,
      cutomized: mCustomize,
      qunatity: mQunatity
    });
    return () => {};
  }, [props.cutomization_pizza]);

  const { sum, cutomized, qunatity } = state;

  const addQuantity = (items, i) => {
    let m_sum = 0;
    let mQunatity = [...state.qunatity];
    items.forEach((item) => {
      m_sum += Number(item.price);
    });
    m_sum = m_sum + sum;
    mQunatity[i]++;
    setState({ ...state, sum: m_sum, qunatity: mQunatity });
  };

  const deleteQuantity = (items, i) => {
    let m_sum = 0;
    let mQunatity = [...state.qunatity];
    items.forEach((item) => {
      if (mQunatity[i] > 1) m_sum -= Number(item.price);
    });
    m_sum = m_sum + sum;
    if (mQunatity[i] > 1) mQunatity[i]--;
    setState({ ...state, sum: m_sum, qunatity: mQunatity });
  };

  return (
    <Fragment>
      <div class="cartstyle__CartSlidePopup-sc-1cp3kia-22 fMVWSj cartPopupFixed">
        <div class="cartstyle__CartPopupBody-sc-1cp3kia-0 hJoKdc">
          <div class="cartstyle__PopupHeader-sc-1cp3kia-1 kTjUJc">
            <div class="cartstyle__PopupItemCount-sc-1cp3kia-2 eZTkXg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19px"
                height="24px"
                viewBox="0 0 23.786 30"
              >
                <g data-name="shopping-bag (3)" transform="translate(-53.023)">
                  <g data-name="Group 2704">
                    <g data-name="Group 17" transform="translate(53.023 5.918)">
                      <g data-name="Group 16">
                        <path
                          data-name="Path 3"
                          d="M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z"
                          transform="translate(-53.023 -101.005)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                    <g data-name="Group 19" transform="translate(59.118)">
                      <g data-name="Group 18">
                        <path
                          data-name="Path 4"
                          d="M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z"
                          transform="translate(-157.039)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span>
                &nbsp;&nbsp;{props.cutomization_pizza.length}&nbsp;Items
              </span>
            </div>
          </div>
          <div class="os-host os-host-foreign cart-scrollbar os-theme-thin os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
            <div class="os-padding">
              <div class="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid">
                <div
                  class="os-content"
                  style={{ padding: "0px", height: "100%", width: "100%" }}
                >
                  {cutomized.map((items, i) => (
                    <div class="cartstyle__ItemWrapper-sc-1cp3kia-4 RJarP items-wrapper">
                      <div class="cart-itemstyle__ItemBox-sc-1mtcak2-0 fUQYOr">
                        <div class="counterstyle__CounterBox-sc-8iu0h2-0 eonmuI">
                          <button
                            class="counterstyle__CounterButton-sc-8iu0h2-1 hzkRpD control-button"
                            onClick={() => deleteQuantity(items, i)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              height="2px"
                              viewBox="0 0 12 2"
                            >
                              <rect
                                data-name="Rectangle 522"
                                width="12"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                            </svg>
                          </button>
                          <span class="counterstyle__CounterValue-sc-8iu0h2-2 fWCkFI">
                            {qunatity[i]}
                          </span>
                          <button
                            class="counterstyle__CounterButton-sc-8iu0h2-1 hzkRpD control-button"
                            onClick={() => addQuantity(items, i)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              height="12px"
                              viewBox="0 0 12 12"
                            >
                              <g
                                id="Group_3351"
                                data-name="Group 3351"
                                transform="translate(-1367 -190)"
                              >
                                <rect
                                  data-name="Rectangle 520"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  transform="translate(1367 195)"
                                  fill="currentColor"
                                ></rect>
                                <rect
                                  data-name="Rectangle 521"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  transform="translate(1374 190) rotate(90)"
                                  fill="currentColor"
                                ></rect>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <img
                          src={require("../assets/images/" + items[2].img)}
                          class="cart-itemstyle__Image-sc-1mtcak2-2 fMFkwR"
                          alt="item"
                        />
                        <div class="cart-itemstyle__Information-sc-1mtcak2-1 fuWVrN">
                          {items.map((item) => (
                            <span class="cart-itemstyle__Name-sc-1mtcak2-3 djMkq">
                              {item.type}
                            </span>
                          ))}
                        </div>
                        <span class="cart-itemstyle__Total-sc-1mtcak2-6 cbwArM">
                          {items.map((item) => (
                            <div>INR&nbsp;&nbsp;{item.price}</div>
                          ))}
                        </span>

                        <button
                          class="cart-itemstyle__RemoveButton-sc-1mtcak2-7 hXkklv"
                          onClick={() => props.deletionItem(items)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.003"
                            height="10"
                            viewBox="0 0 10.003 10"
                          >
                            <path
                              data-name="_ionicons_svg_ios-close (5)"
                              d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z"
                              transform="translate(-160.5 -160.55)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="cartstyle__CheckoutButtonWrapper-sc-1cp3kia-15 lbtGqM">
            <button
              class="cartstyle__CheckoutButton-sc-1cp3kia-14 jrNAVt"
              onClick={() => props.history.push("/thankyou")}
            >
              <span class="cartstyle__Title-sc-1cp3kia-16 foqDGB">
                Checkout
              </span>
              <span class="cartstyle__PriceBox-sc-1cp3kia-17 buUYoT">
                INR&nbsp;&nbsp;{sum}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cutomization_pizza: state.cutomization_pizza
  };
};
function mapDispatchToProps(dispatch) {
  return {
    deletionItem: (article) => dispatch(deletionItem(article)),
    deleteQuantity: (article) => dispatch(deleteQuantity(article))
  };
}

const CheckOut = connect(mapStateToProps, mapDispatchToProps)(Checkout);
export default withRouter(CheckOut);
