import Item from "./Item.js";
import {
  addToshoppingList,
  getShoppingList,
  setPriority,
  removeItem,
  addtoCompletedList,
  bootup,
} from "./model.js";
import { renderShoppingList, renderCompleteList } from "./view.js";

const itemInput = document.querySelector("input[name=itemInput]");
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

itemInput.addEventListener("keyup", function (evt) {
  if (evt.key === "Enter") {
    //Add to shopping list
    addToshoppingList(evt.target.value); //This sends data to array in model.js
    console.log(getShoppingList());

    // console.log(
    //   getShoppingList().map(({ item, id, priority }) => {
    //     return {
    //       gaur: item,
    //       sam: id,
    //       archit: priority,
    //     };
    //   })
    // );

    //Update the view
    renderShoppingList();
    //removre the value

    evt.target.value = " ";
  }
});

shoppingListDiv.addEventListener("click", function (evt) {
  if (evt.target.parentElement.classList.contains("priority-control")) {
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");
    console.log(itemId, priority);

    //set the priority
    setPriority(itemId, priority); //First the item is added in the array and post that in set function priority is updated
    renderShoppingList(); // post that we again call the shopping array
  }
  //Removinf the item
  if (evt.target.classList.contains("remove-btn")) {
    const itemId = evt.target.parentElement.getAttribute("data-id");
    if (true && removeItem(itemId)) {
      renderShoppingList();
    }
  }
});

shoppingListDiv.addEventListener("dragstart", function (evt) {
  if (evt.target.classList.contains("item")) {
    const getId = evt.target.getAttribute("data-id");
    evt.dataTransfer.setData("text/plain", getId);
  }
});
completedDiv.addEventListener("drop", function (evt) {
  const itemId = evt.dataTransfer.getData("text/plain");
  if (itemId) {
    //Add to complete list
    addtoCompletedList(itemId);
    renderShoppingList();
    renderCompleteList();
  }
});
completedDiv.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});
//Immediately Invoked function Expression
(() => {
  bootup();
  renderShoppingList();
  renderCompleteList();
})();
// function sayHi() {
//   console.log("Higit  there!");
// }

// const roger = document.querySelector(".remove-btn");
// roger.addEventListener("click", function (evt) {
//   console.log("clicked");
// }); // This code will not work as the remove button is not present by default in the HTML page

//This is the how to use remapping of array in case of array with object
// let arr = [
//   {
//     id: 12,
//     name: "Archit",
//     age: 12,
//   },
//   {
//     id: 13,
//     name: "Mukeshj",
//     age: 34,
//   },
// ];

// let arr1 = arr.map((elm) => {
//   return {
//     ...elm, //it means all the value of the previous array
//     age: elm.age * 10,
//   };
// });

// console.log("original array", arr);
// console.log("map of array", arr1);

// Testing git
