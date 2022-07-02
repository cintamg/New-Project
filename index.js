const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile_no = document.getElementById('mobile_no');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validate();
})

const sendData=(sRate,count)=>{
    if(sRate===count){
        alert('Sign-in successful');
        location.href = 'login.html';
    }
}

//for final data validation

const successMsg=()=>{
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length-1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success" ){
            var sRate=0+i;
            console.log(sRate);
            sendData(count);
        }
        else{
            return false;
        }
    }
}

const isEmail=(emailVal)=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal))
    {
       return (true)
    }
    else
       return (false)
}

const isPassword=(passwordVal)=>{
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(passwordVal)) 
    { 
       return true;
    }
    else
    { 
      return false;
    }
}

const validate=()=>{
    const fnameVal=fname.value.trim();
    const lnameVal=lname.value.trim();
    const emailVal=email.value.trim();
    const mobile_noVal=mobile_no.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

//define the validate function

    //validate first name
    if(fnameVal.length == 0){
        setErrorMsg(fname,'First name cannot be blank');
    }
    else{
        setSuccessMsg(fname);
    }

    //validate last name
    if(lnameVal.length == 0){
        setErrorMsg(lname, 'Last name cannot be blank');
    }
    else{
        setSuccessMsg(lname);
    }

    //validate email
    if(emailVal.length == 0){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid email');
    }
    else{
        setSuccessMsg(email);
    }

    //validate phone
    if(mobile_noVal.length == 0){
        setErrorMsg(mobile_no, 'Mobile no. cannot be blank');
    }
    else if(mobile_noVal.length!=10){
        setErrorMsg(mobile_no, 'Not a valid Mobile no.');
    }
    else{
        setSuccessMsg(mobile_no);
    }

    //validate password
    if(passwordVal.length == 0){
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if(!(isPassword(passwordVal))){
        setErrorMsg(password, 'Not a valid password');
    }
    else{
        setSuccessMsg(password);
    }

    //validate confirm password
    if(cpasswordVal.length == 0){
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');
    }
    else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'Password not matching');
    }
    else{
        setSuccessMsg(cpassword);
    }
    successMsg();

}
function setErrorMsg(input, errormsg){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errormsg;
}
function setSuccessMsg(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
    small.innerText=errormsg;
}