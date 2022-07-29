const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "abc@hdfc.com" && password === "123") {
        alert("You have successfully logged in.");
        window.location="reg.html";
    } else {
        alert("Wrongs password");
    }
})