// Assignment code here
var specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var everyChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
 
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This function will accept a string variable as an argument, and pass a random number generator algorithim through it to obtain a random character.
// During development, this function was used multiple times. Currently, it is only called once.
function randomSelector(str) {
  var randomIdx = Math.floor(Math.random() * str.length);
  var randomChar = str.charAt(randomIdx);
  return randomChar;
}

function generatePassword() {
  var passwordText = "";
  var passwordLength = prompt("Choose a password length between 8 and 128");
  var lengthParse = parseInt(passwordLength);
 
  // Check to see if the user enters a valid password length.
  if (lengthParse < 8 || lengthParse > 128) {
    alert("Your password must be between 8 and 128 characters!");
    return '';
    } else {
    var specialCharConfirm = confirm ("Would you like to use special characters?");
    var upperCharConfirm = confirm ("Would you like to use uppercase characters?");
    var lowerCharConfirm = confirm ("Would you like to use lowercase characters?");
    var numberCharConfirm = confirm ("Would you like to use numbers?");   
    
    // textChosen is the container for the types of strings that the user could potentially select. 
    var textChosen = "";
      
      if (specialCharConfirm) {
        textChosen += specialChar;
      }
      if (upperCharConfirm) {
        textChosen += upperChar;
      }
      if (lowerCharConfirm) {
        textChosen += lowerChar;
      }
      if (numberCharConfirm) {
        textChosen += numbers;
      }   
      
      // Check to see if the user has chosen at least one type of character set.
      if (textChosen.length > 0 ) {
        for (var i = 0; i < lengthParse; i++) {
          passwordText += randomSelector(textChosen);
        }
      } else {
        alert("You must choose at least one character type");
        return '';
      }
  return passwordText;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
