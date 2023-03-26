// const input = document.querySelector("input");
const input = document.getElementById('validation-input');
// console.log(input);

// console.log(input);
// input.addEventListener('blur', ()  => {
//     // const getBasic = input.getAttribute("data - length");
//     // console.log(getBasic);
//     // const newInput = input.value.length; 
//     console.log(input.data-length);
//     if (getBasic === input.value.length) {
//         input.classList.add("valid");
//         // input.classList.remove("invalid");
//     }
//         input.classList.add("invalid");
//         input.classList.remove("valid");
// });

input.addEventListener("blur", onInputChange);
    // console.log(Number(input.data-length));


function onInputChange() { 
    const lenght = 6;

    if (input.value.lenght === lenght) {
        input.classList.add("valid");
    }
}
