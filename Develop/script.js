// Arrays 
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCase = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "/", "<", ">", "?"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");
var userChoice = "";
var passwordCharacters;
var confirmUpCase;
var confirmLowCase;
var confirmSpecialCase;
var confirmNum;

    // TODO: ask how long they want their password to be
function criteria() {
    userChoice = prompt(`Type in the number for the amount of characters you wish your password to hold.`);
// Loop if answer is outside the parameters 
    while(userChoice <= 5 || userChoice>= 31){
// Repeat back how many charactes the user will have
    alert("Password length must be between 5-30 characters Try again"); 
    var userChoice = prompt(`Type in the number for the amount of characters you wish your password to hold.`);
    };
// Repeat back how many charactes the user will have 
alert(`Your password will have ${userChoice} characters`);
// promot for password criteria
    // TODO: ask user if they want upCase
    confirmUpCase = confirm(`Click ok if you want upper case letters`);
    // TODO: ask user if they want lowCase
    confirmLowCase = confirm(`Click ok if you want lower case letters`);
    // TODO: ask user if they want specialCase
    confirmSpecialCase = confirm(`Click ok if you want special characters`);
    // TODO: ask user if they want numbers
    confirmNum = confirm(`Click ok if you want numbers`);
// Determine parameters of password 
    while(confirmUpCase === false && confirmLowCase === false && confirmSpecialCase === false && confirmNum === false){
        alert(`You must choose at least one parameter.`)
// Loop if answer is outside the parameters
        confirmUpCase = confirm(`Click ok if you want upper case letters`);
        confirmLowCase = confirm(`Click ok if you want lower case letters`);
        confirmSpecialCase = confirm(`Click ok if you want special characters`);
        confirmNum = confirm(`Click ok if you want numbers`);
    };
// Assign an action to the password parameters
    passwordCharacters = []
        
    if (confirmUpCase && confirmLowCase && confirmSpecialCase && confirmNum) {
        passwordCharacters = passwordCharacters.concat(upCase, lowCase, specialCase, num)
    };

    console.log(passwordCharacters);
// Empty string to be filled based on for loop selecting random characters from the array 
    var randomPassword = "";     
    for (var i = 0; i < userChoice; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    };
    return randomPassword;
};

// Write password to the #password input
function generatePassword() {
    var password = criteria();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);