// generate captcha
function captchaGenerator(){
    var alpha = new Array('A','B','C','D','E','F', 'a','b', 'c', 'd','e' ,'f');

    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];

    var result = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f; 

    document.getElementById('mainCaptcha').value = result;
}

// is valid
function isValid(){
    var one = removeSpaces(document.getElementById('mainCaptcha').value);
    var two = removeSpaces(document.getElementById('inputCaptcha').value);

    if (one == two){
        return true;
    }else{
        return false;
    }
}

// remove space
function removeSpaces(string){
    return string.split(" ").join("");
//       "a D f e A" --> ['a, 'D', 'f','e','A'] --> 'aDfeA'
}
