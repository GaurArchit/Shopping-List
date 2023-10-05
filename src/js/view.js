import Item from "./Item.js";
import { getShoppingList, getCompletedList } from "./model.js";
//Here I am writing the rendering functionality
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");

export const renderShoppingList = () => {
  const domNodes = getShoppingList().map((elm) => {
    return Item(elm.item, elm.priority, elm.id);
  });

  shoppingListDiv.innerHTML = domNodes.join(" ");
  console.log(domNodes.join());
};

export const renderCompleteList = () => {
  const domNodes = getCompletedList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });
  completedDiv.innerHTML = domNodes.join(" ");
};
