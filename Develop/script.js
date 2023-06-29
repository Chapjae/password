// Assignment code here
// let specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/","]","^",]
var specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generatePassword = () => {
  var passwordText = [];
  
  var length = prompt("Choose a password length between 8 and 128");
  var lengthParse = parseInt(length)
  
  var specialChar = confirm ("Would you like to use special characters?")
  var upperChar = confirm ("Would you like to use uppercase characters?")
  var lowerChar = confirm ("Would you like to use lowercase characters?")
  var numberChar = confirm ("Would you like to use numbers?")
  
  // let confirmSpecial = confirm("Would you like to use special characters?")
  
  // might want to refactor as a function that passes in the character strings that takes in ppassword.text as an arguement and runs rng as a funtion" 
  if (lengthParse >= 8 && lengthParse <= 128) {
      specialChar
      upperChar
      lowerChar
      numberChar
    } else {
      alert("Your password must be between 8 and 128 characters!")
      }
  
  
  if (specialChar == true) {
      passwordText.push(specialChar[Math.floor(Math.random() * specialChar.length)])
    }

  if (upperChar == true) {
      passwordText.push(upperChar[Math.floor(Math.random() * upperChar.length)])
    }
      
  if (lowerChar == true) {
        passwordText.push(lowerChar[Math.floor(Math.random() * lowerChar.length)])
      } 
    
  if (numberChar == true) {
        passwordText.push(numberChar[Math.floor(Math.random() * numberChar.length)])
      }
  
      debugger
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
