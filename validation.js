document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("firstname-input");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const confirmPasswordInput = document.getElementById("confirm-password-input");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        // Prevent form submission
        event.preventDefault();

        // Clear previous error messages
        errorMessage.textContent = "";
        errorMessage.style.color = "red";

        // Name validation
        const name = nameInput.value.trim();
        if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
            errorMessage.textContent = "Please enter a valid name with letters only.";
            return;
        }

        // Email validation
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === "" || !emailPattern.test(email)) {
            errorMessage.textContent = "Please enter a valid email address.";
            return;
        }
        

        // Password validation
        const password = passwordInput.value;

        // Regular expression to check password requirements
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if (password.length < 8) {
            errorMessage.textContent = "Password must be at least 8 characters long.";
            return;
        }
        
        if (!passwordPattern.test(password)) {
            errorMessage.textContent = "Password must contain at least one letter, one number, and one special character.";
            return;
        }
        
        // Confirm password validation
        const confirmPassword = confirmPasswordInput.value;
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }

        // If all validations pass
        errorMessage.style.color = "green";
        errorMessage.textContent = "Signup successful!";
        form.reset();
    });
});
