var valoreDisplay = '0';

function divide(){                           //funzione divide
    valoreDisplay+='/';                     //prende il valore del display e aggiunge il simbolo /
    aggiornaDisplay();                      //richiama la funzione aggiornaDisplay
}

function multiply(){                      //funzione multiply
    valoreDisplay+='*';                   //prende il valore del display e aggiunge il simbolo *
    aggiornaDisplay();                   //richiama la funzione aggiornaDisplay
}

function minus(){                        //funzione minus
    valoreDisplay+='-';                 //prende il valore del display e aggiunge il simbolo -
    aggiornaDisplay();                  //richiama la funzione aggiornaDisplay
}

function plus(){                        //funzione plus
    valoreDisplay+='+';                 //prende il valore del display e aggiunge il simbolo +
    aggiornaDisplay();                 //richiama la funzione aggiornaDisplay
}

function backspace(){                                //funzione backspace
    valoreDisplay = valoreDisplay.slice(0, -1);      //prende il valore del display e lo taglia di un carattere
    aggiornaDisplay();                              //richiama la funzione aggiornaDisplay
}

function percent(){                                         //funzione percent
    valoreDisplay = parseFloat(valoreDisplay) / 100;        //prende il valore del display e lo divide per 100
    aggiornaDisplay();                                     //richiama la funzione aggiornaDisplay
}

function clearDisplay(){                    //funzione clearDisplay
    valoreDisplay='';                      //azzera il valore del display
    aggiornaDisplay();                     //richiama la funzione aggiornaDisplay
}

function calculate() {                              //funzione calculate
    try {                                             
        valoreDisplay = eval(valoreDisplay);          //prende il valore del display e lo calcola
        aggiornaDisplay();                            //richiama la funzione aggiornaDisplay
    } catch (error) {
        valoreDisplay = 'Error';
        aggiornaDisplay();
    }
}

function aggiornaDisplay() {
    var displayElement = document.getElementById('display');   //prende l'elemento con id display
    displayElement.value = valoreDisplay;                      //assegna il valore del display all'elemento
}

function addValueToDisplay(value) {            //funzione addValueToDisplay
    if(valoreDisplay === '0') {                //se il valore del display è 0
        valoreDisplay = value;                 //assegna il valore al display
    } else{                                    //altrimenti
        valoreDisplay += value;               //aggiungi il valore al display
    }
    aggiornaDisplay();                         //richiama la funzione aggiornaDisplay
}
