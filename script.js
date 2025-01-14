const categories = {
  produce: ["Apples", "Bananas", "Carrots", "Lettuce", "Tomatoes", "Potatoes", "Onions", "Bell Peppers", "Broccoli", "Spinach", "Cucumbers", "Mushrooms", "Strawberries", "Blueberries", "Raspberries", "Blackberries", "Oranges", "Grapes", "Watermelon", "Cantaloupe", "Honeydew", "Pineapple", "Kiwi", "Mango", "Peaches", "Plums", "Pears", "Cherries", "Avocado", "Lemon", "Lime", "Garlic", "Ginger", "Cilantro", "Basil", "Mint", "Parsley", "Thyme", "Rosemary", "Oregano", "Sage", "Dill", "Chives", "Green Onions", "Celery", "Cabbage", "Brussels Sprouts", "Asparagus", "Artichokes", "Eggplant", "Zucchini", "Squash", "Pumpkin", "Sweet Potatoes", "Russet Potatoes", "Yukon Gold Potatoes", "Red Potatoes", "Carrots", "Beets", "Fennel", "Okra", "Snap Peas", "Snow Peas", "Green Beans", "Wax Beans", "Pinto Beans", "Black Beans", "Kidney Beans", "Garbanzo Beans", "Lentils", "Peas", "Corn", "Bell Peppers", "Jalapenos", "Poblano Peppers", "Chili Peppers", "Banana Peppers"],
  dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Eggs", "Cottage Cheese", "Cream Cheese", "Whipped Cream", "Half & Half", "Heavy Cream", "Sour Cream", "Buttermilk", "Goat Cheese", "Feta Cheese", "Parmesan Cheese", "Mozzarella Cheese", "Cheddar Cheese", "Swiss Cheese", "Provolone Cheese", "Gouda Cheese", "Gorgonzola Cheese", "Havarti Cheese", "Monterey Jack Cheese", "Pepper Jack Cheese", "Colby Jack Cheese", "American Cheese", "Muenster Cheese", "Bleu Cheese", "Ricotta Cheese"],
  frozen: ["Pizza", "Ice Cream", "Frozen Vegetables", "Frozen Fruit", "Frozen Meals", "Frozen Breakfast", "Frozen Desserts", "Frozen Snacks", "Frozen Appetizers"],
  "gluten-other-allergens": ["Gluten-Free Bread", "Gluten-Free Pasta", "Gluten-Free Crackers", "Gluten-Free Cookies", "Gluten-Free Cereal", "Gluten-Free Baking Mixes"],
  "dry-goods": ["Rice", "Pasta", "Cereal", "Oatmeal", "Quinoa", "Couscous", "Barley", "Farro", "Flour", "Sugar", "Brown Sugar", "Baking Powder"],
  "household-goods": ["Soap", "Toilet Paper", "Paper Towels", "Laundry Detergent", "Dish Soap", "Cleaning Supplies", "Trash Bags"],
  "pet-supplies": ["Dog Food", "Cat Litter", "Cat Food", "Dog Treats", "Cat Treats", "Dog Toys", "Cat Toys"],
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

let budget = 0;
let total = 0;
let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];

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
    total += item.price; // Add the price to the total
  });

  totalSpan.textContent = total.toFixed(2); // Update the total display

  // Show or hide the over-budget warning
  if (total > budget) {
    alertMessage.classList.remove("hidden"); // Show warning
  } else {
    alertMessage.classList.add("hidden"); // Hide warning
  }

  localStorage.setItem("groceryList", JSON.stringify(groceryList)); // Persist changes
}

function handleCategorySelection(category) {
  itemsUl.innerHTML = "";
  categories[category].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <button class="add-btn" data-item="${item}" data-price="${(Math.random() * 10 + 1).toFixed(2)}">Add</button>
    `;
    itemsUl.appendChild(li);
  });
  categoriesDiv.classList.add("hidden");
  itemsListDiv.classList.remove("hidden");
}

function handleAddItem(itemName, price) {
  const item = { name: itemName, price: parseFloat(price) };
  groceryList.push(item);
  updateGroceryListUI();
}

function handleRemoveItem(index) {
  groceryList.splice(index, 1);
  updateGroceryListUI();
}

function handleSubmitLogin(event) {
  event.preventDefault();
  budget = parseFloat(budgetInput.value);
  landingPage.classList.add("hidden");
  trackerPage.classList.remove("hidden");
  updateGroceryListUI();
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

// Initialize UI
updateGroceryListUI();
