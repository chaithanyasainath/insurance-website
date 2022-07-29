var nameError = document.getElementById('name-error');
var passwordError = document.getElementById('password-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName() {
	var name = document.getElementById('contact-name').value;

	if (name.length == 0) {
		nameError.innerHTML = 'Name is required';
	}
	if (!name.match(/^[A-Za-z]*$/)) {
		nameError.innerHTML = 'Valid Name is required';
		return false;
	}
	nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}


function validateLastName() {
	var name = document.getElementById('contact-Lastname').value;

	if (name.length == 0) {
		nameError.innerHTML = 'Name is required';
	}
	if (!name.match(/^[A-Za-z]*$/)) {
		nameError.innerHTML = 'Valid Name is required';
		return false;
	}
	nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}


function validatePassword(){
	var password = document.getElementById('contact-password').value;

	if(password.length <= 8)
	{
		passwordError.innerHTML = 'Password must be more 8 Characters';
		return false;
	}

	if(!password.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		passwordError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
		return true;
	}

}

function validatePhone(){
	var phone = document.getElementById('contact-phone').value;

	if(phone.length == 0)
	{
		phoneError.innerHTML = 'Phone no is required';
		return false;
	}

	if(phone.length !== 10)
	{
		phoneError.innerHTML = 'Phone no should be 10 digits';
		return false;
	}
	if(!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = 'Only digits';
		return false;
	}

	phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}

function validateEmail(){
	var email = document.getElementById('contact-email').value;

	if(email.length == 0)
	{
		emailError.innerHTML = 'Email is required';
		return false;
	}

	if(!email.match(/^[A-Za-z]*$/)) {
		emailError.innerHTML = 'Email Invalid';
		return false;
	}

	emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}


function validateForm() {
    
	if(validateName() || validateLastName() || validatePassword() || validatePhone() || validateEmail() ){
        alert("You have created successfully Please Sign In");
    
	}
}

	