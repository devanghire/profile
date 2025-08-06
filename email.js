// https://dashboard.emailjs.com/admin/templates/i34r28t/content

function sendEmail() {
   let username = document.getElementById("full-name").value;

   let params = {
      name: username,
      email: document.getElementById("email").value,
      subject: "Message From https://devanghire.github.io/profile",
      message: document.getElementById("message").value,
   };

   emailjs.send('service_alrp112', 'template_0dfmekl', params).then(function(response) {
      let msg = username + " mail has been sent successfully. We will connect with you shortly.";
      alert(msg);
      document.getElementById("full-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
   }, function(error) {
      alert("Failed to send email. Please try again later.");
      console.error(error);
   });
}
