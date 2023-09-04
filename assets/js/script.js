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
// const typesCount = containsLowercase + containsUppercase + containsSpecial + containsNumbers;

//get user parameters for password
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


// check if there is a valid choice
function isAcceptable() {
  if (containsLowercase || containsUppercase || containsSpecial || containsNumbers) {

  }
  else {
    alert("invalid selection try again");
    getParams();
  }
}

//check password lenth is greater than 8 and less than 128
function validLen() {
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("invalid selction detected")
    return false
  }
  else {
    return true
  }
}





//if the variable for upper, lower, number and special are all not false continue othewise request addition information from user




// password types: uppercase letter, lowercase letter, special character, number

// generating Functions
//Generate lower Char
function getRandomLower() {
  if (containsLowercase != false && newPassword.length < passwordLength) {
    return lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  } else {
    return ""
  }
}

//Generate upper Char
function getRandomUpper() {
  if (containsUppercase != false && newPassword.length < passwordLength) {
    return uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  } else {
    return ""
  }
}

//Generate random whole number
function getRandomNumber() {
  if (containsNumbers != false && newPassword.length < passwordLength) {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));

  } else {
    return ""
  }
}
//Generate random symbol
function getRandomSymbol() {
  if (containsSpecial != false && newPassword.length < passwordLength) {
    return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  } else {
    return ""
  }
}
//make sure one of each chosen type is in the password
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

//Generates the remaining characters of the password
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
