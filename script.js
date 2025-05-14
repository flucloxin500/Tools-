const slider = document.getElementById("slider");
let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000);

const productsContainer = document.getElementById("products");
let totalProducts = 0;
let totalPrice = 0;

const cartMap = new Map(); // key: title, value: { price, quantity, liElement }

function updateCart(price, title) {
  const deliveryThreshold = 200;

  // Check if item already in cart
  if (cartMap.has(title)) {
    const item = cartMap.get(title);
    item.quantity++;
    item.liElement.querySelector(".quantity").textContent = item.quantity;
  } else {
    // Create new cart item
    const li = document.createElement("li");
    li.className = "flex justify-between items-center mb-1 text-sm";

    li.innerHTML = `
      <span>${title}</span>
      <div class="flex items-center gap-1">
        <button class="decrease px-1 text-white bg-gray-600 rounded">-</button>
        <span class="quantity">1</span>
        <button class="increase px-1 text-white bg-gray-600 rounded">+</button>
        <button class="remove text-red-500 font-bold hover:text-red-700">❌</button>
      </div>
    `;

    // Handle increase quantity
    li.querySelector(".increase").addEventListener("click", () => {
      const item = cartMap.get(title);
      item.quantity++;
      li.querySelector(".quantity").textContent = item.quantity;
      updateTotals();
    });

    // Handle decrease quantity
    li.querySelector(".decrease").addEventListener("click", () => {
      const item = cartMap.get(title);
      if (item.quantity > 1) {
        item.quantity--;
        li.querySelector(".quantity").textContent = item.quantity;
      } else {
        cartMap.delete(title);
        li.remove();
      }
      updateTotals();
    });

    // Handle remove
    li.querySelector(".remove").addEventListener("click", () => {
      cartMap.delete(title);
      li.remove();
      updateTotals();
    });

    document.getElementById("cart-items").appendChild(li);
    cartMap.set(title, { price, quantity: 1, liElement: li });
  }

  updateTotals();
}

function updateTotals() {
  let totalProducts = 0;
  let totalPrice = 0;

  for (const item of cartMap.values()) {
    totalProducts += item.quantity;
    totalPrice += item.price * item.quantity;
  }

  const delivery = totalProducts * 15;

  document.getElementById("total-products").textContent = totalProducts;
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  document.getElementById("delivery-charge").textContent = delivery.toFixed(2);
  document.getElementById("grand-total").textContent = (
    totalPrice + delivery
  ).toFixed(2);
}

fetch(
  "https://raw.githubusercontent.com/flucloxin500/host_api/refs/heads/main/mid_project.json"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow flex flex-col";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="h-40 object-contain mb-2" />
        <h3 class="text-md font-semibold">${product.title}</h3>
        <p class="text-sm font-bold text-green-600 mb-2">$${product.price}</p>
        <ul class="text-sm mb-2 text-gray-700 space-y-1">
          <li><strong>Max Range:</strong> ${product.maxrange}</li>
          <li><strong>Max Speed:</strong> ${product.maxspeed}</li>
          <li><strong>Max Power:</strong> ${product.maxpower}</li>
        </ul>
        <button class="mt-auto bg-black text-white px-4 py-2 rounded-[30px] hover:bg-slate-500 hover:text-black">
  Add to Cart
</button>

      `;
      card
        .querySelector("button")
        .addEventListener("click", () =>
          updateCart(product.price, product.title)
        );
      productsContainer.appendChild(card);
    });
  });
