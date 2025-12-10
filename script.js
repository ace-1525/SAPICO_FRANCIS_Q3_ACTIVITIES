//Phase 1 Products and Cart
//Step 1
let products = [
    { name: "Laptop", price: 35000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Accessories" },
    { name: "Mouse", price: 500, category: "Accessories" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "USB Cable", price: 150, category: "Accessories" },
    { name: "Smart Watch", price: 5000, category: "Electronics" }
    ];
    //Step 2
products.sort(function(a, b) {
    return a.price - b.price;
});

//Step 3
products.forEach(function(product, index) {
    console.log(index + ": " + product.name + " - P " + product.price + " (" + product.category + ")");
});

//Step 4
let cart = [];

//Step 5
function addToCart(productName) {
    let found = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            cart.push(products[i]);
            found = true;
            console.log(`${productName} added to cart.`);
            break;
        }
    }
    if (!found) {
        console.log(`${productName} not found in products.`);
    }
}
console.log(productName + " added to cart!");
found = true;
break;
}
}
if (!found) {
console.log("Product not found!");
}
}

Step 6: Test adding 3 items:

addToCart("Laptop");
addToCart("Mouse");
addToCart("Phone");

console.log("Current cart:", cart);

//Phase 2: Cart Operations

//Step 7

function removeLastItem() {
if (cart.length > 0) {
let removed = cart.pop();
console.log(removed.name + " removed from cart");
} else {
console.log("Cart is empty!");
}
}

//Step 8

function removeFirstItem() {
if (cart.length > 0) {
let removed = cart.shift();
console.log(removed.name + " removed from cart");
} else {
console.log("Cart is empty!");
}
}

//Step 9: 

function showCart() {
  console.log("=== CART (" + cart.length + " items) ===");
  cart.forEach(function(item, index) {
    console.log(index + ": " + item.name + " - P" + item.price);
  });
}

//Step 10: 
function getTotalPrice() {
  return cart.reduce(function(sum, item) {
    return sum + item.price;
  }, 0);
}

console.log("Total price: P" + getTotalPrice());

Test sequence:
removeLastItem();
showCart();
console.log("Total price: P" + getTotalPrice());

//Phase 3: Advanced Methods
//Step 11: 

function getElectronics() {
  return cart.filter(function(item) {
    return item.category == "Electronics";
  });
}

console.log("Electronics in cart:", getElectronics());

//Step 12
function applyDiscount(cartItems, discountPercent) {
  return cartItems.map(function(item) {
    return {
      name: item.name,
      originalPrice: item.price,
      discountedPrice: item.price * (1 - discountPercent / 100)
    };
  });
}

let discountedCart = applyDiscount(cart, 10);
console.log("Cart with 10% discount:", discountedCart);

//Step 13
function checkout() {
  let total = getTotalPrice();
  console.log("Original total: ₱" + total);

  if (total > 20000) {
    let discounted = applyDiscount(cart, 10);
    let discountedTotal = discounted.reduce(function(sum, item) {
      return sum + item.discountedPrice;
    }, 0);
    console.log("Discount applied! New total: ₱" + discountedTotal.toFixed(2));
  } else {
    console.log("Total: ₱" + total);
  }
}

checkout();

//Step 14
function removeItemByName(productName) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name == productName) {
      cart.splice(i, 1);
      console.log(productName + " removed!");
      return;
    }
  }
  console.log("Item not found in cart!");
}

// Test removal
addToCart("Headphones");
removeItemByName("Mouse");
showCart();

//Phase 4: Final Simulation
//Step 15
cart = []; // empty cart

addToCart("Laptop");
addToCart("Smart Watch");
addToCart("USB Cable");
addToCart("Headphones");

showCart();
checkout();

removeItemByName("USB Cable");
showCart();