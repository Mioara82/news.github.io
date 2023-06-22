const form = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');
const subscribeButton = document.getElementById('btn-subs');
const errorText = document.getElementById('error-text');


document.addEventListener("DOMContentLoaded", function(event) {
  form.addEventListener('submit', ValidateEmail);
  emailInput.addEventListener('keydown', function(){
    if (event.keycode === 13) {
      event.preventDefault;
      form.submit();
    }
  })
})
 

function ValidateEmail(event) {
  event.preventDefault();
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = emailInput.value;
  if (validEmail.test(email)) {
    sessionStorage.setItem('email', email);
    window.location.href = "success-message.html";
    errorText.classList.add('hidden');
    emailInput.value = " ";
  } else {
    emailInput.classList.add('invalid-input');
    errorText.classList.remove('hidden');
     emailInput.value = " ";
  }
}

emailInput.addEventListener('focus', function(event){
    event.target.style.cursor= 'pointer';
})

emailInput.addEventListener('blur', function(event){
    event.target.style.cursor= 'auto';
})



