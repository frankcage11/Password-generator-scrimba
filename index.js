const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];
let password = [];
let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")
let lengthEl = document.getElementById("length-el")
let length = 12

lengthEl.textContent = "Length: " + length

function addOne() {
    if (length < 18 && length >= 12) {
        length += 1
    }
    lengthEl.textContent = "Length: " + length
}

function subtractOne() {
    if (length <= 18 && length > 12) {
        length -= 1
    }
    lengthEl.textContent = "Length: " + length
}

function generateNew() {
    password.pop()
    password.shift()
    
    let tempPass = ""; 
    for (let j = 0; j < length; j++) {
        tempPass += characters[Math.floor(Math.random() * characters.length)];
    }
    password.push(tempPass)
    tempPass = ""; 
    for (let j = 0; j < length; j++) {
        tempPass += characters[Math.floor(Math.random() * characters.length)];
    }
    password.push(tempPass)
    
    password1El.textContent = password[0]
    password2El.textContent = password[1]
}