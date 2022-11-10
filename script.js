const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip-code");
const password = document.querySelector("#password");
const passwordVerification = document.querySelector("#password-verification");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
