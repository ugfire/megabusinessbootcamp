function sendMessage() {
  document.getElementById("sendButton").addEventListener("click", function () {
    // Show "sending" popup
    Swal.fire({
      title: "Sending...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    // Simulate a delay of 2 seconds
    setTimeout(function () {
      // Close the "sending" popup
      Swal.close();

      // Show "success" popup
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully.",
        icon: "success",
      });
    }, 2000);
  });
}
