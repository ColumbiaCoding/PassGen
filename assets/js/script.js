const generateBtn = document.querySelector("#generate");
let newPassword = "";
let passwordLength = 0;
let isValid = false;
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specialCharacters = "!@#$%^&*(){}[]=<>/,."
const numbers = "0123456789"
let containsLowercase = false;
let containsUppercase = false;
let containsSpecial = false;
let containsNumbers = false;
// The variables contain various characater types such as containsLowercase + containsUppercase + containsSpecial + containsNumbers;

//writing a function to get parameters to generate password
function getParams() {

  passwordLength = Number(prompt("Enter a number from 8-128"));

  console.log(passwordLength);
  if (validLen()) {
    containsLowercase = confirm("Do you want lower case letters?");
    containsUppercase = confirm("Do you want upper case letters?");
    containsNumbers = confirm("Do you want numbers?");
    containsSpecial = confirm("Do you want special characters?");
    alert("Your parameters are \n" + "Has lower case:" + containsLowercase + "\n" + "Has upper case:" + containsUppercase + "\n" + "Has numbers case:" + containsNumbers + "\n" + "Has special characters:" + containsSpecial);
    // console.log("number of  params:" + typesCount);
    isAcceptable();
  } else {
    getParams()
  }
}


// validating if the there is a valid input given by the user
function isAcceptable() {
  if (containsLowercase || containsUppercase || containsSpecial || containsNumbers) {

  }
  else {
    alert("invalid selection try again");
    getParams();
  }
}

//Validing the password length
function validLen() {
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("invalid selction detected")
    return false
  }
  else {
    return true
  }
}
//Generating random lowercase characters
function getRandomLower() {
  if (containsLowercase != false && newPassword.length < passwordLength) {
    return lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  } else {
    return ""
  }
}

//Generating random uppercase characters
function getRandomUpper() {
  if (containsUppercase != false && newPassword.length < passwordLength) {
    return uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  } else {
    return ""
  }
}

//Generating random number
function getRandomNumber() {
  if (containsNumbers != false && newPassword.length < passwordLength) {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));

  } else {
    return ""
  }
}
//Generating random symbol characters
function getRandomSymbol() {
  if (containsSpecial != false && newPassword.length < passwordLength) {
    return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  } else {
    return ""
  }
}
// validing that each character type is chosen.
function initPass() {
  // debugger;

  newPassword = newPassword.concat(getRandomLower())
  console.log(newPassword)
  newPassword = newPassword.concat(getRandomUpper())
  console.log(newPassword)
  newPassword = newPassword.concat(getRandomNumber())
  console.log(newPassword)
  newPassword = newPassword.concat(getRandomSymbol())
  console.log(newPassword)
}

//Generating entire length of the password
function genPass() {
  if (newPassword.length < passwordLength) {
    newPassword = newPassword.concat(getRandomLower())
    console.log(newPassword)
    newPassword = newPassword.concat(getRandomUpper())
    console.log(newPassword)
    newPassword = newPassword.concat(getRandomNumber())
    console.log(newPassword)
    newPassword = newPassword.concat(getRandomSymbol())
    console.log(newPassword)
  }
  return newPassword
}

function generatePassword() {

  getParams();

  initPass()
  while (newPassword.length < passwordLength) {
    genPass()
  }
  return newPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  newPassword = ""
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
