const form = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const successMessage = document.getElementById('success-message');
const dismissButton = document.getElementById('dismiss-button');
const errorMessage = document.getElementById('error-message');
const subscribeButton = document.getElementById('btn-subs');


function ValidateEmail(event) {
  event.preventDefault();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = emailInput.value;
  if (mailFormat.test(email)) {
    const confirmationMessage = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription`;
    const newWindow = window.open("", "_blank", "width=400,height=300");
    newWindow.document.write(`
      <html>
        <head>
          <title>Success!</title>
        </head>
        <body>
          <h3 class = "subscription-text">Thanks for subscribing!</h3>
          <p>${confirmationMessage}</p>
        <button id="dismiss-button">Dismiss message</button>
        <script> 
        const dismissButton = document.getElementById('dismiss-button');
        dismissButton.addEventListener('click',function(){
          newWindow.close();
        });
        </script>
        </body>
      </html>
    `);
    newWindow.document.close();
    successMessage.classList.remove('hidden');
    //successMessage.querySelector('h3').textContent =`A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription`;
    errorMessage.classList.add('hidden');
    emailInput.value = "";
  } else {
    successMessage.classList.add('hidden');
    errorMessage.classList.remove('hidden');
    emailInput.classList.add('invalid-input');
    errorMessage.style.display = 'block';
  }
}

form.addEventListener('submit',ValidateEmail);

errorMessage.newId('emailInput','changeEmailInput')

