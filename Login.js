const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const eyeHide = document.querySelector(".eye-off");
const eyeShow = document.querySelector(".eye");
const regEyeHide = document.querySelector(".reg-eye-off");
const regEyeShow = document.querySelector(".reg-eye");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

eyeHide.addEventListener("click", () => {
  let pw = document.querySelector(".password");

  if (pw.type === "password") {
    pw.type = "text";
    eyeShow.classList.add("active");
    eyeHide.classList.add("active");
  }
});

eyeShow.addEventListener("click", () => {
  let pw = document.querySelector(".password");
  if ((pw.type = "text")) {
    pw.type = "password";
    eyeShow.classList.remove("active");
    eyeHide.classList.remove("active");
  }
});

regEyeHide.addEventListener("click", () => {
  let pw = document.querySelectorAll(".regpassword");
  for (let i = 0; i < pw.length; i++) {
    if ((pw[i].type = "password")) {
      pw[i].type = "text";
      regEyeShow.classList.add("active");
      regEyeHide.classList.add("active");
    }
  }
});

regEyeShow.addEventListener("click", () => {
  let pw = document.querySelectorAll(".regpassword");
  for (let i = 0; i < pw.length; i++) {
    if ((pw[i].type = "text")) {
      pw[i].type = "password";
      regEyeShow.classList.remove("active");
      regEyeHide.classList.remove("active");
    }
  }
});

function validate_password() {
  const registerPwd = document.querySelector("#registerPwd").value;
  const registerConfirmPwd = document.querySelector(
    "#registerConfirmPwd"
  ).value;
  const alert = document.querySelector("#wrong_pass_alert");
  const submitBtn = document.querySelector("#submit");
  if (registerPwd !== "") {
    if (registerPwd !== registerConfirmPwd) {
      alert.style.color = "red";
      alert.innerHTML = "☒ Use same password";
      submitBtn.disabled = true;
      submitBtn.style.opacity = 0.4;
    } else {
      alert.style.color = "green";
      alert.innerHTML = "🗹 Password Matched";
      submitBtn.disabled = false;
      submitBtn.style.opacity = 1;
    }
  } else {
    alert.innerHTML = "";
    submitBtn.disabled = true;
  }
}
