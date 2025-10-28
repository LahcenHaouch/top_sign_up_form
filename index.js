const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm_password");

function invalidatePasswordInputs() {
  if (!passwordEl.classList.contains("invalid")) {
    passwordEl.classList.add("invalid");
  }

  if (!confirmPasswordEl.classList.contains("invalid")) {
    confirmPasswordEl.classList.add("invalid");
  }
}

function validatePasswordInputs() {
  if (passwordEl.classList.contains("invalid")) {
    passwordEl.classList.remove("invalid");
  }

  if (confirmPasswordEl.classList.contains("invalid")) {
    confirmPasswordEl.classList.remove("invalid");
  }
}

passwordEl.addEventListener("input", () => {
  if (passwordEl.value !== confirmPasswordEl.value) {
    invalidatePasswordInputs();
  } else {
    validatePasswordInputs();
  }
});
confirmPasswordEl.addEventListener("input", () => {
  if (confirmPasswordEl.value !== passwordEl.value) {
    invalidatePasswordInputs();
  } else {
    validatePasswordInputs();
  }
});
