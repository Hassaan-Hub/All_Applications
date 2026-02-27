function inputNumber(num){
    let result = document.getElementById('input');
    result.value += num;
}

function clearAll(){
    let result = document.getElementById("input");
    result.value = ""
}

function calculate(){
    let result = document.getElementById("input");
    result.value = eval(result.value)
}

function backspase(){
    let result = document.getElementById("input");
    result.value = result.value.slice(0, -1);
}