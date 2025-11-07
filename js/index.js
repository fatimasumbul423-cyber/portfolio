const form = document.getElementById("contactForm");
const messageBox = document.getElementById("Message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  form.reset();
  showMessage("Thank you! Your message has been sent successfully.", "success");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = type;
  messageBox.classList.remove("hidden");

  setTimeout(() => {
    messageBox.classList.add("hidden");
  }, 4000);
}
