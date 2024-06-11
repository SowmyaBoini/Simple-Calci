function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    // This function evaluates the expression and returns result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }
    
    function display(value) {
    document.getElementById("result").value += value;
    }