// LOGIN FUNCTION
function login(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var sOutput = "";

    var sUserNameError = "User Name cannot be empty"; 
    var sUserEmailError = "User Email cannot be empty";
	var sPasswordError = "User Password cannot be empty";
    var sPasswordLengthError = "Password must be exactly 11 characters in length";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(username == ""){
        sOutput += sUserNameError + '\n';
    }
    if(email == ""){
        sOutput += sUserEmailError + '\n';

    }
    else if(!email.match(mailformat)){
        sOutput += "Email is not valid" + '\n';
    }
    if(password == ""){
        sOutput += sPasswordError + '\n';

    }
    else if(password.length != 11){
        sOutput += sPasswordLengthError + '\n';

    }
    if(sOutput !=  "" ){
        alert(sOutput);
        return false;
    }
    else{
        return true; //once all my fields are validated the login btn will redirenting me to the Order page
    }
}

// ORDER FUNCTION

function order(){
    var size = document.getElementById('size').value;
    var number = document.getElementById('number').value;
    var discountCode = document.getElementById('discountCode').value;

    var sOutput = "";

    var SuperSize = "Super-Size Burrito is not a healthy option, be aware!";
    var numericExpression = /^[0-9]+$/;
	var validCode = "mextexgood";
    var invalidCode = "Discount Code is invalid";
    var x = document.getElementById("snackbar");



    if (size == "Super-Size"){
        sOutput += SuperSize + '\n';
    }
    if (!number.match(numericExpression)){
        sOutput += "Quantity of burritos must be Numeric" + '\n';
    }
    if(discountCode != validCode && discountCode !=""){
        sOutput += invalidCode + '\n';
    }
    else if(discountCode == validCode){
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        // return false;
    }
    if(sOutput !=  "" ){
        alert(sOutput);
        return false;
    }
    else{
        // calculate the total price
        return false; //once all Promo Code is validated the "Place Order" btn will show me my toast message
    }
}























  


