function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}

function validateForm() {
    let nameVal = document.forms["registerForm"]["user"].value;
    if (nameVal == "") {
      alert("Name must be filled out");
      return false;
    }

    let emailVal = document.forms["registerForm"]["email"].value;
    if (emailVal == "") {
      alert("Email must be filled out");
      return false;
    }

    let passVal = document.forms["registerForm"]["password"].value;
    if (passVal == "") {
      alert("Password must be filled out");
      return false;
    }
  }
  
  if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
