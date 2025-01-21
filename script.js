const categories = {
  produce: ["Apples", "Bananas", "Carrots", "Lettuce", "Tomatoes", "Potatoes", "Onions", "Bell Peppers", "Broccoli", "Spinach", "Cucumbers", "Mushrooms", "Strawberries", "Blueberries", "Raspberries", "Blackberries", "Oranges", "Grapes", "Watermelon", "Cantaloupe", "Honeydew", "Pineapple", "Kiwi", "Mango", "Peaches", "Plums", "Pears", "Cherries", "Avocado", "Lemon", "Lime", "Garlic", "Ginger", "Cilantro", "Basil", "Mint", "Parsley", "Thyme", "Rosemary", "Oregano", "Sage", "Dill", "Chives", "Green Onions", "Celery", "Cabbage", "Brussels Sprouts", "Asparagus", "Artichokes", "Eggplant", "Zucchini", "Squash", "Pumpkin", "Sweet Potatoes", "Russet Potatoes", "Yukon Gold Potatoes", "Red Potatoes", "Carrots", "Beets", "Fennel", "Okra", "Snap Peas", "Snow Peas", "Green Beans", "Wax Beans", "Pinto Beans", "Black Beans", "Kidney Beans", "Garbanzo Beans", "Lentils", "Peas", "Corn", "Bell Peppers", "Jalapenos", "Poblano Peppers", "Chili Peppers", "Banana Peppers"],
  dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Eggs", "Cottage Cheese", "Cream Cheese", "Whipped Cream", "Half & Half", "Heavy Cream", "Sour Cream", "Buttermilk", "Goat Cheese", "Feta Cheese", "Parmesan Cheese", "Mozzarella Cheese", "Cheddar Cheese", "Swiss Cheese", "Provolone Cheese", "Gouda Cheese", "Gorgonzola Cheese", "Havarti Cheese", "Monterey Jack Cheese", "Pepper Jack Cheese", "Colby Jack Cheese", "American Cheese", "Muenster Cheese", "Bleu Cheese", "Ricotta Cheese"],
  frozen: ["Ice Cream", "Frozen Vegetables", "Frozen Fruit", "Frozen Meals", "Frozen Breakfast", "Frozen Desserts", "Frozen Snacks", "Frozen Appetizers", "Frozen Pizza", "Frozen Bread", "Frozen Meat"],
  "gluten-other-allergens": ["Gluten-Free Bread", "Gluten-Free Pasta", "Gluten-Free Crackers", "Gluten-Free Cookies", "Gluten-Free Cereal", "Gluten-Free Baking Mixes", "Gluten-Free Flour", "Gluten-Free Snacks", "Gluten-Free Desserts", "Gluten-Free Meals", "Gluten-Free Frozen Foods", "Gluten-Free Pizza", "Gluten-Free Bread Crumbs", "Gluten-Free Tortillas", "Gluten-Free Wraps", "Gluten-Free Chips", "Gluten-Free Pretzels", "Gluten-Free Beer", "Gluten-Free Cider", "Gluten-Free Spirits", "Gluten-Free Mixers", "Gluten-Free Wine", "Gluten-Free Liquid Sweeteners"],
  "dry-goods": ["Rice", "Pasta", "Cereal", "Oatmeal", "Quinoa", "Couscous", "Barley", "Farro", "Polenta", "Grits", "Flour", "Sugar", "Brown Sugar", "Powdered Sugar", "Granulated Sugar", "Honey", "Maple Syrup", "Agave Nectar", "Molasses", "Cornmeal", "Baking Powder", "Baking Soda", "Yeast", "Salt", "Pepper", "Spices", "Herbs", "Vanilla Extract", "Almond Extract", "Coconut Extract", "Lemon Extract", "Orange Extract", "Mint Extract", "Cocoa Powder", "Chocolate Chips", "Nuts", "Seeds", "Dried Fruit", "Canned Goods", "Canned Vegetables", "Canned Fruit", "Canned Beans", "Canned Soup", "Canned Meat", "Canned Seafood", "Canned Tomatoes", "Canned Sauce", "Canned Pasta", "Canned Broth", "Canned Stock", "Canned Gravy", "Canned Chili", "Canned Stew", "Canned Pie Filling", "Canned Desserts", "Canned Pie Crust", "Canned Cake Mix", "Canned Frosting", "Canned Cookies", "Canned Crackers", "Canned Snacks", "Canned Candy", "Canned Beverages", "Canned Juice", "Canned Soda", "Canned Water", "Canned Tea", "Canned Coffee", "Ketcup", "Mustard", "Mayonnaise", "Soy Sauce", "Teriyaki Sauce", "Worcestershire Sauce", "Hot Sauce", "BBQ Sauce", "Salsa", "Pasta Sauce", "Pizza Sauce", "Marinara Sauce", "Alfredo Sauce", "Pesto Sauce", "Taco Sauce", "Enchilada Sauce"],
  "household-goods": ["Soap", "Toilet Paper", "Paper Towels", "Laundry Detergent", "Dish Soap", "Cleaning Supplies", "Trash Bags", "Aluminum Foil", "Plastic Wrap", "Ziploc Bags", "Tupperware", "Plates", "Bowls", "Cups", "Utensils", "Napkins", "Paper Plates", "Paper Bowls", "Paper Cups", "Plastic Utensils", "Plastic Cups", "Plastic Plates", "Plastic Bowls", "Plastic Bags", "Plastic Containers", "Plastic Wrap", "Aluminum Foil", "Ziploc Bags", "Tupperware", "Trash Bags", "Cleaning Supplies", "Laundry Detergent", "Dish Soap", "Hand Soap", "Body Wash", "Shampoo", "Conditioner", "Lotion", "Sunscreen", "Bug Spray", "Toothpaste", "Toothbrush", "Floss", "Mouthwash", "Deodorant", "Shaving Cream", "Razors", "Feminine Products", "Diapers", "Wipes", "Baby Food", "Baby Formula", "Baby Bottles", "Baby Pacifiers", "Baby Toys", "Baby Clothes", "Baby Shoes", "Baby Accessories"],
  "pet-supplies": ["Dog Food", "Cat Litter", "Cat Food", "Dog Treats", "Cat Treats", "Dog Toys", "Cat Toys", "Dog Collars", "Cat Collars", "Dog Leashes", "Cat Leashes", "Dog Beds", "Cat Beds", "Dog Crates", "Cat Carriers", "Dog Bowls", "Cat Bowls", "Dog Grooming Supplies", "Cat Grooming Supplies", "Dog Shampoo", "Cat Shampoo", "Dog Brushes", "Cat Brushes", "Dog Nail Clippers", "Cat Nail Clippers", "Dog Toothbrushes", "Cat Toothbrushes", "Dog Toothpaste", "Cat Toothpaste", "Dog Dental Chews", "Cat Dental Chews", "Dog Dental Treats", "Cat Dental Treats", "Dog Dental Toys", "Cat Dental Toys", "Dog Dental Sticks", "Cat Dental Sticks", "Dog Dental Bones", "Cat Dental Bones", "Dog Dental Wipes", "Cat Dental Wipes", "Dog Dental Spray", "Cat Dental Spray", "Dog Dental Rinse", "Cat Dental Rinse", "Dog Dental Gel", "Cat Dental Gel", "Dog Dental Water Additive", "Cat Dental Water Additive", "Dog Dental Powder", "Cat Dental Powder", "Dog Dental Liquid", "Cat Dental Liquid", "Dog Dental Paste", "Cat Dental Paste", "Dog Dental Foam", "Cat Dental Foam", "Dog Dental Drops", "Cat Dental Drops", "Dog Dental Treatments", "Cat Dental Treatments", "Dog Dental Care", "Cat Dental Care", "Dog Dental Health", "Cat Dental Health", "Dog Dental Hygiene", "Cat Dental Hygiene", "Dog Dental Cleaning", "Cat Dental Cleaning"],
     
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
 let budget = document.getElementById("budget").value;
  let budgetResult = document.getElementById("budgetResult");
  budgetResult.innerHTML = "Your budget is: $" + budget;
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

// Get modal elements
const modal = document.getElementById("finalize-modal");
const finalizeBtn = document.getElementById("finalize-list-btn");
const closeModal = document.querySelector(".close");
const confirmFinalize = document.getElementById("confirm-finalize");
const cancelFinalize = document.getElementById("cancel-finalize");

// Show modal when finalize button is clicked
finalizeBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal when 'x' is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle confirmation
confirmFinalize.addEventListener("click", () => {
    let totalSpent = groceryList.reduce((sum, item) => sum + item.price, 0);
    groceryListUl.insertAdjacentHTML("beforeend", `<li><strong>Final Total: $${totalSpent.toFixed(2)}</strong></li>`);
    modal.style.display = "none";
});

// Cancel finalization
cancelFinalize.addEventListener("click", () => {
    modal.style.display = "none";
});
