document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'clickable-item'
    const form = document.getElementById('registration-form');
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

                let isValid = true;

                let messages = [
                    'Please fill out all fields.',
                    'Username must be at least 3 characters long.',
                    'Email must be a valid email address.',
                    'Password must be at least 8 characters long.'
                ];

                if (!username || !email || !password) {
                    isValid = false;
                } else if (username.length < 3) {
                    isValid = false;
                    feedbackDiv.innerHTML = messages[1];
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    isValid = false;
                    feedbackDiv.innerHTML = messages[2];
                } else if (password.length < 8) {
                    isValid = false;
                    feedbackDiv.innerHTML = messages[3];
                }

                if (isValid) {
                    feedbackDiv.textContent = 'Registration successful!';
                    feedbackDiv.style.color = '#28a745';
                    feedbackDiv.style.display = 'block';
                } else {
                    feedbackDiv.innerHTML = messages[isValid];
                    feedbackDiv.style.color = '#dc3545';
                    feedbackDiv.style.display = 'block';
                }

            });
    const feedbackDiv = document.getElementById('form-feedback');
}
});

