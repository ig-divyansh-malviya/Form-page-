// Function to handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission behavior
        
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const backgroundColor = document.getElementById('background').value;
    
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
    
        alert(`Form Submitted!\nEmail: ${email}\nPhone Number: ${number}\nBackground Color: ${backgroundColor}`);
        document.body.style.backgroundColor = backgroundColor;  // Change the background color
    });
    
    function signup() {
        alert('You clicked on Sign Up!');
    }
    