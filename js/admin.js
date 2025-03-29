document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    
    // Hardcoded admin credentials (for demo only)
    // In a real application, these would be verified server-side
    const ADMIN_CREDENTIALS = {
        username: 'admin',
        password: 'design123'
    };
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basic client-side validation
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            // Successful login - store token and redirect
            localStorage.setItem('adminAuthToken', 'loggedIn');
            window.location.href = 'admin-panel.html';
        } else {
            loginError.textContent = 'Invalid username or password';
        }
    });
});