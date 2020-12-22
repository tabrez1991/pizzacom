import React, { Fragment, useState, useEffect } from "react";

import Banner from "../components/Banner";
import Crusts from "../components/Crusts";
import PizzaBase from "../components/PizzaBase";
import Toppings from "../components/Toppings";

const Customize = () => {
  const [state, setState] = useState({
    type: "topping"
  });
  useEffect(() => {
    return () => {};
  }, []);

  const { type } = state;

  const handleAction = (item) => {
    setState({ ...state, type: item });
  };
  return (
    <Fragment>
      <div className="cartsy-layout-main">
        <Banner />
        {type === "topping" ? <Toppings action={handleAction} /> : null}
        {type === "crusts" ? <Crusts action={handleAction} /> : null}
        {type === "base" ? <PizzaBase action={handleAction} /> : null}
      </div>
    </Fragment>
  );
};

export default Customize;
