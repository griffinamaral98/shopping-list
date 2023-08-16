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

// Brad solution
// const itemForm = document.getElementById("item-form");
// const itemInput = document.getElementById("item-input");
// const itemList = document.getElementById("item-list");

// const addItem1 = (e) => {
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

// Event Listeners
// itemForm.addEventListener("submit", addItem1);
