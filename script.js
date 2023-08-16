// My solution
// Add a New Item
const addItem = document.querySelector(".btn");
const addItemText = document.querySelector("#item-input");

const addItemHandler = (e) => {
  e.preventDefault();

  if (addItemText.value === "") {
    alert("Please add an item");
    return;
  }

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

  checkUI();
};

addItem.addEventListener("click", addItemHandler);

// Remove Single Item
const removeItem = document.querySelectorAll(".remove-item");
const removeItemHandler = (e) => {
  if (confirm("Are you sure?")) {
    e.target.parentElement.parentElement.remove();
  }
  checkUI();
};

removeItem.forEach((item) => item.addEventListener("click", removeItemHandler));

// Clear All Items
const clearBtn = document.querySelector(".btn-clear");
const itemsList = document.querySelector("ul");
const clearItemsHandler = () => {
  while (itemsList.firstChild) {
    itemsList.firstChild.remove();
  }
  checkUI();
};

clearBtn.addEventListener("click", clearItemsHandler);

const itemFilter = document.querySelector("#filter");
const checkUI = () => {
  const items = itemsList.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
};

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
