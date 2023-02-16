const form = document.querySelector("form");
const ul = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  const quantity = form.elements.qty;
  const product = form.elements.product;

  practice(quantity.value, product.value);

  quantity.value = "";
  product.value = "";

  e.preventDefault();
});

const practice = (quantity, product) => {
  const newLi = document.createElement("li");
  newLi.textContent = `${quantity} and ${product}`;
  ul.appendChild(newLi);
};
