// My solution
const displayItems = () => {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.forEach((item) => {
    addItemToDOM(item);
  });

  checkUI();
};

// Add a New Item
const addItem = document.querySelector(".btn");
const addItemText = document.querySelector("#item-input");
const itemsList = document.querySelector("ul");

const addItemHandler = (e) => {
  e.preventDefault();
  const newItem = addItemText.value;

  if (addItemText.value === "") {
    alert("Please add an item");
    return;
  }

  addItemToDOM(newItem);

  addItemToStorage(newItem);

  addItemText.value = "";

  checkUI();
};

addItem.addEventListener("click", addItemHandler);

const addItemToDOM = (item) => {
  const li = document.createElement("li");
  const icon = document.createElement("i");
  const btn = document.createElement("button");

  li.textContent = item;
  btn.className = "remove-item btn-link text-red";
  icon.className = "fa-solid fa-xmark";

  btn.appendChild(icon);
  li.appendChild(btn);
  itemsList.appendChild(li);
};

const addItemToStorage = (item) => {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
};

const getItemsFromStorage = () => {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
};

document.addEventListener("DOMContentLoaded", displayItems);

// Remove Single Item
function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  }
}

function removeItem(item) {
  if (
    confirm(`Are you sure you want to remove the item "${item.textContent}"?`)
  ) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
}

itemsList.addEventListener("click", onClickItem);

const removeItemFromStorage = (item) => {
  let itemsFromStorage = getItemsFromStorage();

  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
};

// Clear All Items
const clearBtn = document.querySelector(".btn-clear");
const clearItemsHandler = () => {
  while (itemsList.firstChild) {
    itemsList.firstChild.remove();
  }

  localStorage.removeItem("items");

  checkUI();
};

clearBtn.addEventListener("click", clearItemsHandler);

// Filter Items
const itemFilter = document.querySelector("#filter");
const checkUI = () => {
  const items = document.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
};

const filterItems = (e) => {
  const text = e.target.value.toLowerCase();
  const items = itemsList.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.includes(text)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

itemFilter.addEventListener("input", filterItems);

checkUI();

// Brad solution
// const itemForm = document.getElementById("item-form");
// const itemInput = document.getElementById("item-input");
// const itemList = document.getElementById("item-list");
// const clearBtn = document.getElementById("clear");

// const addItem = (e) => {
//   e.preventDefault();

//   const newItem = itemInput.value;

// Validate Input
//   if (itemInput.value === "") {
//     alert("Please add an item");
//     return;
//   }

// Create list item
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(newItem));

//   const button = createButton("remove-item btn-link text-red");
//   li.appendChild(button);

//   itemList.appendChild(li);

//   itemInput.value = "";
// };

// const createButton = (classes) => {
//   const button = document.createElement("button");
//   button.className = classes;
//   const icon = createIcon("fa-solid fa-xmark");
//   button.appendChild(icon);
//   return button;
// };

// const createIcon = (classes) => {
//   const icon = document.createElement("i");
//   icon.className = classes;
//   return icon;
// };

// Remove list item
// const removeItem = (e) => {
//   if (e.target.parentElement.classList.contains("remove-item")) {
//     e.target.parentElement.parentElement.remove();
//   }
// };

// const clearItems = () => {
//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// };

// Event Listeners
// itemForm.addEventListener("submit", addItem);
// itemList.addEventListener("click", removeItem);
// clearBtn.addEventListener("click", clearItems);
