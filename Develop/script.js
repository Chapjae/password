// Assignment code here
// let specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/","]","^",]
var specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var everyChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
 
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomSelector(str) {
  var randomIdx = Math.floor(Math.random() * str.length);
  var randomChar = str.charAt(randomIdx);
  return randomChar;
}

function generatePassword() {
  var passwordText = ""
  var textChosen = ""
  var passwordLength = prompt("Choose a password length between 8 and 128");
  var lengthParse = parseInt(passwordLength)
 
  if (lengthParse < 8 || lengthParse > 128) {
    alert("Your password must be between 8 and 128 characters!")
    return;
    } else {
    var specialCharConfirm = confirm ("Would you like to use special characters?")
    var upperCharConfirm = confirm ("Would you like to use uppercase characters?")
    var lowerCharConfirm = confirm ("Would you like to use lowercase characters?")
    var numberCharConfirm = confirm ("Would you like to use numbers?")   

      if (specialCharConfirm) {
        passwordText += randomSelector(specialChar)
        textChosen += specialChar
      if (upperCharConfirm) {
        passwordText += randomSelector(upperChar)
        textChosen += upperChar
      if (lowerCharConfirm) {
        passwordText += randomSelector(lowerChar)
        textChosen += lowerChar
      if (numberCharConfirm) {
        passwordText += randomSelector(numbers)
        textChosen += numbers    
          }
          for (var i = 0; i < lengthParse; i++) {
          passwordText += randomSelector(textChosen)
            }
          }
        } 
      }
    }
  return passwordText;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
