// My solution
// Add a New Item
const addItem = document.querySelector(".btn");
const addItemText = document.querySelector("#item-input");

const addItemHandler = (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  const icon = document.createElement("i");
  const btn = document.createElement("button");

  li.textContent = addItemText.value;
  btn.className = "remove-item btn-link text-red";
  icon.className = "fa-solid fa-xmark";

  btn.appendChild(icon);
  li.appendChild(btn);
  itemsList.appendChild(li);

  btn.addEventListener("click", removeItemHandler);
};

addItem.addEventListener("click", addItemHandler);

// Remove Single Item
const removeItem = document.querySelectorAll(".remove-item");
const removeItemHandler = (e) => {
  e.target.parentElement.parentElement.remove();
};

removeItem.forEach((item) => item.addEventListener("click", removeItemHandler));

// Clear All Items
const clearBtn = document.querySelector(".btn-clear");
const itemsList = document.querySelector("ul");
const clearItemsHandler = () => {
  while (itemsList.firstChild) {
    itemsList.firstChild.remove();
  }
};

clearBtn.addEventListener("click", clearItemsHandler);

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
