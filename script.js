const registerNo=document.getElementById('regNo');
const passsword=document.getElementById('pas');
const submitButton=document.getElementById('submitDetails');
submitButton.onclick=function (){
    if(registerNo.value==="")
    {
        alert("please enter register Number");
        return;
    }
    let userDetails="Register No"+" : "+registerNo.value+"password"+" : "+"\n"+passsword.value;
    console.log(userDetails);
    window.location.href="https://webstream.sastra.edu/sastrapwi/";
}