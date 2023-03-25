// const list = document.querySelector('#categories');
// const categories = [...list.children];
// console.log(`Number of categories: ${categories.length}`);


// const nameCategory = document.querySelector(".item");

// // const text = nameCategory.firstElementChild.textContent;

// const title = [...nameCategory.children];

// const numbers = document.querySelector(".numbers");
// const number = [...numbers.children];
// console.log(number.length);
// // console.log(`Elements: ${number.length}`);



// // console.dir(title);
// categories.forEach((item) => {
    
//     // console.log(`Category: ${item.childNodes[1].textContent}`);
//     // console.log(`Elements: ${}`);
//     // console.dir(categories);
//     // console.log(item.children[1].length);

    
// })
// const nameCat = [...nameCategory.children]
// console.dir([...nameCategory.children]);


// nameCat.forEach(item => console.log(item.textContent))


// categories.forEach(item => console.log(categories.length))

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const list = document.querySelector("ul#categories");

// const listItem = list.querySelectorAll("li.item");

// console.log("Number of categories: " + listItem.length);

// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   console.log("Category: " + item.querySelector("h2").textContent);
//   const itemsElements = item.querySelector("ul");
//   console.log("Elements: " + itemsElements.querySelectorAll("li").length);
// });

const list = document.querySelector("#categories");

const listItem = list.querySelectorAll("li.item");

console.log("Number of categories: " + listItem.length);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(`Category:  ${item.querySelector("h2").textContent}`);
  const itemsElements = document.querySelector(".numbers");
  console.log(`Elements: ${itemsElements.querySelectorAll("li").length}`);
});