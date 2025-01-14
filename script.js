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

let budget = 0;
let total = 0;
let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];

const categories = {
  produce: ["Apples", "Bananas", "Carrots", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
  frozen: ["Pizza", "Ice Cream"],
  "gluten-other-allergens": ["Gluten-Free Bread"],
  "dry-goods": ["Rice", "Pasta"],
  "household-goods": ["Soap", "Toilet Paper"],
  "pet-supplies": ["Dog Food", "Cat Litter"]
};

// Handle login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  landingPage.classList.add("hidden");
  trackerPage.classList.remove("hidden");
});

// Set budget
budgetInput.addEventListener("input", () => {
  budget = parseFloat(budgetInput.value) || 0;
  updateGroceryListUI();
});

// Display items for a category
categoriesDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("category")) {
    const category = e.target.dataset.category;
    const items = categories[category];
    itemsUl.innerHTML = items
      .map(item => `<li class="item">${item}</li>`)
      .join("");
    categoriesDiv.classList.add("hidden");
    itemsListDiv.classList.remove("hidden");
  }
});

// Add item to grocery list
itemsUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    const name = e.target.textContent;
    const price = parseFloat(prompt(`Enter price for ${name}`)) || 0;
    if (price > 0) {
      groceryList.push({ name, price });
      updateGroceryListUI();
      saveGroceryList();
    }
  }
});

// Back to categories
backToCategoriesBtn.addEventListener("click", () => {
  categoriesDiv.classList.remove("hidden");
  itemsListDiv.classList.add("hidden");
});

// Remove item from grocery list
groceryListUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    groceryList.splice(index, 1);
    updateGroceryListUI();
    saveGroceryList();
  }
});

// Update UI
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
  alertMessage.classList.toggle("hidden", total <= budget);
}

// Save grocery list to localStorage
function saveGroceryList() {
  localStorage.setItem("groceryList", JSON.stringify(groceryList));
}

// Initialize UI
updateGroceryListUI();
