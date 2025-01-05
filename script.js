const registerNo=document.getElementById('regNo');
const passsword=document.getElementById('pas');
const submitButton=document.getElementById('submitDetails');
submitButton.onclick=function (){
    let userDetails="Register No"+" : "+registerNo.value+"password"+" : "+"\n"+passsword.value;
    console.log(userDetails);
    window.location.href="https://webstream.sastra.edu/sastrapwi/";
}