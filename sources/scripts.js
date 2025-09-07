function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
