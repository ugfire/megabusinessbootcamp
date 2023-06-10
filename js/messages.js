// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the submit button element
  var submitButton = document.getElementById("submitButton");

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Create an object with the data to be sent
    var data = {
      name: name,
      phone: phone,
      email: email,
      message: message,
      messagedate: new Date().toLocaleString("en-US", {
        timeZone: "Africa/Nairobi",
      }),
    };

    // Make a POST request to the SheetDB API using Axios
    axios
      .post("https://sheetdb.io/api/v1/2eqwz9bzcp531", data)
      .then(function (response) {
        // Log the response from the API
        console.log(response);

        // Show a success message to the user using SweetAlert
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Message sent successfully",
        });

        // Clear the form input values
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch(function (error) {
        // Log any errors that occur
        console.error(error);

        // Show an error message to the user using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message",
        });
      });
  });
});
