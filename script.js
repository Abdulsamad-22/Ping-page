

const submitButton = document.querySelector('.js-cta');

submitButton.addEventListener('click', ()=> {
    checkEmail();
});

// checks if the it is a valid email

function checkEmail () {
    const inputElement = document.querySelector('.js-email-input');

    const emailValue = inputElement.value;

    // creates the paragraph element for the error message
    const html = document.createElement('p');

    const divElement = document.querySelector('.input-container');

    if (!emailValue.endsWith('@gmail.com')) {

        html.innerHTML = 'Please provide a valid email address';
        html.classList.add('error-message');

    } 

    divElement.appendChild(html);
}