document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = {};
            const formElements = document.getElementsByClassName('form-control');
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                formData[element.id] = element.value;
            }
            console.log('Form Data:', formData);
        });
    } else {
        console.error('Form not found');
    }
});
