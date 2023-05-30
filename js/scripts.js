const form = document.getElementById("form")
const name = document.getElementById("input-name")
const email = document.getElementById("input-email")
const inputCheck = document.getElementById("captcha-check")
const captcha_input = document.getElementById("captcha-input")
const resetbtn = document.getElementById("captcha-reset")
const captchaText = document.getElementById("captcha-container")


displayCaptcha();

const formIsValid = {
    name: false,
    email: false,
    inputCheck: false,
    captcha: false
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})

name.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) 
    formIsValid.name = true
})

email.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) 
    formIsValid.email = true
})

inputCheck.addEventListener("change", (e)=>{
  if(inputCheck.checked) formIsValid.inputCheck=true
  console.log("CHECK")
  console.table(formIsValid)
})

resetbtn.addEventListener("click", (e)=>{
  e.preventDefault(); // Para que el navegador no te pida completar el resto del form
  displayCaptcha();
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) alert("Form valid")
    else alert('Form invalid')
}

captcha_input.addEventListener("change", (e)=>{
  if (captcha_input.value==captchaText.textContent)
  formIsValid.captcha=true
  // console.log(captcha_input.value)
  // console.log(captcha_input.value==captchaText.textContent)
  // console.log(generateCaptcha())
})

// Captcha

// Generar un código de captcha aleatorio de 6 caracteres
function generateCaptcha() {
  let captcha = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
  }

  return captcha;
}

// Mostrar el captcha en el contenedor
function displayCaptcha() {
  let captchaContainer = document.getElementById("captcha-container");
  let captcha = generateCaptcha();
  captchaContainer.textContent = captcha;
}