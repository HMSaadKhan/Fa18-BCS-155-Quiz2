$(function () {
  
  $('#name').focusout(nameCheck);
  $('#email').focusout(emailCheck);
  $('#password').focusout(passwordCheck);
  $('#confirm_password').focusout(confirmPasswordCheck);
  $("#registrationForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  if(!(nameCheck() && emailCheck() && passwordCheck() && confirmPasswordCheck()))
      return false;
  alert("Form is being submitted");
  e.preventDefault();
}

function nameCheck() {
  if( $('#name').val().length < 5)   
  {
      $('#name').addClass('error');
  }
   else
    $('#name').removeClass('error');
  

  return;
     
}

function emailCheck() {
  if (!$('#email').val().includes('@') || !$('#email').val().includes('.')) {
      $('#email').addClass('error');
  }  else{
    $('#email').removeClass('error');
  }
  return; 
}

function passwordCheck() {
  if ($('#password').val().length < 8) {
      $('#password').addClass('error');
  }  else{
    $('#password').removeClass('error');
  }
  return;
}

function confirmPasswordCheck() {
  if ($('#confirm_password').val() != $('#password').val() || $('#confirm_password').val().length < 8) {
      $('#confirm_password').addClass('error');
  }  else{
    $('#confirm_password').removeClass('error');
  }
  return;
}