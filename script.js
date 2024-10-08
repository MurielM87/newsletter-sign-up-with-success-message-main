let formMessage = document.getElementById("message");
let formInput = document.getElementById("form");
let btnSubscribe = document.getElementById("subscribe");
let btnDismiss = document.getElementById("dismiss");
let emailSpan = document.querySelector("#email");
let inputEmail = document.querySelector('input[placeholder="email@company.com"]');

function resetForm() {
    inputEmail.value = "";
}

inputEmail.addEventListener("input", () => {
    emailSpan.textContent = inputEmail.value;
})

btnSubscribe.addEventListener("click", (e) => {
    e.preventDefault;
    if(inputEmail.value.trim() === "") {
        return null;
    }
    formInput.style.display = "none";
    formMessage.style.display = "block";
})

btnDismiss.addEventListener("click", () => {
    resetForm();
    formInput.style.display = "flex";
    formMessage.style.display = "none";
})
