function validateFormOne() {
var petName = document.form1.petName;


if(petNameValidation(petName, 5)) {
document.getElementById('successMessage').innerHTML = "Information submitted successfully!";
}
event.preventDefault();
}

function petNameValidation(petName, minlength)
{
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
return false;
}
return true;
}




function petTypeValidation(petType)
{
var petTypeValue = petType.value;
if (petTypeValue <= 0)
{
return false;
}
return true;
}

function loadPetInfo() {
var buttonText = document.getElementById("readButton").innerHTML;
if(buttonText.includes("more")) {
document.getElementById("readButton").innerHTML = buttonText.replace("more", "less");
document.getElementById("readButton").setAttribute("aria-expanded", "true");
document.getElementById('petInfo').innerHTML = "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock or a laboratory animal. ... Two of the most popular pets are dogs and cats; the technical term for a cat lover is an ailurophile and a dog lover a cynophile.<br><br>There are many health benefits of owning a pet. They can increase opportunities to exercise, get outside, and socialize. Regular walking or playing with pets can decrease blood pressure, cholesterol levels, and triglyceride levels. Pets can help manage loneliness and depression by giving us companionship.";
document.getElementById("chevron").setAttribute("src", "chevron_up.svg");
} else {
document.getElementById("readButton").innerHTML = buttonText.replace("less", "more");
document.getElementById("readButton").setAttribute("aria-expanded", "false");
document.getElementById('petInfo').innerHTML = "";
document.getElementById("chevron").setAttribute("src", "chevron_down.svg");
}
event.preventDefault();
}

function copyText() {
var cText = document.getElementById("regNoVal");
cText.select();
cText.setSelectionRange(0, 99999);
document.execCommand("copy");
document.getElementById("copyButton").focus();
document.getElementById("announcement").innerHTML = "Your registration number is copied";
setTimeout(function () {
document.getElementById("announcement").innerHTML = "";

}
,2);
}
