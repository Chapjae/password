// Assignment code here
// let specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/","]","^",]
var specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var everyChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
var passwordText = '';
 
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomSelector(str) {
  var randomIdx = Math.floor(Math.random() * str.length);
  var randomChar = str.charAt(randomIdx);
  return randomChar;
}

function confirmCharacters(specialCharConfirm, upperCharConfirm, lowerCharConfirm, numberCharConfirm) {
  var specialCharConfirm = confirm ("Would you like to use special characters?")
  var upperCharConfirm = confirm ("Would you like to use uppercase characters?")
  var lowerCharConfirm = confirm ("Would you like to use lowercase characters?")
  var numberCharConfirm = confirm ("Would you like to use numbers?")   
  
  if (specialCharConfirm == true) {
      passwordText += randomSelector(specialChar)
      if (upperCharConfirm == true) {
        passwordText += randomSelector(upperChar)
        if (lowerCharConfirm == true) {
          passwordText += randomSelector(lowerChar)
          if (numberCharConfirm == true) {
            passwordText += randomSelector(numbers)
            } else {
            alert("Please choose at least one type of character.")
          }
        } 
      }
    }
}

function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128");
  var lengthParse = parseInt(passwordLength)

  if (lengthParse >= 8 && lengthParse <= 128) {
    confirmCharacters()
    for (var i = passwordText.length; i < lengthParse; i++) {
      var passwordFill = Math.floor(Math.random() * everyChar.length)
      passwordFill += passwordText
    }
    } else {
      alert("Your password must be between 8 and 128 characters!")
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
