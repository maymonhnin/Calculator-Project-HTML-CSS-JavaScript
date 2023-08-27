let result = document.querySelector('#result');

// display mode function
function display(value) {
    result.value += value;
}

// equal sign function
function calcul() {
    var p = result.value;
    var q = eval(p);

    p == "" ? result.value = "" : result.value = q;
}


function clears() {
    result.value = "";
}

function del() {
    let data = result.value;
    result.value = data.substring(0, data.length - 1);
}


function sqrt() {
    result.value = Math.sqrt(result.value);
}

// factorial function
/*
    0 => 1
    < 0 => NaN
    i >= 1 => 
    eg. 3 => 3 * 2 * 1 = 6
        //m = 1  //m = i * m
*/
function fact() {
    if (result.value < 0) {
        result.value = "NaN";
    } else if (result.value === 0) {
        result.value = 1;
    } else {
        var m = 1;
        for (var i = result.value; i >= 1; i--){
            m = i * m;
        }
        result.value = m; 
    }
}

function power() {
    result.value = result.value + "**";
}

function square() {
    result.value = result.value * result.value;
}

// changeSign in Calculator
function changeSign() {
    if (result.value === "-") {
        result.value = res.value.slice(1);
    } else {
        result.value *= -1;
    }
}
