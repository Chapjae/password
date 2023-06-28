// Assignment code here
// let specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/","]","^",]
let specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChar = "abcdefghijklmnopqrstuvwxyz"
let numbers = "1234567890"

console.log(specialChar)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generatePassword = () => {
  var passwordText = []
  
  let length = prompt("Choose a password length between 8 and 128");
  let stringParse = parseFloat(length);

  if (stringParse >= 8 && stringParse < 128) { 
    passwordText.length = stringParse;
    } else {
      alert("Your password must be between 8 and 128 characters!")
      }


  // if (confirm ("Would you like to use special characters?") == true) {
  //   passwordText.push(specialChar[Math.floor(Math.random() * specialChar.length)])
  //   } else if (confirm("Would you like to use uppercase characters?") == true) {
  //     passwordText.push(upperChar[Math.floor(Math.random() * upperChar.length)])
  //   } else if (confirm("Would you like to use lowercase characters?") == true) {
  //     passwordText.push(lowerChar.specialChar[Math.floor(Math.random() * lowerChar.length)])
  //   } else if (confirm("Would you like to use number?") == true) {
  //     passwordText.push(numbers[Math.floor(Math.random() * numbers.length)])
  //   }
  
debugger
  
  
  // let specialChar = confirm ("Would you like to use special characters?")
  // let upperChar = prompt ("Would you like to use uppercase characters?")
  // let lowerChar = prompt ("Would you like to use lowercase characters?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
