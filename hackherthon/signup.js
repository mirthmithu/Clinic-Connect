const Form = document.getElementById('signid');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const gen = document.getElementById('gen');
const ph = document.getElementById('num');
const dob = document.getElementById('dob');
const file = document.getElementById('fileInput');
Form.addEventListener('submit', (e) => {
	e.preventDefault();

  if (validateForm()) {
    window.location.href = "index.html";
  } else {
    alert("Form validation failed. Please check your inputs.");
  }
});


function validateForm()
{
   if (username.value === 'miruthula' && email.value==='2021it0217@svce.ac.in' && password.value === '12345' && gen.value !==" " && Number.value !== " " && dob !==" " file !==" ") {
		alert('Login successful');
    return true;
	} 
	
    else if (username.value === 'priyanka' && email.value==='2021it0647@svce.ac.in' && password.value === '12345' && gen.value !==" " && Number.value !== " " && dob !==" " file !==" ") {
		alert('Login successful');
    return true;
	}
    if (username.value === 'neha' && email.value==='2021it0694@svce.ac.in' && password.value === '12345' && gen.value !==" " && Number.value !== " " && dob !==" " file !==" ") {
		alert('Login successful');
    return true;
	}
    if (username.value === 'priyanga' && email.value==='2021it0080@svce.ac.in' && password.value === '12345' && gen.value !==" " && Number.value !== " " && dob !==" " file !==" ") {
		alert('Login successful');
    return true;
	}
  else {
		alert('Invalid username or password');
    return false;
	}

}
