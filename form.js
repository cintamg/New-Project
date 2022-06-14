var email=document.getElementById('email');
var pwd=document.getElementById('pwd1');
var mno=document.getElementById('mno');
email.addEventListener('input',()=>{
    var emailBox=document.querySelector('.emailBox');
    var emailText=document.querySelector('.emailText');
    let emailv=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailv))
    {
        emailBox.classList.add('valid');
        email.classList.remove('invalid');
        emailText.innerHTML="Your Email Address is valid.";
    }
    else
    {
        emailBox.classList.add('invalid');
        emailText.classList.remove('valid');
        emailText.innerHTML="Must be a valid email address.";
    }
});
password.addEventListener('input',()=>{
    var passBox=document.querySelector('.passBox');
    var passText=document.querySelector('.passText');
    var pwdv=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pwd.value.match(pwdv))
    {
        passBox.classList.add('valid');
        passText.classList.remove('invalid');
        passText.innerHTML="Your Password is valid.";
    }
    else
    {
        passBox.classList.add('invalid');
        passText.classList.remove('valid');
        passText.innerHTML="Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
    }
})