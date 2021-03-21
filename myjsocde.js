$(function () {
  $("#error_name,#error_email,#error_password,#error_cpassword").hide();
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
    $("#error_name").show();
  } else {
    $("#name").removeClass("error");
    $("#error_name").hide();
  }
  return;
}

function emailCheck() {
  if (!$("#email").val().includes("@") || !$("#email").val().includes(".")) {
    $("#email").addClass("error");
    $("#error_email").show();
  } else {
    $("#email").removeClass("error");
    $("#error_email").hide();
  }
  return;
}

function passwordCheck() {
  if ($("#password").val().length < 8) {
    $("#password").addClass("error");
    $("#error_password").show();
  } else {
    $("#password").removeClass("error");
    $("#error_password").hide();
  }
  return;
}

function confirmPasswordCheck() {
  if ($("#confirm_password").val() != $("#password").val()) {
    $("#confirm_password").addClass("error");
    $("#error_cpassword").show();
  } else {
    $("#confirm_password").removeClass("error");
    $("#error_cpassword").hide();
  }
  return;
}
