document.addEventListener('DOMContentLoaded', () => {
    var form = document.getElementById('loginForm');
    var errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function (event) {
        var age = parseInt(document.getElementById('age').value, 10);

        if (age < 18) {
            event.preventDefault();
            alert('You must be 18+ to login')
        } else {
            errorMsg.textContent = '';
            alert('Login successful.');
            // Add your real login logic here
        }
    });
});
