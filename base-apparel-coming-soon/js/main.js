const form = document.getElementsByTagName('form')[0];
const input = document.querySelector('form input');
const span = document.querySelector('form span');
const correctEmail = /^\w+@\w+\.\w+$/;

form.addEventListener('submit', function(event) {
    if (input.value === '' || !input.value.match(correctEmail)) {
        event.preventDefault();

        input.classList.add('warning');
        span.textContent = 'Please provide a valid email';
    }
});

document.addEventListener('click', function() {
    if (input.classList.contains('warning')) {
        input.classList.remove('warning');
        span.textContent = '';
        input.value = '';
    }
});