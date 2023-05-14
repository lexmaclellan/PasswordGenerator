// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength = prompt("Enter a length for the password (minimum 8, maximum 128");
var passLowercase = prompt("Include lowercase characters?");
var passUppercase = prompt("Include uppercase characters?");
var passNumeric = prompt("Include numeric characters?");
var passSpecial = prompt("Include special characters?");

if (!passLowercase && !passUppercase && !passNumeric && !passSpecial) {
 alert("Please include at least one character type.");
}