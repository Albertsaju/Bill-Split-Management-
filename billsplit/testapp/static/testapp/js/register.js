document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) { // Ensure the form exists on the page
        registrationForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            try {
                // Adjust this URL to your actual backend registration endpoint
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, password })
                });

                if (response.ok) {
                    // Registration successful
                    alert('Registration successful! You can now log in.');
                    window.location.href = '/login.html'; // Redirect to login page
                } else {
                    // Registration failed
                    const errorData = await response.json();
                    alert(`Registration failed: ${errorData.message || 'Something went wrong.'}`);
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
});