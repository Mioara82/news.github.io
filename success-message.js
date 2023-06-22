

const dismissBtn = document.getElementById('dismiss-btn');
const container = document.getElementById('container');

dismissBtn.addEventListener('click', function close(){
	container.style.display = 'none';
	window.location.href = 'newsletter.html';
})

const email = sessionStorage.getItem('email');
const spanEmail = document.getElementById('email-input');
document.addEventListener('DOMContentLoaded', function(){
	spanEmail.textContent = email;
})

