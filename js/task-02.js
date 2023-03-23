const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const container = document.querySelector("#ingredients");
// console.dir(container);

ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  container.append(li);
})






// Артемка перше відео починаючи з 50 хв. та з 2:00