import {
  TOPPINGS,
  CRUSTS,
  BASE,
  DELETEITEM,
  ADDQUNATITY,
  DELETEQUNATITY
} from "./types";

export function setToppings(payload) {
  return { type: TOPPINGS, payload };
}
export function setCrusts(payload) {
  return { type: CRUSTS, payload };
}
export function setBase(payload) {
  return { type: BASE, payload };
}
export function deletionItem(payload) {
  return { type: DELETEITEM, payload };
}
export function addQuantity(payload) {
  return { type: ADDQUNATITY, payload };
}
export function deleteQuantity(payload) {
  return { type: DELETEQUNATITY, payload };
}
