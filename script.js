const displayDiv = document.querySelector("#display");

const displayManager = {
    // Adds thousands separator to numbers (2000 to 2,000)
    format: function(numStr) {
        let list = String(numStr).split("");
        let index = numStr.length;
        while (index-3 > 0) {
            list.splice(index-3, 0, ",");
            index -= 3;
        }
        return list.join("");
    },

    show: function(numStr) {
        displayDiv.innerText = this.format(numStr);
    },

    clear: function() {
        displayDiv.innerText = "0";
    }
}

const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

function operate(arg1,arg2,op) {
    return op(arg1,arg2);
}

const calcManager = {
    num1: "0",
    num2: null,
    op: null,
    focus: "num1"
}

function updateNum(numChar) {
    const cur = calcManager.focus;
    if (calcManager[cur] == 0 || calcManager[cur] == null) {
        calcManager[cur] = numChar;
    } else {
        calcManager[cur] = calcManager[cur] + numChar;
    }
    displayManager.show( calcManager[cur] );
}

function updateOp(op) {
    if (op == null) {
        calcManager.focus = "num2";
    } else {
        if (calcManager.num2 == null) {
            calcManager.op = op;
        } else {
            const [arg1, arg2] = [+calcManager.num1, +calcManager.num2];
            const result = operate(arg1, arg2, op);
            displayManager.show(result);
            calcManager.num1 = String(result);
            calcManager.focus = "num1"; 
        }
    }
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("mousedown", (e) => {
        e.target.classList.toggle("pressed");    
    });
    button.addEventListener("mouseup", (e) => {
        e.target.classList.toggle("pressed");    
    });
});

for (let i=0; i<=9; i++) {
    const button_i = document.querySelector(`.n${i}`);
    button_i.addEventListener("mousedown", () => { updateNum(`${i}`) });
}
