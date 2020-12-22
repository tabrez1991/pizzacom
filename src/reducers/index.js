import {
  TOPPINGS,
  CRUSTS,
  BASE,
  DELETEITEM,
  ADDQUNATITY,
  DELETEQUNATITY
} from "../actions/types";

const initialState = {
  cutomization_pizza: [],
  items: [],
  total_count: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TOPPINGS:
      let itemsT = [...state.items];
      itemsT.push(action.payload);
      return {
        ...state,
        items: itemsT
      };
    case CRUSTS:
      let itemsC = [...state.items];
      itemsC.push(action.payload);
      return {
        ...state,
        items: itemsC
      };
    case BASE:
      let itemsB = [...state.items];
      let cutomization_pizza = [...state.cutomization_pizza];
      itemsB.push(action.payload);
      cutomization_pizza.push(itemsB);
      console.log(itemsB, cutomization_pizza);
      return {
        ...state,
        items: [],
        cutomization_pizza: cutomization_pizza
      };
    case DELETEITEM:
      console.log(action.payload[0].type);
      let cutomization_pizzaD = [...state.cutomization_pizza];
      console.log(cutomization_pizzaD[0][0]);
      let newItemD = [];
      for (let i = 0; i < cutomization_pizzaD.length; i++) {
        if (cutomization_pizzaD[i][0].type == action.payload[0].type) {
          continue;
        } else {
          newItemD.push(cutomization_pizzaD[i]);
        }
      }
      return {
        ...state,
        cutomization_pizza: newItemD
      };
    case ADDQUNATITY:
      let cutomization_pizzaAdd = [...state.cutomization_pizza];
      cutomization_pizzaAdd.push(action.payload);
      return {
        ...state,
        cutomization_pizza: cutomization_pizza
      };
    default:
      return state;
  }
}

export default rootReducer;
