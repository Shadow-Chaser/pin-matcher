const generatorBtn = document.getElementById('generator-btn');
const showPin = document.getElementById('show-pin');
generatorBtn.addEventListener('click', () =>{
    generatePin();
})

const generatePin = () => {
    const random = Math.ceil(Math.random()*100000);
    const pin = ""+random;
    if(pin.length == 5){
       showPin.value = pin;
    }
    else{
        generatePin();
    }
    
}

