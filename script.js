// Handle form submissions for contact, sign-in, and sign-up forms
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
});

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign In successful!');
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account created successfully! Welcome to Foodie\'s Delight!');
});