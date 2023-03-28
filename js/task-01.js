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

// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.
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