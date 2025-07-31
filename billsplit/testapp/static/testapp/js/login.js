// static/testsapp/js/login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault(); 

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                // Post to the backend's token endpoint to get a JWT
                const response = await fetch('/api/token/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    

                    localStorage.setItem('access_token', data.access);
                    localStorage.setItem('refresh_token', data.refresh);

                    alert('Login successful!');

                    window.location.href = '/dashboard/'; 
                } else {
                    const errorData = await response.json();
                    alert(`Login failed: ${errorData.detail || 'Invalid credentials'}`);
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
});