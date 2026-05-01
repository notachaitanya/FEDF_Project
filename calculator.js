let screen=document.getElementById("text");
screen.innerHTML = "";
let answer = "";
function display(value) {
    answer += value;
    screen.innerHTML = answer;
}

function calculate(){
    screen.innerHTML = eval(answer);
}

function clearScreen(){
    screen.innerHTML="";
    answer="";
}