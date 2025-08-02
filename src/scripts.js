const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailInput = document.getElementById('email')
emailInput.addEventListener("blur", checkEmail);

function validateEmail(email) {
    return emailRegex.test(email);
}

function checkEmail() {
    const emailValue = document.getElementById('email').value;
    const message = document.getElementById('validationMessage');

    if (emailValue != "") {
        if (!validateEmail(emailValue)) {
            message.textContent = "Please provide a valid email address.";
            message.classList.add('error')
        } else {
            message.textContent = "";
        }
    } else {
        message.classList.remove('error')
    }
}

