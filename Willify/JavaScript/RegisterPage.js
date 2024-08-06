document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        document.querySelectorAll('.error-message').forEach((el) => el.textContent = '');

        // Validate Username
        const username = document.getElementById('username').value;
        if (username.length < 3 || username.length > 20) {
            isValid = false;
            document.getElementById('usernameError').textContent = 'Username must be between 3 and 20 characters.';
        }

        // Validate Email
        const email = document.getElementById('email').value;
        if (!email.endsWith('@gmail.com')) {
            isValid = false;
            document.getElementById('emailError').textContent = 'Email must end with "@gmail.com".';
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            isValid = false;
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        }

        // Validate Age
        const age = document.getElementById('age').value;
        const ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 100) {
            isValid = false;
            document.getElementById('ageError').textContent = 'Age must be a number between 18 and 100.';
        }

        // Validate Gender
        const gender = document.getElementById('gender').value;
        if (!gender) {
            isValid = false;
            document.getElementById('genderError').textContent = 'Gender must be selected.';
        }

        if (isValid) {
            alert('Form Submitted Successfully!');
            form.submit();
        }
    });
});
