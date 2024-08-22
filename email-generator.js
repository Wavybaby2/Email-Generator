function generateEmail(length, includeLowerCase, includeNumber, includeRest){
const result = document.getElementById("result");
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
rest = "@gmail.com"

let allowedChars = "";
let email = "";

allowedChars += includeLowerCase ? lowerCase: "";
allowedChars += includeNumber ? number : "";



if(length <= 0){
    return `(passsword length must be at least 1)`
   }
   if(allowedChars.length === 0){
    return `(At least 1 set of character need to be selected)`
   }
   

for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    
    email += allowedChars[randomIndex];

   }
   return email;
}

const emailLength = 11;
const includeLowerCase = true;
const includeNumber = true;
const includeRest = true;

const email = generateEmail(emailLength,
                           includeLowerCase,
                           includeNumber,
                           includeRest);

result.textContent = `${email}${rest}`;

/*

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
   const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
   const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   const numberChars = "0123456789"
   const symbolChars = "#@1%$^&*';.,+"

   let allowedChars = "";
   let password = "";


   allowedChars += includeLowerCase ? lowerCaseChars : "";
   allowedChars += includeUpperCase ? upperCaseChars : "";
   allowedChars += includeNumbers ? numberChars : "";
   allowedChars += includeSymbols ? symbolChars : "";

   if(length <= 0){
    return `(passsword length must be at least 1)`
   }
   if(allowedChars.length === 0){
    return `(At least 1 set of character need to be selected)`
   }
   
   
   for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];

   }

    return password;
}
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated password: ${password}`);
*/






