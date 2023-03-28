// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.

// const input = document.getElementById("validation-input");

// console.dir(input);
// input.addEventListener('blur', ()  => {
//     const getBasic = Number(input.getAttribute("data-length"));
//     console.log(getBasic);
//     const newInput = input.value.length;
//     console.log(newInput);
    
//     if (getBasic === input.value.length) {
//         input.classList.add("valid");
//         input.classList.remove("invalid");
//     }
//     else
//         input.classList.add("invalid");
//         // input.classList.remove("valid");
// });

const input = document.querySelector("input");
// const input = document.getElementById("validation-input");
input.addEventListener("blur", onInputChange);


function onInputChange(event) { 
    const getBasic = Number(input.getAttribute("data-length"));
    const newInput = input.value.length; 
    if (getBasic === input.value.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else
        input.classList.add("invalid");
}

