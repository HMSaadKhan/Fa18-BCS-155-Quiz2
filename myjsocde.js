$(function () {
  $("#name").focusout(nameCheck);
  $("#email").focusout(emailCheck);
  $("#password").focusout(passwordCheck);
  $("#confirm_password").focusout(confirmPasswordCheck);
  $("#registrationForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  if (
    !(nameCheck() && emailCheck() && passwordCheck() && confirmPasswordCheck())
  )
    return false;
  alert("Form is being submitted");
  e.preventDefault();
}

function nameCheck() {
  if ($("#name").val().length < 5) {
    $("#name").addClass("error");
    $("#error_name").html("Name must be 5 character long");
  } else {$("#name").removeClass("error");
  $("#error_name").html(" ");
  }
  return;
}

function emailCheck() {
  if (!$("#email").val().includes("@") || !$("#email").val().includes(".")) {
    $("#email").addClass("error");
    $("#error_email").html("Enter email in correct format");

  } else {
    $("#email").removeClass("error");
    $("#error_email").html(" ");
  }
  return;
}

function passwordCheck() {
  if ($("#password").val().length < 8) {
    $("#password").addClass("error");
    $("#error_password").html("Password must be 8 character long");
  } else {
    $("#password").removeClass("error");
    $("#error_password").html(" ");
  }
  return;
}

function confirmPasswordCheck() {
  if (
    $("#confirm_password").val() != $("#password").val()
  ) {
    $("#confirm_password").addClass("error");
    $("#error_cpassword").html("Password must be same as above");
  } else {
    $("#confirm_password").removeClass("error");
    $("#error_cpassword").html(" ");
  }
  return;
}
