var valoreDisplay = '0'; // definisci e inizializza la variabile

function divide(){
    valoreDisplay+='/';
    aggiornaDisplay();
}

function multiply(){
    valoreDisplay+='*';
    aggiornaDisplay();
}

function minus(){
    valoreDisplay+='-';
    aggiornaDisplay();
}

function plus(){
    valoreDisplay+='+';
    aggiornaDisplay();
}

function backspace(){
    valoreDisplay = valoreDisplay.slice(0, -1);
    aggiornaDisplay();
}

function percent(){
    valoreDisplay = parseFloat(valoreDisplay) / 100;
    aggiornaDisplay();
}

function clearDisplay(){
    valoreDisplay='';
    aggiornaDisplay();
}

function calculate() {
    try {
        valoreDisplay = eval(valoreDisplay);
        aggiornaDisplay();
    } catch (error) {
        valoreDisplay = 'Error';
        aggiornaDisplay();
    }
}

function aggiornaDisplay() {
    var displayElement = document.getElementById('display');
    displayElement.value = valoreDisplay;
}

function addValueToDisplay(value) {
    if(valoreDisplay === '0') {
        valoreDisplay = value;
    } else{
        valoreDisplay += value;
    }
    aggiornaDisplay();
}