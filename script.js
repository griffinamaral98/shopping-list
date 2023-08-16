// My solution
const displayItems = () => {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.forEach((item) => {
    addItemToDOM(item);
  });

  checkUI();
};

// Add a New Item
const addItemBtn = document.querySelector(".btn");
const addItemText = document.querySelector("#item-input");
const itemsList = document.querySelector("ul");

const addItemHandler = (e) => {
  e.preventDefault();
  const newItem = addItemText.value;

  if (addItemText.value === "") {
    alert("Please add an item");
    return;
  }

  if (isEditMode) {
    const itemToEdit = itemsList.querySelector(".edit-mode");

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit=mode");
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert("That item already exists!");
      return;
    }
  }

  addItemToDOM(newItem);

  addItemToStorage(newItem);

  addItemText.value = "";

  checkUI();
};

addItemBtn.addEventListener("click", addItemHandler);

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
  } else {
    setItemToEdit(e.target);
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
  addItemText.value = "";

  const items = document.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }

  addItemBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  addItemBtn.style.backgroundColor = "#333";

  isEditMode = false;
};

// Filter Items
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

// Edit Items
let isEditMode = false;

const setItemToEdit = (item) => {
  isEditMode = true;

  itemsList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  addItemBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  addItemBtn.style.backgroundColor = "#228B22";
  addItemText.value = item.textContent;
};

const checkIfItemExists = (item) => {
  const itemsFromStorage = getItemsFromStorage();

  return itemsFromStorage.includes(item);
};

body.addEventListener("click", () => {
  if (isEditMode) {
    isEditMode = false;
  }
});

checkUI();
