// input
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");
// console.log(userInput)

// processing
function calSum(dob) {
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let index=0; index<= dob.length; index++) {
        sum =  sum + Number(dob.charAt(index))
    }
    return sum;
}




function luckyOrNotBtn() {
    const dob = dateOfBirth.value;
    const sum = calSum(dob);
    console.log(sum)
}

checkBtn.addEventListener("click", luckyOrNotBtn);