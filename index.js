function seterror(id, error) {
  // Set error inside tag of id
  document.querySelector(`#${id} .form-error`).innerHTML = error;  
}

// to clear the error when i put valid query


function validateForm() {
  var returnval = true;

var name = document.forms['myForm']["fname"].value;
  if (name.length < 5) {
    seterror("name", "Length of name is too short");
    returnval = false;
  } else if (name.length > 0) {
    seterror("name", ""); // Clear error if valid
  }
  var email = document.forms['myForm']["femail"].value;
  if (email.length === 0 || !email.includes('@')) {
    seterror("email", "Invalid email address");
    returnval = false;
  }

  var phone = document.forms['myForm']["fphone"].value;
  if (phone.length < 11) {
    seterror("phone", "Phone number must be at least 11 digits");
    returnval = false;
  }
  else {
    seterror("phone", ""); // Clear error if valid
  }

  var password = document.forms['myForm']["fpassword"].value;
  if (password.length < 8) {
    seterror("password", "Password must be at least 8 characters");
    returnval = false;
  }
  else {
    seterror("password","");
  }

 var confirmPassword = document.forms['myForm']["fcpassword"].value;
  if (password !== confirmPassword) {
    seterror("conform-password", "Passwords do not match");
    returnval = false;
  } else {
    seterror("conform-password", ""); // Clear error if valid
  }

  return returnval;
}
