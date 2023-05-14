// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Prompt for input about the password's properties and validate it
  var passLength = prompt("Enter a length for the password (minimum 8, maximum 128");

  if (passLength < 8 || passLength > 128) {
    alert("Please enter a length between 8 and 128 characters.");
    return;
  }

  var passLowercase = prompt("Include lowercase characters? (Y/N)").toUpperCase();
  var passUppercase = prompt("Include uppercase characters? (Y/N)").toUpperCase();
  var passNumeric = prompt("Include numeric characters? (Y/N)").toUpperCase();
  var passSpecial = prompt("Include special characters? (Y/N)").toUpperCase();
  
  if (passLowercase !== "Y" && passUppercase !== "Y" && passNumeric !== "Y" && passSpecial !== "Y") {
    alert("Please include at least one character type.");
    return
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+/?\|`~";

  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

