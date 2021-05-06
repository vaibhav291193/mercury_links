function validateForm() {
var errors=[];
var postalCode = document.form1.toPostalCode;
var postalCodeLen = postalCode.value.length;
var additionalInfo = document.form1.textarea;
var additionalInfoLen = additionalInfo.value.length;
var goingTo = document.form1.goingTo;
var goingToValue = goingTo.value;

document.getElementById("toPostalCode").classList.remove("error");
document.getElementById("toPostalCode").setAttribute("aria-invalid", "false");
document.getElementById("errMsg2").innerHTML = "";

document.getElementById("errMsgTA").innerHTML = "";
document.getElementById("textarea").setAttribute("aria-invalid", "false");
document.getElementById("textarea").classList.remove("error");

document.getElementById("errMsgDD").innerHTML = "";
document.getElementById("goingTo").setAttribute("aria-invalid", "false");
document.getElementById("goingTo").classList.remove("error");



if(goingToValue <= 0) {
document.getElementById("errMsgDD").innerHTML = "Please select a country";
document.getElementById("goingTo").setAttribute("aria-invalid", "true");
document.getElementById("goingTo").classList.add("error");

errors.push(1);
}

if(postalCodeLen < 7) {

document.getElementById("toPostalCode").classList.add("error");
document.getElementById("toPostalCode").setAttribute("aria-invalid", "true");
document.getElementById("errMsg2").innerHTML = "Please enter a valid postal code.";
errors.push(2);

}

if(additionalInfoLen < 1) {

errors.push(3);
document.getElementById("errMsgTA").innerHTML = "Please enter a description";
document.getElementById("textarea").setAttribute("aria-invalid", "true");
document.getElementById("textarea").classList.add("error");
}
if(errors.length > 0) {
;
if(errors[0] == 1) {
document.getElementById("goingTo").focus(); 
} else if(errors[0] == 2) {
document.getElementById("toPostalCode").focus();

} else {
document.getElementById("textarea").focus();
}
return false;
}


return true;
}


function lengthValidation(petName, minlength)
{
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
return false;
}
return true;
}



function maxCharacterLength(textarea) {
        const maxchar = textarea.target.getAttribute('maxLength');

        const maxCharacter = document.getElementById(`${textarea.target.id}-maxCharacter`);
        maxCharacter.innerHTML = `${maxchar} characters left`;

        const len = textarea.target.value.length;
        if (len >= maxchar) {
            maxCharacter.innerHTML = `Maximum characters reached`;
        } else {
            maxCharacter.innerHTML = `${maxchar - len} characters left`;
        }
}
