const generatorBtn = document.getElementById('generator-btn');
const showPin = document.getElementById('show-pin');
const showDigit = document.getElementById('show-digit');
let pinMatched = document.getElementById('pin-matched');
let pinNotMatched = document.getElementById('pin-not-matched');
let tryAgain = document.getElementById('try-again');
let leftTry = document.getElementById('left-try');
let allDigit = "";
let tryCounter = 3;

generatorBtn.addEventListener('click', () =>{
    generatePin();
})


const generatePin = () => {
    showDigit.value = "";
    allDigit = "";
    if(pinMatched.style.display != "none"){
        pinMatched.style.display = "none"
    }
    if(pinNotMatched.style.display != "none"){
        pinNotMatched.style.display = "none"
    }
    if(tryAgain.style.display != "none"){
        tryAgain.style.display = "none"
    }
    tryCounter = 3;
    leftTry.innerText = 3;

    const random = Math.ceil(Math.random()*100000);
    const pin = ""+random;
    if(pin.length == 5){
       showPin.value = pin;
    }
    else{
        generatePin();
    }
    
}

document.getElementById('digit-container')
    .addEventListener('click', (event) => {
        const digit = event.target.innerText;
        if(isNaN(digit)){
            if(digit == "C"){
                showDigit.value = "";
                allDigit = "";
            }
            else if(digit == "<"){
                const temp1 = showDigit.value.slice(0, -1);;
                showDigit.value = temp1;
                const temp2 = allDigit.slice(0, -1);
                allDigit = temp2;
            }
        }
        else{
            allDigit = allDigit + digit;
            showDigit.value = allDigit;
        }
    })

document.getElementById('submit-btn')
    .addEventListener('click', () =>{
        tryCounter--;
        leftTry.innerText = tryCounter;
        if(tryCounter !=0)
        {
            if(showDigit.value == showPin.value){
                pinMatched.style.display = "block";
                pinNotMatched.style.display = "none";
                tryAgain.style.display = "none"
            }
            else{
                pinNotMatched.style.display = "block";
                pinMatched.style.display = "none";
                tryAgain.style.display = "none"
            }
        }
        else{
            pinNotMatched.style.display = "none";
            pinMatched.style.display = "none";
            tryAgain.style.display = "block"
        }
        
    })