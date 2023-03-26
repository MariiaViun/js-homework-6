const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");
// console.log(span);
// console.log(btnIncrement);
btnDecrement.addEventListener("click", onClickDecrement);
btnIncrement.addEventListener("click", onClickIncrement);
let counterValue = 0;


function onClickDecrement(event) {
    const spanNum = Number(span.textContent);
     console.log(spanNum);
    // =  counterValue - 1;
//    currentTarget.

}

function onClickIncrement(event) {
    console.log("+");
   span.textContent = counterValue + 1;
}