// Assignment code here
// let specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/","]","^",]
var specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"

 
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomSelector(str) {
  var randomIdx = Math.floor(Math.random() * str.length);
  var randomChar = str.charAt(randomIdx);
  return randomChar;
}

function generatePassword() {
  
  var length = prompt("Choose a password length between 8 and 128");
  var lengthParse = parseInt(length)
  var passwordText = '';
  
  var specialCharConfirm = confirm ("Would you like to use special characters?")
  var upperCharConfirm = confirm ("Would you like to use uppercase characters?")
  var lowerCharConfirm = confirm ("Would you like to use lowercase characters?")
  var numberCharConfirm = confirm ("Would you like to use numbers?")
 
  if (lengthParse >= 8 && lengthParse <= 128) {
    if (specialCharConfirm == true) {
      randomSelector(specialChar)
      }
    if (upperCharConfirm == true) {
      randomSelector(upperChar)
      }
    if (lowerCharConfirm == true) {
      randomSelector(lowerChar)
      }
    if (numberCharConfirm == true) {
      randomSelector(numbers)
      }
  } else {
      alert("Your password must be between 8 and 128 characters!")
      }

  

  // if (upperChar == true) {
  //     passwordText += upperChar[Math.floor(Math.random() * upperChar.length)]
  //   }
      
  // if (lowerChar == true) {
  //       passwordText.push(lowerChar[Math.floor(Math.random() * lowerChar.length)])
  //     } 
    
  // if (numberChar == true) {
  //       passwordText.push(numberChar[Math.floor(Math.random() * numberChar.length)])
  //     }
          
  return passwordText
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
