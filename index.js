let passwordEl1 = document.querySelector("#password-1")
let passwordEl2 = document.querySelector("#password-2")
let passwordLength = document.querySelector("#length")
let errorMessage = document.querySelector("#error-message")
let charactersList = [];

const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];

const charactersNumbers = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const charactersSymbols = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const charactersFull = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

function getRandomPasswords() {
    let addNum = document.querySelector(".add-num")
    let addSym = document.querySelector(".add-sym")

    if (addNum.checked && addSym.checked) {
        charactersList = charactersFull
    } else if (addNum.checked ) {
        charactersList = charactersNumbers
    } else if (addSym.checked ) {
        charactersList = charactersSymbols
    } else {
        charactersList = characters
    }

    let generatedPassword1 = ""
    let generatedPassword2 = ""

    if (passwordLength.value > 0 && passwordLength.value < 17) {
        for(let i = 0; i < passwordLength.value; i++) {
            let randomIndex1 = Math.floor(Math.random() * charactersList.length)
            generatedPassword1 += charactersList[randomIndex1]
    
            let randomIndex2 = Math.floor(Math.random() * charactersList.length)
            generatedPassword2 += charactersList[randomIndex2]
        }
    
        passwordEl1.textContent = generatedPassword1
        passwordEl2.textContent = generatedPassword2
        errorMessage.textContent = ""

    } else if (passwordLength.value === "") {
        errorMessage.textContent = "Please enter your password length."
    } else {
        errorMessage.textContent = "Your password length should be in range 1-16 only."
    }
}

let copyButton1 = document.getElementById("copy-btn1")
let copyButton2 = document.getElementById("copy-btn2")
copyButton1.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordEl1.textContent)
})

copyButton2.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordEl2.textContent)
})

