const form = document.querySelector('.contact-box');
const successMessage = document.querySelector('.form-success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Replace with your actual form submission logic
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.json()) // Parse response as JSON (adjust if needed)
  .then(data => {
    if (data.success) { // Check for success response from server (adjust property name)
      successMessage.classList.remove('hidden'); // Show success message
      form.reset(); // Reset form fields
    } else {
      alert('There was a problem submitting your message: ' + data.error); // Use error message from server (adjust property name)
    }
  })
  .catch(error => {
    alert('An error occurred while submitting the form. Please try again later.');
    console.error(error); // Log the error for debugging
  });
});
