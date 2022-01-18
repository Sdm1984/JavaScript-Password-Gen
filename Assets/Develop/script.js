// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()_+=-";
var passwordLength = 128
var passwordValue = '';


function generatePassword(){
prompt("How many characters would you like your password to contain?");
prompt("Click OK to confirm whether or not to include lowercase characters.");
prompt("Click OK to confirm whether or not to include uppercase characters.");
prompt("Click OK to confirm whether or not to include numeric characters.");
prompt("Do you want to include special characters?");
  for (let i=0; i < passwordLength; i++) {
    let characters = Math.floor (Math.random() * generateBtn.length);
    passwordValue += characters.substring(passwordValue, passwordValue +1);

return ("Generated password will go here!");

}

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

