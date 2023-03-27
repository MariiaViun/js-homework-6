// const input = document.querySelector("input");
const input = document.getElementById("validation-input");


console.dir(input);
input.addEventListener('blur', ()  => {
    const getBasic = Number(input.getAttribute("data-length"));
    console.log(getBasic);
    const newInput = input.value.length; 
    console.log(newInput);
    
    if (getBasic === input.value.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else
        input.classList.add("invalid");
        // input.classList.remove("valid");
});

// input.addEventListener("blur", onInputChange);
//     // console.log(Number(input.data-length));


// function onInputChange(event) { 
//     const lenght = 6;
//     const newInput = input.value.length; 

//     if (lenght === newInput) {
//         input.classList.add("validation-input.valid");
//         input.classList.add(".validation-input.invalid");
//     } 
// }
