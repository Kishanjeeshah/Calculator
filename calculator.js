
let display = document.getElementById('display');

function ToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
// to delete a single no 
function ToDlt(){
    display.value = display.value.substr(0,display.value.length-1);
}
