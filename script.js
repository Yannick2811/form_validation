const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip-code");
const password = document.querySelector("#password");
const passwordVerification = document.querySelector("#password-verification");
const form = document.querySelector("#form");
const showPasswordButton = document.querySelector("#show-password");
const showPasswordVerificationButton = document.querySelector(
  "#show-password-verification"
);

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Not an email address");
    email.reportValidity();
    email.classList.remove("valid");
    email.classList.add("error");
  } else {
    email.reportValidity();
    email.setCustomValidity("");
    email.classList.remove("error");
    email.classList.add("valid");
  }
  if (email.value == "") {
    email.classList.remove("error");
    email.classList.remove("valid");
    email.setCustomValidity("");
  }
});

country.addEventListener("input", () => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("Please enter a country");
    country.reportValidity();
    country.classList.remove("valid");
    country.classList.add("error");
  } else {
    country.reportValidity();
    country.setCustomValidity("");
    country.classList.remove("error");
    country.classList.add("valid");
  }
  if (country.value == "") {
    country.classList.remove("error");
    country.classList.remove("valid");
    country.setCustomValidity("");
  }
});

zipCode.addEventListener("input", () => {
  if (zipCode.validity.patternMismatch) {
    zipCode.setCustomValidity("Please enter a ZIP Code");
    zipCode.reportValidity();
    zipCode.classList.remove("valid");
    zipCode.classList.add("error");
  } else {
    zipCode.reportValidity();
    zipCode.setCustomValidity("");
    zipCode.classList.remove("error");
    zipCode.classList.add("valid");
  }
  if (zipCode.value == "") {
    zipCode.classList.remove("error");
    zipCode.classList.remove("valid");
    zipCode.setCustomValidity("");
  }
});

password.addEventListener("input", () => {
  if (password.validity.tooShort) {
    password.setCustomValidity("Password too short");
    password.reportValidity();
    password.classList.remove("valid");
    password.classList.add("error");
  } else {
    password.reportValidity();
    password.setCustomValidity("");
    password.classList.remove("error");
    password.classList.add("valid");
  }
  if (password.value == "") {
    password.classList.remove("error");
    password.classList.remove("valid");
    password.setCustomValidity("");
  }
});

passwordVerification.addEventListener("input", () => {
  if (passwordVerification.value !== password.value) {
    passwordVerification.setCustomValidity("Not the same as Password");
    passwordVerification.reportValidity();
    passwordVerification.classList.remove("valid");
    passwordVerification.classList.add("error");
  } else {
    passwordVerification.reportValidity();
    passwordVerification.setCustomValidity("");
    passwordVerification.classList.remove("error");
    passwordVerification.classList.add("valid");
  }
  if (passwordVerification.value == "") {
    passwordVerification.classList.remove("error");
    passwordVerification.classList.remove("valid");
    passwordVerification.setCustomValidity("");
  }
});

form.addEventListener("submit", (e) => {
  if (email.validity.typeMismatch | (email.value == "")) {
    e.preventDefault();
    email.classList.remove("valid");
    email.classList.add("error");
  }
  if (country.validity.patternMismatch | (country.value == "")) {
    e.preventDefault;
    country.classList.remove("valid");
    country.classList.add("error");
  }
  if (zipCode.validity.patternMismatch | (zipCode.value == "")) {
    e.preventDefault;
    zipCode.classList.remove("valid");
    zipCode.classList.add("error");
  }
  if (password.validity.tooShort | (password.value == "")) {
    e.preventDefault;
    password.classList.remove("valid");
    password.classList.add("error");
  }
  if (
    (passwordVerification.value !== password.value) |
    (passwordVerification.value == "")
  ) {
    e.preventDefault();
    passwordVerification.classList.remove("valid");
    passwordVerification.classList.add("error");
  }
});

showPasswordButton.addEventListener("click", (e) => {
  if (password.type === "password") {
    e.preventDefault();
    password.type = "text";
    showPasswordButton.innerHTML =
      '<ion-icon name="eye-off-outline"></ion-icon>';
  } else {
    e.preventDefault();
    password.type = "password";
    showPasswordButton.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
  }
});

showPasswordVerificationButton.addEventListener("click", (e) => {
  if (passwordVerification.type === "password") {
    e.preventDefault();
    passwordVerification.type = "text";
    showPasswordVerificationButton.innerHTML =
      '<ion-icon name="eye-off-outline"></ion-icon>';
  } else {
    e.preventDefault();
    passwordVerification.type = "password";
    showPasswordVerificationButton.innerHTML =
      '<ion-icon name="eye-outline"></ion-icon>';
  }
});
