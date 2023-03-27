const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    console.log(email.value);
    console.log(password.value);
    const data = {
        email: email.value,
        password: password.value,
    }
    console.log(data);
}
 