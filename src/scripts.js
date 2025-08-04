const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailInput = document.getElementById('email');
const form = document.querySelector('.main-form');
const message = document.getElementById('validationMessage');
const mainHeading = document.querySelector('.main-heading');

emailInput.addEventListener("blur", checkEmail);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
        message.textContent = "Please provide a valid email address.";
        message.classList.add('error');
        emailInput.classList.add('error');
    } else {
        message.textContent = "";
        message.classList.remove('error');
        emailInput.classList.remove('error');

        form.classList.add('submited')

        const confirmation = document.createElement('p');
        confirmation.textContent = "Thanks! For your subscription.";
        confirmation.classList.add('confirmation-message');

        mainHeading.insertAdjacentElement('afterend', confirmation);
    }
});

function validateEmail(email) {
    return emailRegex.test(email);
}

function checkEmail() {
    const emailValue = emailInput.value;

    if (emailValue !== "") {
        if (!validateEmail(emailValue)) {
            message.textContent = "Please provide a valid email address.";
            message.classList.add('error');
            emailInput.classList.add('error');
        } else {
            message.textContent = "";
            message.classList.remove('error');
            emailInput.classList.remove('error');
        }
    } else {
        message.textContent = "";
        message.classList.remove('error');
        emailInput.classList.remove('error');
    }
}
