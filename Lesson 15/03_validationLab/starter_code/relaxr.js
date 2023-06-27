function validateSignInForm(e){
    e.preventDefault();

    // Set up message array
    let messages = new Array;

    // Get password and validate
   const inputPW = document.querySelector("#inputPassword3").value;
   if(inputPW.length < 3){
    messages.push("Password is too short");
   }
    // Get email address and validate
   const email = document.querySelector("#inputEmail3").value;
   if(validateEmail(email) == false){
    messages.push("Email is not valid");
   }

    // If no error messages show submit message
    let outputMessage = "";
    if(messages.length == 0){
        outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    }else{
    // Else show error messages
        outputMessage = '<div class="alert alert-danger" role="alert">';
        for(let i=0;i<messages.length;i++){
            outputMessage+='<p>'+messages[i]+"</p>";
        }
        outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;

}

function validateNewUserForm(e){
    e.preventDefault();

     // Set up message array
    let messages = [];

    // Get email address and validate
    let inputEmail = querySelector("#inputEmail").value;

    if(!ValidateEmail(inputEM)){
        messages.push("Bad Email");
    }
    // Get passwords and validate
        // Make sure that both passwords match
    let pw1 = document.querySelector("#inputPassword5").value;
    let pw2 = document.querySelector("#inputPassword4").value;   
    if(pw1 < 3 || pw2 < 3 || pw1 != pw2){
        messages.push("Passwords must match and be at least 3 characters long");
    } 
    // Validate Names
    let fname = querySelector("#inputFName").value;
    let lname = querySelector("#inputLName").value;

    if(fname.length < 3 || lname.length < 3){
        messages.push("");
    }
     // If no error messages show submit message
     let outputMessage = "";
     if(messages.length == 0){
         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
     }else{
     // Else show error messages
         outputMessage = '<div class="alert alert-danger" role="alert">';
         for(let i=0;i<messages.length;i++){
             outputMessage+='<p>'+messages[i]+"</p>";
         }
         outputMessage+="</div>";
     }
 
     document.getElementById('errorMessages').innerHTML = outputMessage;
}




function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }else{
    return false;
  }
}




document.addEventListener('DOMContentLoaded', function(event) {

    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    });

    // Bind a validation function to the submit of the login form
    document.querySelector("#home .relaxrLoginForm").addEventListener('submit',validateSignInForm);

    // Bind a validation function to the submit of the profile
    document.querySelector("#profile .relaxrLoginForm").addEventListener('submit',validateNewUserForm);
});