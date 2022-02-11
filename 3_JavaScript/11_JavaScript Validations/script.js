function validate(){
    var username = document.loginform.user.value;
    var password = document.loginform.pass.value;

    username = username.trim();
    password = password.trim();
    
    if(username == null || username == ""){
        alert("Username cannot bt empty");
        return false
    }
    if(password.length < 6){
        alert("Password should be more than 6 characters")
        return false
    }
    return true;
}