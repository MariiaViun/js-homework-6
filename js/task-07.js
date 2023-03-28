// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const input = document.querySelector("#font-size-control");
// console.log(input);
const span = document.querySelector("#text");
console.dir(span);


input.addEventListener("input", onChange);

function onChange(evt) {
    // console.dir(evt.currentTarget.valueAsNumber);
    span.style.fontSize = `${evt.currentTarget.value}px`;

}

// const inputEl = document.querySelector("#font-size-control");
// const spanEl = document.querySelector("#text");
// // console.dir(inputEl)

// inputEl.addEventListener("input", (event) => {
//   spanEl.style.fontSize = `${event.target.value}px`;
// });
