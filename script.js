const categories = {
  produce: ["Apples", "Bananas", "Carrots", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
  frozen: ["Pizza", "Ice Cream"],
  "gluten-other-allergens": ["Gluten-Free Bread"],
  "dry-goods": ["Rice", "Pasta"],
  "household-goods": ["Soap", "Toilet Paper"],
  "pet-supplies": ["Dog Food", "Cat Litter"]
};

const landingPage = document.getElementById("landing-page");
const trackerPage = document.getElementById("tracker-page");
const loginForm = document.getElementById("login-form");
const budgetInput = document.getElementById("budget");
const categoriesDiv = document.getElementById("categories");
const itemsListDiv = document.getElementById("items-list");
const itemsUl = document.getElementById("items");
const groceryListUl = document.getElementById("grocery");
const totalSpan = document.getElementById("total");
const alertMessage = document.getElementById("alert");
const backToCategoriesBtn = document.getElementById("back-to-categories");
const previousListsDiv = document.getElementById("previous-lists");
const previousListsUl = document.getElementById("grocery-list");

let budget = 0;
let total = 0;
let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];
let previousLists = JSON.parse(localStorage.getItem("previousLists")) || [];

// Populate category buttons dynamically
function populateCategoryButtons() {
  categoriesDiv.innerHTML = "";
  for (const category in categories) {
    const button = document.createElement("button");
    button.textContent = category.replace(/-/g, " ").toUpperCase();
    button.classList.add("category-btn");
    button.dataset.category = category;
    categoriesDiv.appendChild(button);
  }
}

// Update the grocery list UI
function updateGroceryListUI() {
  groceryListUl.innerHTML = "";
  total = 0;

  groceryList.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "grocery-item";
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    groceryListUl.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = total.toFixed(2);

  if (total > budget) {
    alertMessage.classList.remove("hidden");
  } else {
    alertMessage.classList.add("hidden");
  }

  localStorage.setItem("groceryList", JSON.stringify(groceryList));
}

// Handle category selection
document.querySelectorAll(".category").forEach(category => {
  category.addEventListener("click", function () {
    displayItems(category.dataset.category);
  });
});

function displayItems(category) {
  const itemsUl = document.getElementById("items");
  itemsUl.innerHTML = "";
  categories[category].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", () => addItemToGroceryList(item));
    itemsUl.appendChild(li);
  });
  itemsListDiv.classList.remove("hidden");
  categoriesDiv.classList.add("hidden");
}

// Handle adding an item
function handleAddItem(itemName, price) {

  const item = { name: itemName, price: parseFloat(price) };
  groceryList.push(item);
  updateGroceryListUI();
 
}

// Handle removing an item
function handleRemoveItem(index) {
  groceryList.splice(index, 1);
  updateGroceryListUI();
}

// Handle login form submission
function handleSubmitLogin(event) {
  event.preventDefault();
  landingPage.classList.add("hidden");
  trackerPage.classList.remove("hidden");
  /*const budgetValue = parseFloat(budgetInput.value);
  if (isNaN(budgetValue) || budgetValue <= 0) {
    alert("Please enter a valid budget amount!");
    return;
  }
  budget = budgetValue;
  landingPage.classList.add("hidden");
  trackerPage.classList.remove("hidden");
  updateGroceryListUI();
  populatePreviousLists();*/
}

function calculateBudget() {
 
}
// Save current list to previous lists
function saveCurrentList() {
  if (groceryList.length > 0) {
    previousLists.push({ list: groceryList, timestamp: new Date().toLocaleString() });
    localStorage.setItem("previousLists", JSON.stringify(previousLists));
  }
}

// Populate previous lists section
function populatePreviousLists() {
  previousListsUl.innerHTML = "";
  previousLists.forEach((entry, index) => {
    const li = document.createElement("li");
    li.className = "previous-list-item";
    li.innerHTML = `
      <span>List from ${entry.timestamp}</span>
      <button class="reuse-list-btn" data-index="${index}">Reuse</button>
    `;
    previousListsUl.appendChild(li);
  });
}

// Handle reuse of a previous list
function handleReuseList(index) {
  groceryList = [...previousLists[index].list];
  updateGroceryListUI();
  alert("Previous list loaded successfully!");
}

// Event Listeners
loginForm.addEventListener("submit", handleSubmitLogin);
categoriesDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const category = e.target.dataset.category;
    handleCategorySelection(category);
  }
});
itemsUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const itemName = e.target.dataset.item;
    const price = e.target.dataset.price;
    handleAddItem(itemName, price);
  }
});
groceryListUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    handleRemoveItem(index);
  }
});
backToCategoriesBtn.addEventListener("click", () => {
  itemsListDiv.classList.add("hidden");
  categoriesDiv.classList.remove("hidden");
});
previousListsUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("reuse-list-btn")) {
    const index = e.target.dataset.index;
    handleReuseList(index);
  }
});

// Initialize UI
populateCategoryButtons();
populatePreviousLists();
updateGroceryListUI();
