const displayText = document.getElementById('display');

function display(val){
    displayText.innerText+=val;
}

function solve(){
    let expression=displayText.innerText;
    let result=eval(expression);
    displayText.innerText=result;
}

function clearDisplay(){
    displayText.innerText='';
}

function backspace(){
    displayText.innerText=displayText.innerText.slice(0,-1)
}