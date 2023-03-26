const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector("#ingredients");

const markup = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  // container.append(li);
  return li
});
container.append(...markup)

//  console.log(markup   );
// Артемка перше відео починаючи з 50 хв. та з 2:00