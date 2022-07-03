var pass= document.getElementById("password");
var msg= document.getElementById("message");
var str= document.getElementById("strength");

pass.addEventListener('input', ()=>{
    if(pass.value.length>0){
        msg.style.display = "block";
    }
    else{
        msg.style.display= "none";
    }
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(inputtxt.value.match(decimal)) {
        if(pass.value.length<4){
            str.innerHTML="weak";
            pass.style.borderColor= "#ff5925";
            msg.style.color = "#ff5925";
        }
        else if(pass.value.length>=4 && pass.ariaValueMax.length<8){
            str.innerHTML="medium";
            pass.style.borderColor= "orange";
            msg.style.color = "orange";
        }
        else{
            str.innerHTML="strong";
            pass.style.borderColor= "green";
            msg.style.color = "green";
        }
    }
    else{
        alert('Wrong');
    }
})