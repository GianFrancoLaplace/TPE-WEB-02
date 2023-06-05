const form = document.getElementById("form");
const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const inputCheck = document.getElementById("captcha-check");
const captcha_input = document.getElementById("captcha-input");
const resetbtn = document.getElementById("captcha-reset");
const captchaText = document.getElementById("captcha-container");
const todoInput = document.querySelectorAll("input");
let arrayInputs = Array.from(todoInput);

let select_actividad = document.querySelectorAll("select");
select_actividad=Array.from(select_actividad);

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

inputCheck.addEventListener("change", ()=>{
  if(inputCheck.checked) formIsValid.inputCheck=true
  console.log(select_actividad.selectedIndex)
})

resetbtn.addEventListener("click", (e)=>{
  e.preventDefault(); // Para que el navegador no te pida completar el resto del form
  borrarInputs();
  displayCaptcha();
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) alert("Form valid")
    else alert('Form invalid')
}

const borrarInputs = () =>{
  for (const input of arrayInputs) {
    input.value= ""
    input.checked=false;
  }
  select_actividad.selectedIndex=0
  for (const option of select_actividad) {
    option.selectedIndex = 0
  }

}

captcha_input.addEventListener("change", (e)=>{
  if (captcha_input.value==captchaText.textContent)
  formIsValid.captcha=true
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