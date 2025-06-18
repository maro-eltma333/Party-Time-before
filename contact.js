document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("message-form");
    const sendButton = document.getElementById("send-button");
    const responseMessage = document.getElementById("response-message");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Function to show an error message with red color
    function showError(message) {
        responseMessage.innerHTML = message;
        responseMessage.style.color = "red";
    }

    // Add an event listener to the "Send Message" button
    contactForm.addEventListener("submit", function (event) {
        // Prevent the form from being submitted and the page from refreshing
        event.preventDefault();

        // Check if the name and message fields are empty
        if (nameInput.value.trim() === "" || messageInput.value.trim() === "") {
            showError("Please fill out all required fields.");
        } else {
            // Display the success message
            responseMessage.innerHTML = "Message sent. We will answer in 24 hours.";
            responseMessage.style.color = "green"; // Change text color to green

            // Clear the form fields
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }
    });

    // Add an event listener to the form inputs to enable the button and validate the form
    contactForm.addEventListener("input", function () {
        // Check if the name and message fields are empty
        const isFormValid = nameInput.value.trim() !== "" && messageInput.value.trim() !== "" ;
        const isFormVlid = emailInputI.value.trim() !== "";
        // Enable the button if the form is valid, otherwise disable it
        sendButton.disabled = !isFormValid;
    });
});
