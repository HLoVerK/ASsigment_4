const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signUpBtn.addEventListener('click', function() {
   formBox.classList.add('active');
   body.classList.add('active');
   var audio = new Audio('audio1.mp3');
   audio.play();
});

signInBtn.addEventListener('click', function() {
   formBox.classList.remove('active');
   body.classList.remove('active');
   var audio = new Audio('audio1.mp3');
   audio.play();
});

// Check Validate
function fromValidatin() {
  var uid = document.registration.userid;
  var uemail = document.registration.email;
  var passid = document.registration.passid;
  var rpassid = document.registration.rpassid;
  if (userid_validation(uid,5,12)) {
    if (ValidateEmail(uemail)) {
      if (passid_validation(passid,7,12)) {
        if (rpassid_validation(rpassid,7,12)) {
        }
      }
    }
  }
  return false;
}

function userid_validation(uid,mx,my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len <= mx) {
    alert("User Id shoul not be empty or length be between " + mx + " to " + my);
    uid.focus();
    return false;
  }
  return true;
}

function ValidateEmail(uemail) {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if(uemail.value.match(mailformat)) {
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function passid_validation(passid,mx,my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len>= my || passid_len<mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    passid.focus();
    return false;
  }
  return true;
}

function rpassid_validation(rpassid,mx,my) {
  var rpassid_len = rpassid.value.length;
  if (rpassid_len == 0 || rpassid_len>= my || rpassid_len<mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    rpassid.focus();
    return false;
  }
  return true;
}
