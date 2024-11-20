document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("request-form");
  
    // Function to create or update the error message below each field
    const createErrorMessage = (field, message) => {
      let errorMessage = field.parentElement.querySelector(".error-message");
  
      if (errorMessage) {
        errorMessage.textContent = message;
      } else {
        errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "red";
        errorMessage.textContent = message;
        field.parentElement.appendChild(errorMessage); // Append the error message below the field
      }
    };
  
    // Function to handle real-time validation for each field
    const validateField = (event) => {
      const field = event.target;
      const value = field.value.trim();
      let isValid = true;
      let errorMessage = "";
  
      // Remove any existing error messages when typing
      const existingError = field.parentElement.querySelector(".error-message");
      if (existingError) {
        existingError.remove();
      }
  
      switch (field.id) {
        case "name":
          const namePattern = /^[A-Za-z\s]+$/;
          if (!value || !namePattern.test(value)) {
            isValid = false;
            errorMessage = "Name must only contain letters and spaces (no numbers).";
          }
          break;
        case "address":
        case "dropoff-address":
          const addressPattern = /[A-Za-z]/;
          if (!value || !addressPattern.test(value)) {
            isValid = false;
            errorMessage = "Address cannot be empty and cannot be just numbers.";
          }
          break;
        case "phone":
          const phonePattern = /^\d{10}$/;
          if (!value || !phonePattern.test(value)) {
            isValid = false;
            errorMessage = "Please enter a valid phone number (10 digits).";
          }
          break;
        case "email":
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value || !emailPattern.test(value)) {
            isValid = false;
            errorMessage = "Please enter a valid email address.";
          }
          break;
        case "clothes-type":
          const clothesTypePattern = /^[A-Za-z\s]+$/;
          if (!value || !clothesTypePattern.test(value)) {
            isValid = false;
            errorMessage = "Please specify the type of clothes (no numbers).";
          }
          break;
        case "quantity":
          if (!value || value <= 0) {
            isValid = false;
            errorMessage = "Please enter a valid quantity (positive number).";
          }
          break;
        default:
          break;
      }
  
      if (!isValid) {
        createErrorMessage(field, errorMessage);
        field.style.borderColor = "red"; // Change border to red for invalid fields
      } else {
        field.style.borderColor = ""; // Reset border color when valid
      }
    };
  
    // Attach real-time validation to each input field
    const fields = form.querySelectorAll("input, select");
    fields.forEach(field => {
      field.addEventListener("input", validateField); // Validate on every input change
      field.addEventListener("blur", validateField);   // Validate when the field loses focus
    });
  
    // Prevent form submission if there are invalid fields
    form.addEventListener("submit", (event) => {
      let valid = true;
  
      // Check each field again before submission
      fields.forEach(field => {
        if (field.value.trim() === "" || field.style.borderColor === "red") {
          valid = false;
        }
      });
  
      if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
        alert("Please correct the errors before submitting the form.");
      } else {
        // Display success message
        event.preventDefault();  // Prevent form submission to simulate success message
        const successMessage = document.createElement("p");
        successMessage.classList.add("success-message");
        successMessage.style.color = "green";
        successMessage.textContent = "Form submitted successfully!Your request will be considered.";
        form.appendChild(successMessage);
  
        // Optionally, clear the form after success
        form.reset();
        // Remove all error messages
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());
      }
    });
  });
  