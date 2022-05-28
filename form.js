var email=document.getElementById('email').value;
var pwd=document.getElementById('pwd1').value;
var mno=document.getElementById('mno').value;
function validation(){
    let emailv=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mnov= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var pwdv=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(email.match(emailv))
    {
        return true;
    }
    else if(!(email.match(emailv)))
    {
        alert("You have entered an invalid email address!");
        document.form1.tex1.focus();
        return false;
    }
    else if(mno.match(mnov))
    {
        return true;
    }
    else if (!(mno.match(mnov))){
        alert("You have entered an invalid mobile no.");
    }
    if(pwd.match(pwdv))
    {
        return true;
    }
    else if(!(pwd.match(pwdv)))
    {
        alert("You have entered an invalid password!");
        return false;
    }
}