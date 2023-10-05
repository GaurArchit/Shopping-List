let shoppingList = [];
let completedList = [];

export const addToshoppingList = (item) => {
  const itemId = `${parseInt(
    Math.random() * 10000000
  )}-${new Date().getTime()}`;

  shoppingList.push({
    id: itemId,
    item: item,
    priority: "normal",
  });
};

export const setPriority = (itemid, priority) => {
  shoppingList = shoppingList.map((item) => {
    if (item.id === itemid) {
      return {
        ...item,
        priority,
      };
    }
  });
};

export const removeItem = (itemId) => {
  const confirm = window.confirm("Do you want to delete it ");
  if (confirm) {
    shoppingList = shoppingList.filter(({ id }) => id !== itemId);
    return true;
  }
  return false;
};

export const addtoCompletedList = (itemId) => {
  const getItem = shoppingList.find(({ id }) => id === itemId);
  shoppingList = shoppingList.filter(({ id }) => id !== itemId);
  completedList = [getItem, ...completedList];
};
export const getShoppingList = () => shoppingList;
export const getCompletedList = () => completedList;
