// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");
// console.log(span);
// console.log(btnIncrement);
btnDecrement.addEventListener("click", onClickDecrement);
btnIncrement.addEventListener("click", onClickIncrement);
let counterValue = 0;

function onClickDecrement() {
   span.textContent = counterValue -=1
    // console.log(spanNum);
    
    // =  counterValue - 1;
//    currentTarget.

}

function onClickIncrement() {
    console.log("+");
   span.textContent = counterValue += 1;
}