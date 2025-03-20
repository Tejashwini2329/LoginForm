document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("login-container");

    // Create form dynamically
    const form = document.createElement("form");
    form.classList.add("form-container");

    const heading = document.createElement("h2");
    heading.innerText = "Login";

    const emailLabel = document.createElement("label");
    emailLabel.innerText = "Email:";

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Enter your email");
    emailInput.required = true;

    const passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Password:";

    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter your password");
    passwordInput.required = true;

    const loginButton = document.createElement("button");
    loginButton.innerText = "Login";

    // Event Listener for Validation
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // Reset error styling
        emailInput.classList.remove("error");
        passwordInput.classList.remove("error");

        if (emailInput.value === "" || passwordInput.value === "") {
            alert("All fields are required!");
            if (emailInput.value === "") emailInput.classList.add("error");
            if (passwordInput.value === "") passwordInput.classList.add("error");
        } else if (!validateEmail(emailInput.value)) {
            alert("Invalid email format!");
            emailInput.classList.add("error");
        } else if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters long!");
            passwordInput.classList.add("error");
        } else {
            // Redirect to success page
            window.location.href = "success.html";
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Append elements to form
    form.appendChild(heading);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(loginButton);

    // Append form to container
    container.appendChild(form);
});

