const submitButton = document.querySelector('.js-cta');

submitButton.addEventListener('click', ()=> {
    checkEmail();
});

// Checks if the it is a valid email

function checkEmail () {
    const inputElement = document.querySelector('.js-email-input');

    const emailValue = inputElement.value;

    // Creates the paragraph element for the error message
    const html = document.createElement('p');

    // Removes any existing error message
    const divElement = document.querySelector('.input-container');
    divElement.querySelectorAll('.error-message').forEach(msg => msg.remove());

    if (!emailValue.endsWith('@gmail.com')) {

        html.innerHTML = 'Please provide a valid email address';
        html.classList.add('error-message');

    } 

    divElement.appendChild(html);
}
