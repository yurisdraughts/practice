const form = document.querySelector('form');
const inputs = document.querySelectorAll('label input');
const spans = document.querySelectorAll('label span');
const email = document.querySelector('[placeholder="Email Address"]');
const correctEmail = /^\w+@\w+\.\w+$/;

/* add warnings on submit */
form.addEventListener('submit', function(event) {
    
    /* wrong email formatting warning */
    if (!correctEmail.test(email.value) && email.value !== '') {
        event.preventDefault();

        email.classList.add('warning');
        spans[2].textContent = 'Looks like this is not an email';
    }

    /* empty input warning */
    inputs.forEach((input, i) => {
        if (input.value === '') {
            event.preventDefault();

            input.classList.add('warning');
            spans[i].textContent = `${inputs[i].placeholder} cannot be empty`;
        }
    });

});

/* remove warnings on click */
inputs.forEach((input, i) => input.addEventListener('click', function() {
    spans[i].textContent = '';
    input.classList.remove('warning');
}));