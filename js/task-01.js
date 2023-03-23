const list = document.querySelector('#categories');
console.dir(list);
console.dir(list.children);
const categories = [...list.children];
// console.dir(categories);
// console.log(categories);
categories.forEach(item => console.log(item))