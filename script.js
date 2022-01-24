// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //capital letter characters
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz" //lowercase letter characters
var numericalChar = "0123456789" // number characters
var symbolChar = "@#$!%^&*()_+=-"; // special characters
var finalPassword = ''; // final password from generator
var chosenChar = ''; // User will enter chosenChar - this could be anything

// Acceptance criteria and prompts
function generatePassword(){
var passwordLength = prompt ("How many characters would you like your password to contain?");
passwordLength = Number(passwordLength);
if (passwordLength < 8 || passwordLength > 128){
  passwordLength = prompt ("Please enter a password with a min of 8 to a max of 128 characters.") 
  console.log(passwordLength)
}
var islowercaseChar = confirm ("Click OK to confirm whether or not to include lowercase characters.");
var isuppercaseChar = confirm ("Click OK to confirm whether or not to include uppercase characters.");
var isnumericalChar = confirm("Click OK to confirm whether or not to include numeric characters.");
var issymbolChar = confirm ("Do you want to include special characters?");


// Write out if "statements" for characters ALL *Char

if (islowercaseChar){
  chosenChar += lowercaseChar;
  console.log(chosenChar)
}

if (isuppercaseChar){
  chosenChar += uppercaseChar;
  console.log(chosenChar)
}

if (isnumericalChar){
  chosenChar += numericalChar;
  console.log(chosenChar)
}

if (issymbolChar){
  chosenChar += symbolChar;
  console.log(chosenChar)
}

// For loop for password generator and include floor & random

  for (let i=0; i < passwordLength; i++) {
    let randomValue = Math.floor (Math.random() * chosenChar.length);
    finalPassword += chosenChar[randomValue];

}
return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

